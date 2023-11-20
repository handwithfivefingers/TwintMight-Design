export interface InputProps {
  label?: JSX.Element | string
  value?: string | number
  name?: string | any[string]
  onChange?: (value: string | number, event: React.ChangeEvent<HTMLInputElement>) => any | void
  placeholder?: string
  fieldName?: string | any
  onValueChange?: any
}
