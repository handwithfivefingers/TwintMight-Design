import clsx from 'clsx';
import './Layout.scss';

interface LayoutProps {
	children?: React.ReactNode;
	className?: string;
	styles?: React.CSSProperties | {};
}
const Layout = (props: LayoutProps) => {
	const { styles, className, children } = props;
	return (
		<div className={clsx('tm-layout', className)} style={styles}>
			{children}
		</div>
	);
};

export default Layout;
