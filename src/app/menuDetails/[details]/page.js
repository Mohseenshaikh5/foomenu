"use client"
import React, { useEffect, useState } from 'react'
import { Container, Grid, Typography, CardMedia, Stack, Card, Box, IconButton, Button } from '@mui/material'
import { useGetfoodDetailsApiQuery } from '@/app/redux/services/menu'
import { apiUrl } from '@/app/utils/api'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation'
import { Oswald } from 'next/font/google';
import { Vina_Sans } from 'next/font/google';


const osfant = Vina_Sans({
    weight: '400',
    subsets: ['latin'],
})

const MenuDetails = ({ params }) => {
    const { data: getFoodDetails } = useGetfoodDetailsApiQuery({ id: params.details })
    const [details, setDetails] = useState('')
    const routerLink = useRouter()
    console.log("id", params.details)

    console.log("foodDetails", getFoodDetails?.product)

    useEffect(() => {
        if (getFoodDetails) {
            setDetails(getFoodDetails?.product)
        }
    }, [getFoodDetails])

    return (
        <>
            <Box mt={10} >
                <Container maxWidth="xl">
                    <Box >
                        <Stack direction="row">
                            <IconButton aria-label="Example" color="primary" onClick={() => routerLink.push("/")}>
                                <ArrowBackIcon />
                            </IconButton>
                            <Typography variant="h6" className={osfant.className}>Food Details</Typography>
                        </Stack>
                    </Box>
                </Container>
                <Container maxWidth="md" sx={{ marginTop: "20px" }}>
                    <Card sx={{ backgroundColor: "whitesmoke", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={6}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <CardMedia
                                        component="img"
                                        alt="Product Image"
                                        height="100%" // Use percentage for responsiveness
                                        image={details?.image?.url}
                                        sx={{ objectFit: 'contain' }} // Maintain aspect ratio
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <Box p={2}>
                                    <Stack direction="column" mb={1}>
                                        <Typography variant="body1" color="gray">
                                            Name
                                        </Typography>
                                        <Typography variant="h6" className={osfant.className}>{details?.productname}</Typography>
                                    </Stack>
                                    <Stack direction="column" mb={1}>
                                        <Typography variant="body1" color="gray">
                                            Description
                                        </Typography>
                                        <Typography variant="h6" className={osfant.className}>{details?.description}</Typography>
                                    </Stack>
                                    <Stack direction="column">
                                        <Typography variant="body1" color="gray">
                                            Price
                                        </Typography>
                                        <Typography variant="h6" className={osfant.className}>₹{details?.price}</Typography>
                                    </Stack>
                                </Box>
                            </Grid>
                        </Grid>
                    </Card>
                </Container>
            </Box>

            {/* <Container maxWidth="xl">
                <Card sx={{ backgroundColor: "steelblue" }} >
                    <Typography variant="h1" align="center">
                        404
                    </Typography>
                    <Typography variant="h4" align="center">
                        Oops! We couldnt find the page youre looking for.
                    </Typography>
                    <Typography variant="body1" align="center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod, metus nec convallis faucibus, metus massa lacinia odio, at bibendum nisi purus id justo.
                    </Typography>
                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                        <Button variant="contained" color="primary" >
                            Go Back
                        </Button>
                    </div>
                </Card>
            </Container> */}
        </>
    )
}

export default MenuDetails
