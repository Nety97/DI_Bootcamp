import React from 'react';


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
        
    }

    render(){
        let {incorrect} = this.state
        return(
            <div>
               

                <h1>Register</h1>
                <div style={{display: 'table-caption'}}>
                    <form>
                        <input name='nameUser' onChange={this.handlerChange} type='text' placeholder='Enter your Name' required/>
                        <input name='email' onChange={this.handlerChange} type='text' placeholder='Enter your Email' required/>
                        <input name='password' onChange={this.handlerChange} type='text' placeholder='Enter your Password' required/>
                        <button onClick={this.sendNode}>Register</button>
                    </form>
                    <h3 style={{color:'red'}}>{incorrect}</h3>
                </div>
            </div>
        )
    }
}


export default Register