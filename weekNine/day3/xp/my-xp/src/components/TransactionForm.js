import React from "react";
import {connect} from 'react-redux'
import {saveData} from '../redux/actions'
import TransactionList from "./TransactionList";

class TransactionForm extends React.Component{
    constructor(){
        super()
        this.state={
            accountNumber: '',
            FSC: '',
            name: '',
            amount: '',
            data: []
        }
    }
    handleInputChange =(e)=>{
        this.setState({[e.target.name]: e.target.value})
    }
    
    handleSubmit =()=>{
        
        let dat = this.state.data
        dat.push(this.state)
        this.setState({data: dat})
        console.log(dat)
        this.sendToRedux()
    }
    sendToRedux=()=>{
        this.props.save(this.state.data)
    }
    render(){
        
        return(
            <div>
                <h1>Financial Transactions:</h1>
                
                    <input onChange={this.handleInputChange} placeholder='Account number' name='accountNumber'/>
                    <input onChange={this.handleInputChange} placeholder='FSC' name='FSC'/>
                    <input onChange={this.handleInputChange} placeholder='A/C Holder Name' name='name'/>
                    <input onChange={this.handleInputChange} placeholder='Amount' name='amount'/>
                    <button onClick={this.handleSubmit}>Submit</button>
                <TransactionList/>
            </div>


        )
    }
}

const mapStateToProps = (state) =>{
    return{
        arr: state.data
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
      save: (val)=> dispatch(saveData(val))  
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm)