import React from "react";
import {userData} from '../redux/actions';
import {connect} from 'react-redux';


class SignIn extends React.Component{
    constructor(){
        super();
        this.state={
            email: '',
            password:''
        }
    }
    handlerChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    sendNode = () => {
        let {email, password} = this.state
        
        fetch('http://localhost:4000/signin',{
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: email.toLowerCase(), password: password})
        })
        .then(res => res.json())
        .then(data => {
            // if (data.message === 'you first need to register') {
            //     this.setState({register: 'The password is invalid or you dont have an account'})
            // } else if (data.message === 'wrong password') {
            //     this.setState({wrongPass: 'The password is wrong try again'})
            // } else{
            //     console.log(data);
            // }
            this.props.userData(data)
        })
        .catch(err => console.log(err))
        this.setState({email: '', password: ''})
        
    }

    render(){
        return(
            <div>
                <h1>Sign In</h1>
                <div>
                    <input name='email' onChange={this.handlerChange} type='text' value={this.state.email} placeholder='Enter your Email' required/>
                    <input name='password' onChange={this.handlerChange} type='text' value={this.state.password} placeholder='Enter your Password' required/>
                    <button onClick={this.sendNode}>Sign In</button>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        userData: (val)=> dispatch(userData(val))
    }
}

export default connect(null, mapDispatchToProps)(SignIn)