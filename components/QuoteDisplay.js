// components/QuoteDisplay.js
import React, { useEffect, useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function QuoteDisplay({ token , onLogout}) {
  const [quotes, setQuotes] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 20;
  const router = useRouter()

  const fetchQuotes = async () => {
    try {
      const response = await axios.get(`https://assignment.stage.crafto.app/getQuotes?limit=${limit}&offset=${offset}`, {
        headers: {
          Authorization: token,
        },
      });

      if (Array.isArray(response.data.data)) {
        setQuotes((prevQuotes) => [...prevQuotes, ...response.data.data]);
        setOffset(offset + limit);
      } else {
        console.warn('Expected an array but received:', response.data);
      }
    } catch (error) {
      console.error('Error fetching quotes:', error);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  const handleLogout = () => {
    onLogout();
    router.push('/login');
  };

  return (
    <>
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
        <Button variant="contained" onClick={handleLogout} sx={{ marginRight: '1rem', marginTop: '1rem' , marginBottom: '1rem' }}>
          Logout
        </Button>
      </Box>
      <Grid container spacing={2}>
        {quotes.map((quote) => (
          <Grid item xs={12} sm={6} md={4} key={quote.id}>
            <Card>
              <CardMedia component="img" height="200" image={quote.mediaUrl} alt="quote image" />
              <CardContent>
                <Typography variant="h6">{quote.text}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {quote.username} - {quote.created_at}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" color="primary" onClick={fetchQuotes} style={{ marginTop: '1rem' }}>
        Load More
      </Button>
    </>
  );
}
