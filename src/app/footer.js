"use client"
import React from 'react';
import { Container, Typography, Link, } from '@mui/material';



const Footer = () => {

    return (
        <>
            <footer style={{
                marginTop: "16px",
                padding: "16px",
                backgroundColor: "#fff",
                color: "#000"
            }}>
                <Container maxWidth="xl">
                    <Typography variant="body2" align="center">
                        © {new Date().getFullYear()} Your Website Name. All rights reserved.
                    </Typography>
                    <Typography variant="body2" align="center">
                        <Link color="inherit" href="/privacy-policy">
                            Privacy Policy
                        </Link>{' '}
                        |{' '}
                        <Link color="inherit" href="/terms-of-service">
                            Terms of Service
                        </Link>
                    </Typography>
                </Container>
            </footer>
        </>
    );
};

export default Footer;
