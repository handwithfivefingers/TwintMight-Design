import clsx from 'clsx'
import './Container.scss'

interface ContainerProps {
    children?: React.ReactNode
    className?: string
    style?: React.CSSProperties | {}
}
const Container = (props: ContainerProps) => {
    const { style, className, children } = props
    return (
        <div className={clsx('tm-container', className)} style={style}>
            {children}
        </div>
    )
}

export default Container
