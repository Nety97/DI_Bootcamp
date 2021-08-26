import React from "react";
import  {connect} from 'react-redux';
import {deleteBlog} from '../redux/actions'
import {Link} from "react-router-dom"

class Post extends React.Component{
    render(){
        let {arr} = this.props
        console.log(typeof(window.location.pathname));
        if (window.location.pathname === '/0') {
            return <div>
                <h3>{arr[0].title}</h3>
                <p>{arr[0].body}</p>
                <Link to='/'>
                    <button onClick={()=> this.props.dele(0)}>DELETE</button>
                </Link>
            </div>
        } else if (window.location.pathname === '/1') {
            return <div>
                <h3>{arr[1].title}</h3>
                <p>{arr[1].body}</p>
                <Link to='/'>
                    <button onClick={()=> this.props.dele(1)}>DELETE</button>
                </Link>
            </div>
        } else if (window.location.pathname === '/2') {
            return <div>
                <h3>{arr[2].title}</h3>
                <p>{arr[2].body}</p>
                <Link to='/'>
                    <button onClick={()=> this.props.dele(2)}>DELETE</button>
                </Link>
            </div>
        } else {
            <h2>Page not found</h2>
        }
    }
}
const mapStateToProps = (state) => {
    return{
        arr: state.blog
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        dele: (val)=> dispatch(deleteBlog(val))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post)