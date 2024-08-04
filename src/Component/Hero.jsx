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
        <Typography variant="h3" component="h1" gutterBottom>
          Hi, I'm Beast Developer,
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          A Passionate Full Stack Developer
        </Typography>
        <Button 
          variant="contained" 
         
          component={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          sx={{color:'white' , backgroundColor:'black'}}
        >
          View My Work
        </Button>
      </Box>
    </Container>
  );
};

export default Hero;
