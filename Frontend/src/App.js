
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Header from "./Components/Header";


function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route exact path="/register" element={<Register />} />
          </Routes>
          <Routes>
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
