"use client"
import React from 'react'
import style from "../../style/card.module.css"
import { Box, Button, Container, Grid, Card, Typography, CardContent, CardMedia } from '@mui/material';
import { Inter } from 'next/font/google'
import { apiUrl } from '@/app/utils/api'
import { useRouter } from 'next/navigation';
import { Vina_Sans } from 'next/font/google';


const osfant = Vina_Sans({
    weight: '400',
    subsets: ['latin'],
})

const inter = Inter({ subsets: ['latin'] })
const FoodImg = ({ url, handleRoute, id }) => {
    // const url = `${apiUrl.foodImg}${path}`
    return (
        <CardMedia
            component="img"
            alt="Product Image"
            height="250"
            image={url}
            onClick={() => handleRoute(id)}
        />

    )
}
const ProductCard = ({ food, id, image }) => {
    const { productname, price } = food

    const router = useRouter()
    const handleRouting = (id) => {
        router.push(`/menuDetails/${id}`)
    }

    return (
        <>
            <Card>
                <CardContent  >
                    <FoodImg url={image} handleRoute={() => handleRouting(id)} id={id} />
                    <Typography variant="h5" gutterBottom className={osfant.className} textAlign="center">
                        {productname}
                    </Typography>
                    <Typography variant="h6" color="textSecondary" className={osfant.className} textAlign="center">
                        ₹{price}
                    </Typography>
                </CardContent>
            </Card>
        </>

    )
}

export default ProductCard
