import React from 'react';
import './Row.scss';
interface RowProps {
	children: React.ReactNode;
}

const Row = ({ children }: RowProps) => {
	return <div className='row'>{children}</div>;
};

export default Row;
