'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import NewsletterSignup from '../shared/NewsletterSignup';
import { motion } from 'framer-motion';

function ComingSoonBanner() {
    return (
        <Box sx={{ py: 12, position: 'relative', zIndex: 1, overflow: 'hidden' }}>
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(180deg, rgba(3,0,20,0) 0%, rgba(112, 66, 248, 0.1) 100%)',
                    zIndex: -1
                }}
            />
            <Container>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Box
                        className="glass-panel"
                        sx={{
                            py: 8,
                            px: 4,
                            textAlign: 'center',
                            borderRadius: 6,
                            border: '1px solid rgba(0, 255, 163, 0.3)',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 0 50px rgba(0, 255, 163, 0.1)'
                        }}
                    >
                        <Box sx={{ position: 'absolute', top: '-50%', left: '50%', transform: 'translateX(-50%)', width: '60%', height: '200%', background: 'radial-gradient(ellipse, rgba(0, 255, 163, 0.05) 0%, transparent 70%)', zIndex: 0 }} />

                        <Typography variant="h3" gutterBottom fontWeight="900" sx={{ position: 'relative', zIndex: 1 }}>
                            Be the <span style={{ color: '#00ffa3' }}>First</span> to Know
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ mb: 5, opacity: 0.8, fontSize: '1.2rem', color: '#B4B4B4', maxWidth: 600, mx: 'auto', position: 'relative', zIndex: 1 }}>
                            Join thousands of Kano residents waiting for ChapChap.
                            Get exclusive early access and vendor updates.
                        </Typography>

                        <Box sx={{ maxWidth: 500, mx: 'auto', position: 'relative', zIndex: 1 }}>
                            <NewsletterSignup />
                        </Box>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
}

export default ComingSoonBanner;
