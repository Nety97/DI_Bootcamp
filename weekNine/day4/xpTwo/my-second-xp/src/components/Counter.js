import React from 'react';
import {connect} from 'react-redux'
import {plusOne, minusOne} from '../redux/actions'

class Counter extends React.Component{
    
    render(){
        
        return(
            <div>
                <p>Your age: {this.props.age} years</p>
                <button onClick={this.props.plusOne}>+</button>
                <button onClick={this.props.minusOne}>-</button>

            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        age: state.age
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      plusOne: () => dispatch(plusOne()),
      minusOne: () => dispatch(minusOne())
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Counter)


  