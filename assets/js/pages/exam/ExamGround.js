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

    render() {
        const { answers, questions, isDone, duration } = this.state

        if (!questions) return <PulseLoader />;


        if (isDone) return <ExamResult answers={answers} questions={questions} />;

        return (
            <React.Fragment>
                <Timer terminateExam={this.handleExamTerminate} duration={duration} />
                <Questions answers={answers} questions={questions} terminateExam={this.handleExamTerminate} />
            </React.Fragment>
        );
    }
}

export default ExamGround;
