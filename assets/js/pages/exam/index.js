import React from 'react';
import ReactDOM from 'react-dom';
import ExamGround from './ExamGround';
import ExamSelection from './ExamSelection';
import PulseLoader from '../../components/PulseLoader';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

/*
* A less generic loader component for the exam
* Portal page.
* */
const Loader = () => {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-12">
                    <PulseLoader />
                </div>
            </div>
        </div>
    );
};

class Exam extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            course: null,
            isLoading: true,
            exam: null,
        };

        this.setExam = this.setExam.bind(this);
    }

    setExam(exam) {
        this.setState({ exam });
    }

    componentDidMount() {
        const courseId = this.props.match.params.id;
        fetch(`/api/courses/${courseId}`)
            .then(res => res.json())
            .then(course => this.setState({ course, isLoading: false }))
            .catch(() => { /* pass and do nothing */ })
    }

    render() {
        const { course, isLoading } = this.state;
        if (isLoading || !course) return <Loader />;

        return (
            <ExamGround course={this.state.course} />
        );
    }
}
const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/exam/:id" component={Exam} />
            </Switch>
        </BrowserRouter>
    );
};
ReactDOM.render(<App />, document.querySelector('#app'));
