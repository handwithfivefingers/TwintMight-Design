import clsx from 'clsx';
import React from 'react';
import './CardDefault.scss';
export interface CardProps {
	title?: JSX.Element | string;
	image?: string;
	children: JSX.Element | string;
	type?: 'default' | 'primary' | 'full';
}

const CardDefault = (props: CardProps) => {
	const { title, image, children, type } = props;

	return (
		<div className='tm-card card-default'>
			<div className='tm-card-image'>
				<img src={image} />
			</div>

			<div
				className={clsx('tm-card-header', {
					'tm-card-border-title': !image,
				})}
			>
				<div className='tm-card-title'>{title}</div>
			</div>

			<div className='tm-card-content'>{children}</div>
		</div>
	);
};

export default CardDefault;
