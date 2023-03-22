import React from 'react';
import clsx from 'clsx';
import './Button.scss';

export interface ButtonProps {
	children: string | any | JSX.Element;
	type?: 'default' | 'primary' | 'ghost' | 'link';
	className?: string;
	style?: string | any;
	htmlType?: 'button' | 'submit';
	onClick?: (event: React.MouseEvent<HTMLElement>) => any | void;
	onDoubleClick?: (event: React.MouseEvent<HTMLElement>) => any | void;
}

const Button = ({
	type = 'default',
	className,
	htmlType = 'button',
	style,
	...props
}: ButtonProps) => {
	const { children } = props;

	const onClick = (e: any) => {
		console.log(`onClick`, e);
	};
	return (
		<button
			className={clsx(className, 'tm-button', {
				['default']: type === 'default',
				['primary']: type === 'primary',
				['ghost']: type === 'ghost',
				['link']: type === 'link',
			})}
			style={style}
			{...props}
			type={htmlType}
			onClick={props.onClick}
		>
			{children}
		</button>
	);
};

export default Button;
