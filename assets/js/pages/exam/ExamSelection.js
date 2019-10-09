import React from 'react';
import PulseLoader from '../../components/PulseLoader';
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";

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
            value: 20,
        };

    }

    componentDidMount() {
        const courseId = this.props.match.params.id;
        fetch(`/api/courses/${courseId}`)
            .then(res => res.json())
            .then(course => this.setState({ course }))
            .catch(() => { /* pass and do nothing */ })
    }

    render() {
        const { course } = this.state;
        if (!course) return <Loader />;

        return (
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-11 col-md-4 exam-select">
                        <h6 className="exam-select__title">Recommended</h6>
                        <small>
                            The standard type of exam you will meet in real-life.
                            This will simulate the actual exam experience for you.
                        </small>
                        <div className="my-4 py-2 d-flex justify-content-between">
                            <div className="exam-select__info">
                                <i className="fas fa-stopwatch"/>
                                {course.standard.time} mins
                            </div>
                            <div className="exam-select__info">
                                <i className="fas fa-database"/>
                                {course.standard.question} questions
                            </div>
                        </div>
                        <button className="btn btn-primary btn-block btn-custom">
                            Start Exam
                        </button>
                    </div>
                    <div className="col-12 col-md-1 d-none d-md-block" />
                    <div className="col-11 col-md-4 exam-select">
                        <h6 className="exam-select__title">Customize</h6>
                        <small>
                            Describe how the exam should be &mdash; be in charge.
                            The amount of question will determine the duration.
                        </small>
                        <div className="my-3 pt-4 pb-3">
                            <InputRange minValue={10} maxValue={80} onChange={value => this.setState({ value })}
                                        value={this.state.value} />
                        </div>
                        <button className="btn btn-primary btn-block btn-custom">
                            Start Exam
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Exam;
