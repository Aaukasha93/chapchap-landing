'use client';

import React from 'react';
import { Box, Container, Typography, Avatar } from '@mui/material';
import Grid from '@mui/material/Grid';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { motion } from 'framer-motion';

const steps = [
    {
        icon: <TouchAppIcon sx={{ fontSize: 40 }} />,
        title: '1. You Order',
        desc: 'Browse thousands of products from local Kano vendors.',
        color: '#7042f8',
        delay: 0
    },
    {
        icon: <Inventory2Icon sx={{ fontSize: 40 }} />,
        title: '2. We Pack',
        desc: 'Vendors prepare your items instantly for pickup.',
        color: '#00ffa3',
        delay: 0.2
    },
    {
        icon: <LocalShippingIcon sx={{ fontSize: 40 }} />,
        title: '3. Fast Delivery',
        desc: 'Our riders bring it to your door in minutes.',
        color: '#ea00d9',
        delay: 0.4
    }
];

function HowItWorksSection() {
    return (
        <Box sx={{ py: 12, position: 'relative', zIndex: 1 }} id="how-it-works">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Box textAlign="center" mb={8}>
                        <Typography variant="h2" gutterBottom fontWeight="900">
                            How It <span className="text-gradient">Works</span>
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#B4B4B4', fontSize: '1.2rem' }}>
                            Simple, transparent, and fast.
                        </Typography>
                    </Box>
                </motion.div>

                <Grid container spacing={6} justifyContent="center">
                    {steps.map((step, index) => (
                        <Grid size={{ xs: 12, md: 4 }} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: step.delay }}
                            >
                                <Box 
                                    className="glass-panel"
                                    sx={{ 
                                        display: 'flex', 
                                        flexDirection: 'column', 
                                        alignItems: 'center', 
                                        textAlign: 'center',
                                        p: 5,
                                        borderRadius: 4,
                                        height: '100%',
                                        transition: 'transform 0.3s',
                                        '&:hover': {
                                            transform: 'translateY(-10px)',
                                            boxShadow: `0 0 30px ${step.color}50`
                                        }
                                    }}
                                >
                                    <Avatar
                                        sx={{
                                            width: 100,
                                            height: 100,
                                            bgcolor: 'rgba(255,255,255,0.05)',
                                            color: step.color,
                                            boxShadow: `0 0 20px ${step.color}40`,
                                            mb: 4,
                                            border: `1px solid ${step.color}80`
                                        }}
                                    >
                                        {step.icon}
                                    </Avatar>
                                    <Typography variant="h4" gutterBottom fontWeight="bold" sx={{ color: 'white' }}>{step.title}</Typography>
                                    <Typography variant="body1" sx={{ color: '#B4B4B4', fontSize: '1.1rem', lineHeight: 1.6 }}>
                                        {step.desc}
                                    </Typography>
                                </Box>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default HowItWorksSection;
