'use client'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { EyeDropper } from './eye-dropper'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

export default function ColorPickerCard() {
  const t = useTranslations('ColorPickerCard')
  const [skinTone, setSkinTone] = useState<string | null>(null)
  const [hairColor, setHairColor] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = () => {
    setIsGenerating(true)
    setTimeout(() => {
      console.log('generate', skinTone, hairColor)
      setIsGenerating(false)
    }, 3000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('title')}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center gap-4">
        <EyeDropper label={t('skinTone')} onColorChange={setSkinTone} />
        <EyeDropper label={t('hairColor')} onColorChange={setHairColor} />
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button
          className="w-full max-w-xs cursor-pointer"
          onClick={handleGenerate}
          disabled={!skinTone || !hairColor || isGenerating}
        >
          {isGenerating ? t('generating') : t('generate')}
        </Button>
      </CardFooter>
    </Card>
  )
}
