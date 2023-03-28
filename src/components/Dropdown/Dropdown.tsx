import clsx from 'clsx'
import { useState } from 'react'
import { BsFillCaretDownFill } from 'react-icons/bs'
import './Dropdown.scss'

interface DropdownProps {
    children?: React.ReactNode
    className?: string
    style?: React.CSSProperties | {}
    listItems?: any[]
    label: string | React.ReactNode
    popupClassName?: string
    onSelect?: (value: any, event: React.MouseEvent) => void
    type?: 'outline' | 'default' | 'text'
}
const Dropdown = (props: DropdownProps) => {
    const { style, className, listItems, popupClassName, label, onSelect, type } = props
    const items = listItems || []

    const cx = clsx(`tm-dropdown `, className)

    const [openDropdown, setOpenDropdown] = useState<boolean>(false)

    const popupCs = clsx(`tm-dropdown-popup `, popupClassName, {
        ['tm-dropdown-open']: openDropdown,
    })

    const closeDropdown = () => setOpenDropdown(false)

    const handleSelectOption = (value: any, event: React.MouseEvent) => {
        closeDropdown()
        if (onSelect) {
            onSelect(value, event)
        }
    }

    return (
        <div className={cx} style={style}>
            <div className="tm-dropdown-wrapper" onClick={() => setOpenDropdown(!openDropdown)}>
                <div
                    className={clsx(`tm-dropdown-label tm-dropdown-${type || 'default'}`, {
                        ['label-active']: openDropdown,
                    })}
                >
                    {label}
                    <span
                        className={clsx('tm-dropdown-caret', {
                            ['caret-up']: openDropdown,
                        })}
                    >
                        <BsFillCaretDownFill />
                    </span>
                </div>
                <div className={popupCs}>
                    {items.map((item: any, index: number) => {
                        return (
                            <div
                                className={'tm-dropdown-item'}
                                key={['tm-dropdown-item', item.label, index].join('_')}
                                onClick={(event: React.MouseEvent) => handleSelectOption(item, event)}
                            >
                                {item.label}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Dropdown
