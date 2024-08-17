import React from 'react';
import { Box, Typography, Container, Card, CardContent, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const experience = [
  { 
    role: 'Full Stack Developer', 
    company: 'Squib Factory', 
    duration: '2023 - Present', 
    description: 'Led the development of several web applications using React, Material-UI, and Node.js. Implemented backend APIs and integrated them with front-end components, ensuring a seamless user experience. Collaborated with designers and product managers to refine features and fix bugs.' 
  },
  { 
    role: 'Web Developer', 
    company: 'Cloud Analogy', 
    duration: '2021 - 2023', 
    description: 'Developed and maintained responsive websites for clients using HTML, CSS, JavaScript, and PHP. Optimized web pages for speed and SEO, leading to a 20% increase in page load speed and improved search engine rankings. Worked closely with clients to gather requirements and provide technical support.' 
  },
  // Add more experiences here
];

const Experience = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box
        component={motion.div}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            mb: 4,
            color: 'primary.main',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          Experience
        </Typography>

        <Grid container spacing={4}>
          {experience.map((exp, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card 
                component={motion.div}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                sx={{
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  height: '100%',
                }}
              >
                <CardContent>
                  <Typography 
                    variant="h6" 
                    component="h3"
                    sx={{ 
                      fontWeight: 'bold',
                      mb: 1,
                      color: 'primary.dark',
                    }}
                  >
                    {exp.role} at {exp.company}
                  </Typography>
                  <Typography 
                    variant="subtitle1" 
                    color="text.secondary"
                    sx={{ 
                      fontStyle: 'italic',
                      mb: 2,
                    }}
                  >
                    {exp.duration}
                  </Typography>
                  <Typography variant="body1">
                    {exp.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Experience;
