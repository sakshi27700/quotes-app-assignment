// components/QuoteCreationForm.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Paper , Box} from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function QuoteCreationForm({ token, onLogout }) {
  const [text, setText] = useState('');
  const [file, setFile] = useState(null);
  const [mediaUrl, setMediaUrl] = useState('');
  const router = useRouter();

  const handleFileUpload = async (e) => {
    const uploadedFile = e.target.files[0];
    const formData = new FormData();
    formData.append('file', uploadedFile);

    try {
      const response = await axios.post('https://crafto.app/crafto/v1.0/media/assignment/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setMediaUrl(response.data.mediaUrl);
    } catch (error) {
      console.error('File upload failed:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://assignment.stage.crafto.app/postQuote', {
        text,
        mediaUrl,
      }, {
        headers: { Authorization: token },
      });
      setText('');
      setFile(null);
      setMediaUrl('');
      alert('Quote submitted successfully!');
    } catch (error) {
      console.error('Error creating quote:', error);
    }
  };
  const handleLogout = () => {
    onLogout();
    router.push('/login');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem' }}>
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
      <Button variant="contained"  onClick={handleLogout} sx={{ marginRight: '1rem', marginTop: '1rem' , marginBottom: '1rem'}}>
        Logout
      </Button>
    </Box>
    <Paper elevation={3} style={{ padding: '2rem', borderRadius: '8px' }}>
      <form onSubmit={handleSubmit}>
        <Typography variant="h5" gutterBottom style={{ marginBottom: '1rem', textAlign: 'center' }}>
          Create a New Quote
        </Typography>
        <TextField
          label="Quote Text"
          variant="outlined"
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          style={{ marginBottom: '1rem' }}
        />
        <input
          accept="image/*"
          style={{ display: 'none' }}
          id="upload-image"
          type="file"
          onChange={handleFileUpload}
        />
        <label htmlFor="upload-image">
          <Button variant="contained" component="span" style={{ marginBottom: '1rem' }}>
            Upload Image
          </Button>
        </label>
        {mediaUrl && (
          <img src={mediaUrl} alt="Uploaded Media" style={{ marginTop: '1rem', maxHeight: '200px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: '1rem', width: '100%' }}
        >
          Submit Quote
        </Button>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: '1rem', width: '100%' }}
          onClick={()=>(router.push('/quotes'))}
        >
          Go to Quotes Display Page
        </Button>
      </form>
    </Paper>
    </Box>
  );
}
