# TwintMight-Design

### Install Package

```
npm i @handwithfivefingers/twinmight-design
```

### Import CSS

```
import "@handwithfivefingers/twinmight-design/style.css"
```

### Using Component

```
import { Component } from "@handwithfivefingers/twinmight-design"
```

### Config Provider

```
#File: App.tsx
import { TMProvider } from "@handwithfivefingers/twinmight-design"

export default App({children} : { children: React.ReactNode}) {
    const configs = {
        primaryColor: 'red',
        secondaryColor: 'blue',
    }
    return (
        <TMProvider configs={configs}>
            {children}
        </TMProvider>
    )
}


#File Consumer
import { theme } from "@handwithfivefingers/twinmight-design"

const { useProviderData, useProviderAPI } = theme;
export default ChildComponent(props : IProps) {
    const providerData = useProviderData();
    console.log(providerData)
    return (
        <>
            Hello world
        </>
    )
}




```
