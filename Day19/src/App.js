import logo from './logo.svg';
import './App.css';
import PasswordGenerator from './passwordGenerator';
import Counter from './Counter';
import ErrorBoundary from './errBoundary';


function App() {
  return (
    <div className="App">
     <PasswordGenerator />
     <ErrorBoundary>
      <Counter></Counter>
     </ErrorBoundary>
      
    </div>
  );
}

export default App;
