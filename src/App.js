import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from './Components/Log/Login'
import Register from './Components/Log/Register'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
