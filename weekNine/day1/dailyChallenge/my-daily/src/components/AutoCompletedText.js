import React from 'react';
import Data from './Data'

class AutoCompletedText extends React.Component{
    constructor(){
        super();
        this.state={
            text: Data
        }
    }
    
    render(){
        return(
            <div>
                {console.log(this.state.text)}
            </div>
        )
    }
}

export default AutoCompletedText