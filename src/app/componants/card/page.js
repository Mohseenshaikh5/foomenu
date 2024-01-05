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

const ProductCard = ({ food, id, image }) => {
    const { productname, price } = food

    const router = useRouter()
    const handleRouting = (id) => {
        router.push(`/menuDetails/${id}`)
    }

    return (
        <>
            <Card sx={{ boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)", height: '300px' }} onClick={() => handleRouting(food._id)}>

                {/* <Card style={{ height: '300px', }} > */}
                <CardMedia
                    component="img"
                    alt="Product Image"
                    height="50%"
                    image={food?.image?.url}
                    sx={{ objectFit: 'contain', marginTop: "10px" }}


                />
                <CardContent>
                    <Typography variant="h5" gutterBottom textAlign="center" className={osfant.className} >
                        {productname}
                    </Typography>
                    <Typography variant="h6" color="textSecondary" textAlign="center" className={osfant.className} >
                        ₹{price}
                    </Typography>
                </CardContent>
            </Card>

        </>

    )
}

export default ProductCard
