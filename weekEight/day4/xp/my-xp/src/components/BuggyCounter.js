import React from 'react'

class BuggyCounter extends React.Component{
    constructor(){
        super();
        this.state = {
            counter: 0
        }
    }
    handleClick =(val)=>{
        this.setState({counter: val+1})
    }
    render (){
        if (this.state.counter === 5) {
            throw new Error('I crashed!')
        }
        return(
            <div>
            <p onClick={() =>this.handleClick(this.state.counter)}>{this.state.counter}</p>
            </div>
        )
    }
}

export default BuggyCounter