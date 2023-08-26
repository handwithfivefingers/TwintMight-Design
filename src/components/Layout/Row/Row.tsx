import React from 'react'
import './Row.scss'
interface RowProps {
    children?: React.ReactNode
    styles?: React.CSSProperties | {}
    gutter?: number[]
}

const Row = ({ children, styles, gutter = [6, 6] }: RowProps) => {
    const style = {
        '--tm-gutter-x': `${gutter[0]}px`,
        '--tm-gutter-y': `${typeof gutter[1] !== 'undefined' ? gutter[1] : gutter[0]}px`,
        ...styles,
    }
    return (
        <div className="tm-row" style={style}>
            {children}
        </div>
    )
}

export default Row
