import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';

const experience = [
  { role: 'Frontend Developer', company: 'Company A', duration: '2021 - Present', description: 'Worked on various web projects using React and Material-UI.' },
  { role: 'Web Developer', company: 'Company B', duration: '2019 - 2021', description: 'Developed and maintained websites and web applications.' },
  // Add more experiences here
];

const Experience = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Box
        component={motion.div}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Experience
        </Typography>
        {experience.map((exp, index) => (
          <Box key={index} mb={3}>
            <Typography variant="h6" component="h3">
              {exp.role} at {exp.company}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {exp.duration}
            </Typography>
            <Typography variant="body1">
              {exp.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Experience;
