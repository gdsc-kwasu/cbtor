import React from 'react';

const TotalScore = ({ questions, answers }) => {
    const score = questions.reduce((prev, current, index) => {
        return prev + current.answer === answers[index] ? 1 : 0;
    }, 0);

    return (
        <div className="text-center mt-2 my-2 my-md-4">
            <h5 className="text-uppercase">You Scored</h5>
            <h5 className="text-primary font-weight-bold">
                { score }/{ questions.length }
            </h5>
            <p className="small mb-0">
                Check the summery of what you got right and wrong.
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
                    { text }
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

const ExamResult = ({ questions, answers }) => {
    return (
        <React.Fragment>
            <TotalScore questions={questions} answers={answers} />
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
