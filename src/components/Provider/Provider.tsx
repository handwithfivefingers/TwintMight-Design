import { createContext, useContext, useMemo, useReducer, useState } from 'react'

export interface IConfigsProvider {
    primaryColor?: string
}

export interface AuthAPI {
    onUpdateAuthenticate: (...arg: any) => void
    onUpdateAuthenticating: (...arg: any) => void
    onUpdateFirstRender: (...arg: any) => void
    onUpdateUser: (...arg: any) => void
}

const initState = {
    primaryColor: '',
}

const TMConfigContext = createContext<IConfigsProvider>(initState)

const TMConfigAPI = createContext<AuthAPI>({} as AuthAPI)

const TMProvider = ({
    children,
    configs,
    reducer,
    apisFunction,
}: {
    children: React.ReactNode
    configs?: IConfigsProvider
    reducer?: any
    apisFunction?: any
}) => {
    const [state, dispatch] = useReducer(reducer, configs ? configs : initState)
    const api: any = useMemo(() => {
        return {}
    }, [])
    return (
        <TMConfigAPI.Provider value={api}>
            <TMConfigContext.Provider value={state as any}>{children}</TMConfigContext.Provider>
        </TMConfigAPI.Provider>
    )
}

const useProviderData = () => useContext(TMConfigContext)
const useProviderAPI = () => useContext(TMConfigAPI)

TMProvider.useProviderData = useProviderData
TMProvider.useProviderAPI = useProviderAPI

export default TMProvider
