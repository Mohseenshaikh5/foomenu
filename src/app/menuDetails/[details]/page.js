"use client"
import React, { useEffect, useState } from 'react'
import { Container, Grid, Typography, CardMedia, Stack, Card, Box, IconButton } from '@mui/material'
import { useGetfoodDetailsApiQuery } from '@/app/redux/services/menu'
import { apiUrl } from '@/app/utils/api'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation'
import { Oswald } from 'next/font/google';

const osfant = Oswald({ subsets: ['latin'] });

const FoodImg = ({ path, }) => {
    const url = `${apiUrl.foodImg}${path}`
    return (
        <CardMedia
            component="img"
            alt="Product Image"
            height="400"
            image={url}
        />
    )
}
const MenuDetails = ({ params }) => {
    const { data: getFoodDetails } = useGetfoodDetailsApiQuery(params.details)
    const [details, setDetails] = useState('')
    const routerLink = useRouter()

    console.log("foodDetails", getFoodDetails?.data)

    useEffect(() => {
        if (getFoodDetails) {
            setDetails(getFoodDetails?.data)
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
                <Container maxWidth="lg">
                    <Card>
                        <Grid container spacing={2} padding={10}>
                            <Grid item xs={12} sm={6} md={6}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', }}>
                                    <FoodImg path={details?.thumbnail} />
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} >
                                <Box ml={10}>
                                    <Stack direction="column" mb={1}>
                                        <Typography variant="body1" color="gray">Name</Typography>
                                        <Typography variant="h6" className={osfant.className}>{details?.name}</Typography>
                                    </Stack>
                                    <Stack direction="column" mb={1}>
                                        <Typography variant="body1" color="gray">Description</Typography>
                                        <Typography variant="h6" className={osfant.className}>{details?.description}</Typography>
                                    </Stack>
                                    <Stack direction="column">
                                        <Typography variant="body1" color="gray">Price</Typography>
                                        <Typography variant="h6" className={osfant.className}>₹200</Typography>
                                    </Stack>
                                </Box>
                            </Grid>
                        </Grid>
                    </Card>

                </Container>
            </Box>
        </>
    )
}

export default MenuDetails
