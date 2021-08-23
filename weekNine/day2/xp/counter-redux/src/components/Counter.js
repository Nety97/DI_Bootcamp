import { connect } from "react-redux"
    
import {plusOne, minusOne} from '../redux/actions'


const Counter = (props) =>{
    const {count, plus, minus} = props
    return(
        <div>
            <button onClick={plus}>Sum One</button>
            {count}
            <button onClick={minus}>Rest One</button>
        </div>
    )
}
const mapStateToProps = (state) =>{
    return{
        count: state.counter
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        plus: ()=> dispatch(plusOne()),
        minus: ()=> dispatch(minusOne())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter)