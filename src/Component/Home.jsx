import React from "react";
import { Container, Grid, Box, Typography } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import homeImage from "../assets/Images/23502739.jpg"; // Correctly import the image
import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Testimonials from "./Testimonials";
import Blog from "./Blog";
import ContactHome from "./ContactHome";
import TypingEffect from "react-typing-effect";

// Define animations
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

// Styled components
const AnimatedBoxLeft = styled(Box)`
  animation: ${fadeInLeft} 1s ease-out;
`;

const AnimatedBoxRight = styled(Box)`
  animation: ${fadeInRight} 1s ease-out;
`;

export default function Home() {
  return (
    <Container className="home-container">
      <Grid container alignItems="center" spacing={3}>
        <Grid item xs={12} md={6}>
          <AnimatedBoxLeft>
            <Typography variant="h3" component="h1" gutterBottom>
              Welcome   to my website
            </Typography>
            <Typography variant="body1" component="h2">
              <TypingEffect
                text={[
                  "Beast developer",
                  "Full Stack Engineer",
                  "Creative Coder",
                ]}
                speed={100}
                eraseSpeed={50}
                typingDelay={1000}
                eraseDelay={1000}
              />
            </Typography>
          </AnimatedBoxLeft>
        </Grid>
        <Grid item xs={12} md={6} textAlign="center">
          <AnimatedBoxRight>
            <Box
              component="img"
              src={homeImage}
              alt="Developer"
              sx={{ maxWidth: "100%" }}
            />
          </AnimatedBoxRight>
        </Grid>
      </Grid>
      {/* Additional Sections */}
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Testimonials />
      <Blog />
      <ContactHome />
    </Container>
  );
}
