import React from 'react';

class ErrorBoundary extends React.Component{
    constructor(){
        super();
        this.state ={
            hasError: false
        }
    }

    occurError = ()=>{
        this.setState({hasError: true})
    }

    render(){
        return(
            <>
            {this.occurError}
            </>
        )
    }
}

export default ErrorBoundary