
import './App.css';
import BooksCard from './components/BooksCard';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <BooksCard/>
      </header>
    </div>
  );
}

export default App;
