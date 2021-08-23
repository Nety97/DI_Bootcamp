import React from 'react';
import Data from './Data'

class AutoCompletedText extends React.Component{
    constructor(){
        super();
        this.state={
            text: Data,
            inp: '',
            finalw: []
        }
    }

    filter=(e)=>{
        const {value} = e.target
        
        if (value == '') {
            this.setState({inp: value, finalw: []})
        } else{
            let z = this.state.text
            let x = z.filter((i)=> i.toLowerCase().startsWith(value.toLowerCase()))
            this.setState({inp: value, finalw: x})
        }
    }
    render(){

        return(
            <div>
                
                <input value={this.state.inp} type='text' onChange={this.filter}/>
                {this.state.finalw.map(item=>{
                    return <p key={item}>{item}</p>
                })}
            </div>
        )
    }
}

export default AutoCompletedText