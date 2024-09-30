// pages/quotes.js
import React, { useEffect } from 'react';
import QuoteDisplay from '../components/QuoteDisplay';
import { Container, Typography, Fab } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { useRouter } from 'next/router';

export default function QuoteListPage({ authToken , onLogout }) {
  const router = useRouter();

  const handleAddQuote = () => {
    router.push('/addQuote');
  };

  
  useEffect(() => {
    if (!authToken) {
      router.push('/login');
    }
  }, [authToken]);

  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Typography variant="h3" gutterBottom>
        Quotes
      </Typography>
      {authToken && <QuoteDisplay token={authToken} onLogout={onLogout} />}
      <Fab color="primary" aria-label="add" onClick={handleAddQuote} style={{ position: 'fixed', bottom: '2rem', right: '2rem' }}>
        <AddIcon />
      </Fab>
    </Container>
  );
}
