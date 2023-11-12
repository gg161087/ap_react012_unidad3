import { Card, Heading, CardBody, Text, Stack, Box, Image } from '@chakra-ui/react'

export const ProductCard = ({ name, imgUrl, description, stock, price }) => {
    return (
        <Card maxW='sm' minH='400px' justifyContent='center' alignItems='center'>
            <CardBody>
                <Box display='flex' justifyContent='center'>
                    <Image                           
                    src={imgUrl}
                    alt={`image of ${name}`}
                    borderRadius='lg'
                    />
                </Box>
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{name}</Heading>
                    <Text>{description}</Text>
                    <Text>Stock: {stock}</Text>
                    <Text color='blue.600' fontSize='2xl'>${price}</Text>
                </Stack>
            </CardBody>        
        </Card>
    )
}