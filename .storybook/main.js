const svgrPlugin = require('vite-plugin-svgr');

module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-vite',
    },
    viteFinal: config => {
        return {
            ...config,
            plugins: [
                ...config.plugins,
                svgrPlugin({
                    svgrOptions: {
                        icon: true,
                    },
                }),
            ],
        };
    },
};
