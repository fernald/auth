import {
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <Navbar />


         <Routes>
          
    
      <Route path='/Signup' element={<Signup/>} />
    
      </Routes>
      <Login />
    </div>
  );
}

export default App;
