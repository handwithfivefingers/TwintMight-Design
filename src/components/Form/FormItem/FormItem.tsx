import { Children, cloneElement } from 'react'
import { Controller } from 'react-hook-form'
import './FormItem.scss'
import { IFormItemProps } from './FormItem.type'
const FormItem = ({ name, label, children, control, rules = {}, errors }: IFormItemProps) => {
  const fieldName = Array.isArray(name) ? name.join('.') : name
  return (
    <div className="tm-input-wrapper">
      <div className="tm-input-label">
        <label>{label}</label>
      </div>
      <div className="tm-input">
        {Children.map(children, (child: JSX.Element) => {
          return <Controller name={fieldName} control={control} rules={rules} render={({ field }) => cloneElement(child, { ...child.props, ...field})} />
        })}
        <div>{errors?.[fieldName]}</div>
      </div>
    </div>
  )
}

export default FormItem
