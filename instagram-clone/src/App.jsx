import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import Home from "./Home";
import Signup from "./Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/Signup" element={<Signup />}/>
        <Route path="/Home" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;