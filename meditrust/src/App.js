// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupForm from './components/Signup/SignupForm';
import SignInPage from './components/Signin/SignInPage';
// import MyAppointments from './components/MyAppointments/MyAppointments';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignupForm />} />
          <Route path="/SignInPage" element={<SignInPage />} />
          {/* <Route path="/MyAppointments" element={<MyAppointments />} />  */}
            {/* <Route path="/doctors" element={<Doctors />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
