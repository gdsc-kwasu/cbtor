import React from 'react';
import Timer from './Timer';
import Option from './Option';
import PrevNext from './PrevNext';
import Pagination from './Pagination';
import ExamResult from './ExamResult';
import { InlineTex } from "react-tex";
import PulseLoader from '../../components/PulseLoader';

class ExamGround extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            answers: null,
            duration: null,
            questions: null,
            isDone: false,
        };

        this.handleOffset = this.handleOffset.bind(this);
        this.handleOptionClick = this.handleOptionClick.bind(this);
        this.handleExamTerminate = this.handleExamTerminate.bind(this);
    }

    componentDidMount() {
        const { duration, question } = this.props.exam;

        const answers = question.map(() => null);
        this.setState({
            answers,
            questions: question,
            active: 0,
            duration,
        });
    }

    /*
    * Update the user picked answer in the state tree.
    * */
    handleOptionClick(value) {
        const { answers, active } = this.state;

        this.setState({ answers: [
                ...answers.slice(0, active),
                value,
                ...answers.slice(active + 1)
            ]});
    }

    /*
    * Moving the active question number (pagination).
    * */
    handleOffset(offset) {
        this.setState({ active: offset });
    }

    /*
    * Completes the examination.
    * */
    handleExamTerminate() {
        this.setState({ isDone: true })
    }

    render() {
        const { questions, isDone, active, answers, duration } = this.state;
        if (!questions) return <PulseLoader />;

        const question = questions[active];
        const answer = answers[active];

        if (isDone) return <ExamResult answers={answers} questions={questions} />;

        return (
            <React.Fragment>
                <Timer terminateExam={this.handleExamTerminate} duration={duration} />

                <div className="q-section">
                    <div className="q-section__question">
                        <span className="q-section__question-label">
                            { this.state.active + 1 }
                        </span>
                        <InlineTex texContent={question.question} />
                    </div>

                    <div className="q-section__options">
                        {
                            question.options.map((option, index) => (
                                <Option text={option}
                                        index={index}
                                        key={index}
                                        answer={answer}
                                        onClick={this.handleOptionClick} />
                                        )
                            )
                        }
                    </div>
                    <div>
                        <PrevNext active={this.state.active}
                                  length={questions.length}
                                  offset={this.handleOffset} />

                        <Pagination answers={this.state.answers}
                                    active={this.state.active}
                                    offset={this.handleOffset} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ExamGround;
