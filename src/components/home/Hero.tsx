'use client';

import React, { useRef, useEffect } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    // Initial GSAP Animation
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(textRef.current,
                { opacity: 0, y: 100 },
                { opacity: 1, y: 0, duration: 1.5, ease: 'power4.out', delay: 0.2 }
            );
        }, heroRef);
        return () => ctx.revert();
    }, []);

    const { scrollY } = useScroll();
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <Box
            ref={heroRef}
            sx={{
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                pt: { xs: 12, md: 10 },
                background: 'radial-gradient(circle at 50% 50%, rgba(112, 66, 248, 0.15) 0%, transparent 50%)',
            }}
        >
            {/* Background Animated Elements */}
            <Box
                component={motion.div}
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                sx={{
                    position: 'absolute',
                    top: '-20%',
                    right: '-10%',
                    width: '600px',
                    height: '600px',
                    borderRadius: '50%',
                    background: 'linear-gradient(180deg, rgba(0, 255, 163, 0.1) 0%, rgba(112, 66, 248, 0.05) 100%)',
                    filter: 'blur(80px)',
                    zIndex: 0
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
                <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center" flexDirection={{ xs: 'column-reverse', md: 'row' }}>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Box ref={textRef} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                            <Box sx={{
                                display: 'inline-block',
                                px: 2, py: 1,
                                mb: 3,
                                borderRadius: '20px',
                                border: '1px solid rgba(0, 255, 163, 0.3)',
                                background: 'rgba(0, 255, 163, 0.05)',
                                color: '#00ffa3',
                                fontWeight: 700,
                                fontSize: '0.875rem',
                                letterSpacing: '0.05em'
                            }}>
                                🚀 NEXT-GEN QUICK E-COMMERCE
                            </Box>

                            <Typography variant="h1" sx={{ mb: 2, fontWeight: 900, fontSize: { xs: '3rem', md: '4rem' } }}>
                                The Future of <br />
                                <span className="text-gradient">Instant Delivery</span>
                            </Typography>

                            <Typography variant="h5" sx={{ mb: 5, color: 'text.secondary', maxWidth: '600px', lineHeight: 1.6, mx: { xs: 'auto', md: 0 }, fontSize: { xs: '1rem', md: '1.25rem' } }}>
                                Experience the speed of Web3-powered logistics.
                                Shop local, get rewards, and receive your order in minutes.
                                Welcome to the <span style={{ color: '#fff' }}>ChapChap Ecosystem</span>.
                            </Typography>

                            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                                <motion.div whileTap={{ scale: 0.95 }}>
                                    <Button variant="contained" color="primary" size="large" href="/coming-soon">
                                        Start Shopping
                                    </Button>
                                </motion.div>
                                <motion.div whileTap={{ scale: 0.95 }}>
                                    <Button variant="contained" color="secondary" size="large" href="/coming-soon">
                                        Join the Waitlist
                                    </Button>
                                </motion.div>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 5 }}>
                        <motion.div style={{ y: y2 }}>
                            <Box
                                className="glass-panel"
                                sx={{
                                    p: 4,
                                    borderRadius: '24px',
                                    position: 'relative',
                                    transformStyle: 'preserve-3d',
                                    transform: { xs: 'perspective(1000px) rotateY(-5deg) rotateX(2deg)', md: 'perspective(1000px) rotateY(-10deg) rotateX(5deg)' },
                                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                                    maxWidth: { xs: 350, md: '100%' },
                                    mx: 'auto'
                                }}
                            >
                                {/* Simulated App UI Card */}
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                                    <Box sx={{ width: 40, height: 40, borderRadius: '50%', bgcolor: 'primary.main' }} />
                                    <Box sx={{ width: '60%', height: 10, borderRadius: 5, bgcolor: 'rgba(255,255,255,0.1)' }} />
                                </Box>
                                <Box sx={{ height: 150, borderRadius: '16px', bgcolor: 'rgba(112, 66, 248, 0.2)', mb: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Typography variant="h6" sx={{ color: 'primary.light' }}>On its way 🚀</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 2 }}>
                                    <Box sx={{ flex: 1, height: 10, borderRadius: 5, bgcolor: 'rgba(255,255,255,0.1)' }} />
                                    <Box sx={{ flex: 1, height: 10, borderRadius: 5, bgcolor: 'rgba(255,255,255,0.1)' }} />
                                </Box>

                                {/* Floating Badge */}
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                    style={{
                                        position: 'absolute',
                                        top: -20,
                                        right: -10,
                                        background: '#00ffa3',
                                        color: '#000',
                                        padding: '12px 24px',
                                        borderRadius: '16px',
                                        fontWeight: 'bold',
                                        boxShadow: '0 10px 30px rgba(0, 255, 163, 0.4)',
                                        zIndex: 10
                                    }}
                                >
                                    10 min delivery
                                </motion.div>
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>

            {/* Scroll Indicator */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 20,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    opacity: 0.7,
                    display: { xs: 'none', md: 'block' } // Hide on very small screens to save space
                }}
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <Box sx={{ width: 30, height: 50, borderRadius: 15, border: '2px solid rgba(255,255,255,0.3)', display: 'flex', justifyContent: 'center', p: 1 }}>
                        <Box sx={{ width: 4, height: 8, bgcolor: 'white', borderRadius: 2 }} />
                    </Box>
                </motion.div>
            </Box>
        </Box>
    );
}
