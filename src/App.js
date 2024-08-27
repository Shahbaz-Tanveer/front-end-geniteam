// logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

const routes=(
  
  <Router>
    <Routes>
      <Route path='/' exact element={<Home/>} ></Route>
      <Route path='/login' exact element={<Login/>} ></Route>
      <Route path='/signup' exact element={<Signup/>} ></Route>
    </Routes> 
  
  </Router>
)

function App() {

 

  return (
    <div>
     {routes}
    </div>
  );
}

export default App;
