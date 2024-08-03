import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';

const education = [
  { degree: 'Bachelor of Science in Computer Science', institution: 'University A', duration: '2015 - 2019', description: 'Studied various computer science topics and developed projects.' },
  // Add more education details here
];

const Education = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Box
        component={motion.div}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Education
        </Typography>
        {education.map((edu, index) => (
          <Box key={index} mb={3}>
            <Typography variant="h6" component="h3">
              {edu.degree} at {edu.institution}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {edu.duration}
            </Typography>
            <Typography variant="body1">
              {edu.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Education;
