import clsx from 'clsx'
import React from 'react'
import './Col.scss'

type ColNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

interface ICol {
    children?: React.ReactNode
    span?: ColNumber
    xs?: ColNumber
    sm?: ColNumber
    md?: ColNumber
    lg?: ColNumber
    xl?: ColNumber
    xxl?: ColNumber
    style?: React.CSSProperties | {}
    className?: string
}

const Col = ({ children, span, style, className, ...rest }: ICol) => {
    const { xs, sm, md, lg, xl, xxl } = rest
    const cx = clsx(
        'tm-col',
        {
            [`tm-col-${span}`]: span,
            [`tm-col-xs-${xs}`]: xs,
            [`tm-col-sm-${sm}`]: sm,
            [`tm-col-md-${md}`]: md,
            [`tm-col-lg-${lg}`]: lg,
            [`tm-col-xl-${xl}`]: xl,
            [`tm-col-xxl-${xxl}`]: xxl,
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
