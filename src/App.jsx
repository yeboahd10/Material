import "./App.css";
import { Route, Routes } from 'react-router-dom';
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import Home from "./components/Home";



function App() {
  return (
    <div>
     
    <Routes>
      <Route path="/" element={<Register/>}/>
      <Route path="Login" element={<Login/>}/>
      <Route path="Home" element={<Home/>}/>
    </Routes>
    </div>
  );
}

export default App;
