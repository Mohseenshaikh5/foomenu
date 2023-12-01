"use client"
import React, { useEffect, useState } from 'react'
import { Box, Button, Container, Grid, Card, Typography, CardContent, CardMedia, Divider } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { Inter } from 'next/font/google'
import { apiUrl } from '@/app/utils/api'
const inter = Inter({ subsets: ['latin'] })
import { useGetfoodMenuApiMutation, useGetfoodSearchApiMutation } from '@/app/redux/services/menu';
import { useRouter } from 'next/navigation';
import style from '../../style/banner.module.css'
import SliderPage from '@/app/componants/slider/meanPage';
import Pagination from '@mui/material/Pagination';
import ProductCard from '@/app/componants/card/page';
import Banner from '@/app/componants/bannner/banner';
import CircularProgress from '@mui/material/CircularProgress';


const FoodItem = () => {

    const [foodData, foodlistdata] = useGetfoodMenuApiMutation()
    const [foodSearch] = useGetfoodSearchApiMutation()

    const [foodList, setFoodList] = useState([])
    const [loadData, setLoaddata] = useState(false)
    const [foodSearchs, setFoodSearch] = useState('')
    // pegnition
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const route = useRouter()

    // food Data 
    const fatchFoodData = async () => {
        // const body = {
        //     page: currentPage,
        //     sortBy: "NEW",
        // }
        try {
            const response = await foodData()
            // const { total, current, product } = response.data;
            const { product } = response.data;


            setFoodList(product)
            // setTotalItems(total);
            // setCurrentPage(current);
            console.log("foodList", response?.data?.product)
            setLoaddata(true)
        } catch (error) {
            console.log("error", error)
        }
    }



    const handleRoute = (name) => {
        route.push(name)
    }


    // search food 
    const searchFood = async (query) => {
        const body = {
            search: query,
        };

        try {
            const result = await foodSearch(body);
            setFoodList(result?.data?.product)
            console.log("search", result?.data?.product)
        } catch (error) {
            console.log('error', error);
        }
    };

    const handleInputSearch = (event) => {
        const value = event.target.value;
        setFoodSearch(value);
        if (value.trim() === '') {
            fatchFoodData();
        } else {
            searchFood(value);
        }
    };

    useEffect(() => {
        fatchFoodData()
    }, [loadData])
    // pigmetion handle pages
    // const handlePageChange = (event, newPage) => {
    //     setCurrentPage(newPage);
    // };


    return (
        <>
            <Banner handleChange={handleInputSearch} value={foodSearchs} />
            <Container maxWidth="lg" sx={{ marginTop: '50px' }}>
                <SliderPage />
                <Divider sx={{ marginTop: '50px', height: '10px', color: 'silvergrey', }} />
            </Container>
            {foodlistdata.isLoading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: "20px" }}>
                    <CircularProgress />
                </Box>
            ) : (
                <Container maxWidth="xl" sx={{ marginTop: '50px' }}>
                    <Box>
                        <Grid container spacing={4}>
                            {foodList?.map((item) => (
                                <Grid item xs={6} sm={6} md={3} key={item?.id}>
                                    <ProductCard food={item} id={item?._id} image={item?.image?.url} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box><Box mt={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                        {/* <Pagination
                            count={totalItems}
                            page={currentPage}
                            onChange={handlePageChange}
                            className="pagination-root" /> */}
                    </Box>
                </Container>
            )}
        </>
    );
};


export default FoodItem
