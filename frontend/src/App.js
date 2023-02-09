
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
