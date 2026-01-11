'use client';

import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useScroll, useMotionValueEvent, AnimatePresence, motion } from 'framer-motion';

const pages = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Coming Soon', path: '/coming-soon' },
];

function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    // Lock body scroll when menu is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [mobileOpen]);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <>
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    backgroundColor: isScrolled || mobileOpen ? 'rgba(3, 0, 20, 0.8)' : 'transparent',
                    backdropFilter: isScrolled || mobileOpen ? 'blur(20px)' : 'none',
                    borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    py: 1,
                    zIndex: 1300
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                        {/* Logo */}
                        <Link href="/" passHref onClick={() => setMobileOpen(false)}>
                            <Box sx={{ position: 'relative', width: { xs: 100, md: 140 }, height: { xs: 35, md: 45 }, zIndex: 1400 }}>
                                <Image
                                    src="/assets/logo-full.png"
                                    alt="ChapChap Logo"
                                    fill
                                    style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                                    priority
                                />
                            </Box>
                        </Link>

                        {/* Desktop Nav */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4 }}>
                            {pages.map((page) => (
                                <Link
                                    key={page.title}
                                    href={page.path}
                                    style={{ textDecoration: 'none' }}
                                >
                                    <motion.span
                                        whileHover={{ color: '#00ffa3' }}
                                        style={{
                                            color: 'rgba(255,255,255,0.7)',
                                            fontWeight: 500,
                                            fontSize: '0.95rem',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        {page.title}
                                    </motion.span>
                                </Link>
                            ))}
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    variant="contained"
                                    component={Link}
                                    href="/coming-soon"
                                    sx={{
                                        ml: 2,
                                        background: 'rgba(112, 66, 248, 0.2)',
                                        border: '1px solid #7042f8',
                                        '&:hover': {
                                            background: '#7042f8',
                                            boxShadow: '0 0 20px rgba(112, 66, 248, 0.5)'
                                        }
                                    }}
                                >
                                    Get Notified
                                </Button>
                            </motion.div>
                        </Box>

                        {/* Mobile Menu Toggle */}
                        <Box sx={{ display: { xs: 'flex', md: 'none' }, zIndex: 1400 }}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ ml: 1 }}
                            >
                                <motion.div
                                    animate={{ rotate: mobileOpen ? 90 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {mobileOpen ? <CloseIcon sx={{ fontSize: 32, color: '#00ffa3' }} /> : <MenuIcon sx={{ fontSize: 32 }} />}
                                </motion.div>
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Full Screen Mobile Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: '-100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-100%' }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: '#030014',
                            zIndex: 1200,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundImage: 'radial-gradient(circle at 50% 50%, #1a1a40 0%, #030014 100%)'
                        }}
                    >
                        {/* Background particles or blurs could go here */}
                        <Box sx={{ position: 'absolute', width: '300px', height: '300px', background: 'rgba(112, 66, 248, 0.15)', filter: 'blur(80px)', borderRadius: '50%', top: '20%', left: '-10%' }} />

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center', position: 'relative', zIndex: 1 }}>
                            {pages.map((page, index) => (
                                <motion.div
                                    key={page.title}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ delay: 0.1 * index + 0.3, duration: 0.5 }}
                                >
                                    <Link
                                        href={page.path}
                                        onClick={handleDrawerToggle}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <motion.div whileTap={{ scale: 0.9 }}>
                                            <Box sx={{
                                                fontSize: '2.5rem',
                                                fontWeight: 800,
                                                color: 'white',
                                                textAlign: 'center',
                                                '&:active': { color: '#00ffa3' }
                                            }}>
                                                {page.title}
                                            </Box>
                                        </motion.div>
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ delay: 0.6 }}
                            >
                                <Button
                                    variant="contained"
                                    size="large"
                                    onClick={handleDrawerToggle}
                                    component={Link}
                                    href="/coming-soon"
                                    sx={{
                                        mt: 4,
                                        py: 2,
                                        px: 6,
                                        fontSize: '1.2rem',
                                        background: 'linear-gradient(90deg, #7042f8 0%, #00ffa3 100%)',
                                        boxShadow: '0 0 30px rgba(112, 66, 248, 0.4)'
                                    }}
                                >
                                    Get Notified
                                </Button>
                            </motion.div>
                        </Box>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default Header;
