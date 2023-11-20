"use client"
import React, { useState } from 'react';
import { TextField, Button, Typography, Container, CssBaseline, Card, CardContent, Box } from '@mui/material';
import style from "../style/login.module.css"
import Link from 'next/link';


const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <Box className={style.paper}>
            <Container component="main" maxWidth="xs">
                {/* <CssBaseline /> */}
                <Card className={style.card}>
                    <CardContent>
                        <Typography component="h1" variant="h5" textAlign="center">
                            Create Account
                        </Typography>
                        <form className={style.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="Firstname"
                                label="Firstname"
                                name="Firstname"
                                autoComplete="Firstname"
                                autoFocus
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="Lastname"
                                label="Lastname"
                                name="Lastname"
                                autoComplete="Lastname"
                                autoFocus
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}

                            />
                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={style.submit}
                                onClick={handleLogin}

                            >
                                Creact
                            </Button>
                        </form>
                        <Link href="/login">Go To Login</Link>

                    </CardContent>
                </Card>
            </Container>
        </Box>
    );
};

export default RegisterPage;
