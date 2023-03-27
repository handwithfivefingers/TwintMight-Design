import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Form from './Form';
import Input from './Input';
import Button from '../Button';
import Select from './Select';

export default {
	title: 'Form/Form',
	component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => {
	return (
		<Form {...args}>
			<Form.Input label='Username' name={['user', 'name']} />
			<Form.Input label='Password' name={['user', 'password']} />
			<Form.Input label='Password' name={'userid'} />
			<Form.Select
				name={'selector'}
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
			<Button htmlType='submit'>helllo</Button>
		</Form>
	);
};

export const Primary = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args

Primary.args = {
	formValue: {
		user: {
			name: 'John',
			password: 'password',
		},
		userid: 'haha',
	},
};
