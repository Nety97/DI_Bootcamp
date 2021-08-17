//Error.js
import React from 'react';

class Error extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            error: '',
            errorInfo: null
        }
    }

    ComponentDidCatch(error, errorInfo) {
        this.setState({
            error:error,
            errorInfo: errorInfo
        })
    }

    render(){
        if(this.state.errorInfo){
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <details>
                        {this.state.error && this.state.error.toString()}
                        <br/>
                        {this.state.errorInfo.ComponentStack}
                    </detailt>
                </div>
            )
        }
        return this.props.children
    }
}

export default Error


