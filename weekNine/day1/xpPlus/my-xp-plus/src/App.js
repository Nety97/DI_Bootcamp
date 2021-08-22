import React from 'react';
import './App.css';
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Example3 from './components/Example3';
import PostList from './components/PostList';

class App extends React.Component{
  constructor(){
    super();
    this.state={

    }
  }
  componentDidMount(){

  }
  async getData (){
    fetch('https://webhook.site/79850746-2683-4a1f-acc7-b8ab46fa6786')
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
  }
  render(){

  
    return (
      <div>
        <button onClick={this.getData}>Console the data</button>
        <PostList />
        <Example1/>
        <Example2/>
        <Example3/>

      </div>
    );
  }
}


export default App;
