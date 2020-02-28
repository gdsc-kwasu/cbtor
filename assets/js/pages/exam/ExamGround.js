import React from 'react';
import Timer from './Timer';
import Questions from './Questions';
import ExamResult from './ExamResult';
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

        this.handleExamTerminate = this.handleExamTerminate.bind(this);
        this.handleOptionClick = this.handleOptionClick.bind(this)
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

    
    handleExamTerminate() {
        this.setState({ isDone: true })
    }

    /*
    * Update the user picked answer in the state tree.
    * */
   handleOptionClick(value, active) {
        const { answers } = this.state;

        this.setState({ answers: [
                ...answers.slice(0, active),
                value,
                ...answers.slice(active + 1)
            ]});
    }

    render() {
        const { answers, questions, isDone, duration } = this.state

        if (!questions) return <PulseLoader />;


        if (isDone) return <ExamResult answers={answers} questions={questions} />;

        return (
            <React.Fragment>
                <Timer terminateExam={this.handleExamTerminate} duration={duration} />
                <Questions 
                    answers={answers} 
                    questions={questions}
                    onAnswerClick={this.handleOptionClick} 
                    terminateExam={this.handleExamTerminate} />
            </React.Fragment>
        );
    }
}

export default ExamGround;
