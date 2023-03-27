import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Select from './Select';

export default {
	title: 'Form/Select',
	component: Select,
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = (args) => {
	return <Select {...args} />;
};

export const Default = Template.bind({});
export const NoProps = Template.bind({});

Default.args = {
	label: 'Label',
	name: ['user', 'name'],
	onChange: (value) => console.log('value', value),
	options: [
		{
			label: 'Options 1',
			value: ['option', '1'],
		},
		{
			label: 'Options 2',
			value: ['option', '2'],
		},
		{
			label: 'Options 3',
			value: ['option', '3'],
		},
		{
			label: 'Options 4',
			value: ['option', '4'],
		},
	],
};

NoProps.args = {
	onChange: (value) => console.log('noProps', value),
};
