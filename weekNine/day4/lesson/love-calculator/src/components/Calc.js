import {connect} from 'react-redux';
import {handleClick} from '../redux/actions';
const Calc = (props) => {
  return(
    <div>
      <button
        onClick={()=>props.dispatch(handleClick(props.fname,props.sname))}>
        Click
      </button>
    </div>
  )
}
const mapStateToProps = (state) => {
  return{
    fname : state.fname,
    sname : state.sname
  }
}
export default connect(mapStateToProps)(Calc);
