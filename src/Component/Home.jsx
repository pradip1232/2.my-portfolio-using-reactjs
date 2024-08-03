import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import { keyframes } from '@emotion/react';
import homeImage from '../assets/Images/23502739.jpg';  // Correctly import the image

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const AnimatedBoxLeft = styled(Box)`
  animation: ${fadeInLeft} 1s;
`;

const AnimatedBoxRight = styled(Box)`
  animation: ${fadeInRight} 1s;
`;

export default function Home() {
  return (
    <Container className="home-container">
      <Grid container alignItems="center">
        <Grid item xs={12} md={6}>
          <AnimatedBoxLeft>
            <h1 variant="h1">Welcome to my website</h1>
            <p variant="body1">Beast developer</p>
          </AnimatedBoxLeft>
        </Grid>
        <Grid item xs={12} md={6} textAlign="center">
          <AnimatedBoxRight>
            <img
              src={homeImage}  // Use the imported image correctly here
              alt="Developer"
              style={{ maxWidth: '100%' }}
            />
          </AnimatedBoxRight>
        </Grid>
      </Grid>
    </Container>
  );
}
