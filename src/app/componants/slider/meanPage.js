"use client"
import React, { useState, useEffect } from 'react'
import SliderImg from './page'
// import { useGetCategoryApiQuery } from '@/app/redux/services/menu';
import { useGetCategoryApiQuery } from '@/app/redux/services/menu';

const image = [
    {
        logo: 'https://beta-api.foodsyindia.com/menu/food-thmb/D-PR00002162.jpg',
        name: "Check",
        // price: "200"
    },
    {
        logo: "https://beta-api.foodsyindia.com/menu/food-thmb/D-K445.jpg",
        name: "Briyani",
        // price: "200"
    },
    {
        logo: 'https://beta-api.foodsyindia.com/menu/food-thmb/D-K012.jpg',
        name: "Motton",
        // price: "200"
    },
    {
        logo: "https://beta-api.foodsyindia.com/menu/food-thmb/D-PR00002348.jpg",
        name: "Icicream",
        // price: "200"
    },
    {
        logo: "https://beta-api.foodsyindia.com/menu/food-thmb/D-K701.jpg",
        name: "Lolipop",
        // price: "200"
    },
    {
        logo: "https://beta-api.foodsyindia.com/menu/food-thmb/D-PR00002070.jpg",
        name: "KFC",
        // price: "200"
    },
    {
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkW7L8Xo9sF5oR45e0B4wSlfoiOLCFF3g8hQ&usqp=CAU',
        name: "Maharaja",
        // price: "200"
    },
    {
        logo: "https://img.bestrecipes.com.au/iyddCRce/br/2019/02/1980-crunchy-chicken-twisties-drumsticks-951509-1.jpg",
        name: "fgbf",
        // price: "200"
    },
    {
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkW7L8Xo9sF5oR45e0B4wSlfoiOLCFF3g8hQ&usqp=CAU',
        name: "fgbf",
        // price: "200"
    },
    {
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsRXfsQi6DlCivDRmPiGlYgyMsF6OQKnvi0w&usqp=CAU",
        name: "fgbf",
        // price: "200"
    },
    {
        logo: "https://img.bestrecipes.com.au/iyddCRce/br/2019/02/1980-crunchy-chicken-twisties-drumsticks-951509-1.jpg",
        name: "fbgfb",
        // price: "200"
    },
    {
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsRXfsQi6DlCivDRmPiGlYgyMsF6OQKnvi0w&usqp=CAU",
        name: "fgbf",
        // price: "200"
    },
    // Add more image paths as needed
];
const SliderPage = () => {
    const { data: getCategory } = useGetCategoryApiQuery();
    const [food, setFood] = useState([]);
    const [load, setLoad] = useState(false)



    useEffect(() => {
        setFood(getCategory?.category);
        console.log('categoty', getCategory?.category);

    }, [load]);

    return (
        <>
            <SliderImg images={food} />
        </>
    );

};

export default SliderPage
