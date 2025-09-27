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
import {
  TooltipTrigger,
  TooltipContent,
  Tooltip,
} from '@/components/ui/tooltip'

interface InputBoxProps {
  label: string
  description: string
  tip: string
  onColorChange: (color: string) => void
}

function InputBox({ label, description, tip, onColorChange }: InputBoxProps) {
  return (
    <div className="flex flex-col gap-2">
      <EyeDropper label={label} onColorChange={onColorChange} />
      <Tooltip delayDuration={1000}>
        <TooltipTrigger>
          <p className="text-xs text-muted-foreground">{description}</p>
        </TooltipTrigger>
        <TooltipContent side="bottom">{tip}</TooltipContent>
      </Tooltip>
    </div>
  )
}

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
    },
    {
      label: t('hairColor'),
      description: t('hairColorDescription'),
      tip: t('colorTips.hairColor'),
      onColorChange: setHairColor,
    },
    {
      label: t('eyeColor'),
      description: t('eyeColorDescription'),
      tip: t('colorTips.eyeColor'),
      onColorChange: setEyeColor,
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
      <CardContent className="grid grid-cols-3 gap-4">
        {inputBoxes.map((box) => (
          <InputBox
            key={box.label}
            label={box.label}
            description={box.description}
            tip={box.tip}
            onColorChange={box.onColorChange}
          />
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
