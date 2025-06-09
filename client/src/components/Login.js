import React, { useState } from 'react';

const Login = ({ onFormSwitch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert('Login successful!');
        // Optional: redirect or store token
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      alert('Server error. Please try again.');
    }
  };

  return (
    <>
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleLogin} className="form">
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p className="switch">
        Don’t have an account?{' '}
        <span onClick={() => onFormSwitch('signup')}>Signup</span>
      </p>
    </>
  );
};

export default Login;
