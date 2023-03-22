import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from './Input';

export default {
	title: 'Form/Input',
	component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
	const handleChange = (e: any) => console.log(e);
	return (
		<>
			<Input
				{...args}
				label='Username'
				onChange={handleChange}
				placeholder='Input value ....'
			/>
		</>
	);
};

export const Default = Template.bind({});