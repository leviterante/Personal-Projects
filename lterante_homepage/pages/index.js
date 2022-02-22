import { Container, Box, Heading, Image, useColorModeValue } from '@chakra-ui/react'

const Page = () => {
    return <Container>
        <Box 
            borderRadius="lg" 
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
            p={3} 
            mb={6} 
            align="center"
        >
            Hello, I&apos;m a full-stack developer based in France!
        </Box>

        <Box display={{md:'flex'}}>
            <Box flexGorw={1}>
                <Heading as="h2" variant="page-title">
                    Levi Terante
                </Heading>
                <p>Digital artisan (Artist / Developer / Designer)</p>
            </Box>
            <Box 
                flexShrink={0} 
                mt={{base: 4, md: 0}} 
                ml={{md: 6}} 
                align="center"
            >
            <Image 
                borderColor="whiteAlpha.822" 
                borderWidth={2} 
                borderStyle="solid" 
                maxWidth="100px" 
                display="inlin-block" 
                borderRadius="full" 
                src="images/levi.jpg"
                alt="Profile Image"
            />
            </Box>
        </Box>
        </Container>
}

export default Page