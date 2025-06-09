import React, { useState } from 'react';

const Signup = ({ onFormSwitch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert('Signup successful!');
        onFormSwitch('login'); // Go to login form
      } else {
        alert(data.message || 'Signup failed');
      }
    } catch (error) {
      alert('Server error. Please try again.');
    }
  };

  return (
    <>
      <h2 className="form-title">Signup</h2>
      <form onSubmit={handleSignup} className="form">
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Create Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Signup</button>
      </form>
      <p className="switch">
        Already have an account?{' '}
        <span onClick={() => onFormSwitch('login')}>Login</span>
      </p>
    </>
  );
};

export default Signup;
