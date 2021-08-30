import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      errorInfo: null
    }
  }

  componentDidCatch(error, errorInfo){
    this.setState({
      error:error,
      errorInfo:errorInfo
    })
  }

  render(){
    if(this.state.errorInfo){
      console.log(this.state.errorInfo);
      console.log();
      return (
        <div>
          <h2>Something went wrong.</h2>
          
        </div>
      )
    }
    return this.props.children
  }
}
export default ErrorBoundary
