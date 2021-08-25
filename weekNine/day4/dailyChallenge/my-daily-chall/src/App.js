import React from 'react';
import CardsList from './components/CardsList';
import SearchBox from './components/SearchBox';
import {connect} from 'react-redux';
import {fetchRobots} from './redux/actions'
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    // this.state = {
    //   // robots: [],
    //   // searchText: '',
    // }
 }

  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(res => res.json())
    // .then(data => {
    //   // console.log(data);
    //   // this.setState({robots:data})
    //   // this.props.dispatch(fetchRobots(data))
    //   this.props.getRobots(data);
    // })
    // .catch(e => {
    //   console.log(e);
    // })
    this.props.dispatch(fetchRobots())
  }

  // handleChange = (e) => {
  //   const {searchText} = this.state;
  //   this.setState({searchText:e.target.value})
  //   // this.inputText = e.target.value;
  // }


  render() {
    // const {robots} = this.state;
    const {searchText,robots} = this.props;

    const filterRobots = robots.filter(item => {
      return item.name.toLowerCase().includes(searchText.toLowerCase())
    })

    return (
      <div className="tc">
        <SearchBox />
        <CardsList robots = {filterRobots} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    searchText: state.searchText,
    robots: state.robots
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getRobots: () => dispatch(fetchRobots()),

  }
}
export default connect(mapStateToProps)(App);
