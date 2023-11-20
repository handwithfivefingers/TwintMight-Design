import React, { forwardRef, useState } from 'react'
import './Input.scss'
import { InputProps } from './Input.type'

const Input = forwardRef(({ onChange, ...props }: InputProps, ref: any) => {
  // const inputValue = F

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const { value } = event.target
      if (onChange) {
        onChange(value, event)
      }
    } catch (error) {
      console.log('error')
      throw error
    }
  }

  return (
    <div className="tm-input-wrapper">
      <div className="tm-input">
        <input {...props} ref={ref} onChange={event => onInputChange(event)} placeholder={props?.placeholder} />
      </div>
    </div>
  )
})

export default Input
