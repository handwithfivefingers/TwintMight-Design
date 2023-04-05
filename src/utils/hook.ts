import { useContext, useEffect, useLayoutEffect } from 'react'
import { ThemeContext } from '../context'

export const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect
// export const useThemes = () => {
//     const value = useContext(ThemeContext)
//     return value
// }
