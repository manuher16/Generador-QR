import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './views/Home'
import Generator from './views/Generator'
import Login from './views/Login'
import Register from './views/Register'
import Dashboard from './views/Dashboard'
import Snackbar from './components/Snackbar'
import Manage from './views/Manage'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Snackbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generator" element={<Generator />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage" element={<Manage />} />

      </Routes>
    </div>
  );
}

const requiredAuth = ({ children, ...rest }) => {
  const session = localStorage.getItem('session') == true || false
  return (
    <Route
      {...rest}
      render={({ location }) =>
        session ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
export default App;
