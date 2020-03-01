import React from 'react';
import notify from './notify';
import LatexRenderer from './LatexRenderer';
import PulseLoader from '../../components/PulseLoader';

const TextAreaRow = ({ label, value, onChange }) => {
    return (
        <div className="form-row react__textarearow">
            <div className="form-group col-12">
                <label htmlFor="question" className="font-weight-bold">
                    {label}
                </label>
                <LatexRenderer text={value} />
                <textarea
                    className="form-control form-small"
                    value={value}
                    onChange={({ target }) => onChange(target.value)}
                />
            </div>
        </div>
    );
};

class Course extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            question: '',
            answer: 'Pick Correct Option',
            options: [],
            course: '',
        };

        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.resetState = this.resetState.bind(this);
    }

    componentDidMount() {
        fetch('/api/courses')
            .then(res => res.json())
            .then(courses => this.setState({ courses}))
            .catch(error => console.log(error));
    }

    handleOnChange(key, value) {
        this.setState({ [key]: value });
    }

    handleOptionChange(offset, value) {
        this.setState(({options}) => ({ options: [
                ...options.slice(0, offset),
                value,
                ...options.slice(offset + 1)
            ] }));
    }

    onSubmit(e) {
        e && e.preventDefault(); // need this hack to prevent error if triggered by KeyPress event.

        fetch('/api/manage/question', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state),
        })
            .then((res) => {
                if (res.status !== 200)
                    return notify('Failed', 'Something unexpected occurred', 'error');

                this.resetState();
                notify('Success', 'Question uploaded successfully.');
            })
            .catch(error => {
                notify('Failed', 'Something unexpected occurred', 'danger');
            });
    }

    resetState() {
        this.setState({
            question: '',
            answer: 'A',
            options: [],
        })
    }

    onKeyPress(e) {
        if (e.key === 'Enter' && e.ctrlKey)
            this.onSubmit();
    }

    render() {
        const { question, courses, answer, options } = this.state;
        if (!courses) return <PulseLoader />;

        const CourseSelect = ({ active }) => {
            return (
                <select
                    className="select--custom"
                    value={active}
                    onChange={({ target }) => this.handleOnChange('course', target.value)}>
                    <option value="">Pick a Course</option>
                    {
                        courses.map(c => (<option value={c._id} key={c._id}>{c.code}</option>))
                    }
                </select>
            );
        };

        return (
            <div className="container mt-3 mt-sm-3" onKeyPress={this.onKeyPress}>
                <div className="row align-items-center justify-content-center">
                    <div className="col-12 col-sm-10 col-md-8">
                        <h6 className="text-uppercase">Upload University Course</h6>
                        <p>
                            Let's throw some questions in the database, shall we?
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-8">
                        <form action="#" onSubmit={this.onSubmit}>
                            <div className="row">
                                <div className="col-12 py-3 px-2">
                                    <button className="btn btn-primary btn-sm" type="submit">
                                        Upload Question
                                    </button>
                                    <CourseSelect active={this.state.course} />
                                    <select
                                        className="select--custom"
                                        value={answer}
                                        onChange={({ target }) => this.handleOnChange('answer', target.value)}>
                                            <option value='choose'>...Pick Correct Option...</option>
                                            <option value="A">A</option>
                                            <option value="B">B</option>
                                            <option value="C">C</option>
                                            <option value="D">D</option>
                                    </select>
                                </div>
                            </div>
                            <TextAreaRow
                                label="Input the question?"
                                value={question}
                                onChange={value => this.handleOnChange('question', value)}
                            />
                            <TextAreaRow
                                label="Option A"
                                value={options[0] || ''}
                                onChange={value => this.handleOptionChange(0, value)}
                            />
                            <TextAreaRow
                                label="Option B"
                                value={options[1] || ''}
                                onChange={value => this.handleOptionChange(1, value)}
                            />
                            <TextAreaRow
                                label="Option C"
                                value={options[2] || ''}
                                onChange={value => this.handleOptionChange(2, value)}
                            />
                            <TextAreaRow
                                label="Option D"
                                value={options[3] || ''}
                                onChange={value => this.handleOptionChange(3, value)}
                            />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Course;
