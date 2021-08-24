import React from 'react';
import CardsList from './components/CardsList';
import SearchBox from './components/SearchBox';
import './App.css';
import {connect} from 'react-redux'
import {saveRobots, fetchRobots} from './redux/actions'
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      robots: [],
      searchText: '',
    }
  }

  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(res => res.json())
    // .then(data => {
    //   // console.log(data);
    //   // this.setState({robots:data})
    //   this.props.selectRobots(data) // redux
    // })
    // .catch(e => {
    //   console.log(e);
    // })
    this.props.fetchRobots()
  }

  handleChange = (e) => {
    const {searchText} = this.state;
    this.setState({searchText:e.target.value}) 
    // this.inputText = e.target.value;
  }

  handleClick = () => {
    // console.log('handleClick');
    // this.setState({searchText:this.inputText})
  }

  render() {
    const {searchText} = this.state;
    console.log(searchText);

    const {arr} = this.props // redux

    const filterRobots = arr.filter(item => {
      return item.name.toLowerCase().includes(searchText.toLowerCase())
    })

    return (
      <div className="tc">
        <SearchBox onInputChange={this.handleChange} onButtonClick={this.handleClick}/>
        <CardsList robots = {filterRobots} />
      </div>
    );
  }
}
const mapStateToProps =(state)=>{
  return{
    arr: state.robot
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
      // sele: (e)=> dispatch(selectMovie(e.target.id))
    selectRobots: (val)=> dispatch(saveRobots(val)),
    fetchRobots: ()=> dispatch(fetchRobots())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);