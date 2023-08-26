import React from 'react'
interface RowProps {
    children: React.ReactNode
}

const Row = ({ children }: RowProps) => {
    return <div className="row">{children}</div>
}

export default Row
