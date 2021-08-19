import React from 'react';
import Quotes from './Quotes';
import Colors from './Colors';
console.log(Colors);

class CreateCard extends React.Component{
    constructor() {
        super();
        this.state ={
            quote: '',
            author: '',
            color: ''
        }
    }
    componentDidMount (){
        this.putQuote()
    }

    random =()=>{
        let rand = Math.floor(Math.random() * 93)
        console.log(rand)
        return rand
    }
    random2 =()=>{
        let colo = Math.floor(Math.random() * 280)
        return colo
    }

    
    createQuote = ()=>{
        let a = this.random()
        let c = this.random2()
        let b = {
            quo: Quotes[a].quote,
            auth: Quotes[a].author,
            col: Colors[c]
        }
        return b
    }
    putQuote = ()=>{
        let temp = this.createQuote()
        this.setState({quote: temp.quo})
        this.setState({author: temp.auth})
        this.setState({color: temp.col})
    }

    render(){
        if (this.state.author === '') {
            this.setState({author: 'Anonymous'})
        }
        
                return(
                    <div className='body2' style={{background: this.state.color}}>
                    <div className='modal-body modal-background' style={{color: this.state.color}}>
                        <h1>{this.state.quote}</h1>
                        <h2>-{this.state.author}-</h2>
                        
                        <button style={{color: this.state.color}} className='btn' onClick={this.putQuote}>New Quote</button>
                    </div>
                    </div>
                ) 
            
        
    }
}

export default CreateCard