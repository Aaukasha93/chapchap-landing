'use client';

import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: '#030014',
                color: 'white',
                py: 8,
                mt: 'auto',
                borderTop: '1px solid rgba(112, 66, 248, 0.2)',
                background: 'linear-gradient(to top, #030014 0%, #0f0c29 100%)'
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={6}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 800, background: 'linear-gradient(to right, #7042f8, #00ffa3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', mb: 2 }}>
                            ChapChap
                        </Typography>
                        <Typography variant="body1" sx={{ maxWidth: 320, color: 'text.secondary', lineHeight: 1.7 }}>
                            The fastest way to buy, sell, and deliver in Kano State.
                            Empowering local businesses with Web3-speed logistics.
                        </Typography>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                            Quick Links
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                            {['About Us', 'Waitlist', 'Vendor Partners', 'Rider Partners'].map((text) => (
                                <Box
                                    key={text}
                                    component="a"
                                    href="#"
                                    sx={{
                                        color: 'text.secondary',
                                        textDecoration: 'none',
                                        transition: 'color 0.2s',
                                        '&:hover': { color: '#00ffa3' }
                                    }}
                                >
                                    {text}
                                </Box>
                            ))}
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                            Connect With Us
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
                            Join the community and stay updated on our Kano launch.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon].map((Icon, index) => (
                                <IconButton
                                    key={index}
                                    sx={{
                                        color: 'white',
                                        bgcolor: 'rgba(255,255,255,0.05)',
                                        '&:hover': { bgcolor: '#7042f8' }
                                    }}
                                >
                                    <Icon />
                                </IconButton>
                            ))}
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.05)', mt: 6, pt: 4, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.4)' }}>
                        © {new Date().getFullYear()} ChapChap Quick E-Commerce Platform.
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.4)', mt: { xs: 2, md: 0 } }}>
                        Proudly built for Kano 🟢
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;
