import React from 'react';
import { InlineTex } from "react-tex";
import { syncResult } from '../../util/requests'

/**
 * grade the student's exam
 * 
 * @param {array} questions 
 * @param {array} answers 
 */
const gradeExam = (questions, answers) => {
    return questions.reduce((prev, current, index) => {
        return (current.answer === answers[index]) ? prev + 1 : prev;
    }, 0);
}

/**
 * Component to show user's score and total question took.
 */
const TotalScore = ({ total, score }) => {
    return (
        <div className="text-center mt-2 my-2 my-md-4">
            <h5 className="text-uppercase">You Scored</h5>
            <h5 className="text-primary font-weight-bold">
                { score }/{ total }
            </h5>
            <p className="small mb-1">
                Check the summary of the options you got right or wrong.
            </p>
            <a href="/dashboard" className="btn btn-primary">Return to Dashboard</a>
        </div>
    );
};

const Option = ({ text, answer, index, selected }) => {
    const label = ['A', 'B', 'C', 'D', 'E'][index];

    return (
        <div>
            <div className={
                `a-section__option ${(answer === label) ? 'a-section__option--correct' : ''} 
                ${ (selected !== answer) && (selected === label) ? 'a-section__option--wrong' : ''}`}>
                    <span className={`a-section__option-indicator `}>
                        { label }
                    </span>
                    <InlineTex texContent={ text } />
            </div>
        </div>
    );
};

const Question = ({ index, question, answer }) => {
    return (
        <div className="col-12 col-sm-10 col-md-8 a-section">
            <div className="a-section__question">
                        <span className="a-section__question-label">
                            {index + 1}
                        </span>
                {question.question}
            </div>
            <div className="mt-2">
                {
                    question.options.map((option, index) =>
                        <Option answer={question.answer} index={index} selected={answer}
                                text={option} key={index}/>)
                }
            </div>
        </div>
    );
};

const ExamResult = ({ questions, answers, course }) => {
    const score = gradeExam(questions, answers),
          total = questions.length

    syncResult('/api/sync-result', {score, total, course})
            .then(() => {})
            .catch(/* do nothing */)
    
    return (
        <React.Fragment>
            <TotalScore total={total} score={score} />
            <div className="container">
                <div className="row justify-content-center">
                    {
                        questions.map((q, index) =>
                            <Question answer={answers[index]}
                                      question={q}
                                      index={index}
                                      key={index}
                            />)
                    }
                </div>
            </div>
        </React.Fragment>
    );
};

export default ExamResult;
