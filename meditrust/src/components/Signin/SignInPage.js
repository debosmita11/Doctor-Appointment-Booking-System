// src/pages/SignIn.js
import React, { useState } from 'react';
import './SignInPage.css';
import SigninHeader from './SigninHeader'; // Updated path for Header


function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    // Handle login logic here
    console.log('Login attempt with:', { email, password });
    // Example: You would typically send this data to your backend API
  };

  return (
    <>
    <SigninHeader/>
    <div className="signin-page">
      <div className="signin-container">
        <h2>Sign In</h2>
        <p className="subtitle">Please sign in to book an appointment.</p>

        <form className="signin-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required // HTML5 basic validation
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required // HTML5 basic validation
            />
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
    </>
  );
}

export default SignIn;