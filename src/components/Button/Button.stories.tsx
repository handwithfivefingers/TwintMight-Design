import { Meta, StoryFn } from '@storybook/react'
import Button from './Button'

export default {
    title: 'General/Button',
    component: Button,
} as Meta<typeof Button>

const Template: StoryFn<typeof Button> = args => <Button {...args} />

export const Primary = Template.bind({})

// More on args: https://storybook.js.org/docs/react/writing-stories/args

Primary.args = {
    children: 'Click me!',
    onClick: (event: any) => console.log('click', event),
}
