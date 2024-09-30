
import React from 'react';
import { Container, Typography } from '@mui/material';
import Link from 'next/link';
import AnimatedQuotes from '@/components/AnimatedQuotes';

export default function Home() {
  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' , textAlign: 'center'}}>
      <AnimatedQuotes/>
      <Typography variant="h3" gutterBottom>
        Welcome to Quotopia
      </Typography>
      <Link href="/login">
          <Typography variant="h6" style={{ color: '#1976d2' }} gutterBottom>
            Go to Login
          </Typography>
      </Link>
    </Container>
  );
}
