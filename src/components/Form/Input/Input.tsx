import React, { forwardRef, useImperativeHandle, useState } from 'react';
import './Input.scss';
export interface InputProps {
	label?: JSX.Element | string;
	value?: string | number | [];
	name?: string | any[string];
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any | void;
	placeholder?: string;
}

const Input = forwardRef((props: InputProps, ref: any) => {
	const { value } = props;
	const [inputValue, setInputValue] = useState(value || '');
	useImperativeHandle(
		ref,
		() => {
			return {
				getValue: () => inputValue,
				getName: () => {
					return props.name;
				},
			};
		},
		[inputValue]
	);

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
		if (props.onChange) {
			onChange(event);
		}
	};

	const getName = (name: string | []) => {
		if (Array.isArray(name)) {
			return name.join('_');
		}
		return name;
	};
	return (
		<div className='tm-input-wrapper'>
			<div className='tm-input-label'>
				<label>{props?.label}</label>
			</div>
			<div className='tm-input'>
				<input
					value={inputValue}
					onChange={onChange}
					placeholder={props?.placeholder}
					name={props?.name && getName(props?.name)}
					ref={ref}
				/>
			</div>
		</div>
	);
});

export default Input;
