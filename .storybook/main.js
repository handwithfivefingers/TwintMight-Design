module.exports = {
    stories: ['../src/**/*.mdx', '../src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-mdx-gfm',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    features: {
        storyStoreV7: true,
    },
    async viteFinal(config) {
        return {
            ...config,
            define: {
                ...config.define,
                global: 'window',
            },
        }
    },
    docs: {
        autodocs: false,
    },
}
