import {connect} from 'react-redux'
const Res = (props) => {
  return(
    <div>
      Results:
      <div>{props.results.fname} & {props.results.sname}</div>
      <div>percentage: {props.results.percentage}</div>
      <div>result: {props.results.result}</div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return{
    results: state.results
  }
}
export default connect(mapStateToProps)(Res);
