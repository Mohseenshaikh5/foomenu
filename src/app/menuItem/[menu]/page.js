"use client"
import React from 'react'
import ProductCard from '../../componants/card/page'
import { Box, Button, Container, Grid, Card, Typography } from '@mui/material';
const images = [
    {
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkW7L8Xo9sF5oR45e0B4wSlfoiOLCFF3g8hQ&usqp=CAU',
        name: "checken",
        // price: "200"
    },
    {
        thumbnail: "https://img.bestrecipes.com.au/iyddCRce/br/2019/02/1980-crunchy-chicken-twisties-drumsticks-951509-1.jpg",
        name: "checken",
        // price: "200"
    },
    {
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkW7L8Xo9sF5oR45e0B4wSlfoiOLCFF3g8hQ&usqp=CAU',
        name: "checken",
        // price: "200"
    },
    {
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsRXfsQi6DlCivDRmPiGlYgyMsF6OQKnvi0w&usqp=CAU",
        name: "checken",
        // price: "200"
    },
    {
        thumbnail: "https://img.bestrecipes.com.au/iyddCRce/br/2019/02/1980-crunchy-chicken-twisties-drumsticks-951509-1.jpg",
        name: "checken",
        // price: "200"
    },
    {
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsRXfsQi6DlCivDRmPiGlYgyMsF6OQKnvi0w&usqp=CAU",
        name: "checken",
        // price: "200"
    },

    // Add more image paths as needed
];
const Product = ({ params }) => {
    console.log("ID", params?.menu);

    return (
        <>
            <Container maxWidth="xl" sx={{ marginTop: "100px" }}>
                {/* <Typography variant='h1'>{params?.menu}</Typography> */}
                <Box>
                    <Grid container spacing={4}>
                        {images.map((item) => (
                            <Grid item xs={6} sm={6} md={3} key={item.id}>
                                <ProductCard food={item} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    );
};


export default Product
