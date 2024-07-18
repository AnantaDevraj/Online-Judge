import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Problem from './components/Problem'
import Header from './Elements/Header'
import Footer from './Elements/Footer'

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/problem" element={<Problem />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

