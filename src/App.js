import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Dynamicstore from './Components/Dynamicstore';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={ <About /> } path="/about"></Route>
          <Route element={ <Dynamicstore /> } path="/home"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
