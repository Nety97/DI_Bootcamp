import logo from './logo.svg';
import './App.css';
//// import Hello from './Hello';
// import './Hello.css';
//// import Card from 'react-bootstrap/Card'
import Robot from './robot';


const robots = [
  {name: 'Robot 1', email: 'rb1@gamil.com', username:'rb1', id: 1},
  {name: 'Robot 2', email: 'rb2@gamil.com', username:'rb2', id: 2},
  {name: 'Robot 3', email: 'rb3@gamil.com', username:'rb3', id: 3},
  {name: 'Robot 4', email: 'rb4@gamil.com', username:'rb4', id: 4},
  {name: 'Robot 5', email: 'rb5@gamil.com', username:'rb5', id: 5}



]
//{/* <Hello name={'Dan'} username={'Dan978'} pass={'1234'}/> */}
//{/* <Hello name={'Nety'} username={'Natunat'} myarr={arr}/> */}
const App = () => {
  return (
    <>
    {
      robots.map((item, i) =>{
        return <Robot robotinfo = {item} />
      })
    }

    {/* <Robot name={'Robot 1'} email={'rb1@gamil.com'} username={'rb1'} id={1}/>
    <Robot name={'Robot 2'} email={'rb2@gamil.com'} username={'rb2'} id={2}/>
    <Robot name={'Robot 3'} email={'rb3@gamil.com'} username={'rb3'} id={3}/> */}

    </>
  );
}

export default App;
