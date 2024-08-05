import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home'
import Signup from './components/Signup'
import Signin from "./components/Signin";
import Problem from './components/Problem'
import Header from './Elements/Header'
import Footer from './Elements/Footer'

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/problems" element={<Problem />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

