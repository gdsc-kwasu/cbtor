import React from 'react';
import ExamResult from './ExamResult';
import Countdown from 'react-countdown-now';
import PulseLoader from '../../components/PulseLoader';

const Timer = ({ terminateExam }) => {
    return (
        <div className="d-flex justify-content-between py-2 py-3 px-3 border border-light">
            <button className="btn btn-outline-danger btn-terminate" onClick={terminateExam}>
                Terminate Exam
            </button>
            <Countdown date={Date.now() + 6 * 60 * 1000} renderer={TimerRenderer} onComplete={terminateExam} />
        </div>
    );
};

const TimerRenderer = ({hours, minutes, seconds, completed }) => {
    return (
        <span className={`timer ${ minutes < 5 ? 'timer--danger' : ''}`}>
            {String(hours).padStart(2, '0') }:
            {String(minutes).padStart(2, '0')}:
            {String(seconds).padStart(2, '0')}
        </span>
    );
};

const Option = ({ text, index, answer, onClick }) => {
    const label = ['A', 'B', 'C', 'D', 'E'][index];

    return (
        <div>
            <div className={`q-section__option ${answer === label ? 'active' : ''}`}
                 onClick={() => onClick(label)}>
                <span className={`q-section__option-indicator `}>
                    { label }
                </span>
                { text }
            </div>
        </div>
    );
};

const Offsets = ({ answers, active, offset }) => {
    return (
        <div className="py-2 px-2">
            {
                answers.map((_, index) => {
                    return (
                        <span className={
                            `q-section__offset 
                            ${answers[index] ? 'q-section__offset--done' : ''} 
                            ${active === index ? 'q-section__offset--active' : ''}`}
                              key={index}
                              onClick={() => offset(index)}>
                            { index + 1 }
                        </span>
                    )
                })
            }
        </div>
    )
};

const PrevNext = ({ active, length, offset }) => {
    return (
        <div className="text-center py-2">
            { (active > 0) && <i className="fas fa-backward q-section__prevNext" onClick={() => offset(active - 1)} /> }
            { (active < length - 1) && <i className="fas fa-forward q-section__prevNext" onClick={() => offset(active + 1)} /> }
        </div>
    );
};
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
        fetch(`/api/exam/${this.props.course._id}?type=standard`)
            .then(res => res.json())
            .then(data => {
                this.setState({ duration: data.duration });
                const answers = data.question.map(() => null);
                this.setState({ answers, questions: data.question, active: 0 });
            })
            .catch(error => console.log(error));
    }

    handleOptionClick(value) {
        const { answers, active } = this.state;

        this.setState({ answers: [
                ...answers.slice(0, active),
                value,
                ...answers.slice(active + 1)
            ]});
    }

    handleOffset(offset) {
        this.setState({ active: offset });
    }

    handleExamTerminate() {
        this.setState({ isDone: true })
    }

    render() {
        const { questions, isDone } = this.state;
        if (!questions) return <PulseLoader />;

        const question = this.state.questions[this.state.active];
        const answer = this.state.answers[this.state.active];

        if (true) return <ExamResult answers={this.state.answers} questions={questions} />;

        return (
            <React.Fragment>
                <Timer terminateExam={this.handleExamTerminate}/>
                <div className="q-section">
                    <div className="q-section__question">
                        <span className="q-section__question-label">
                            { this.state.active + 1 }
                        </span>
                        { question.question }
                    </div>

                    <div className="q-section__options">
                        {
                            question.options.map((option, index) => {
                                return <Option text={option} index={index} key={index} answer={answer} onClick={this.handleOptionClick}/>
                            })
                        }
                    </div>
                    <div>
                        <PrevNext active={this.state.active} length={questions.length} offset={this.handleOffset}/>
                        <Offsets answers={this.state.answers} active={this.state.active} offset={this.handleOffset}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ExamGround;
