import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './pages/Routes'

function App() {
  return (
    <Router className="App">
      <Routes />
    </Router>
  );
}

export default App;
