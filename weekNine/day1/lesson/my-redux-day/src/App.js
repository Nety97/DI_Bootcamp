import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import { changePropOne, changePropTwo } from './redux/actions';
import Child from './components/Child';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      // propertyOne: 'text one',
      // propertyTwo: 'text two'
    }
  }
  // changeState=(e)=>{
  //   this.setState({[e.target.name]: e.target.value})
  // }
  render (){
    return(
      <div>
        <h1>Redux simple exercise</h1>
        <h2>Here is property one: {this.props.textOne}</h2>
        <h2>Here is property two: {this.props.textTwo}</h2>
        <p>Change property one</p>
        <input name='propertyOne' type='text' onChange={this.props.changeState}/>
        <p>Change property two</p>
        <input name='propertyTwo' type='text' onChange={this.props.changeState2}/>
        <Child />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    textOne: state.reducerOne.propertyOne,
    textTwo: state.reducerTwo.propertyTwo
  }
}
const mapDispatchToProps= (dispatch) =>{
  return{
    changeState: (event) => dispatch(changePropOne(event.target.value)),
    changeState2: (event) => dispatch(changePropTwo(event.target.value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// mapDispatchToProps second value of connect
