import Link from 'next/link'
import { ModeToggle } from './theme-toggle'
import { LanguageSwitcher } from './language-switcher'
import { useTranslations } from 'next-intl'

export default function Navigation() {
  const t = useTranslations('Navigation')

  return (
    <nav className="flex justify-between gap-4 items-center p-4 max-w-7xl mx-auto">
      <Link href="/" className="text-3xl font-bold mr-4">
        Lustra
      </Link>
      <div className="flex gap-4 md:gap-8 items-center">
        <Link href="/">{t('home')}</Link>
        <Link href="/about">{t('about')}</Link>
        <Link href="/contact">{t('contact')}</Link>
      </div>
      <div className="flex gap-2 items-center">
        <LanguageSwitcher />
        <ModeToggle />
      </div>
    </nav>
  )
}
