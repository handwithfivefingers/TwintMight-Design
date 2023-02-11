import React from 'react';
import './Card.scss';
export interface ButtonProps {
	label: string;
}

const Card = (props: ButtonProps) => {
	return <button className='tm-card'>{props.label}</button>;
};

export default Card;
