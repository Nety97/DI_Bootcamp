import React from 'react';

class Xp extends React.Component{
    constructor(){
        super();
        // this.state = {
        //     // exercise 1
        //     // dataSend: '',
        //     // title: '',
        //     // author: '',
        //     // genre: '',
        //     // year: '',
            
        // }
        this.state = {
            firstName: '',
            lastName: '',
            number: '',
            email: ''
        }
    }

    // saveBook = (e)=>{
    //     this.setState({[e.target.name]: e.target.value})
    // }
    // consoleIt =()=>{
    //     this.setState({dataSend:'data send!'})
    //     console.log(this.state);
    // }



    saveUser = (e)=> {
        e.preventDefault()
        for (let index = 0; index < 4; index++) {
            this.setState({[e.target[index].name]: e.target[index].value})
            console.log('hello');
        }
    }

    reset =()=>{
        this.setState({firstName: ''})
        this.setState({lastName: ''})
        this.setState({number: ''})
        this.setState({email: ''})
    }
    
    componentDidUpdate(){
        console.log(this.state);
    }

    render(){
        if (this.state.firstName === '') {
           return (<div>
                    <h1>Exercise 2</h1>
                    <h2>Welcome</h2>
                    <h3>Please provide your information below</h3>
               
                    <form onSubmit={this.saveUser}>
                        <input type='text' placeholder='First Name' name='firstName'  required />
                        <input type='text' placeholder='Last Name' name='lastName'  required/>
                        <input type='text' placeholder='Phone Number' name='number'  required/>
                        <input type='text' placeholder='Email Address' name='email'  required/>
                        <button type='submit'  >Submit</button>
                    </form>
               </div>)
        } else {
            return ( <div >
            {this.state.firstName} {this.state.lastName}<br/>
             {this.state.number} || {this.state.email}
            <button onClick={this.reset}>Reset</button>
        </div>)
        }
      
        // return(
        //     <div>
        //         <h1>Exercise 1</h1>
        //         <h2>New Book</h2>
        //         <p>{this.state.dataSend}</p>
        //         Title:<input type='text' name='title' onChange={this.saveBook}/>
        //         Author:<input type='text' name='author' onChange={this.saveBook}/>
        //         Genre:<input type='text' name='genre' onChange={this.saveBook}/>
        //         Year Published:<input type='text' name='year' onChange={this.saveBook}/>
        //         <button onClick={this.consoleIt}>submit</button>

                
                
                
        //     </div>
        // )
    }
}
export default Xp