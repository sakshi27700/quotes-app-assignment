// components/UserAuthForm.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import axios from 'axios';

export default function UserAuthForm({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [otp, setOtp] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(process.env.NEXT_PUBLIC_LOGIN_API_URL, {
        username,
        otp,
      });
      onLoginSuccess(response.data.token);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <Paper elevation={3} style={{ padding: '2rem', borderRadius: '8px' }}>
      <form onSubmit={handleLogin}>
        <Typography variant="h5" gutterBottom style={{ marginBottom: '1rem', textAlign: 'center' }}>
          User Login
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{ marginBottom: '1rem' }}
        />
        <TextField
          label="OTP"
          variant="outlined"
          type="text"
          fullWidth
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
          style={{ marginBottom: '1rem' }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: '1rem', width: '100%' }}
        >
          Login
        </Button>
      </form>
    </Paper>
  );
}
