module.exports = {
    preset: 'react-native',
    verbose: true,
    transform: {
        '^.+\\.tsx?$': '@swc/jest',
    },
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/node_modules/', '/lib/', '__tests__/__mocks__/', '/storybook-static/'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    resetMocks: true,
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__tests__/__mocks__/fileMock.js',
        '^.+\\.(css|less|scss)$': 'babel-jest',
        '^.+\\.svg': '<rootDir>/__tests__/__mocks__/svg.js',
    },
    collectCoverageFrom: ['src/**/*.{js,ts,tsx}', '!src/**/*.stories.tsx', '!src/types/**/*.ts', '!src/**/*.d.ts', '!src/reportWebVitals.ts'],
    setupFiles: ['jest-canvas-mock'],
    setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
    coverageThreshold: {
        global: {
            statements: 0,
            branches: 0,
            functions: 0,
            lines: 0,
        },
    },
};
