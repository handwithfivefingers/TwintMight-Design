import clsx from 'clsx';
import React from 'react';
import './Col.scss';
interface ColProps {
	children?: React.ReactNode;
	span?: number;
	xs?: number;
	sm?: number;
	md?: number;
	lg?: number;
	xl?: number;
	xxl?: number;
	styles?: React.CSSProperties | {};
	className?: string;
}

const Col = ({ children, span, styles, className, ...rest }: ColProps) => {
	const { xs, sm, md, lg, xl, xxl } = rest;
	const cx = clsx(
		'col',
		{
			[`col-${span}`]: span,
			[`col-xs-${xs}`]: xs,
			[`col-sm-${sm}`]: sm,
			[`col-md-${md}`]: md,
			[`col-lg-${lg}`]: lg,
			[`col-xl-${xl}`]: xl,
			[`col-xxl-${xxl}`]: xxl,
		},
		className
	);

	// clsx('col', `col-${span}`)
	return (
		<div className={cx} style={styles}>
			{children}
		</div>
	);
};

export default Col;
