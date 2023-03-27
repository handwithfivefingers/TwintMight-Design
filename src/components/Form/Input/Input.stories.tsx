import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Input from './Input';

export default {
	title: 'Form/Input',
	component: Input,
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => {
	return <Input {...args} />;
};

export const Default = Template.bind({});
export const NoProps = Template.bind({});

Default.args = {
	label: 'Label',
	name: ['user', 'name'],
	onChange: (value) => console.log('value', value),
};

NoProps.args = {
	onChange: (value) => console.log('noProps', value),
};
