import clsx from 'clsx'
import React, { useState } from 'react'
import Container from '../Container'
import './Nav.scss'

interface NavProps {
    children?: React.ReactNode
    style?: React.CSSProperties | {}
    className?: string
    fluid?: boolean
}

interface NavItemProps {
    children?: React.ReactNode
    style?: React.CSSProperties | {}
    className?: string
    active?: boolean
    value?: string | number
    onClick?: (value: string | number) => void
    onSelect?: (value: string | number) => void
}

interface NavBrandProps {
    children?: React.ReactNode
    style?: React.CSSProperties | {}
    className?: string
}

interface NavListProps {
    children?: React.ReactNode
    style?: React.CSSProperties | {}
    className?: string
    onSelect?: (value: string | number) => void
    activeItem?: string | number
}

const Nav = ({ children, style, className, fluid, ...props }: NavProps) => {
    const styles = {
        ...style,
    }
    const classNames = clsx(className, 'tm-nav')
    if (fluid) {
        return (
            <nav className={classNames} style={styles}>
                <div className="tm-nav-wrapper">{children}</div>
            </nav>
        )
    }

    return (
        <nav className={classNames} style={styles}>
            <Container>
                <div className="tm-nav-wrapper">{children}</div>
            </Container>
        </nav>
    )
}

const Brand = ({ children, style, className }: NavBrandProps) => {
    const styles = {
        ...style,
    }

    const classNames = clsx(className, 'tm-nav-brand')

    return (
        <div className={classNames} style={styles}>
            {children}
        </div>
    )
}

const List = ({ children, style, className, activeItem = '', ...props }: NavListProps) => {
    const activeLink = activeItem || ''

    const styles = {
        ...style,
    }
    const classNames = clsx(className, 'tm-nav-list')

    const handleSelect = (value: string) => {
        if (props.onSelect) {
            props.onSelect(value)
        }
    }

    const renderChildrenLink = (child: React.ReactNode | boolean | undefined | any, index: number) => {
        const childType = child.type
        if (childType === Item) {
            return React.cloneElement(child, {
                ...child.props,
                active: activeLink === child.props.value,
                onSelect: handleSelect,
            })
        }
        return React.cloneElement(child, {
            ...child.props,
        })
    }
    return (
        <ul className={classNames} style={styles}>
            {React.Children.map(children, renderChildrenLink)}
        </ul>
    )
}

const Item = ({ children, style, className, active, value = '', onSelect, ...props }: NavItemProps) => {
    const itemValue = value || ''

    const styles = {
        ...style,
    }

    const classNames = clsx(className, 'tm-nav-item', {
        ['tm-nav-item-active']: active,
    })

    const handleClick = () => {
        if (props.onClick) {
            props.onClick(itemValue)
        }
        if (onSelect) {
            onSelect(itemValue)
        }
    }
    return (
        <li className={classNames} style={styles} onClick={handleClick}>
            {children}
        </li>
    )
}
Nav.Item = Item
Nav.List = List
Nav.Brand = Brand

export default Nav
