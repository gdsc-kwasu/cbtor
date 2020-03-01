import React from 'react';
import LoaderSpinner from '../../components/LoaderSpinner';

class Wallet extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            wallet: null,
        }
    }
    componentDidMount() {
        fetch('/api/wallet')
            .then(res => res.json())
            .then(wallet => this.setState({ wallet }))
            .catch(err => {});
    }

    render() {
        if (!this.state.wallet) return <LoaderSpinner />;

        return (
            <div className="row px-md-3 py-md-3">
                <div className="col-12 col-md-12 box-shadow py-5 px-5">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8">
                            <div className="text-center">
                                <i className="fas fa-wallet icon-wallet"/>
                                <h5 className="font-weight-bold text-primary">
                                    { this.state.wallet.credit } CEC
                                </h5>
                                <h6>My Wallet Balance</h6>
                                <small>
                                    Every exam you take deducts 10 CEC from your wallet balance &mdash; be guided
                                    when taking examinations as we charge per access. You can redeem a coupon by
                                    entering it in the below textbox. <br />
                                    <span className='text-primary'>Note: CEC signifies CBTor Exam Credit</span>
                                </small>
                            </div>
                            { /* redeem coupon form */}
                            <div className="row justify-content-center mt-4">
                                <div className="col-12 col-sm-10 col-md-8">
                                    <form action="/wallet" method="post">
                                        <div className="form-row">
                                            <div className="form-group col-12">
                                                <input type="text"
                                                       className="form-control"
                                                       placeholder="xxxx-xxxx-xxxx"
                                                       name="pin"
                                                       required={true}/>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-12">
                                                <button className="btn btn-block btn-success btn-custom" type="submit">
                                                    Load Wallet
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Wallet;
