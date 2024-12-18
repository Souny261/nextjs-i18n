import { NextIntlClientProvider } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { cookies, headers } from 'next/headers';

export default getRequestConfig(async () => {
    let locale = 'en';
    // Retrieve locale from cookies if available
    const cookieLocale = cookies().get('locale')?.value;
    if (cookieLocale) {
        locale = cookieLocale;
    }
    try {
        const messages = (await import(`../i18n/${locale}.json`)).default;
        return {
            locale,
            messages
        };
    } catch (error) {
        console.error(`Error loading messages for locale "${locale}":`, error);
        // Fallback to default locale if there was an error
        const fallbackMessages = (await import(`../i18n/en.json`)).default;
        return {
            locale: 'en',
            messages: fallbackMessages
        };
    }
});