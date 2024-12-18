import { useTranslations } from 'next-intl';
import React from 'react'

export default function page() {
    const t = useTranslations('Index');
    return (
        <div className='flex flex-col'>
            About Page
            <div>
                {t('title')}
            </div>
            <div>
                ຍິນດີຕ້ອນຮັບ
            </div>
        </div>
    )
}
