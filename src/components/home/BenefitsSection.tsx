'use client';

import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import StorefrontIcon from '@mui/icons-material/Storefront';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { motion } from 'framer-motion';

const benefits = [
    {
        icon: <StorefrontIcon fontSize="large" />,
        title: 'For Business Owners',
        description: 'Sell products easily and reach customers across Kano. No complex setup, just sales.',
        color: 'rgba(25, 118, 210, 0.15)',
        iconColor: '#42a5f5'
    },
    {
        icon: <RocketLaunchIcon fontSize="large" />,
        title: 'For Entrepreneurs',
        description: 'Launch faster and scale locally. We handle the delivery so you can focus on growth.',
        color: 'rgba(230, 81, 0, 0.15)',
        iconColor: '#ff9800'
    },
    {
        icon: <TwoWheelerIcon fontSize="large" />,
        title: 'For Riders & Job Seekers',
        description: 'Earn extra income delivering goods. Flexible hours and local opportunities.',
        color: 'rgba(46, 125, 50, 0.15)',
        iconColor: '#66bb6a'
    },
    {
        icon: <ShoppingBagIcon fontSize="large" />,
        title: 'For Everyday People',
        description: 'Get what you need delivered in minutes. From markets to your doorstep, hassle-free.',
        color: 'rgba(123, 31, 162, 0.15)',
        iconColor: '#ab47bc'
    }
];

function BenefitsSection() {
    return (
        <Box sx={{ py: 10, position: 'relative', zIndex: 1 }}>
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography variant="h2" sx={{ fontWeight: 800, mb: 2 }}>
                            Who Is <span className="text-gradient">ChapChap</span> For?
                        </Typography>
                        <Typography variant="h6" sx={{ color: '#B4B4B4' }}>
                            Empowering everyone in our community to do more.
                        </Typography>
                    </Box>
                </motion.div>

                <Grid container spacing={4}>
                    {benefits.map((item, index) => (
                        <Grid size={{ xs: 12, md: 6 }} key={index}>
                            <Paper
                                className="glass-panel"
                                component={motion.div}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                sx={{
                                    p: 5,
                                    height: '100%',
                                    borderRadius: 4,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start'
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 60,
                                        height: 60,
                                        borderRadius: '16px',
                                        bgcolor: item.color,
                                        color: item.iconColor,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mb: 3,
                                        boxShadow: `0 0 20px ${item.color}`
                                    }}
                                >
                                    {item.icon}
                                </Box>
                                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#B4B4B4', lineHeight: 1.7 }}>
                                    {item.description}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default BenefitsSection;
