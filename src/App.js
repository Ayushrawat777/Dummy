import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";
import "./App.css"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Dummy" element={<Login />} />
        <Route path="/Dummy/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/Dummy" />} />
      </Routes>
    </Router>
  );
}

export default App;
