import React from 'react';
import {connect} from 'react-redux';
import {selectMovie} from '../redux/actions'

class MovieList extends React.Component{
    render(){
        return(
            
            <div>
                <h2>Movies List</h2>
                {this.props.arr.map((item,index)=>{
                    return <div style={{display: 'flex'}}>
                         <p>{item.title}</p>
                         <button name={item.title} id={index} onClick={this.props.sele}>details</button>
                        </div>
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        arr: state.movie
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        sele: (e)=> dispatch(selectMovie(e.target.id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)