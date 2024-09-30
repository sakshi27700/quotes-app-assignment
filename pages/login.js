
import React from 'react';
import UserAuthForm from '../components/UserAuthForm';
import { Container, Typography } from '@mui/material';

export default function LoginPage({ onLoginSuccess }) {
  return (
    <Container maxWidth="xs" style={{ marginTop: '2rem', textAlign:'center'}}>
      <Typography variant="h4" gutterBottom>
        Login to Quotopia
      </Typography>
      <UserAuthForm onLoginSuccess={onLoginSuccess} />
    </Container>
  );
}
