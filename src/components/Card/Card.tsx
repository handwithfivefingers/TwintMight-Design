import React from 'react'
import './Card.scss'

import CardDefault from './CardDefault/CardDefault'
import CardPrimary from './CardPrimary/CardPrimary'
export interface CardProps {
    title?: JSX.Element | string
    image?: string
    children: JSX.Element | string
    type?: 'default' | 'primary' | 'full'
    bottom?: any[]
}

const Card = (props: CardProps) => {
    const { type } = props
    if (type === 'primary') {
        return <CardPrimary {...props} />
    }
    return <CardDefault {...props} />
}

export default Card
