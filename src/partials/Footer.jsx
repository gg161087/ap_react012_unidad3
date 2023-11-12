import { Text, Box, UnorderedList, ListItem, Link } from '@chakra-ui/react'

export const Footer = () => {
    return (
        <Box bg='gray' w='100%' p='2rem 0 2rem 0' display='flex' alignItems='center' justifyContent='center'>
            <Box w='80%' display='flex' justifyContent='space-between'>
                <Box display='flex' alignItems='center'>
                    <UnorderedList>
                        <ListItem>
                            <Link href='/'>HOME</Link>
                        </ListItem>
                        <ListItem>
                            <Link href='/'>ABOUT</Link>                      
                        </ListItem>
                    </UnorderedList>
                </Box>
                <Box display='flex' alignItems='center'>
                    <Text bg='white' p='2rem'>LOGO</Text>
                </Box>
            </Box>
        </Box>
    )
}