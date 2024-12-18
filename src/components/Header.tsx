import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LocalSwitcher from './local-switcher';
import { LanguagePicker } from './language-switcher';


export default function Header() {
    const t = useTranslations('Index');

    return (
        <header className='p-4 w-full bg-slate-200'>
            <nav className='flex items-center justify-between'>
                <Link href='/'>{t('title')}</Link>
                <LocalSwitcher />
                <LanguagePicker />
            </nav>
        </header>
    );
}