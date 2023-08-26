type addPropertyProps = {
    object: { [key: string]: any }
    key: string
    value: any
}

const getDeepObject = (object: addPropertyProps['object'], arg: string | string[]) => {
    try {
        const argPath = typeof arg === 'string' ? arg : arg.join('.')
        const getDeep = new Function('object', `return object.${argPath}`)
        return getDeep(object)
    } catch (error) {
        console.log('getDeepObject', error)
    }
}

export default getDeepObject
