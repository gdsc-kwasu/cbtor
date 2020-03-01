import React from 'react';
import PropTypes from 'prop-types';
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";
import PulseLoader from '../../components/PulseLoader';

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

class ExamSelection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            course: null,
            value: 20,
            isLoading: false,
        };

        this.handleStandardExamClick = this.handleStandardExamClick.bind(this);
        this.handleCustomExamClick = this.handleCustomExamClick.bind(this);
        this.toggleLoader = this.toggleLoader.bind(this);
    }

    handleStandardExamClick() {
        this.toggleLoader();

        fetch(`/api/exam/${this.props.course._id}?type=standard`)
            .then(res => res.json())
            .then(data => {
                this.toggleLoader();
                this.props.setExam(data);
            })
            .catch(() => this.toggleLoader());
    }

    handleCustomExamClick(amount = 20) {
        this.toggleLoader();

        fetch(`/api/exam/${this.props.course._id}?type=custom&amount=${amount}`)
            .then(res => res.json())
            .then(data => {
                this.toggleLoader();
                this.props.setExam(data);
            })
            .catch(() => this.toggleLoader());
    }

    toggleLoader() {
        this.setState((state) => ({ isLoading: !state.isLoading }));
    }

    render() {
        const { course } = this.props;

        if (this.state.isLoading) return <Loader />;

        return (
            <React.Fragment>
                <div className="py-2 py-3 px-3 border border-light">
                    <a href="/dashboard" style={{ fontSize: '1.5em' }}>
                        <i className="fas fa-long-arrow-alt-left"/>
                    </a>
                </div>
                <div className="container mt-3 mt-md-5">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h4 className="text-uppercase text-primary">
                                { course.title }
                            </h4>
                            <h6>{ course.code }</h6>
                        </div>
                    </div>
                </div>
                <div className="container mt-4">
                    <div className="row justify-content-center">
                        <div className="col-11 col-md-4 exam-select">
                            <h6 className="exam-select__title">Recommended</h6>
                            <small>
                                The standard type of exam you will face in reality.
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
                            <button className="btn btn-primary btn-block btn-custom"
                                    onClick={this.handleStandardExamClick}>
                                Start Exam
                            </button>
                        </div>
                        <div className="col-12 col-md-1 d-none d-md-block" />
                        <div className="col-11 col-md-4 exam-select">
                            <h6 className="exam-select__title">Customize</h6>
                            <small>
                                Describe how your exam should be &mdash; be in charge.
                                The amount of questions chosen will determine the duration.
                            </small>
                            <div className="my-3 pt-4 pb-3">
                                <InputRange minValue={10} maxValue={80} onChange={value => this.setState({ value })}
                                            value={this.state.value} />
                            </div>
                            <button className="btn btn-primary btn-block btn-custom"
                                    onClick={() => this.handleCustomExamClick(this.state.value)}>
                                Start Exam
                            </button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

ExamSelection.propTypes = {
    course: PropTypes.object.isRequired,
};

export default ExamSelection;
