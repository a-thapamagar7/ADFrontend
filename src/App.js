import './App.css';
import { Route, Routes } from "react-router-dom";
import Homepage from './Components/Homepage';
import Login from './Components/login';
import Register from './Components/register';
import Car from './Components/Car';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/login" element={<Register/>} />
        <Route path="/car" element={<Car />} />
      </Routes>
    </div>
  );
}

export default App;
