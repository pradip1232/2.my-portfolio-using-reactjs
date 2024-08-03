import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const testimonials = [
  { name: 'Client A', feedback: 'Great work! Highly recommended.', role: 'CEO, Company A' },
  { name: 'Client B', feedback: 'Very professional and skilled.', role: 'CTO, Company B' },
  // Add more testimonials here
];

const Testimonials = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" component="h2">
          Testimonials
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card 
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CardContent>
                <Typography variant="body1" gutterBottom>
                  "{testimonial.feedback}"
                </Typography>
                <Typography variant="h6" component="h3" gutterBottom>
                  - {testimonial.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {testimonial.role}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Testimonials;
