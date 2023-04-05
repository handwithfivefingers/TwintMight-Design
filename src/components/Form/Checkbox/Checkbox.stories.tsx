import { Meta, StoryFn } from '@storybook/react'
import Checkbox from './Checkbox'

export default {
    title: 'Form/CheckBox',
    component: Checkbox,
} as Meta<typeof Checkbox>

const Template: StoryFn<typeof Checkbox> = args => {
    return (
        <>
            {[1, 2, 3, 4, 5].map((item: number) => {
                const configs = {
                    label: `Label ${item}`,
                    name: `label_${item}`,
                    onChange: (value: boolean) => console.log(`${item}: ${value}`),
                    value: item % 2 !== 0 ? true : false,
                }
                return <Checkbox {...configs} />
            })}
        </>
    )
}

export const Default = Template.bind({})
