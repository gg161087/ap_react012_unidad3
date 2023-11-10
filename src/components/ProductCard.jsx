import { Card, CardHeader, Heading, CardBody, Box, Text } from '@chakra-ui/react'

export const ProductCard = ({ product }) => {
    return (
        <Card bg='green' p='2rem' borderRadius='1rem' w='15rem' h='auto'>
            <CardHeader>
                <Heading size='md' textTransform='uppercase'>{product.name}</Heading>
            </CardHeader>
            <CardBody>
                <Box>
                    <Heading size='xs'>Descripción</Heading>
                    <Text pt='2' fontSize='sm'>{product.description}</Text>
                </Box>
                <Box>
                    <Heading size='xs'>Precio</Heading>
                    <Text pt='2' fontSize='sm'>{product.price}</Text>
                </Box>
                <Box>
                    <Heading size='xs'>Descuento</Heading>
                    <Text pt='2' fontSize='sm'>{product.sku}</Text>
                </Box>
                <Box>
                    <Heading size='xs'>Stock</Heading>
                    <Text pt='2' fontSize='sm'>{product.stock}</Text>
                </Box>
            </CardBody>
        </Card>
    )
}