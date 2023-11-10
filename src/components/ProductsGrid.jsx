import { Grid, GridItem} from '@chakra-ui/react'

import { ProductCard } from './ProductCard.jsx'

export const ProductsGrid = ({products}) => {    
    return (
        <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap="2rem" justifyContent='center' bg='grey' p='2rem'> 
            {products.map((product) =>(
                <GridItem key={product.id}>
                    <ProductCard product={product} ></ProductCard>
                </GridItem>         
            ))}
        </Grid>    
    )
}