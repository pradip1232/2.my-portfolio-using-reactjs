import React from 'react';
import { Box, Typography, Container, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';

const ContactHome = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h4" component="h2" gutterBottom textAlign="center">
          Contact
        </Typography>
        <form noValidate autoComplete="off">
          <Box mb={2}>
            <TextField 
              fullWidth 
              label="Name" 
              variant="outlined" 
              required 
              component={motion.div}
              whileFocus={{ scale: 1.02 }}
            />
          </Box>
          <Box mb={2}>
            <TextField 
              fullWidth 
              label="Email" 
              variant="outlined" 
              type="email" 
              required 
              component={motion.div}
              whileFocus={{ scale: 1.02 }}
            />
          </Box>
          <Box mb={2}>
            <TextField 
              fullWidth 
              label="Message" 
              variant="outlined" 
              multiline 
              rows={4} 
              required 
              component={motion.div}
              whileFocus={{ scale: 1.02 }}
            />
          </Box>
          <Box textAlign="center">
            <Button 
              variant="contained" 
              color="primary"
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default ContactHome;
