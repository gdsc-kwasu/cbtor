import React from 'react';
import LinkButton from '../LinkButton';
import LoaderSpinner from '../LoaderSpinner';

class MainContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            courses: null,
        }
    }

    componentDidMount() {
        fetch('/api/courses')
            .then(data => data.json())
            .then(courses => this.setState({ courses }))
            .catch(err => console.log(err))
    }

    render() {
        const { courses } = this.state;
        if (!courses) return <LoaderSpinner />;

        const courseListing = courses.map(({ title, _id, code}) => {
            return (
                <tr key={_id}>
                    <td className='px-0 px-sm-4'>{code}</td>
                    <td className='px-2'>{title}</td>
                    <td className='px-0 px-sm-4'>
                        <LinkButton href={`/exam/${_id}`}>Take Exam</LinkButton>
                    </td>
                </tr>
            );
        });

        return (
            <div className="row px-md-3 py-md-3">
                <div className="col-12 col-md-12 box-shadow py-4">
                    <div className="row">
                        <div className="col-12 col-sm-10 col-md-8">
                            <table className="table font-weight-bold text-dark table-borderless table-exam">
                                <tbody>
                                    { courseListing }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainContent;
