import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [roleId, setRoleId] = useState('');  // <== here
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://peapini-re.test/api/register', {
        name,
        email,
        password,
        password_confirmation: passwordConfirmation,
        role_id: roleId  // <== here
      });

      localStorage.setItem('token', response.data.authorization.token);
      window.location.href = '/dashboard';

    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || 'Registration failed');
      } else {
        setError('An error occurred');
      }
    }
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={titleStyle}>Register</h2>
        <form onSubmit={handleRegister}>
          <input 
            type="text" 
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)} 
            style={inputStyle}
          />
          <input 
            type="email" 
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            style={inputStyle}
          />
          <input 
            type="password" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            style={inputStyle}
          />
          <input 
            type="password" 
            placeholder="Confirm Password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)} 
            style={inputStyle}
          />

          {/* Role Select */}
          <select
            value={roleId}
            onChange={(e) => setRoleId(e.target.value)}
            style={inputStyle}
            required
          >
            <option value="" disabled>Select Role</option>
            <option value="1">Client</option>
            <option value="2">Employee</option>
          </select>

          <button type="submit" style={buttonStyle}>Register</button>
        </form>

        { error && <p style={{ color: 'red', marginTop: '15px', textAlign: 'center' }}>{error}</p> }
      </div>
    </div>
  );
};

// Inline styles
const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#f4f4f4'
};

const cardStyle = {
  padding: '30px',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  width: '350px'
};

const titleStyle = {
  textAlign: 'center',
  marginBottom: '20px'
};

const inputStyle = {
  display: 'block',
  width: '100%',
  padding: '12px',
  marginBottom: '15px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '14px'
};

const buttonStyle = {
  width: '100%',
  padding: '12px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  fontSize: '16px',
  cursor: 'pointer'
};

export default Register;
