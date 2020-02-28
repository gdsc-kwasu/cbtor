import React from 'react'
import Option from './Option';
import PrevNext from './PrevNext';
import Pagination from './Pagination';
import { InlineTex } from "react-tex";

class Questions extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            questions: null,
            active: 0,
        }

        this.handleOffset = this.handleOffset.bind(this);
        this.handleOptionClick = this.handleOptionClick.bind(this);
    }

    componentDidMount() {
        const { questions } = this.props
        
        this.setState({
            questions
        })
    }

    /*
    * Update the user picked answer in the state tree.
    * */
   handleOptionClick(value) {
       const { active } = this.state
       this.props.onAnswerClick(value, active)
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

    render() {
        const { questions, active } = this.state;
        const { answers } = this.props

        // Do not show up if props are not available yet.
        if (!questions) return null

        const question = questions[active];
        const answer = answers[active];

        return (
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
                        <PrevNext active={active}
                                  length={questions.length}
                                  offset={this.handleOffset}
                                  terminateExam={this.props.terminateExam} />

                        <Pagination answers={answers}
                                    active={active}
                                    offset={this.handleOffset} />
                    </div>
                </div>
        )
    }
}


export default Questions