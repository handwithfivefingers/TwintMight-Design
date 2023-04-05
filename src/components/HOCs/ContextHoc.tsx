import { useContext } from 'react'
import { ThemeContext, ThemeProvider } from '../../context'
// import { useThemes } from '../../utils/hook'
const addBindTo = () => (Component: React.ReactNode | any) => {
    // const context = useThemes()
    const context = useContext(ThemeContext)
    console.log('context', context)
    return (
        <ThemeProvider>
            <Component />
        </ThemeProvider>
    )
}

export { addBindTo }
