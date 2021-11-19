import React, {useEffect, useReducer, useState} from 'react';
import Answers from "./Answers/Answers";
import MiniPlayer from "./MiniPlayer/MiniPlayer";
import ProgressBar from "./ProgressBar/ProgressBar";
import useQuestions from '../../../hooks/useQuestions';
import {useParams} from "react-router-dom";
import _ from 'lodash';

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
    console.log(qna);

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
    return (
        <>
            {loading && <div>Loading....</div>}
            {error && <div>There was an error</div>}

            {!loading && !error && qna && qna.length > 0 && (
                <>
                    <h1>{qna[currentQuestion].title}</h1>
                    <h4>Question can have multiple answers</h4>
                    <Answers options={qna[currentQuestion].options} handleChange={handleAnswerChange}/>
                    <ProgressBar/>
                    <MiniPlayer/>
                </>
            )}
        </>
    );
}

export default Quiz;
