import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import './Form.scss';
import Button from '../Button';

export interface FormProps {
	children: string | any | JSX.Element;
	className?: string;
	style?: string | any;
	formValue: {};
}

const Form = ({ className, style, formValue = {}, ...props }: FormProps) => {
	const { children } = props;

	const childrenRef = useRef<any>({});

	const formRef = useRef<any>([]);

	const onSubmit = (e: any) => {
		e.preventDefault();
		const value = formRef.current.getFieldValues();
		console.log('value', value);
	};

	const handleGetFieldValue = () => {
		const value = formRef.current.getFieldValue(['user', 'name']);
		console.log('function handleGetFieldValue', value);
	};

	useImperativeHandle(
		formRef,
		() => {
			return {
				getFieldValue: (pathName: string | string[]) => {
					let pathConvert: string = '';
					if (typeof pathName === 'string') {
						pathConvert = pathName;
					} else if (Array.isArray(pathName)) {
						pathConvert = pathName.join('_');
					}
					const value = childrenRef.current[pathConvert].getValue();

					return value;
				},
				getFieldValues: () => {
					const value: any = {};
					for (let inputItem in childrenRef.current) {
						const currentItem = childrenRef.current[inputItem];
						const inpValue = currentItem.getValue();
						const inpName = currentItem.getName();

						if (typeof inpName === 'string') {
							add_property(value, inpName, inpValue);
						} else if (Array.isArray(inpName)) {
							add_property(value, inpName.join('.'), inpValue);
						}
						console.log('childrenRef', inpName, inpValue);
					}
					return value;
				},
			};
		},
		[]
	);

	const add_property = (object: any, key: string, value: any) => {
		let keys: string | string[] = key.split('.');
		while (keys.length > 1) {
			let k: string | any = keys.shift();

			if (!object.hasOwnProperty(k)) {
				object[k] = {};
			}
			object = object[k];
		}
		object[keys[0]] = value;
	};

	const getDeepObject = (object: any, arg: string | string[]) => {
		try {
			const argPath = typeof arg === 'string' ? arg : arg.join('.');
			const getDeep = new Function('object', `return object.${argPath}`);
			return getDeep(object);
		} catch (error) {
			console.log('getDeepObject', error);
		}
	};

	return (
		<form className={'tm-form'} onSubmit={onSubmit} ref={formRef}>
			<div className='d-flex'>
				{React.Children.map(children, (child, index) => {
					console.log('child', children);
					let pathName = child.props.name;
					if (Array.isArray(pathName)) {
						pathName = child.props.name.join('_');
					}
					return React.cloneElement(child, {
						...child.props,
						ref: (ref: any) => (childrenRef.current[pathName] = ref),
						value: getDeepObject(formValue, child.props.name),
					});
				})}
			</div>

			<div
				className='tm-form-submit'
				style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
			>
				<Button htmlType='submit'>Submit</Button> <br />
				<Button onClick={handleGetFieldValue}>Get Username value</Button> <br />
			</div>
		</form>
	);
};

const FormItem = forwardRef((props: any, ref) => {
	return props.children;
});

export default Form;
