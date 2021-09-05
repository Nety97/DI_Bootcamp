import React from 'react';
import {
    Link
} from "react-router-dom";

class Register extends React.Component{
    constructor(){
        super();
        this.state={
            nameUser: '',
            email: '',
            password:'',
            user: {},
            incorrect: ''
        }
    }

    handlerChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    sendNode = () => {
        let {nameUser, email, password} = this.state
        let obj = {name: nameUser.toLowerCase(), mail: email.toLowerCase(), password: password}
        let arr = []
        arr.push(obj)
        fetch('http://localhost:8000/register',{
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(arr)
        })
        .then(res => res.json())
        .then(data => {
            if (data.message === 'user alredy exists') {
                this.setState({incorrect: 'Alredy Register, Please Sign In'})
            } else{
                console.log(data);
            }
        })
        .catch(err => console.log(err))
        
    }

    render(){
        let {incorrect} = this.state
        return(
            <div>
               

                <h1>Register</h1>
                <div style={{display: 'table-caption'}}>
                    
                        <input name='nameUser' onChange={this.handlerChange} type='text' placeholder='Enter your Name' required/>
                        <input name='email' onChange={this.handlerChange} type='text' placeholder='Enter your Email' required/>
                        <input name='password' onChange={this.handlerChange} type='text' placeholder='Enter your Password' required/>
                        <button onClick={this.sendNode}>Register</button>
                        <div>

                        
                    {incorrect ? (
                        <div>
                        <h5 style={{color:'red'}}>{incorrect}</h5>
                        <Link to='/'><h5 style={{color: 'blue'}}>Sign IN</h5></Link>
                        </div>
                    ) : (
                        null
                    )}
                    
                    </div>
                </div>
            </div>
        )
    }
}


export default Register