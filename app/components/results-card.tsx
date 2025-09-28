import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card'
import { Button } from '@/app/components/ui/button'
import { useTranslations } from 'next-intl'
import { Palette, ArrowLeft } from 'lucide-react'

export default function ResultsCard() {
  const t = useTranslations('ResultsCard')
  const results = null

  const features = [
    t('emptyState.features.0'),
    t('emptyState.features.1'),
    t('emptyState.features.2'),
    t('emptyState.features.3'),
  ]

  return (
    <>
      {results ? (
        // results
        <Card>
          <CardHeader>
            <CardTitle>{t('title')}</CardTitle>
            <p className="text-sm text-muted-foreground">{t('subtitle')}</p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">
                  {t('success.title')}
                </h4>
                <p className="text-sm text-green-700">
                  {t('success.subtitle')}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 border rounded-lg">
                  <h4 className="font-medium mb-2">{t('skinTone')}</h4>
                  <p className="text-sm text-muted-foreground">
                    Your perfect match
                  </p>
                </div>
                <div className="p-3 border rounded-lg">
                  <h4 className="font-medium mb-2">{t('hairColor')}</h4>
                  <p className="text-sm text-muted-foreground">
                    Ideal hair colors
                  </p>
                </div>
                <div className="p-3 border rounded-lg">
                  <h4 className="font-medium mb-2">{t('eyeColor')}</h4>
                  <p className="text-sm text-muted-foreground">
                    Eye-enhancing colors
                  </p>
                </div>
              </div>
              <div className="flex gap-2 pt-4">
                <Button variant="outline" className="flex-1">
                  {t('shareResults')}
                </Button>
                <Button className="flex-1">{t('saveResults')}</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        // empty state
        <div className="flex flex-col items-center justify-center py-12 px-6 text-center rounded-xl backdrop-blur-xs shadow-sm">
          <div className="w-16 h-16 mb-4 rounded-full flex items-center justify-center">
            <Palette className="w-8 h-8 text-purple-500" />
          </div>
          <h3 className="text-lg font-semibold mb-2">
            {t('emptyState.title')}
          </h3>
          <p className="text-sm max-w-sm leading-relaxed mb-4">
            {t('emptyState.description')}
          </p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-muted-foreground mb-6">
            {features.map((feature, index) => (
              <div className="flex items-center gap-2" key={index}>
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm">
            <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
            <span className="font-medium">{t('emptyState.cta')}</span>
          </div>
        </div>
      )}
    </>
  )
}
