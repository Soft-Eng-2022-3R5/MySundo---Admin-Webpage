import './App.css'
import Login from './components/Auth/Login';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Pages/Home';
import MainDash from './components/MainDash/MainDash';
import Booking from './components/Pages/Booking';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    
    <div className="App">
        <div className="AppGlass">
          <BrowserRouter>
          <Sidebar>
              <Routes>
                  <Route path='/' exact component = {Home}/>
                  <Route path='/MainDash' component = {MainDash}/>
                  <Route path = '/Booking' component= {Booking}/>
                  <Route path = '/Customer' component= {Booking}/>

              </Routes>
            </Sidebar>
          </BrowserRouter>
         
          
          
         
        </div>
      </div>

  );
}

export default App;
