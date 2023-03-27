import React from 'react';
import './Row.scss';
interface RowProps {
	children?: React.ReactNode;
	styles?: React.CSSProperties | {};
	gutter?: number[];
}

const Row = ({ children, styles, gutter = [6, 6] }: RowProps) => {
	const style = {
		'--gX': `${gutter[0]}px`,
		'--gY': `${gutter[1]}px`,
		...styles,
	};
	return (
		<div className='row' style={style}>
			{children}
		</div>
	);
};

export default Row;
