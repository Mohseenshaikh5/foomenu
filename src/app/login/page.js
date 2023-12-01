"use client"
import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Container, CssBaseline, Card, CardContent, Box, Stack, InputAdornment, IconButton } from '@mui/material';
import style from "../style/login.module.css"
import Link from 'next/link';
import { authTokenAction } from '../redux/auth/AuthReducer';
import { useAddLoginMutation } from '../redux/login/LoginServise';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { saveUser } from '../utils/session';
import { useFormik, Form, FormikProvider } from 'formik';
import { showSuccess, showError } from '../utils/toast';
// import { LoadingButton } from '@mui/lab';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('email:', email);
        console.log('Password:', password);
    };
    const [isLoading, setIsLoading] = useState(false);
    const [AddLogin, AddLoginInfo] = useAddLoginMutation()
    const dispatch = useDispatch()
    const route = useRouter()

    const [showPassword, setShowPassword] = useState(false);


    useEffect(() => {
        if (AddLoginInfo.isSuccess) {
            dispatch(authTokenAction(AddLoginInfo.data.access));
            console.log("login", dispatch(authTokenAction(AddLoginInfo.data.access)))
            alert("Welcome to Foodsy !! ")
            route.push('/', { replace: true });
            saveUser(AddLoginInfo.data)
            AddLoginInfo.reset();

        }
        if (AddLoginInfo.isError) {
            alert("error", AddLoginInfo.msg);
            AddLoginInfo.reset();
        }
    }, [AddLoginInfo, dispatch, route, isLoading])

    // const LoginSchema = Yup.object().shape({
    //     email: Yup.string().required('email is required'),
    //     password: Yup.string().required('Password is required'),
    // });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            remember: true,
        },
        // validationSchema: LoginSchema,
        onSubmit: (values) => {
            AddLogin({
                email: values.email,
                password: values.password
            })
            setIsLoading(true);

        }

    });

    const { errors, touched, values, isSubmitting, handleChange, handleSubmit, getFieldProps } = formik;

    const handleShowPassword = () => {
        setShowPassword((show) => !show);
    };

    return (
        <Box className={style.paper} mt={10}>
            {/* <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Card className={style.card}>
                    <CardContent>
                        <Typography component="h1" variant="h5" textAlign="center">
                            Login
                        </Typography>
                        <form className={style.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="email"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
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
                                Login
                            </Button>
                        </form>
                        <Link href="/register">Register Your Details</Link>
                    </CardContent>
                </Card>
            </Container> */}
            <Container component="main" maxWidth="xs">

                <Card className={style.card}>
                    <CardContent>
                        <Typography component="h1" variant="h5" textAlign="center">
                            Singn Account
                        </Typography>
                        <FormikProvider value={formik}>
                            <Form className={style.form} autoComplete="off" noValidate onSubmit={handleSubmit}>
                                <Stack spacing={3}>
                                    <TextField
                                        fullWidth
                                        autoComplete="email"
                                        label="User Name"
                                        value={values.email}
                                        onChange={handleChange}
                                        {...getFieldProps('email')}
                                        error={Boolean(touched.email && errors.email)}
                                        helperText={touched.email && errors.email}
                                    />

                                    <TextField
                                        fullWidth
                                        autoComplete="current-password"
                                        type={showPassword ? 'text' : 'password'}
                                        label="Password"
                                        {...getFieldProps('password')}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton onClick={handleShowPassword} edge="end">
                                                        {/* <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} /> */}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                        error={Boolean(touched.password && errors.password)}
                                        helperText={touched.password && errors.password}
                                    />
                                </Stack>

                                <Button className={style.submit}
                                    fullWidth size="large" type="submit" variant="contained" sx={{ mt: 2 }} >
                                    Login
                                </Button>
                            </Form>
                        </FormikProvider>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    );
};

export default LoginPage;
