
import './App.css';
import Home from './Home';
import Loginpage from './Login';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Signup from './Signup';
import Bookworm from './Bookworm';
import Profile from './Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Loginpage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/bookworm' element={<Bookworm/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </Router>
  );
}

export default App;
