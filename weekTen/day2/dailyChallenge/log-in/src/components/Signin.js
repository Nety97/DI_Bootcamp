import React from 'react';


class Signin extends React.Component{
    constructor(){
        super();
        this.state={
            email: '',
            password:'',
            user: {}
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
        
    }

    render(){
        
        return(
            <div>
               

                <h1>Sign In</h1>
                <div style={{display: 'table-caption'}}>
                    <form>
                        
                        <input name='email' onChange={this.handlerChange} type='text' placeholder='Enter your Email' required/>
                        <input name='password' onChange={this.handlerChange} type='text' placeholder='Enter your Password' required/>
                        <button onClick={this.sendNode}>Sign In</button>
                    </form>
                    
                </div>
            </div>
        )
    }
}


export default Signin