import React from 'react';

class Counter extends React.Component{
    constructor(){
        super();
        this.state = {
            counter: 0
        }
    }
    handleClick = () => {
        this.setState({counter:++this.state.counter})
    }
    render() {
        if(this.state.counter === 5){
            throw new Error('Crashed')
        }
        return (
            <div>
                {this.state.counter}
                
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}

export default Counter