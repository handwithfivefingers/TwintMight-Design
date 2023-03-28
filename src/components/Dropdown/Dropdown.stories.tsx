import { Meta, StoryFn } from '@storybook/react'
import Dropdown from './Dropdown'
import './Dropdown.stories.scss'

export default {
    title: 'Layout/Dropdown',
    component: Dropdown,
} as Meta<typeof Dropdown>

const Template: StoryFn<typeof Dropdown> = args => <Dropdown {...args} />

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
