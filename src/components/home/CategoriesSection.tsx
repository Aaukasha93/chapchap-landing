'use client';

import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import WatchIcon from '@mui/icons-material/Watch';
import HomeIcon from '@mui/icons-material/Home';
import { motion } from 'framer-motion';

const categories = [
  { name: 'Phones & Gadgets', icon: <SmartphoneIcon fontSize="large" />, color: 'rgba(33, 150, 243, 0.1)', textColor: '#2196f3' },
  { name: 'Fashion & Shadda', icon: <CheckroomIcon fontSize="large" />, color: 'rgba(233, 30, 99, 0.1)', textColor: '#e91e63' },
  { name: 'Watches & Beauty', icon: <WatchIcon fontSize="large" />, color: 'rgba(156, 39, 176, 0.1)', textColor: '#9c27b0' },
  { name: 'Household Items', icon: <HomeIcon fontSize="large" />, color: 'rgba(76, 175, 80, 0.1)', textColor: '#4caf50' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

function CategoriesSection() {
  return (
    <Box sx={{ py: 10, position: 'relative', zIndex: 1 }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h2" textAlign="center" fontWeight="800" gutterBottom sx={{ mb: 1 }}>
            Whatever You Need.
          </Typography>
          <Typography variant="body1" textAlign="center" sx={{ mb: 6, fontSize: '1.2rem', color: '#B4B4B4' }}>
            From traditional textiles to the latest tech, verified vendors have it all.
          </Typography>
        </motion.div>

        <Grid container spacing={3} component={motion.div} variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
          {categories.map((cat, index) => (
            <Grid size={{ xs: 6, md: 3 }} key={index}>
              <motion.div variants={item} style={{ height: '100%' }}>
                <Paper
                  className="glass-panel"
                  component={motion.div}
                  whileHover={{ y: -10, boxShadow: '0 0 20px rgba(112, 66, 248, 0.3)', borderColor: 'rgba(112, 66, 248, 0.5)' }}
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    borderRadius: 4,
                    cursor: 'pointer',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'border-color 0.3s'
                  }}
                >
                  <Box
                    sx={{
                      color: cat.textColor,
                      mb: 2,
                      p: 2.5,
                      bgcolor: cat.color,
                      borderRadius: '50%',
                      display: 'inline-flex',
                      boxShadow: `0 0 15px ${cat.color}`
                    }}
                  >
                    {cat.icon}
                  </Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {cat.name}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default CategoriesSection;
