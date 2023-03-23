import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Form from './Form';
import Input from './Input';

export default {
	title: 'Form/Form',
	component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => {
	return (
		<Form {...args}>
			<Input label='Username' name={['user', 'name']} />
			<Input label='Password' name={['user', 'password']} />
			<Input label='Password' name={'userid'} />
			<button>helllo</button>
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
