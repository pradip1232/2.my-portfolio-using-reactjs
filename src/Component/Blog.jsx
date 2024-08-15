import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";

const blogPosts = [
  { title: "Blog Post One", excerpt: "An interesting blog post", link: "#" },
  {
    title: "Blog Post Two",
    excerpt: "Another interesting blog post",
    link: "#",
  },
  {
    title: "Blog Post Three",
    excerpt: "Another interesting blog post",
    link: "#",
  },
  // Add more blog posts here
];

const Blog = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" component="h2">
          Blog
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {blogPosts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.excerpt}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href={post.link}>
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Blog;
