import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        textAlign="center"
        component={motion.div}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom
          sx={{
            background: 'linear-gradient(45deg, #ff6b6b, #f06595)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
          }}
        >
          Hi, I'm Beast Developer,
        </Typography>
        <Typography 
          variant="h5" 
          component="h2" 
          gutterBottom
          sx={{
            fontStyle: 'italic',
            color: '#555',
            textShadow: '1px 1px 3px rgba(0,0,0,0.1)',
          }}
        >
          A Passionate Full Stack Developer
        </Typography>
        <Button 
          variant="contained" 
          component={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          sx={{
            color: 'white',
            backgroundColor: 'black',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
            '&:hover': {
              backgroundColor: 'darkgray',
            },
          }}
        >
          View My Work
        </Button>
      </Box>
    </Container>
  );
};

export default Hero;
