import React from 'react';
import {connect} from 'react-redux'
import {plusOne, minusOne, ifOdd, waitOne} from '../redux/actions'

class Counter extends React.Component{
    

    waitOneSecond = () =>{
        setTimeout(() => {
            this.props.waitOne()
        }, 1000);
    }

    render(){
        
        return(
            <div>
                <p>Cliked: {this.props.counter} times</p>
                <button onClick={this.props.plusOne}>+</button>
                <button onClick={this.props.minusOne}>-</button>
                <button onClick={this.props.ifOdd}>increment if odd</button>
                <button onClick={this.waitOneSecond}>increment in 1 second</button>

            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        counter: state.counter
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      plusOne: () => dispatch(plusOne()),
      minusOne: () => dispatch(minusOne()),
      ifOdd: () => dispatch(ifOdd()),
      waitOne: () => dispatch(waitOne())
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Counter)


  