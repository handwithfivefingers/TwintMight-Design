import React, {
	forwardRef,
	useImperativeHandle,
	useState,
	useRef,
	useMemo,
} from 'react';
import './Input.scss';
export interface InputProps {
	label?: JSX.Element | string;
	value?: string | number;
	name?: string | any[string];
	onChange?: (
		value: string | number,
		event: React.ChangeEvent<HTMLInputElement>
	) => any | void;
	placeholder?: string;
}

const Input = forwardRef((props: InputProps, ref: any) => {
	const inputRef = ref || useRef<HTMLInputElement>();
	const { value } = props;
	const [inputValue, setInputValue] = useState(value || '');

	useImperativeHandle(
		inputRef,
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
		try {
			const { value } = event.target;
			setInputValue(value);

			if (props.onChange) {
				props.onChange(value, event);
			}
		} catch (error) {
			console.log('error');
			throw error;
		}
	};

	const getName = (name: string | []) => {
		if (Array.isArray(name)) {
			return name.join('_');
		}
		return name;
	};

	const renderInput = useMemo(() => {
		if (props.name) {
			return (
				<input
					value={inputValue}
					onChange={(event) => onChange(event)}
					placeholder={props?.placeholder}
					name={props?.name && getName(props?.name)}
					ref={ref}
				/>
			);
		}
		return (
			<input
				value={inputValue}
				onChange={(event) => onChange(event)}
				placeholder={props?.placeholder}
			/>
		);
	}, [inputValue, props]);
	return (
		<div className='tm-input-wrapper'>
			<div className='tm-input-label'>
				<label>{props?.label}</label>
			</div>
			<div className='tm-input'>{renderInput}</div>
		</div>
	);
});

export default Input;
