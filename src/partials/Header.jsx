import { Text, Box } from '@chakra-ui/react'
import { Link as ChakraLink } from '@chakra-ui/react'


export const Header = () => {
    return (
        <Box bg='gray' w='100%' p='2rem 0 2rem 0' display='flex' alignItems='center' justifyContent='center'>
            <Box w='80%' display='flex' justifyContent='space-between'>
                <Box display='flex' alignItems='center'>
                    <Text bg='white' p='2rem'>LOGO</Text>
                </Box>
                <Box display='flex' alignItems='center'>
                    <ChakraLink href='/ap_react012_unidad3/about' p='2rem'>ABOUT</ChakraLink>  
                    <ChakraLink href='/ap_react012_unidad3/' p='2rem'>HOME</ChakraLink>
                </Box>
            </Box>
        </Box>
    )
}