import React from 'react';

class Calculator extends React.Component{
    constructor(){
        super();
        this.state = {
            val: '',
            firstValue: '',
            signal: '',
            finalResult: null
        }
    }
    calc = (val) =>{
        let number1 = this.state.val
        number1 += val
        this.setState({val: number1})
    }
    operation = (val) =>{
        let fV = this.state.val
        this.setState({val: '', firstValue: fV, signal: val})
        
    }
    result =()=>{
        let {firstValue , signal} = this.state
        let sV = this.state.val

        if (signal === 'plus') {
            let a = Number(firstValue) + Number(sV) 
            this.setState({finalResult: a, val: '', firstValue: '', signal: ''})
        }else if (signal === 'minus') {
            let a = Number(firstValue) - Number(sV) 
            this.setState({finalResult: a, val: '', firstValue: '', signal: ''})
        }else if (signal === 'multiply') {
            let a = Number(firstValue) * Number(sV) 
            this.setState({finalResult: a, val: '', firstValue: '', signal: ''})
        }else if (signal === 'divided') {
            let a = Number(firstValue) / Number(sV) 
            this.setState({finalResult: a, val: '', firstValue: '', signal: ''})
        }
        
    }

    render(){

        return(
            <div>
                <div>Calculator</div>
                <h3>{this.state.firstValue} {this.state.signal} {this.state.val}</h3>
                <h3>{this.state.finalResult}</h3>
                <div  value='0' onClick={()=>this.calc('0')}>0</div>
                <div  value='1' onClick={()=>this.calc('1')}>1</div>
                <div  value='2' onClick={()=>this.calc('2')}>2</div>
                <div  value='3' onClick={()=>this.calc('3')}>3</div>
                <div  value='4' onClick={()=>this.calc('4')}>4</div>
                <div  value='5' onClick={()=>this.calc('5')}>5</div>
                <div  value='6' onClick={()=>this.calc('6')}>6</div>
                <div  value='7' onClick={()=>this.calc('7')}>7</div>
                <div  value='8' onClick={()=>this.calc('8')}>8</div>
                <div  value='9' onClick={()=>this.calc('9')}>9</div>
                <button onClick={()=>this.operation('plus')}>+</button>
                <button onClick={()=>this.operation('minus')}>-</button>
                <button onClick={()=>this.operation('multiply')}>*</button>
                <button onClick={()=>this.operation('divided')}>÷</button>
                <button onClick={this.result}>=</button>
            </div>
        )
    }
}
export default Calculator