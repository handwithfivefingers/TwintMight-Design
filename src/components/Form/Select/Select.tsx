import clsx from 'clsx';
import React, {
	forwardRef,
	useImperativeHandle,
	useRef,
	useState,
} from 'react';
import {
	BsFolderMinus,
	BsFillCaretDownFill,
	BsFillCaretUpFill,
} from 'react-icons/bs';
import { useIsomorphicLayoutEffect } from '../../../utils/hook';
import './Select.scss';

type valueOptions = string | number | string[] | number[] | any[];

export interface SelectProps {
	label?: JSX.Element | string;
	value?: valueOptions;
	name?: string | any[string];
	onChange?: (value: valueOptions, event: React.MouseEvent) => any | void;
	placeholder?: string;
	options: option[];
}

interface option {
	label: JSX.Element | string | number;
	value: valueOptions;
}

const Select = forwardRef((props: SelectProps, ref: any) => {
	const inputRef = ref || useRef<HTMLSelectElement>();

	const dropdownRef = useRef<HTMLDivElement>(null);

	const { value } = props;

	const [selectValue, setSelectValue] = useState<valueOptions>(value || '');

	const [dropdownOpen, setDropdownOpen] = useState(false);

	const options: option[] = props.options || [];

	useIsomorphicLayoutEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [dropdownRef]);

	useImperativeHandle(
		inputRef,
		() => {
			return {
				getValue: () => selectValue,
				getName: () => {
					return props.name;
				},
			};
		},
		[selectValue]
	);

	const getName = (name: string | []) => {
		if (Array.isArray(name)) {
			return name.join('_');
		}
		return name;
	};

	const handleClickOutside = (event: MouseEvent | TouchEvent | any) => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
			closeDropdown();
		}
	};

	const closeDropdown = () => {
		setDropdownOpen(false);
	};

	const handleSelectOption = (
		value: option['value'],
		event: React.MouseEvent
	) => {
		setSelectValue(value);
		closeDropdown();
		if (props.onChange) {
			props.onChange(value, event);
		}
	};

	const renderDropdownMenu = () => {
		const getOptions = (listOptions: option[]) =>
			listOptions.map((option: option, index: number) => {
				return (
					<div
						className='options'
						data-value={option.value}
						onClick={(event: React.MouseEvent) =>
							handleSelectOption(option.value, event)
						}
						key={[option.label, option.value, index].toString()}
					>
						{option.label}
					</div>
				);
			});
		const getNullOptions = () => {
			return (
				<div className='options-emty'>
					<BsFolderMinus className='options-icon' />
					<span className='options-description'>No Data</span>
				</div>
			);
		};

		return (options.length && getOptions(options)) || getNullOptions();
	};

	const getValueInput = (value: option['value']): string => {
		return value.toString();
	};

	return (
		<div className='tm-select-wrapper'>
			<div className='tm-select-label'>
				<label>{props?.label}</label>
			</div>
			<div className='tm-select'>
				<div className='tm-select-wrapper' ref={dropdownRef}>
					<input
						value={getValueInput(selectValue)}
						placeholder={props?.placeholder}
						name={props?.name && getName(props?.name)}
						ref={ref}
					/>
					<div
						className={clsx('tm-select-input', {
							['tm-select-focus']: dropdownOpen,
						})}
						onClick={() => setDropdownOpen(!dropdownOpen)}
					>
						{selectValue ? selectValue : 'Select Options'}

						<span
							className={clsx('tm-select-caret', {
								['caret-up']: dropdownOpen,
							})}
						>
							<BsFillCaretDownFill />
						</span>
					</div>
					<div
						className={clsx('tm-select-dropdown', {
							['tm-dropdown-open']: dropdownOpen,
						})}
					>
						{renderDropdownMenu()}
					</div>
				</div>
			</div>
		</div>
	);
});

Select.displayName = 'Select';

export default Select;
