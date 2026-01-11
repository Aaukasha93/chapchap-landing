'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import NewsletterSignup from '@/components/shared/NewsletterSignup';
import { motion } from 'framer-motion';

export default function ComingSoon() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#030014' }}>
            <Header />

            <Box
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    py: 10,
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                {/* Background Gradient Orbs */}
                <Box sx={{ position: 'absolute', top: '10%', left: '20%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(112, 66, 248, 0.2) 0%, transparent 70%)', filter: 'blur(80px)' }} />
                <Box sx={{ position: 'absolute', bottom: '10%', right: '20%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0, 255, 163, 0.1) 0%, transparent 70%)', filter: 'blur(80px)' }} />

                <Container maxWidth="md" sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typography variant="overline" sx={{ letterSpacing: 4, color: '#00ffa3', fontWeight: 'bold', fontSize: '1.2rem' }}>
                            GET READY
                        </Typography>
                        <Typography variant="h1" sx={{
                            my: 4,
                            fontWeight: 900,
                            fontSize: { xs: '4rem', md: '7rem' },
                            background: 'linear-gradient(to right, #fff, #b4b4b4)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            lineHeight: 1
                        }}>
                            We Are Coming.
                        </Typography>
                        <Typography variant="h5" sx={{ mb: 8, color: '#B4B4B4', maxWidth: 600, mx: 'auto' }}>
                            ChapChap is almost here. Be the first to experience the future of shopping in Kano.
                        </Typography>

                        <Box className="glass-panel" sx={{ p: 6, borderRadius: 4, border: '1px solid rgba(112, 66, 248, 0.3)', boxShadow: '0 0 30px rgba(112, 66, 248, 0.2)' }}>
                            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                                Join the Waitlist
                            </Typography>
                            <Box sx={{ mt: 3 }}>
                                <NewsletterSignup />
                            </Box>
                        </Box>
                    </motion.div>
                </Container>
            </Box>

            <Footer />
        </Box>
    );
}
