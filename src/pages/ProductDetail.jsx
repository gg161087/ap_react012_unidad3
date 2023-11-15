import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

import { Header } from '../partials/Header.jsx'
import { Footer } from '../partials/Footer.jsx'

import products from '../database/products.json'

export const ProductDetail = () => {

    const { id } = useParams();

    const [product, setProduct] = useState(null)

    const getProductById = (id) => {        
        return products.find(producto => producto.id == id);
    };
    const findProduct = getProductById(id);

    useEffect(() => {           
        setProduct(findProduct)                
    }, [id])
    if (!product) {
        return null
    }
    return (
        <>
            <Header></Header>
            <Box w='100%' display='flex' justifyContent='center' height='100%'>
                <Box bg='grey' p='2rem' m='2rem' w='80%'>
                    <h1>{product.name}</h1>
                </Box>
            </Box>
            <Footer></Footer>
        </>
    )
}
