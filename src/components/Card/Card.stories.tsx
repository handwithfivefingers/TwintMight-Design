import { StoryFn, Meta } from '@storybook/react'
import Card from './Card'
import './Card.stories.scss'
export default {
    title: 'General/Card',
    component: Card,
} as Meta<typeof Card>

const Template: StoryFn<typeof Card> = args => {
    return (
        <div className="d-flex">
            <div className="flex-col-3">
                <Card {...args} />
            </div>
        </div>
    )
}

export const CardDefault = Template.bind({})

export const CardPrimary = Template.bind({})

CardDefault.args = {
    image: 'https://truyenmai.com/wp-content/uploads/2019/10/how-to-optimize-images-for-web-1-300x150.png',
    title: 'Card Title',
    children: (
        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
        </p>
    ),
}

CardPrimary.args = {
    title: 'Transition – Thủ thuật CSS – 2',
    type: 'primary',
    image: 'https://api.truyenmai.com/public/truyenmai/2019/09/serie-css.png',
    children: (
        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
        </p>
    ),
    bottom: [],
}
