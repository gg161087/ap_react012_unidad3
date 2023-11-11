import { Card, Heading, CardBody, Text, Stack, Image } from '@chakra-ui/react'

export const ProductCard = ({ product }) => {
    return (
        <Card maxW='md' minH='md' justifyContent='center' alignItems='center'>
            <CardBody>
                <Image
                               
                src={product.imgUrl}
                alt={`image of ${product.name}`}
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{product.name}</Heading>
                    <Text>{product.description}</Text>
                    <Text>Stock: {product.stock}</Text>
                    <Text color='blue.600' fontSize='2xl'>${product.price}</Text>
                </Stack>
            </CardBody>        
        </Card>
    )
}