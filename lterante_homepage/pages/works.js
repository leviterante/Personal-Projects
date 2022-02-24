import { Container, Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
//import Layout from '../components/layouts/article'

import thumbInkdrop from '../public/images/works/thumbInkdrop.jpg'

const Works = () => {
    return (
        //<Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid column={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="walknote" title="S.I.M" thumbnail={thumbInkdrop}>
                        An inventory manager
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="inkdrop" title="Budget tracker" thumbnail={thumbInkdrop}>
                        A simple budget tracker
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        //</Layout>

    )
}

export default Works