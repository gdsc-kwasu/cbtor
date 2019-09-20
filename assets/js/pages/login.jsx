import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    render(){
        return(
            <React.Fragment>
                <div>
                    <p className="login">LOGIN TO YOUR ACCOUNT</p>
                    <form action="#" method="post" className="form">
                        <input type="text" name="email" className="input-value py-2 pl-3" placeholder="Enter your email address" required/>
                        <input type="password" name="password" className="input-value py-2 pl-3" placeholder="Enter your password" required/>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default Login;

ReactDOM.render(<Login />, document.getElementById('login'))