import React from 'react';
import { Box, Typography, Grid, Container, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', icon: '🔵' },
  { name: 'Material-UI', icon: '🌐' },
  { name: 'JavaScript', icon: '✨' },
  // Add more skills here
];

const Skills = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" component="h2">
          Skills
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card 
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  {skill.icon} {skill.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills;
