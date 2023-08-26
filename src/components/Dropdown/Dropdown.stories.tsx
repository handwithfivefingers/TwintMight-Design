import { Meta, StoryFn } from '@storybook/react'
import Container from '../Layout/Container'
import Dropdown from './Dropdown'
import './Dropdown.stories.scss'
import theme from '../theme'
export default {
    title: 'Layout/Dropdown',
    component: Dropdown,
} as Meta<typeof Dropdown>

const Template: StoryFn<typeof Dropdown> = args => {
    const value = theme.useProviderData()

    console.log('value', value)
    return (
        <Container>
            <div>
                <h3>Default</h3>
                <Dropdown {...args} type="default" />
            </div>
            <div>
                <h3>Outline</h3>
                <Dropdown {...args} type="outline" />
            </div>
            <div>
                <h3>Text</h3>
                <Dropdown {...args} type="text" />
            </div>
        </Container>
    )
}

export const Block = Template.bind({})

Block.storyName = 'Dropdown'
Block.args = {
    label: 'Dropdown',
    listItems: [
        {
            label: 'Item 1',
            value: 'Item 1',
        },
        {
            label: 'Item 2',
            value: 'Item 2',
        },
        {
            label: 'Item 3',
            value: 'Item 3',
        },
    ],
}
