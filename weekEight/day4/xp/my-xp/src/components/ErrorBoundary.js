import React from 'react';

class ErrorBoundary extends React.Component{
    constructor(){
        super();
        this.state = {
            error: null
        }
    }

    componentDidCatch (error, errorInfo){
        this.setState({error: error})
    }

    render(){
        
            if (this.state.error) {
               return <p>upss error from space</p>
            }
            return this.props.children
        
    }
}

export default ErrorBoundary