import React from "react";
import {connect} from 'react-redux'
import {deleteData} from '../redux/actions'
class TransactionList extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }

    deleteSome=(id)=>{
        this.props.del(id)
    }
    render(){
        const {arr} = this.props
        
        console.log(arr);
        return(
            <div>
                {arr.map((item,index) =>{
                    return <div key={index}>
                        <p>{index + 1}</p>
                        <p>{item.accountNumber}</p>
                        <p>{item.FSC}</p>
                        <p>{item.name}</p>
                        <p>{item.amount}</p>
                        <button onClick={()=> this.deleteSome(index)}>Delete</button>
                    </div>
                })}
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
      del: (val)=> dispatch(deleteData(val))  
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TransactionList)