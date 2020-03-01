import React from 'react';
import { getUserScores } from '../../util/requests'

const ScoreTable = ({ scores }) => {
    return (
        <div className="table-responsive mt-2">
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Course</th>
                        <th>Score</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        scores.map(({total, score, _id, course}, index) => {
                            return (
                                <tr key={_id}>
                                    <td>{index + 1}</td>
                                    <td>{course.title} (<strong>{course.code}</strong>)</td>
                                    <td>{score}</td>
                                    <td>{total}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

const NoExamTaken = () => {
    return (
        <div className="text-center px-4 py-3 small border">
            <p className="pt-2">You have not taken any exam yet.</p>
        </div>
    )
}

class Scores extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            scores: [],
        }
    }

    componentDidMount() {
        getUserScores()
            .then(scores => this.setState({ scores }))
    }

    render() {
        const { scores } = this.state

        return (
            <div className="row px-md-3 py-md-3">
                <div className="col-12 col-md-8 box-shadow py-5 px-4">
                    <h5>Your Scores</h5>
                    <p>
                        A short brief of your scores in past examinations took on CBTor. Don't worry if
                        nothing appears yet, it means you have not taken any exam yet.
                    </p>
                    { scores.length 
                        ? <ScoreTable scores={scores} />
                        : <NoExamTaken />
                    }
                </div>
            </div>
        );
    }
}

export default Scores;
