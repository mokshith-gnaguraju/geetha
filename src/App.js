import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Slider from './Components/Slider';
import TechCards from './Components/TechCards';
import Box from './Components/Box';
import './App.css';
import Student from './Components/Student';
import Archi from './Components/Archi';
import Trainer from './Components/Trainer';
import Footer from './Components/Footer';
import Clients from './Components/Clients';
import Corporate from './Components/Corporate';
import Known from './Components/Known';
import Location from './Components/Location';
import Fit from './Components/Fit';
import Social from './Social';
import Placements from './Components/Placements';
import ContactPage from './Components/ContactPage';
import { InternshipPage, ReviewsPage, BlogPage, StudentPortal, ResultsPage, CertificatePage } from './Components/StubPages';
import { CartProvider } from './Components/CartContext';
import Cart from './Components/Cart';
import Table from './Components/Table';
import Data from './Components/Data';

const Home = () => (
  <div style={{background: 'transparent'}}>
    <Slider />
    <TechCards />
    <Box />
    <Student/>
    <Archi/>
    <Trainer/>
    <Clients/>
    <Corporate/>
    <Known/>
    <Location/>
    <Fit/>
    <Social/>
    <Footer/>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/internship" element={<InternshipPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/students/portal" element={<StudentPortal />} />
          <Route path="/students/results" element={<ResultsPage />} />
          <Route path="/students/certificate" element={<CertificatePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/table" element={<Table />} />
          <Route path="/data" element={<Data />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
