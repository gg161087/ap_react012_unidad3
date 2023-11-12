import { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react'


import { Header } from '../partials/Header.jsx'
import { ProductsGrid } from '../components/ProductsGrid.jsx'
import { Footer } from '../partials/Footer.jsx'

import productsRes from '../database/products.json'

export const Show = () => {
    
    const [products, setProducts] = useState([]);
    
    
    useEffect(()=>{
        setProducts(productsRes)
    },[])
    
    return (
        <>
            <Header></Header>
            <Box w='100%' display='flex' justifyContent='center' height='100%'>
                <ProductsGrid products={products}></ProductsGrid>
            </Box>
            <Footer></Footer>
        </>
    )
}