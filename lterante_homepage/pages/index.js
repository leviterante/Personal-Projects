import NextLink from 'next/link'
import {
    Link,
    Container,
    Heading,
    Box,
    SimpleGrid,
    Button,
    List,
    ListItem,
    useColorModeValue,
    chakra
  } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'
//import Layout from '../components/layouts/article'

const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Page = () => {
    return (
        //<Layout>
            <Container>
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
                    <ProfileImage
                        src="/images/levi.jpg"
                        alt="Profile image"
                        borderRadius='full'
                        width="100%"
                        height="100%"
                    />
                    </Box>
                </Box>
            
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>
                        Levi is a freelance and a full-stack developer based in France with a
                        passion for building digital services/stuff he wants. He has a knack
                        for all things launching products, from planning and designing all the
                        way to solving real-life problems with code. When not online, he loves
                        playing sports such as basketball and football. Currently, he is refining 
                        his skills in web development starting from the basics. Check out his 
                        personal  
                        <NextLink href="/works/project">
                            <Link> projects </Link>
                        </NextLink>{' '}
                        in github. 
                        
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
                                My Portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>1996</BioYear>
                        Born in the Davao City, Philippines.
                    </BioSection>
                    <BioSection>
                        <BioYear>2015</BioYear>
                        Completed highschool in WestMills British Highschool in Lagos, Nigeria and 
                        earned several IGCSE&apos;s with high remarks including English, Math, Physics, Biology, French, etc...
                    </BioSection>
                    <BioSection>
                        <BioYear>2019</BioYear>
                        Completed a BAC+2 in computer science in IUT Robert Schuman, Strasbourg, France
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        Worked at {' '} 
                        <Link href="https://la-riziere.fr/" target="_blank">
                            La Rizière
                        </Link> 
                        , Strasbourg, France
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        Launched an e-commerce website on jewelry called
                        <NextLink href="https://www.chrisbijoux.com/">
                            <Link> chrisbijoux </Link>
                        </NextLink>{' '}
                    </BioSection>
                    <BioSection>
                        <BioYear>2022 to Present</BioYear>
                        Works as a freelance
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                I ♥
                </Heading>
                <Paragraph>
                <Link href="https://open.spotify.com/user/leviathanx69" target="_blank">
                    Music
                </Link>, Sports,{' '} 
                <Link href="https://500px.com/p/terantelevi" target="_blank">
                    Art
                </Link>
                , E-Sports, Machine Learning,{' '}
                <Link href="https://www.doozescape.com" target="_blank">
                    Escape Games
                </Link>
                </Paragraph>
                </Section>

            </Container>
        //</Layout>
    )
}

export default Page