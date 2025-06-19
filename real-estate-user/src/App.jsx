import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from 'react-hot-toast';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Listing from './Components/listing';
import PropertyDetails from './pages/PropertyDetails';

import NavbarPage from './pages/NavbarPage';
import Footer from './pages/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <NavbarPage />
        <main className="main-content">
          <Toaster position="top-right" reverseOrder={false} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listing" element={<Listing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
