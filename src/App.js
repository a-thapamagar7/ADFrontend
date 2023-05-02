import './App.css';
import { Route, Routes } from "react-router-dom";
import Homepage from './Components/Homepage';
import Login from './Components/login';
import Register from './Components/register';
import Car from './Components/Car';
import AdminCars from './Components/AdminCars';
import CreateCar from './Components/CreateCar';
import AdminOffers from './Components/AdminOffers';
import CreateOffer from './Components/CreateOffer';
import UserCars from './Components/UserCars';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/car" element={<Car />} />
        <Route path="/cars" element={<UserCars />} />
        <Route path="/admin/cars" element={<AdminCars />} />
        <Route path="/admin/cars/add/:id" element={<CreateCar />} />
        <Route path="/admin/cars/add" element={<CreateCar />} />
        <Route path="/admin/offers/add/:id" element={<CreateOffer />} />
        <Route path="/admin/offers/add" element={<CreateOffer />} />
        <Route path="/admin/offers" element={<AdminOffers />} />
      </Routes>
    </div>
  );
}

export default App;
