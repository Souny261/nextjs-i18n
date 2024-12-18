import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const t = useTranslations('Index');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1>{t('title')}</h1>
        <Link href={`/about`}>
          <div className='m-4 bg-white p-2 rounded-lg'>
            About
          </div>
        </Link>
      </div>
    </main>
  );
}
