// pages/_app.js
import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import '../styles/globals.css';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
  },
});



export default function MyApp({ Component, pageProps }) {
  const [authToken, setAuthToken] = useState('');
  const router = useRouter();

  const handleLoginSuccess = (token) => {
    setAuthToken(token);
    router.push('/quotes');
  };
  const handleLogout = () => {
    setAuthToken(null);
  };

  return (
    <>
      <Head>
        <title>Quotes App</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} authToken={authToken} onLoginSuccess={handleLoginSuccess} onLogout={handleLogout} />
      </ThemeProvider>
    </>
  );
}
