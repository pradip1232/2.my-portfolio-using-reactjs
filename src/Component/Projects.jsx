import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Project One",
    description: "A cool project",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Project Two",
    description: "Another cool project",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Project Three",
    description: "Another cool project",
    image: "https://via.placeholder.com/150",
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" component="h2">
          Projects
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.name}
              />
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  {project.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
