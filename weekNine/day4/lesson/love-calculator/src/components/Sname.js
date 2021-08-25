import {connect} from 'react-redux';
import {handleSname} from '../redux/actions';
const Sname = (props) => {
  return(
    <div>
      <input type='text' name='sname' value={props.sname}
      onChange={(e) => props.dispatch(handleSname(e.target.value))}/> {props.sname}
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    sname: state.sname
  }
}
export default connect(mapStateToProps)(Sname);
