import React from 'react';
import {
    Link
  } from "react-router-dom";


class Signin extends React.Component{
    constructor(){
        super();
        this.state={
            email: '',
            password:'',
            user: {},
            register: ''
        }
    }

    handlerChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    sendNode = () => {
        let {email, password} = this.state
        let obj = { mail: email.toLowerCase(), password: password}
        let arr = []
        arr.push(obj)
        fetch('http://localhost:8000/user',{
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(arr)
        })
        .then(res => res.json())
        .then(data => {
            if (data.message === 'you first need to register') {
                this.setState({register: 'The password is invalid or you dont have an account'})
            }else{
                console.log(data);
            }
        })
        .catch(err => console.log(err))
        
    }

    render(){
        let {register} = this.state
        return(
            <div>
               

                <h1>Sign In</h1>
                <div style={{display: 'table-caption'}}>
                    
                        
                        <input name='email' onChange={this.handlerChange} type='text' placeholder='Enter your Email' required/>
                        <input name='password' onChange={this.handlerChange} type='text' placeholder='Enter your Password' required/>
                        <button onClick={this.sendNode}>Sign In</button>
                        <br/>
                        <h6>{register}</h6>
                        <Link to='/register'><h5 style={{color: 'white'}}>Create an account</h5></Link>


                    
                    
                </div>
            </div>
        )
    }
}


export default Signin