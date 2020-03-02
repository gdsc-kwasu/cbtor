import React from 'react'
import notify from './notify'
import { shuffle } from 'lodash'
import PDFLoader from './PDFLoader'
import { adminCreateCoupon } from '../../util/requests'

class Credit extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            amount: '',
            credit: '',
            coupons: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    static randomPin() {
        const rand = () => {
            return shuffle(String(Math.floor(Math.random() * 10000)).split(''))
                .join('')
        }

        return '----'
            .split('')
            .map(rand)
            .join('-')
    }

    handleInputChange(value, key) {
        this.setState({
            [key]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault()

        const { amount, credit, coupons } = this.state
        if (coupons) return 

        const credits = []

        for (let i = 1; i <= amount; i++) {
            credits.push({ 
                pin: Credit.randomPin(),
                amount: credit
            })
        }

        adminCreateCoupon({ coupons: credits })
            .then(coupons => {
                if (Array.isArray(coupons)) {
                    this.setState({ coupons })
                    notify('Success', 'Coupons created successfully. Please download and print the PDF.')
                }
            })
            .catch(console.log)

    }

    render() {
        const { amount, credit, coupons } = this.state
        const { handleInputChange } = this

        return (
            <div className="container mt-4">
                <div className="row justify-content-md-end border-bottom border-light pb-3">
                    <div className="col-12 col-md-8 col-lg-6">
                        <form action="#" className="form-group-sm" onSubmit={this.handleSubmit}>
                            <h6 className="text-primary small text-uppercase">Generate Coupon</h6>
                            <div className="form-row">
                                <div className="form-group col-6">
                                    <input type="number" 
                                        className="form-control p-2 small" 
                                        value={amount} 
                                        placeholder="Quantity of Coupon ?" 
                                        onChange={({ target }) => handleInputChange(target.value, 'amount') } />
                                </div>
                                <div className="form-group col-3">
                                    <input type="number" 
                                        className="form-control p-2 small" 
                                        value={credit} 
                                        placeholder="Credit" 
                                        onChange={({ target }) => handleInputChange(target.value, 'credit')} />
                                </div>
                                <div className="form-group col-3">
                                    <button className="btn btn-primary p-2 btn-block" type="submit">
                                        Generate
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-12">
                        { 
                            coupons 
                            && <PDFLoader credits={coupons} />
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Credit;