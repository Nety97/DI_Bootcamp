import {connect} from 'react-redux';
import {handleFname} from '../redux/actions';
const Fname = (props) => {
  return(
    <div>
      <input type='text' name='fname' value={props.fname}
        onChange={props.handleFname}/> {props.fname}
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    fname: state.fname
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    handleFname: (e) => dispatch(handleFname(e.target.value))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Fname);
