import React, {useEffect, useReducer, useState} from 'react';
import Answers from "./Answers/Answers";
import MiniPlayer from "./MiniPlayer/MiniPlayer";
import ProgressBar from "./ProgressBar/ProgressBar";
import useQuestions from '../../../hooks/useQuestions';
import {useHistory, useParams} from "react-router-dom";
import {useAuth} from '../../../contexts/AuthContext';
import _ from 'lodash';
import {getDatabase, ref, set} from "firebase/database";

const initialState = null;
const reducer = (state, action) => {
    switch (action.type) {
        case 'questions':
            action.value.forEach((question) => {
                question.options.forEach((option) => {
                    option.checked = false;
                });
            });
            return action.value;

        case 'answer':
            const questions = _.cloneDeep(state);
            questions[action.questionID].options[action.optionIndex].checked = action.value;
            return questions;

        default:
            return state;
    }
}

function Quiz() {
    const {id} = useParams();
    const {loading, error, questions} = useQuestions(id);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [qna, dispatch] = useReducer(reducer, initialState);
    const {currentUser} = useAuth();
    // console.log(qna);
    // console.log(currentUser.uid);

    const history = useHistory();
    const {location} = history;
    const {state} = location;
    const {videoTitle} = state;

    // console.log(history);
    console.log(location);

    useEffect(() => {
        dispatch({
            type: 'questions',
            value: questions
        })
    }, [questions]);

    const handleAnswerChange = (e, index) => {
        dispatch({
            type: 'answer',
            questionID: currentQuestion,
            optionIndex: index,
            value: e.target.checked,
        })
    }

    // Handle the use clicks the next button to get the new question
    const nextQuestion = () => {
        console.log('Next');
        if (currentQuestion <= questions.length) {
            setCurrentQuestion(prevQuestion => prevQuestion + 1);
        }
    }

    // Handle the clicks on the prev button to get back the previous question
    const prevQuestion = () => {
        console.log('Prev')
        if (currentQuestion >= 1 && currentQuestion <= questions.length) {
            setCurrentQuestion(prevQuestion => prevQuestion - 1);
        }
    }
    // Submit Button
    const submitHandle = async () => {
        const {uid} = currentUser;
        const db = getDatabase();
        const resultRef = ref(db, `result/${uid}`);

        await set(resultRef, {
            [id]: qna
        });

        history.push({
            pathname: `/result/${id}`,
            state: {qna}

        })
    }

    // Calculate the progress of the current question
    const percentage = questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

    return (
        <>
            {loading && <div>Loading....</div>}
            {error && <div>There was an error</div>}

            {!loading && !error && qna && qna.length > 0 && (
                <>
                    <h1>{qna[currentQuestion].title}</h1>

                    <h4>Question can have multiple answers</h4>

                    <Answers
                        input={true}
                        options={qna[currentQuestion].options}
                        handleChange={handleAnswerChange}
                    />

                    <ProgressBar
                        next={nextQuestion}
                        prev={prevQuestion}
                        submit={submitHandle}
                        progress={percentage}
                    />

                    <MiniPlayer id={id} title={videoTitle}/>
                </>
            )}
        </>
    );
}

export default Quiz;
