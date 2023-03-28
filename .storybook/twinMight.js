// .storybook/YourTheme.js

import { create } from '@storybook/theming'

export default create({
    base: 'light',
    brandTitle: 'Twin Might',
    brandUrl: 'https://truyenmai.com',
    brandImage: 'https://beta.truyenmai.com/logo.png',
    brandTarget: '_self',
    appBg: 'white',
    appBorderColor: 'grey',
    appBorderRadius: 4,

    appContentBg: '#eee',

    // Typography
    fontBase: 'Roboto, "Nunito Sans" , sans-serif',
    fontCode: 'monospace',
})
