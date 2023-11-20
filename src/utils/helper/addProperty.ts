type addPropertyProps = {
  object: { [key: string]: any }
  key: string
  value: any
}

const addProperty = (object: addPropertyProps['object'], key: addPropertyProps['key'], value: addPropertyProps['value']) => {
  let keys: string | string[] = key.split('.')
  while (keys.length > 1) {
    let k: string | any = keys.shift()

    if (!object.hasOwnProperty(k)) {
      object[k] = {}
    }
    object = object[k]
  }
  object[keys[0]] = value
}

export default addProperty
