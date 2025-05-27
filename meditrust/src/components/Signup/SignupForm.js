// src/components/Signup/SignupForm.js
import React, { useState } from 'react';
import Header from './Header'; // Updated path for Header
import './SignupForm.css';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add sign-up logic here
  };

  return (
    <>
      <Header />
      <div className="signup-form-container">
        <div className="signup-card">
          <h2>Sign Up</h2>
          <p className="subtitle">Please sign up to book an appointment.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="create-account-button">
              CREATE ACCOUNT
            </button>
          </form>
          <p className="login-link">
            Already have an account? <a href="/SignInPage">Login here</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
