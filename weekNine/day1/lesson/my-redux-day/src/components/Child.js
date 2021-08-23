import React from 'react';
import {connect} from 'react-redux';
import {changePropOne, changeCounter, minusOne} from '../redux/actions'
class Child extends React.Component{
    constructor(props){
        super();
        this.state={

        }
    }

    render(){
        return(
            <div>
                <p>Property One: {this.props.pOne}</p>
                <p>Property Two: {this.props.pTwo}</p>
                <input onChange={this.props.changeOne}></input>
                <button onClick={this.props.count}>Click me to plus {this.props.counter} </button>
                <button onClick={this.props.minus}>Click me to minus {this.props.counter} </button>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        pOne: state.reducerOne.propertyOne,
        pTwo: state.reducerTwo.propertyTwo,
        counter: state.reducerOne.propertyThree
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        changeOne: (e) => dispatch(changePropOne(e.target.value)),
        count: ()=> dispatch(changeCounter()),
        minus: ()=> dispatch(minusOne())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Child)