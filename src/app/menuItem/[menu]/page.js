"use client"
import React, { useEffect, useState } from 'react'
import ProductCard from '../../componants/card/page'
import { Container, Grid, Typography, CardMedia, Stack, Card, Box, IconButton } from '@mui/material'
import { useGetCategoryProductApiMutation } from '@/app/redux/services/menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation';

import { Oswald } from 'next/font/google';

const osfant = Oswald({ subsets: ['latin'] });

const Product = ({ params }) => {
    const categoryId = params.menu;
    const routerLink = useRouter()
    const [allCategoryProduct] = useGetCategoryProductApiMutation();
    const [categoryProduct, setCategoryProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await allCategoryProduct(categoryId);
                setCategoryProduct(result?.data?.products || []);
            } catch (error) {
                console.log('Error', error);
            }
        };

        fetchData();
    }, [allCategoryProduct, categoryId]);



    return (
        <>
            <Box mt={10}>
                <Container maxWidth="xl">
                    <Box >
                        <Stack direction="row">
                            <IconButton aria-label="Example" color="primary" onClick={() => routerLink.push("/")}>
                                <ArrowBackIcon />
                            </IconButton>
                            <Typography variant="h6" className={osfant?.className}>{categoryProduct?.category?.category}</Typography>
                        </Stack>
                    </Box>
                </Container>
                <Container maxWidth="lg" sx={{ marginTop: '20px' }}>
                    <Box>
                        <Grid container spacing={4}>
                            {categoryProduct.map((item) => (
                                <Grid item xs={6} sm={6} md={3} key={item._id}>
                                    <ProductCard food={item} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    );

};


export default Product
