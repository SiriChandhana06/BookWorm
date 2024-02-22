
import './App.css';
import Home from './Home';
import Loginpage from './Login';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Signup from './Signup';
import Bookworm from './Bookworm';
import Profile from './Profile';
import Fantasylist from './Fantasylist';
import Thrillerlist from './Thrillerlist';
import Romanticlist from './Romanticlist';
import Kidslist from './Kidslist';
import Humorlist from './Humorlist';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Loginpage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/bookworm' element={<Bookworm/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/fantasylist' element={<Fantasylist/>}/>
        <Route path='/thrillerlist' element={<Thrillerlist/>}/>
        <Route path='/romanticlist' element={<Romanticlist/>}/>
        <Route path='/kidslist' element={<Kidslist/>}/>
        <Route path='/humorlist' element={<Humorlist/>}/>
      </Routes>
    </Router>
  );
}

export default App;
