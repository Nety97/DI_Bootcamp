import React,{useState,useEffect} from 'react';
import CardsList from './components/CardsList';
import SearchBox from './components/SearchBox';
import './App.css';


const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filterRobots, setFilterRobots] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
          console.log(data);
          // this.setState({robots:data})
          setRobots(data);
          setFilterRobots(data);
        })
        .catch(e => {
          console.log(e);
        })
  },[]);

  useEffect(()=>{
    setFilterRobots(()=>{
      return robots.filter(item => {
        return item.name.toLowerCase().includes(searchText.toLowerCase())
      })
    })
  },[searchText])

  return(
    <>
      <SearchBox onInputChange={(e)=>setSearchText(e.target.value)}/>
      <CardsList robots={filterRobots}/>
    </>
  )
}
export default App;
// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       robots: [],
//       searchText: '',
//     }
//  }
//
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//       this.setState({robots:data})
//     })
//     .catch(e => {
//       console.log(e);
//     })
//   }
//
//   handleChange = (e) => {
//     const {searchText} = this.state;
//     this.setState({searchText:e.target.value})
//   }
//
//   render() {
//     const {robots,searchText} = this.state;
//
//     const filterRobots = robots.filter(item => {
//       return item.name.toLowerCase().includes(searchText.toLowerCase())
//     })
//
//     return (
//       <div className="tc">
//         <SearchBox onInputChange= {this.handleChange}/>
//         <CardsList robots = {filterRobots} />
//       </div>
//     );
//   }
// }
//
// export default App;
