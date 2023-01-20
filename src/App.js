import './App.css'
import Login from './components/Auth/Login';
import { Route, Routes} from 'react-router-dom';
import Home from './components/Pages/Home';

function App() {
  return (
    
    <div className="App">
        <Routes>
          <Route path = "/" element ={<Login/>}/>
          <Route path = "/login" element ={<Login/>}/>
          <Route path = "Home" element = {<Home/>}/>
        </Routes>
      </div>

  );
}

export default App;
