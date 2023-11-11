import { useState, useEffect } from 'react';

import { ProductsGrid } from '../components/ProductsGrid.jsx'

import productsRes from '../database/products.json'

export const Show = () => {
    
    const [products, setProducts] = useState([]);
    
    
    useEffect(()=>{
        setProducts(productsRes)
    },[])
    
    return (
        <ProductsGrid products={products}></ProductsGrid>
    )
}