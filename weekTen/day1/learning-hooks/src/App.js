import React, {useState, useEffect} from 'react';
import CardsList from './components/CardsList';
import SearchBox from './components/SearchBox';
// import {connect} from 'react-redux';
// import {fetchRobots} from './redux/actions'
import './App.css';


function App (){
    const [robots, setRobots] = useState([])
    const [searchText, setSearchText] = useState('')
    const [filterRobots, setFilterRobots] =useState
    const filterRobots = robots.filter(item => {
        return item.name.toLowerCase().includes(searchText.toLowerCase())
      })

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      // this.setState({robots:data})
      // this.props.dispatch(fetchRobots(data))
    //   this.props.getRobots(data);
        setRobots(data)
    })
    .catch(e => {
      console.log(e);
    })
    },[])
    useEffect(()=>{

    })
    return(
        <div>
          {console.log(robots)}
          <SearchBox onInputChange={(e) => setSearchText(e.target.value)} />
        <CardsList robots = {filterRobots} />
        </div>
    )
}

// class App extends React.Component {
//   constructor(){
//     super();
//     // this.state = {
//     //   // robots: [],
//     //   // searchText: '',
//     // }
//  }

//   componentDidMount() {
//     // fetch('https://jsonplaceholder.typicode.com/users')
//     // .then(res => res.json())
//     // .then(data => {
//     //   // console.log(data);
//     //   // this.setState({robots:data})
//     //   // this.props.dispatch(fetchRobots(data))
//     //   this.props.getRobots(data);
//     // })
//     // .catch(e => {
//     //   console.log(e);
//     // })
//     this.props.dispatch(fetchRobots())
//   }

//   // handleChange = (e) => {
//   //   const {searchText} = this.state;
//   //   this.setState({searchText:e.target.value})
//   //   // this.inputText = e.target.value;
//   // }


//   render(){
//     const {robots} = this.state;
//     const {searchText,robots} = this.props;

//     const filterRobots = robots.filter(item => {
//       return item.name.toLowerCase().includes(searchText.toLowerCase())
//     })

//     return (
//       <div className="tc">
//         <SearchBox />
//         <CardsList robots = {filterRobots} />
//       </div>
//     );
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     searchText: state.searchText,
//     robots: state.robots
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getRobots: () => dispatch(fetchRobots()),

//   }
// }
export default App;
