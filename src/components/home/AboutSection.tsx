'use client';

import React from 'react';
import { Box, Container, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Grid from '@mui/material/Grid';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { motion } from 'framer-motion';

function AboutSection() {
    return (
        <Box sx={{ py: 10, position: 'relative', zIndex: 1 }}>
            <Container>
                <Grid container spacing={8} alignItems="center">
                    <Grid size={{ xs: 12, md: 6 }}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <Box
                                className="glass-panel"
                                sx={{
                                    position: 'relative',
                                    height: '100%',
                                    minHeight: 450,
                                    borderRadius: 4,
                                    p: 4,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '1px solid rgba(112, 66, 248, 0.3)',
                                    boxShadow: '0 0 30px rgba(112, 66, 248, 0.15)',
                                    overflow: 'hidden'
                                }}>
                                {/* Decorative elements inside the box */}
                                <Box sx={{ position: 'absolute', top: -50, left: -50, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(112, 66, 248, 0.4) 0%, transparent 70%)', filter: 'blur(40px)' }} />
                                <Box sx={{ position: 'absolute', bottom: -50, right: -50, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0, 255, 163, 0.2) 0%, transparent 70%)', filter: 'blur(40px)' }} />

                                <Typography variant="h2" sx={{
                                    fontWeight: 900,
                                    background: 'linear-gradient(135deg, #fff 30%, #7042f8 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    position: 'relative',
                                    zIndex: 1
                                }}>
                                    ChapChap
                                </Typography>
                            </Box>
                        </motion.div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <Typography variant="overline" sx={{ color: '#00ffa3', fontWeight: 'bold', letterSpacing: 2 }}>
                                WHO WE ARE
                            </Typography>
                            <Typography variant="h3" gutterBottom sx={{ fontWeight: 800, mt: 1 }}>
                                Next-Gen <span className="text-gradient">Quick Commerce</span>.
                            </Typography>
                            <Typography variant="body1" paragraph sx={{ fontSize: '1.2rem', color: '#B4B4B4', lineHeight: 1.8, mb: 4 }}>
                                ChapChap is built to transform how Kano shops. We connect you with trusted local sellers for minute-level delivery of phones, fashion, and essentials—not just groceries.
                            </Typography>

                            <List>
                                {[
                                    "High-speed Minute-Level Delivery",
                                    "Specialty Goods: Shadda, Textiles & Gadgets",
                                    "Unified Multi-Vendor Marketplace",
                                    "Operating exclusively within Kano Metropolis"
                                ].map((text, i) => (
                                    <ListItem key={i} disableGutters sx={{ py: 1 }}>
                                        <ListItemIcon sx={{ minWidth: 40 }}>
                                            <CheckCircleIcon sx={{ color: '#7042f8' }} />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={text}
                                            primaryTypographyProps={{
                                                fontWeight: 500,
                                                sx: { color: 'white' }
                                            }}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default AboutSection;
