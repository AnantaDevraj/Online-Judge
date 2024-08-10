import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home'
import Signup from './components/Signup'
import Signin from "./components/Signin";
import CreateProblem from './components/Problems/Problem.create';
import SolveProblem from './components/Problems/problem.solve';
import ProblemDetails from './components/Problems/problem.details';
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
        <Route path="/create-problem" element={<CreateProblem />} />
          <Route path="/solve-problem" element={<SolveProblem />} />
          <Route path="/problems/:id" element={<ProblemDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

