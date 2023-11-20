import React from 'react'
import './Form.scss'
import { FormProps } from './Form.type'
import FormItem from './FormItem/FormItem'
import { useForm } from 'react-hook-form'

const Form = ({ className, style, formValue = {}, form, children, ...props }: FormProps) => {
  const currentForm =
    form ||
    useForm({
      defaultValues: {
        ...formValue,
      },
    })

  const {
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = currentForm

  const renderChildren = (child: React.ReactNode | boolean | undefined | any, index: number) => {
    const childType = child.type
    if (childType === FormItem) {
      return React.cloneElement(child, {
        ...child.props,
        errors,
        control,
      })
    }
    return React.cloneElement(child, {
      ...child.props,
    })
  }
  const onSubmit = (data: any) => {
    // console.log('data', data)
    if (props.onFinish) {
      props.onFinish(data)
    }
  }
  return (
    <form className={'tm-form'} onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, renderChildren)}
    </form>
  )
}

Form.useForm = () => {
  const form = useForm()
  return form
}

export default Form
