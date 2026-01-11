'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AboutSection from '@/components/home/AboutSection';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#030014' }}>
            <Header />

            {/* Hero Section */}
            <Box sx={{
                py: 20,
                background: 'radial-gradient(circle at 50% 50%, #1a1a40 0%, #030014 100%)',
                color: 'white',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '20%',
                        left: '10%',
                        width: '30vw',
                        height: '30vw',
                        background: 'radial-gradient(circle, rgba(112, 66, 248, 0.2) 0%, transparent 70%)',
                        filter: 'blur(60px)',
                        zIndex: 0
                    }}
                />

                <Container sx={{ position: 'relative', zIndex: 1 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typography variant="h1" sx={{
                            fontWeight: 800,
                            mb: 2,
                            fontSize: { xs: '3rem', md: '5rem' },
                            background: 'linear-gradient(to right, #fff, #b4b4b4)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>
                            About ChapChap
                        </Typography>
                        <Typography variant="h5" sx={{ maxWidth: 800, mx: 'auto', color: '#00ffa3', fontWeight: 500 }}>
                            The Quick E-Commerce Platform Built for Kano.
                        </Typography>
                    </motion.div>
                </Container>
            </Box>

            {/* Main Content */}
            <Box sx={{ position: 'relative', zIndex: 2, mt: -10 }}>
                {/* Intro Section */}
                <AboutSection />

                {/* CEO Section */}
                <Container sx={{ py: 10 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Box sx={{ mb: 12 }}>
                            <Typography variant="overline" sx={{ color: '#00ffa3', fontWeight: 'bold', letterSpacing: 2, display: 'block', textAlign: 'center', mb: 4 }}>
                                LEADERSHIP
                            </Typography>

                            <Grid container spacing={6} alignItems="center" justifyContent="center">
                                <Grid size={{ xs: 12, md: 5 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            width: 320,
                                            height: 400,
                                            borderRadius: '20px',
                                            background: 'linear-gradient(45deg, #7042f8, #00ffa3)',
                                            p: '2px', // Border width
                                            boxShadow: '0 0 40px rgba(112, 66, 248, 0.4)'
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src="/assets/ceo.jpg"
                                            alt="Aliyu Ahmad Ukasha"
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                borderRadius: '18px',
                                                bgcolor: '#030014'
                                            }}
                                        />
                                        {/* Animated Frame Accent */}
                                        <Box
                                            className="glass-panel"
                                            sx={{
                                                position: 'absolute',
                                                bottom: 20,
                                                left: -20,
                                                right: 20,
                                                p: 2,
                                                borderRadius: 2,
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                backdropFilter: 'blur(10px)'
                                            }}
                                        >
                                            <Typography variant="subtitle2" sx={{ color: '#fff', fontWeight: 'bold' }}>CE0 & Founder</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Box className="glass-panel" sx={{ p: 5, borderRadius: 4, position: 'relative' }}>
                                        <Typography variant="h3" gutterBottom fontWeight="800" sx={{ color: 'white' }}>
                                            Aliyu Ahmad Ukasha
                                        </Typography>
                                        <Typography variant="h6" sx={{ color: '#00ffa3', mb: 4, fontWeight: 500 }}>
                                            PhD Research Scholar (JNU University India)
                                        </Typography>

                                        <Typography variant="body1" paragraph sx={{ color: '#B4B4B4', fontSize: '1.1rem', lineHeight: 1.8 }}>
                                            A visionary tech entrepreneur bridging the gap between advanced technology and local commerce.
                                        </Typography>

                                        <Box sx={{ mt: 3 }}>
                                            <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 'bold', mb: 1 }}>
                                                Co-Founder of:
                                            </Typography>
                                            <Typography variant="body1" sx={{ color: '#B4B4B4', display: 'flex', alignItems: 'center', gap: 1 }}>
                                                🏢 AAUkasha Tech (Nigeria)
                                            </Typography>
                                            <Typography variant="body1" sx={{ color: '#B4B4B4', display: 'flex', alignItems: 'center', gap: 1 }}>
                                                🌍 AAUkasha Enterprise LLC (UAE)
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </motion.div>

                    {/* Company Structure Section */}
                    <Box sx={{ mb: 12 }}>
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
                                    border: '1px solid rgba(0, 255, 163, 0.2)',
                                    background: 'linear-gradient(180deg, rgba(17, 16, 41, 0.6) 0%, rgba(3, 0, 20, 0.9) 100%)',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', background: 'linear-gradient(90deg, #7042f8, #00ffa3)' }} />

                                <Typography variant="h4" gutterBottom fontWeight="bold" sx={{ color: 'white' }}>
                                    Global Innovation, Local Impact
                                </Typography>
                                <Typography variant="h6" paragraph sx={{ color: '#B4B4B4', maxWidth: 700, mx: 'auto', mb: 4 }}>
                                    ChapChap Platform is a proud subsidiary of <span style={{ color: '#00ffa3' }}>AAUkasha Tech Nigeria</span>.
                                    <br />
                                    <Typography component="span" variant="caption" sx={{ fontSize: '0.9rem', opacity: 0.7 }}>
                                        Establishment launching in 2026
                                    </Typography>
                                </Typography>

                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    size="large"
                                    href="https://www.aaukasha.org"
                                    target="_blank"
                                    sx={{
                                        borderRadius: '50px',
                                        px: 4,
                                        py: 1.5,
                                        borderWidth: '2px',
                                        '&:hover': { borderWidth: '2px' }
                                    }}
                                >
                                    Visit AAUkasha Tech
                                </Button>
                            </Box>
                        </motion.div>
                    </Box>

                    {/* Vision & Commitment (Existing) */}
                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                style={{ height: '100%' }}
                            >
                                <Box className="glass-panel" sx={{ p: 6, borderRadius: 4, height: '100%' }}>
                                    <Typography variant="h4" gutterBottom fontWeight="bold" className="text-gradient">Our Vision</Typography>
                                    <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#B4B4B4', lineHeight: 1.7 }}>
                                        To revolutionize commerce in Kano State by bridging the gap between local vendors and modern consumers through speed, technology, and trust.
                                    </Typography>
                                </Box>
                            </motion.div>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                style={{ height: '100%' }}
                            >
                                <Box className="glass-panel" sx={{ p: 6, borderRadius: 4, height: '100%' }}>
                                    <Typography variant="h4" gutterBottom fontWeight="bold" sx={{ color: 'white' }}>Our Commitment</Typography>
                                    <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#B4B4B4', lineHeight: 1.7 }}>
                                        We are committed to creating jobs, supporting small businesses, and providing a delivery service that Kano can rely on, day or night.
                                    </Typography>
                                </Box>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Footer />
        </Box>
    );
}
