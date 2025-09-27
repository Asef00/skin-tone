import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useTranslations } from 'next-intl'
import { Palette } from 'lucide-react'

export default function ResultsCard() {
  const t = useTranslations('ResultsCard')
  const results = null

  return (
    <>
      {results ? (
        <Card>
          <CardHeader>
            <CardTitle>{t('title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <p className="text-sm text-gray-500">{t('skinTone')}</p>
                <p className="text-sm text-gray-500">{t('hairColor')}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="bg-transparent border-none">
          <CardContent className="flex flex-col items-center justify-center py-12 px-6 text-center">
            <div className="w-16 h-16 mb-4 rounded-full flex items-center justify-center">
              <Palette size={64} />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              {t('emptyState.title')}
            </h3>
            <p className="text-sm max-w-sm leading-relaxed">
              {t('emptyState.description')}
            </p>
          </CardContent>
        </Card>
      )}
    </>
  )
}
