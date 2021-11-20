import React from 'react';
import Analysis from "./Analysis/Analysis";
import Summary from "./Summary/Summary";
import {useHistory, useParams} from "react-router-dom";
import useAnswers from "../../../hooks/useAnswers";

function Result() {
    const {id} = useParams();
    const {location} = useHistory();
    const {state} = location;
    const {qna} = state;

    const {loading, error, answers} = useAnswers(id);
    console.log(answers);

    return (
        <>
            {loading && <div>Loading.....</div>}
            {error && <div>There Was An Error !</div>}
            {answers && answers.length > 0 && (
                <>
                    <Summary/>
                    <Analysis/>
                </>
            )}
        </>
    );
}

export default Result;
