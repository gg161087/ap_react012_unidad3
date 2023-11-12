import { Grid, GridItem} from '@chakra-ui/react'

import { ProductCard } from './ProductCard.jsx'

export const ProductsGrid = ({products}) => {    
    return (
        <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap="2rem" justifyContent='center' justifyItems='center' bg='grey' p='2rem' m='2rem' w='80%'> 
            {products.map((product) =>(
                <GridItem key={product.id} minW='10rem'>
                    <ProductCard 
                        name={product.name} 
                        price={product.price}
                        stock={product.stock}
                        description={product.description}
                        imgUrl={product.imgUrl}
                    >
                    </ProductCard>
                </GridItem>         
            ))}
        </Grid>    
    )
}