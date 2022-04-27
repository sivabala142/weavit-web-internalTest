import React from 'react';

import App from '../src/App';
import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

jest.mock('react-i18next', () => ({
    // this mock makes sure any components using the translate hook can use it without a warning being shown
    useTranslation: () => {
        return {
            t: (str: string) => str,
            i18n: {
                changeLanguage: () => new Promise(() => 'test'),
            },
        };
    },
}));

global.window = Object.create(window);
const url = 'http://dummy.com';
Object.defineProperty(window, 'location', {
    value: {
        href: url,
    },
    writable: true,
});

describe('render the app', () => {
    it('should render without crashing', () => {
        const { asFragment } = render(
            <MemoryRouter>
                <App />
            </MemoryRouter>,
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('should render with token expired', () => {
        const { asFragment } = render(
            <MemoryRouter>
                <App />
            </MemoryRouter>,
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
