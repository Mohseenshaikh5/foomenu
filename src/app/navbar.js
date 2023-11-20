"use client"
import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import Person2Icon from '@mui/icons-material/Person2';


const Navbar = () => {

    const router = useRouter()
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (name) => {
        router.push(name);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };








    return (
        <>
            <AppBar position="fixed" color='default'>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                            onClick={() => handleCloseNavMenu('/')}
                        >
                            <img src='https://lens-storage.storage.googleapis.com/png/d293640d9a5f4ec4970f503c33b0eddf' width="70px" height="60px" alt="logo" />
                        </Typography>

                        {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                {/* <MenuIcon /> */}
                        {/* <Person2Icon /> */}
                        {/* </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)} */}
                        {/* // onClose={() => handleCloseNavMenu('/')}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }} */}
                        {/* > */}
                        {/* <MenuItem onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center" onClick={() => handleCloseNavMenu("/login")} >login</Typography>
                                </MenuItem>
                            </Menu> */}
                        {/* </Box>  */}
                        {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                            onClick={() => handleCloseNavMenu('/')}
                        >
                            <img src='https://lens-storage.storage.googleapis.com/png/d293640d9a5f4ec4970f503c33b0eddf' width="70px" height="60px" alt="logo" />
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {/* <Button
                                // onClick={handleCloseNavMenu}
                                onClick={() => handleCloseNavMenu('/')}

                                sx={{ my: 2, color: 'black', display: 'block' }}
                            >
                                Home
                            </Button> */}
                            {/* <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'black', display: 'block' }}
                            >
                                About
                            </Button> \
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'black', display: 'block' }}
                            >
                                Cars
                            </Button> */}

                        </Box>
                        {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: "end", alignItems: "end" } }}>
                            <Button
                                // onClick={handleOpenLogin}
                                sx={{ my: 2, color: 'black', display: 'block' }}
                            >
                                LogIn
                            </Button>
                            <Button
                                // onClick={handleOpenSingUp}
                                sx={{ my: 2, color: 'black', display: 'block' }}
                            >
                                SinUp
                            </Button>

                        </Box> */}
                        <Box sx={{ flexGrow: 0 }}>


                            <Tooltip title="Open settings">
                                <IconButton onMouseOver={handleOpenUserMenu} onMouseOut={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Person2Icon color="primary" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px', width: "100pz" }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center" onClick={() => handleCloseNavMenu("/login")} >login</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

        </>
    )
}

export default Navbar
