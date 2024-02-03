
import './App.css';
import Home from './Home';
import Loginpage from './Login';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Signup from './Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Loginpage/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </Router>
  );
}

export default App;
