import logo from './logo.svg';
import './App.css';
import BuggyCounter from './components/BuggyCounter';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <div>
      <h2>2 counters wrapped with ErrorBoundary </h2>
      <ErrorBoundary>
        <BuggyCounter/>
        <BuggyCounter/>
      </ErrorBoundary>
      </div>
      <h2>2 counters each one wrapped with ErrorBoundary</h2>
      <div>
      <ErrorBoundary>
        <BuggyCounter/>
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter/>
      </ErrorBoundary>
      </div>
      <h2>Counter without ErrorBoundary</h2>
      <div>
      <BuggyCounter/>
      </div>
    </div>
  );
}

export default App;
