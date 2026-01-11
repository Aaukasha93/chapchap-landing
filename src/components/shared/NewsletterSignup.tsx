'use client';
// Force Vercel Rebuild: Added Name/Phone fields


import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db, auth } from '@/lib/firebase';

function NewsletterSignup() {
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            setStatus('error');
            setMessage('Please enter a valid email address.');
            return;
        }

        if (!fullName || fullName.trim().length < 2) {
            setStatus('error');
            setMessage('Please enter your full name.');
            return;
        }

        if (!phoneNumber || phoneNumber.trim().length < 10) {
            setStatus('error');
            setMessage('Please enter a valid phone number.');
            return;
        }

        setStatus('loading');

        try {
            // Check if email already exists in waitlist
            const waitlistRef = collection(db, 'waitlist');
            const q = query(waitlistRef, where('email', '==', email.toLowerCase()));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                setStatus('success');
                setMessage("You're already on the waitlist! Check your email for our welcome message.");
                setEmail('');
                setFullName('');
                setPhoneNumber('');
                return;
            }

            // Add email to Firestore waitlist collection
            await addDoc(collection(db, 'waitlist'), {
                fullName: fullName.trim(),
                email: email.toLowerCase(),
                phoneNumber: phoneNumber.trim(),
                subscribedAt: new Date().toISOString(),
                source: typeof window !== 'undefined' ? window.location.pathname : 'unknown',
                status: 'pending',
                verified: false,
            });

            // Create Firebase Auth user (for tracking purposes)
            try {
                const randomPassword = Math.random().toString(36).slice(-12) + Math.random().toString(36).slice(-12);
                await createUserWithEmailAndPassword(auth, email, randomPassword);
            } catch (authError) {
                // Ignore if user already exists
                console.log('Auth user may already exist:', authError);
            }

            // Send custom HTML welcome email via API route
            try {
                const response = await fetch('/api/send-welcome-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: email.toLowerCase(),
                        fullName: fullName.trim(),
                    }),
                });

                if (response.ok) {
                    setStatus('success');
                    setMessage("🎉 Success! Check your email for a special welcome message. You're now a VIP on our waitlist!");
                    setEmail('');
                    setFullName('');
                    setPhoneNumber('');
                } else {
                    // Still show success even if email fails
                    setStatus('success');
                    setMessage("🎉 You're on the waitlist! We'll notify you when ChapChap launches.");
                    setEmail('');
                    setFullName('');
                    setPhoneNumber('');
                }
            } catch (emailError) {
                console.error('Email sending error:', emailError);
                // Still show success even if email fails
                setStatus('success');
                setMessage("🎉 You're on the waitlist! We'll notify you when ChapChap launches.");
                setEmail('');
                setFullName('');
                setPhoneNumber('');
            }
        } catch (error: unknown) {
            console.error('Waitlist Error:', error);
            setStatus('error');

            let errorMessage = 'Something went wrong. Please try again.';

            if (error instanceof Error) {
                // Provide more helpful error messages
                if (error.message.includes('permission-denied')) {
                    errorMessage = 'Database configuration error. Please contact support.';
                } else if (error.message.includes('network')) {
                    errorMessage = 'Network error. Please check your connection and try again.';
                } else if (error.message.includes('unavailable')) {
                    errorMessage = 'Service temporarily unavailable. Please try again in a moment.';
                } else {
                    errorMessage = error.message;
                }
            }

            setMessage(errorMessage);
        }
    };

    return (
        <Box component="form" onSubmit={handleSubscribe} noValidate autoComplete="off" sx={{ width: '100%', maxWidth: 500, mx: 'auto' }}>
            <Stack direction="column" spacing={2}>
                <TextField
                    fullWidth
                    label="Full Name"
                    variant="outlined"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    disabled={status === 'loading' || status === 'success'}
                    autoComplete="name"
                    sx={{
                        bgcolor: 'rgba(255,255,255,0.9)',
                        borderRadius: 1,
                        '& .MuiOutlinedInput-root': {
                            color: '#000',
                        }
                    }}
                    size="medium"
                />

                <TextField
                    fullWidth
                    label="Phone Number"
                    variant="outlined"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    disabled={status === 'loading' || status === 'success'}
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    sx={{
                        bgcolor: 'rgba(255,255,255,0.9)',
                        borderRadius: 1,
                        '& .MuiOutlinedInput-root': {
                            color: '#000',
                        }
                    }}
                    size="medium"
                />

                <TextField
                    fullWidth
                    label="Email Address"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === 'loading' || status === 'success'}
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    sx={{
                        bgcolor: 'rgba(255,255,255,0.9)',
                        borderRadius: 1,
                        '& .MuiOutlinedInput-root': {
                            color: '#000',
                        }
                    }}
                    size="medium"
                />

                <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={status === 'loading'}
                    endIcon={status === 'loading' ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                    sx={{ py: 1.5, fontWeight: 'bold' }}
                >
                    {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
                </Button>
            </Stack>
            {message && (
                <Alert
                    severity={status === 'error' ? 'error' : 'success'}
                    sx={{ mt: 2, borderRadius: 2 }}
                >
                    {message}
                </Alert>
            )}
        </Box>
    );
}

export default NewsletterSignup;
