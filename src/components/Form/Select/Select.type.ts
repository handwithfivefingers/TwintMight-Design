type valueOptions = string | number | string[] | number[] | any[]

interface ISelect {
    label?: JSX.Element | string
    value?: valueOptions
    name?: string | any[string]
    onChange?: (value: valueOptions, event: React.MouseEvent) => any | void
    defaultValue?: any
    placeholder?: string
    readOnly?: boolean
    options: Options[]
}

interface Options {
    label: JSX.Element | string | number
    value: valueOptions
}

export type { Options, ISelect, valueOptions }
