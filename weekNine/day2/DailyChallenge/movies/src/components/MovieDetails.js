import React from 'react';
import {connect} from 'react-redux';


class MovieDetails extends React.Component{
        

    render(){
     const {arr, sele} = this.props  
        
            
        if(sele) {
            return <div>
                <h2>Movie Details</h2>
                <p>{arr[sele].title}</p>
                <p>{arr[sele].releaseDate}</p>
                <p>{arr[sele].rating}</p>
                
            </div>
        } else{
            return <h2>Movie Details</h2>
        }
        
    }
}

const mapStateToProps = (state) =>{
    return{
        arr: state.movie,
        sele: state.selected
    }
}


export default connect(mapStateToProps, null)(MovieDetails)