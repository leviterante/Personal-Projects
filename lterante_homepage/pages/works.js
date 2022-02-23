import { Container, Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/thumbInkdrop.jpg'

const Works = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid column={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
                        A markdown note-taking app
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works