"use client"
import React, { useState, useEffect } from 'react';
import style from '../../style/slider.module.css';
import { Box, Container, Grid, Card, Paper, Avatar, Button, IconButton, Stack, Typography } from '@mui/material';
import { apiUrl } from '@/app/utils/api';
import { useRouter } from 'next/navigation';
// import FoodItem from '@/app/menuItem/foodMenu/footItems';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

import { Image } from 'next/image'
import { Vina_Sans } from 'next/font/google';
import shadows from '@mui/material/styles/shadows';

// const osfant = Vina_Sans({
//     subsets: ['latin'], weights: `400`
// });;
const osfant = Vina_Sans({
    weight: '400',
    subsets: ['latin'],
})


const SliderImg = ({ images }) => {
    const router = useRouter();
    const [currentSetIndex, setCurrentSetIndex] = useState(0);
    const itemsPerSet = 6;

    const totalSets = Math.ceil(images.length / itemsPerSet);

    const nextSet = () => {
        setCurrentSetIndex((prevIndex) => (prevIndex + 1) % totalSets);
    };

    const prevSet = () => {
        setCurrentSetIndex((prevIndex) => (prevIndex - 1 + totalSets) % totalSets);
    };

    const onhandleRouter = (id) => {
        router.push(`/menuItem/${id}`);
    };

    const Logo = ({ path, id }) => {
        const url = `${apiUrl.Logo}${path}`;
        return (
            <img
                src={path || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB0GBdwk7rjJXMl5uuUnvjzZPFSK67kzjgow&usqp=CAU"}
                alt={`Slide ${currentSetIndex + 1}`}
                style={{
                    borderRadius: '1000px',
                    width: '55%',
                    height: '100%',
                    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)',
                    cursor: 'pointer',
                }}

                onClick={() => onhandleRouter(id)}
            />
        );
    };

    return (
        <>
            <Container maxWidth="lg" sx={{ marginTop: '20px' }}>
                <Box className={style.slider}>
                    <Stack direction="row" justifyContent="space-between" mb={5}>
                        <Typography variant='h5' className={osfant.className}>Whats on your mind?</Typography>
                        <Box mr={5}>
                            <Button onClick={prevSet} sx={{ borderRadius: "100px" }} >
                                <ChevronLeft />
                            </Button>
                            <Button onClick={nextSet} sx={{ borderRadius: "100px" }} >
                                <ChevronRight />
                            </Button>
                        </Box>
                    </Stack>

                    <Grid container spacing={1} justifyContent="center">
                        {images.slice(currentSetIndex * itemsPerSet, (currentSetIndex + 1) * itemsPerSet).map((image, index) => (
                            <Grid item xs={2} sm={2} md={2} key={index}>
                                <Logo path={image.logo} id={image.id} />
                                <Typography className={osfant.className} ml={3} variant="subtitle2">{image.name}</Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
            {/* <FoodItem /> */}
        </>
    );
};

export default SliderImg;
