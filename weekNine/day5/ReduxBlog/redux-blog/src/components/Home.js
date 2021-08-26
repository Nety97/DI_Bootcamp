import React from 'react';
import {connect} from 'react-redux'
import {Link} from "react-router-dom"

class Home extends React.Component{

    render(){
        let {arr} = this.props
        return(
            <div>
                <h1>Home</h1>
                {arr.map((item, index) =>{
                    return <div  key={index} style={{border: '2px solid black'}}>
                        <Link key={index} to={`${index}`} >
                            <h3 >{item.title}</h3>
                        </Link>
                        
                        <p>{item.body}</p>
                        </div>
                })}
            </div>
        )
    }
}
const mapStateToProps =(state) => {
    return{
        arr: state.blog
    }
}

export default connect(mapStateToProps, null)(Home)