import React from "react";
import {Link} from 'react-router-dom'

class Register extends React.Component{
    constructor(){
        super();
        this.state={
            nameUser: '',
            email: '',
            password:'',
            incorrect: '',
            succesRegister: ''
        }
    }
    handlerChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    sendDataBase = () => {
        let {nameUser, email, password} = this.state
        fetch('http://localhost:4000/register',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name: nameUser.toLowerCase(), email: email.toLowerCase(), password: password})
        })
        .then(res => res.json())
        .then(data => {
            if (data.message.name === 'error') {
                this.setState({incorrect: 'Alredy Register, Please Sign In'})
            } 
            if (data.message === 'ok') {
                this.setState({succesRegister: 'You are Register, Please Sign In'})
            }
            
        })
        .catch(err => console.log(err))
        this.setState({nameUser: '', email: '', password: ''})
        
    }
    render(){
        
        let {incorrect, succesRegister} = this.state
        return(
            <div>
                <h1>Register</h1>
                <div>
                    <input name='nameUser' onChange={this.handlerChange} value={this.state.nameUser} type='text' placeholder='Enter your Name' required/>
                    <input name='email' onChange={this.handlerChange} value={this.state.email} type='text' placeholder='Enter your Email' required/>
                    <input name='password' onChange={this.handlerChange} value={this.state.password} type='text' placeholder='Enter your Password' required/>
                    <button onClick={this.sendDataBase}>Register</button>
                    {incorrect ? (
                        <div>
                        <h5 style={{color:'red'}}>{incorrect}</h5>
                        <Link to='/signin'><h5 style={{color: 'blue'}}>Sign In</h5></Link>
                        </div>
                    ) : (
                        null
                    )}
                    {succesRegister ? (
                        <div>
                        <h5 style={{color:'rgb(14, 207, 79)'}}>{succesRegister}</h5>
                        <Link to='/signin'><h5 style={{color: 'blue'}}>Sign In</h5></Link>
                        </div>
                    ) : (
                        null
                    )}
                </div>
            </div>
            
        )
    }
}

export default Register