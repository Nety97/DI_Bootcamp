import React from 'react';
import Data from './Data.json'

class PostList extends React.Component{
    constructor(){
        super();
        this.state={
            data: Data
        }
    }

    // componentDidMount(){
    //     console.log(this.state.data)
    // }

    render(){
        return(
            <div>
                <h1>Hi this is a title</h1>
                <h2>{this.state.data[0].title}</h2>
                <p>{this.state.data[0].content}</p>
                <h2>{this.state.data[1].title}</h2>
                <p>{this.state.data[1].content}</p>

            </div>
        )
    }
}

export default PostList