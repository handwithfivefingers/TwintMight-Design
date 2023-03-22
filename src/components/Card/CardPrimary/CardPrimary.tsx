import React, { useEffect, useState } from 'react';

import './CardPrimary.scss';

const CardPrimary = ({ title, image, children, bottom = [] }: any) => {
	const renderBottom = React.useMemo(() => {
		let html = null;
		if (bottom?.length) {
			html = (
				<div className='card-action'>
					{bottom.map((item: React.ReactNode, index: number) => {
						return (
							<span
								className='bottom-item'
								key={['card-action', index].join('_')}
							>
								{item}
							</span>
						);
					})}
				</div>
			);
		}
		return html;
	}, [bottom]);

	return (
		<div className='tm-card card-primary'>
			<div className='card-image'>
				<img src={image} alt={title} />
			</div>
			<div className='card-content'>
				<div className='card-title'>
					<h2>{title}</h2>
				</div>
				<div className='card-text'>{children}</div>
				{renderBottom}
			</div>
		</div>
	);
};
export default CardPrimary;
