import { Meta, StoryFn } from '@storybook/react'
import Button from '../Button'
import Form from './Form'
import FormItem from './FormItem/FormItem'
import Input from './Input'
import Select from './Select'

export default {
  title: 'Form/Form',
  component: Form,
} as Meta<typeof Form>

const Template: StoryFn<typeof Form> = args => {
  const form = Form.useForm()
  const handleFinish = (data: any) => {
    console.log('data', data)
    console.log('formHook', form.getValues())
    // window.formHook = form
  }
  return (
    <Form {...args} form={form} onFinish={handleFinish}>
      <FormItem label="Username - ['user','name]" name={['user', 'name']}>
        <Input />
      </FormItem>
      <FormItem label="Password - ['user','password]" name={['user', 'password']}>
        <Input />
      </FormItem>
      <FormItem label="User Id - userid" name={['userid']}>
        <Input />
      </FormItem>
      {/* <FormItem label="Select Option - select " name={'select'}>
        <Select
          options={[
            {
              label: 'options 1',
              value: 'options 1',
            },
            {
              label: 'options 2',
              value: 'options 2',
            },
            {
              label: 'options 3',
              value: 'options 3',
            },
          ]}
        />
      </FormItem> */}
      {/* <pre>{JSON.stringify(template, null, 4)}</pre> */}
      <Button htmlType="submit">Submit</Button>
    </Form>
  )
}

export const Primary = Template.bind({})

// More on args: https://storybook.js.org/docs/react/writing-stories/args

Primary.args = {
  formValue: {
    user: {
      name: 'John',
      password: 'password',
    },
    userid: 'haha',
  },
}
