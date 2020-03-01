import React from 'react'
import notify from './notify'
import { adminGetAllCourses, 
    adminCreateCourse, 
    adminRemoveCourse } from '../../util/requests'

const DisplayCourses = ({ courses, onRemove }) => {
    return (
        <React.Fragment>
            {
                courses.map(({ _id, title, code }) => {
                    return (
                        <div className="d-flex justify-content-between my-1 px-3 py-2 bg-light small" key={_id}>
                            <span><strong>{code}</strong> . {title}</span>
                            <span className="link" onClick={() => onRemove(_id)}>
                                remove
                            </span>
                        </div>
                    )
                })
            }
        </React.Fragment>
    )
}

class CourseSection extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            courses: [],
            title: '',
            code: '',
            time: '',
            question: '',
        }

        this.onInputChange = this.onInputChange.bind(this)
        this.resetForm = this.resetForm.bind(this)
        this.onRemove = this.onRemove.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
       adminGetAllCourses()
        .then(courses => this.setState({
            courses
        }))
    }

    onInputChange(value, key) {
        this.setState({
            [key]: value
        })
    }

    resetForm() {
        this.setState({
            title: '',
            code: '',
            question: '',
            time: ''
        })
    }

    onRemove(id) {
        adminRemoveCourse({ id })
            .then(course => {
                if (course._id) {
                    this.setState((state) => ({
                        courses: state.courses.filter(({ _id }) => course._id != _id )
                    }))

                    notify('Success', 'Course has been removed.')
                }
            })
    }

    onSubmit(e) {
        e.preventDefault()

        const { title, code, time, question} = this.state
        const requestObject = {
            title,
            code,
            standard: {
                time,
                question
            }
        }

        adminCreateCourse(requestObject)
            .then(course => {
                if (course.title) {
                    notify('Success', 'Course created successfully. Questions can be added to course now.')
                    this.resetForm()
                    this.setState((state) => ({
                        courses: [...state.courses, {
                            _id: course._id,
                            title: course.title,
                            code: course.code,
                        }]
                    }))
                } else {
                    notify('Failed', 'An error occured. Please check your input', 'danger')
                }
                console.log(course)
            })
            .catch(console.log)
    }

    render() {
        const { courses, title, code, question, time } = this.state
        const { onInputChange, onSubmit, onRemove } = this

        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <p className="text-justify">
                            Upload exam courses to the database. Ensure that the course code and the 
                            course title are correct. You can remove an existing course from the sidebar.
                        </p>
                        <form action="#" onSubmit={onSubmit}>
                            <div className="form-row">
                                <div className="form-group col-12">
                                    <input type="text" 
                                        className="form-control" 
                                        value={code}
                                        placeholder="Course Code" 
                                        onChange={(({ target }) => { onInputChange(target.value, 'code') })} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-12">
                                    <input type="text" 
                                        className="form-control" 
                                        value={title}
                                        placeholder="Course Title" 
                                        onChange={(({ target }) => { onInputChange(target.value, 'title') })} />
                                </div>
                            </div>
                            <h6 className="text-primary small text-uppercase pl-2">Standard options</h6>
                            <div className="form-row">
                                <div className="form-group col-6">
                                    <input type="text" 
                                        className="form-control"
                                        value={question}
                                        placeholder="Amount of Questions" 
                                        onChange={(({ target }) => { onInputChange(target.value, 'question') })} />
                                    <span className="form-text small text-muted">
                                        Questions to take in standard exam mode
                                    </span>    
                                </div>
                                <div className="form-group col-6">
                                    <input type="text" 
                                        className="form-control"
                                        value={time}
                                        placeholder="Standard Time" 
                                        onChange={(({ target }) => { onInputChange(target.value, 'time') })} />
                                    
                                    <span className="form-text small text-muted">
                                        Duration for standard exam (in mins)
                                    </span>    
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-12">
                                    <button className="btn btn-block btn-success btn-custom">
                                        Create Course
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-12 col-md-6">
                        { courses.length && <DisplayCourses courses={courses} onRemove={onRemove} />}
                    </div>
                </div>
            </div>
        )
    }
}

export default CourseSection