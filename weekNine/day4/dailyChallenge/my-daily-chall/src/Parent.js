import React from 'react';
import Child from './Child';

class Parent extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    console.log(this.props.children);
    return(
      <div>
        <Child />
      </div>
    )

  }
}
export default Parent;
