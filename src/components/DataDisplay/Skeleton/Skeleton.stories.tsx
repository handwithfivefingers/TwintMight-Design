import { Meta, StoryFn } from '@storybook/react'
import './Skeleton.stories.scss'
import Skeleton from '.'
import Container from '../../Layout/Container'
export default {
    title: 'Data display/Skeleton',
    component: Skeleton,
} as Meta<typeof Skeleton>

const SkeletonBlock: StoryFn<typeof Skeleton> = args => {
    return (
        <Container>
            <ul className="list">
                <h3>Default Skeleton</h3>
                <li>
                    <Skeleton {...args} />
                </li>
            </ul>
        </Container>
    )
}

const ParagraphBlock: StoryFn<typeof Skeleton.Paragraph> = args => {
    return (
        <Container>
            <ul className="list">
                <h3>Paragraph Skeleton</h3>
                <li>
                    <Skeleton.Paragraph {...args} />
                </li>
            </ul>
        </Container>
    )
}

export const Block = SkeletonBlock.bind({})
export const Paragraph = ParagraphBlock.bind({})

Block.args = {
    width: '100%',
    active: true,
}

Paragraph.args = {
    rows: 3,
    active: true,
}
