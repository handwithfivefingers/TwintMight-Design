import clsx from 'clsx'
import React from 'react'
import './Col.scss'

interface ColProps {
    children?: React.ReactNode
    span?: number
    xs?: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
    xxl?: number
    style?: React.CSSProperties | {}
    className?: string
}

const Col = ({ children, span, style, className, ...rest }: ColProps) => {
    const { xs, sm, md, lg, xl, xxl } = rest
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
        className,
    )

    return (
        <div className={cx} style={style}>
            {children}
        </div>
    )
}

export default Col
