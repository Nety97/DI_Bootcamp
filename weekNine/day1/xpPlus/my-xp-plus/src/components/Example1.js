import React from 'react';
import Data2 from './Data2.json'

class Example1 extends React.Component{
    constructor(){
        super();
        this.state={
            data: Data2.SocialMedias
        }
    }
    // componentDidMount(){
    //     console.log(this.state.data);
    // }
    render(){
        let arr = this.state.data
        return(
            <div>
                <ul>
                    {arr.map(item =>{
                        return<li>{item}</li>
                    })}
                </ul>
                
            </div>
        )
    }
}

export default Example1