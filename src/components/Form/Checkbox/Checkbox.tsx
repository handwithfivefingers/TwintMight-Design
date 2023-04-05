import React, { forwardRef, useImperativeHandle, useState, useRef, useMemo } from 'react'
import './Checkbox.scss'
export interface InputProps {
    label?: JSX.Element | string
    value?: boolean
    name?: string | any[string]
    onChange?: (value: boolean, event: React.ChangeEvent<HTMLInputElement>) => any | void
    placeholder?: string
}

const Checkbox = forwardRef((props: InputProps, ref: any) => {
    const inputRef = ref || useRef<HTMLInputElement>()
    const checkboxRef = ref || useRef<HTMLInputElement>()
    const { value } = props
    const [inputValue, setInputValue] = useState<boolean>(value || false)

    const otherProps = {
        placeholder: props?.placeholder,
    }
    useImperativeHandle(
        inputRef,
        () => {
            return {
                getValue: () => inputValue,
                getName: () => {
                    return props.name
                },
            }
        },
        [inputValue],
    )

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        try {
            const { checked } = event.target
            setInputValue(checked)
            if (props.onChange) {
                props.onChange(checked, event)
            }
        } catch (error) {
            console.log('error')
            throw error
        }
    }

    const getName = (name: string | []) => {
        if (Array.isArray(name)) {
            return name.join('_')
        }
        return name
    }

    const renderInput = useMemo(() => {
        if (props.name) {
            return (
                <input
                    type="checkbox"
                    checked={inputValue}
                    onChange={onChange}
                    name={props?.name && getName(props?.name)}
                    ref={checkboxRef}
                    {...otherProps}
                />
            )
        }
        return <input type="checkbox" checked={inputValue} onChange={onChange} {...otherProps} ref={checkboxRef} />
    }, [inputValue, props])
    return (
        <div className="tm-checkbox">
            <div className="tm-checkbox-wrapper">
                {props?.label ? <label>{props?.label}</label> : ''}
                {renderInput}
                <span className="tm-checkmark" onClick={() => checkboxRef.current.click()}></span>
            </div>
        </div>
    )
})

export default Checkbox
