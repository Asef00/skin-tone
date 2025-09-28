'use client'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card'
import { EyeDropper } from './eye-dropper'
import { Button } from '@/app/components/ui/button'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import {
  TooltipTrigger,
  TooltipContent,
  Tooltip,
} from '@/app/components/ui/tooltip'

export default function ColorPickerCard() {
  const t = useTranslations('ColorPickerCard')
  const [skinTone, setSkinTone] = useState<string | null>(null)
  const [hairColor, setHairColor] = useState<string | null>(null)
  const [eyeColor, setEyeColor] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const inputBoxes = [
    {
      label: t('skinTone'),
      description: t('skinToneDescription'),
      tip: t('colorTips.skinTone'),
      onColorChange: setSkinTone,
      defaultColor: '#F4E4C1', // Warm beige - light-medium skin tone
    },
    {
      label: t('hairColor'),
      description: t('hairColorDescription'),
      tip: t('colorTips.hairColor'),
      onColorChange: setHairColor,
      defaultColor: '#8B4513', // Saddle brown - common natural hair color
    },
    {
      label: t('eyeColor'),
      description: t('eyeColorDescription'),
      tip: t('colorTips.eyeColor'),
      onColorChange: setEyeColor,
      defaultColor: '#4A5568', // Warm gray - common eye color
    },
  ]

  const handleGenerate = () => {
    setIsGenerating(true)
    setTimeout(() => {
      console.log('generate', skinTone, hairColor, eyeColor)
      setIsGenerating(false)
    }, 3000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('title')}</CardTitle>
        <p className="text-sm text-muted-foreground">{t('subtitle')}</p>
      </CardHeader>
      <CardContent className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {inputBoxes.map((box) => (
          <div className="flex flex-col gap-2" key={box.label}>
            <EyeDropper
              label={box.label}
              onColorChange={box.onColorChange}
              defaultColor={box.defaultColor}
            />
            <Tooltip delayDuration={1000}>
              <TooltipTrigger>
                <p className="text-xs text-muted-foreground">
                  {box.description}
                </p>
              </TooltipTrigger>
              <TooltipContent side="bottom">{box.tip}</TooltipContent>
            </Tooltip>
          </div>
        ))}
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button
          className="w-full cursor-pointer"
          onClick={handleGenerate}
          disabled={!skinTone || !hairColor || !eyeColor || isGenerating}
        >
          {isGenerating ? t('generating') : t('generate')}
        </Button>
      </CardFooter>
    </Card>
  )
}
