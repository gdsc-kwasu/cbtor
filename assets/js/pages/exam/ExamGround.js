import React from 'react';
import Timer from './Timer';
import Questions from './Questions';
import ExamResult from './ExamResult';
import PulseLoader from '../../components/PulseLoader';

class ExamGround extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isDone: false
        }

        this.handleExamTerminate = this.handleExamTerminate.bind(this)
    }

    handleExamTerminate() {
        this.setState({ isDone: true })
    }

    render() {
        const { isDone } = this.state
        const { exam } = this.props

        if (!this.props.exam) return <PulseLoader />;

        return (
            <React.Fragment>
                {
                    !isDone && <Timer terminateExam={this.handleExamTerminate} duration={exam.duration} />
                }
                <Examination exam={exam} handleExamTerminate={this.handleExamTerminate} isDone={isDone} />
            </React.Fragment>
        )
    }
}
class Examination extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            answers: null,
            duration: null,
            questions: null,
            courseId: null,
        };

        this.handleOptionClick = this.handleOptionClick.bind(this)
    }

    componentDidMount() {
        const { duration, question, course } = this.props.exam;
        const { isDone } = this.props

        const answers = question.map(() => null);
        this.setState({
            answers,
            questions: question,
            active: 0,
            duration,
            isDone,
            course,
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
        const { answers, questions, course } = this.state
        const { handleExamTerminate, isDone } = this.props

        if (!questions) return <PulseLoader />;


        if (isDone) return <ExamResult answers={answers} questions={questions} course={course} />;

        return (
            <React.Fragment>
                <Questions 
                    answers={answers} 
                    questions={questions}
                    onAnswerClick={this.handleOptionClick} 
                    terminateExam={handleExamTerminate} />
            </React.Fragment>
        );
    }
}

export default ExamGround;
