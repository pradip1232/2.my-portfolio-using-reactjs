import React from 'react';
import { Container, Grid, Typography, Box, Link } from '@mui/material';
import { GitHub, Twitter, LinkedIn } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ backgroundColor: '#101010', color: 'white', mt: 5, py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5">About Me</Typography>
            <Typography variant="body1">
              I am a full-stack developer with expertise in both front-end and back-end technologies.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5">Contact</Typography>
            <Typography variant="body1">Email: 755201pradip@gmail.com</Typography>
            <Typography variant="body1">
              LinkedIn: <Link href="https://www.linkedin.com/in/pradipmourya-61a387218" color="inherit">Pradip Mourya</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5">Follow Me</Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
              <Link href="https://github.com/pradip1232" color="inherit">
                <GitHub fontSize="large" />
              </Link>
              <Link href="https://twitter.com/yourprofile" color="inherit">
                <Twitter fontSize="large" />
              </Link>
              <Link href="https://www.linkedin.com/in/pradipmourya-61a387218" color="inherit">
                <LinkedIn fontSize="large" />
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box textAlign="center" mt={4}>
          <Typography variant="body2">© 2024 Pradip Mourya. All rights reserved.</Typography>
        </Box>
      </Container>
    </Box>
  );
}
