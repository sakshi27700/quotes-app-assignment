// pages/newQuote.js
import React, { useState } from 'react';
import QuoteCreationForm from '../components/QuoteCreationForm';
import { Container, Typography } from '@mui/material';

export default function NewQuotePage({ authToken, onLogout }) {
  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem', textAlign:'center' }}>
      <Typography variant="h3" gutterBottom>
        Add New Quote
      </Typography>
      <QuoteCreationForm token={authToken} onLogout={onLogout} />
    </Container>
  );
}
