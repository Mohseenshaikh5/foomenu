"use client"
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import style from '../../style/banner.module.css'


const Banner = ({ handleChange, value }) => {


    return (
        <Box className={style.banner}>
            <Box
                sx={{
                    width: '100%',
                    color: '#fff',
                    padding: '0 16px', // Add padding for smaller screens
                }}
            >
                <TextField
                    sx={{
                        backgroundColor: '#fff',
                        borderRadius: '10px solid #fff',
                        width: '50%',
                    }}
                    id="fullWidth"
                    placeholder="Search for your favourite food"
                    onChange={handleChange}
                    value={value}
                    // onKeyPress={(event) => {
                    //     if (event.key === 'Enter') {
                    //         handleSearch();
                    //     }
                    // }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon style={{ color: '#000' }} />
                            </InputAdornment>
                        ),
                    }}
                />

            </Box>
        </Box>
    );
};

export default Banner
