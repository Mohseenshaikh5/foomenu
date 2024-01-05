"use client"
import React, { useState, useEffect } from 'react';
import style from '../../style/slider.module.css';
import { Box, Container, Grid, Card, Paper, Avatar, Button, IconButton, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
// import FoodItem from '@/app/menuItem/foodMenu/footItems';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

import { Vina_Sans } from 'next/font/google';

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

    const totalSets = Math.ceil(images?.length / itemsPerSet);

    const nextSet = () => {
        setCurrentSetIndex((prevIndex) => (prevIndex + 1) % totalSets);
    };

    const prevSet = () => {
        setCurrentSetIndex((prevIndex) => (prevIndex - 1 + totalSets) % totalSets);
    };

    const onhandleRouter = (id) => {
        router.push(`/menuItem/${id}`);
    };



    return (
        <>
            <Container maxWidth="lg" sx={{ marginTop: '20px' }}>
                <Stack direction="row" justifyContent="space-between" mb={5}>
                    <Typography variant='h5' className={osfant.className}>Whats on your mind?</Typography>
                    <Box mr={5}>
                        <Button onClick={prevSet}
                            sx={{
                                "&:hover": {
                                    backgroundColor: "whitesmoke",
                                    borderRadius: '500px'
                                },
                            }} >
                            <ChevronLeft />
                        </Button>
                        <Button onClick={nextSet}
                            sx={{
                                "&:hover": {
                                    backgroundColor: "whitesmoke",
                                    borderRadius: '700px'
                                },
                            }}
                        >
                            <ChevronRight />
                        </Button>
                    </Box>
                </Stack>
                <Box className={style.slider}>
                    <Grid container spacing={1} justifyContent="center">
                        {images?.slice(currentSetIndex * itemsPerSet, (currentSetIndex + 1) * itemsPerSet).map((image, index) => (
                            <Grid item xs={3} sm={3} md={2} key={index}>
                                <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Avatar alt="food" sx={{ width: 80, height: 80, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                                        // src={image?.image?.url}
                                        src={image?.image?.url || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXmMYtLUrnpVYz8l-7Lhzo9gsAiLM9IwdFQ&usqp=CAU'}

                                        onClick={() => onhandleRouter(image?._id)}
                                    />
                                    <Typography className={osfant.className}>{image?.category}</Typography>
                                </Box>
                                {/* <Img path={image?.image?.url} id={image?._id} />
                                <Typography className={osfant.className} ml={3} variant="subtitle2">{image?.category}</Typography> */}
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
