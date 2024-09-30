import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import styles from './AnimatedQuotes.module.css';// Import CSS module for styles

const quotes = [
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Do not wait to strike till the iron is hot, but make it hot by striking.",
  "Success is not the key to happiness. Happiness is the key to success.",
  "The future belongs to those who believe in the beauty of their dreams.",
];

const AnimatedQuotes = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box className={styles.quoteContainer}>
      <Typography variant="h5" className={styles.quoteText}>
        {quotes[currentQuoteIndex]}
      </Typography>
    </Box>
  );
};

export default AnimatedQuotes;
