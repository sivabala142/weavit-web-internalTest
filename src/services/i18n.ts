import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../languages/en-HK.json';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en,
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .init({
        resources,
        detection: {
            // order and from where user language should be detected
            order: ['querystring', 'localStorage', 'cookie', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
        },
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
