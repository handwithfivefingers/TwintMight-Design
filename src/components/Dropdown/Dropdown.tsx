import clsx from 'clsx'
import { useState, useMemo, useRef } from 'react'
import { BsFillCaretDownFill } from 'react-icons/bs'
import { createPortal } from 'react-dom'
import './Dropdown.scss'
import { useIsomorphicLayoutEffect } from '../../utils'

interface IDropdown {
    children?: React.ReactNode
    className?: string
    style?: React.CSSProperties | {}
    listItems?: any[]
    label: string | React.ReactNode
    popupClassName?: string
    onSelect?: (value: any, event: React.MouseEvent) => void
    type?: 'outline' | 'default' | 'text'
}

const Dropdown = (props: IDropdown) => {
    const { style, className, listItems, popupClassName, label, onSelect, type } = props

    const items = listItems || []

    const cx = clsx(`tm-dropdown `, className)

    const [openDropdown, setOpenDropdown] = useState<boolean>(false)

    const cursorRef = useRef<HTMLElement | any>(undefined)

    const dropdownRef = useRef<HTMLDivElement>(null)

    const callbackRef = useRef<any>({
        scrollEvent: null,
    })

    useIsomorphicLayoutEffect(() => {
        if (dropdownRef.current) {
            if (openDropdown) {
                document.addEventListener('mousedown', handleClickOutside)
                document.addEventListener('scroll', handleUpdatePosition)
            } else {
                document.removeEventListener('mousedown', handleClickOutside)
            }
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('scroll', handleUpdatePosition)
        }
    }, [dropdownRef.current, openDropdown])

    const handleUpdatePosition = (event: MouseEvent | TouchEvent | EventListener | Event): void => {
        if (callbackRef.current.scrollEvent) {
            clearTimeout(callbackRef.current.scrollEvent)
        }
        callbackRef.current.scrollEvent = setTimeout(() => {
            const domRect = getDropdownPos()
            if (dropdownRef.current) {
                dropdownRef.current.style.top = `${domRect?.bottom + 10}px`
                dropdownRef.current.style.left = `${domRect?.left}px`
                dropdownRef.current.style.width = `${domRect?.width}px`
            }
        }, 25)
    }

    const handleClickOutside = (event: MouseEvent | TouchEvent | any) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target) &&
            !cursorRef.current.contains(event.target)
        ) {
            closeDropdown()
        }
    }

    const closeDropdown = () => {
        setOpenDropdown(false)
    }

    const handleSelectOption = (value: any, event: React.MouseEvent) => {
        closeDropdown()
        if (onSelect) {
            onSelect(value, event)
        }
    }

    const getDropdownPos = () => {
        if (cursorRef.current) {
            const { bottom, left, width } = cursorRef.current?.getBoundingClientRect()
            return { bottom, left, width }
        }
        return undefined
    }

    const handleClickDropdown = (event: React.MouseEvent | React.TouchEvent) => {
        console.log(event)
        setOpenDropdown(!openDropdown)
    }

    const renderPopup = useMemo(() => {
        const popupCs = clsx(`tm-dropdown-popup`, popupClassName, {
            ['tm-dropdown-open']: openDropdown,
        })

        const domRect = getDropdownPos()
        const listPopup = document.querySelectorAll('.tm-dropdown-popup')
        if (!domRect) return

        return createPortal(
            <div
                className={popupCs}
                style={{
                    top: `${domRect.bottom + 10}px`,
                    left: `${domRect.left}px`,
                    position: 'fixed',
                    width: `${domRect.width}px`,
                    zIndex: 1000 + listPopup.length,
                    background: '#fff',
                }}
                ref={dropdownRef}
            >
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
            </div>,
            document.body,
        )
    }, [openDropdown])

    return (
        <div className={cx} style={style}>
            <div className="tm-dropdown-wrapper" onClick={handleClickDropdown} ref={ref => (cursorRef.current = ref)}>
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
                {openDropdown && renderPopup}
            </div>
        </div>
    )
}

export default Dropdown
