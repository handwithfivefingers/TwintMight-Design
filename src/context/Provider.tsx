import { createContext } from 'react'

interface ThemeProviderProps {
    children: React.ReactNode
    value?: any
}

interface valueProps {
    [key: string]: any
}

const initialConfigs = {
    primaryColor: '',
}

const ThemeContext = createContext(initialConfigs)

const ThemeProvider = ({ children, value = {} }: ThemeProviderProps) => {
    const themesConfigs = {
        ...initialConfigs,
        ...value,
    }
    return <ThemeContext.Provider value={themesConfigs}>{children}</ThemeContext.Provider>
}

export { ThemeContext, ThemeProvider }
