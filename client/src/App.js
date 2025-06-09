import React, { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="app">
      <div className="card">
        {currentForm === 'login' ? (
          <Login onFormSwitch={toggleForm} />
        ) : (
          <Signup onFormSwitch={toggleForm} />
        )}
      </div>
    </div>
  );
}
export default App;
