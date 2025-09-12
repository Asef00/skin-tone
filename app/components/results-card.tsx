import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useTranslations } from 'next-intl'

export default function ResultsCard() {
  const t = useTranslations('ResultsCard')

  return (
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
  )
}
