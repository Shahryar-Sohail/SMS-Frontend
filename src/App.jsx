import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddStudent from './pages/AddStudent';
import Attendance from './pages/Attendance';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import 'flowbite';
import './index.css';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/addStudent" element={<ProtectedRoute><AddStudent /></ProtectedRoute>} />
      <Route path="/attendance" element={<ProtectedRoute><Attendance /></ProtectedRoute>} />
      <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} /> 
    </Routes>
  );
}

export default App;
