'use client'
import { useState } from 'react'
import { Button } from '@/app/components/ui/button'
import { useTranslations } from 'next-intl'

interface EyeDropperProps {
  label: string
  defaultColor?: string
  onColorChange: (color: string) => void
}

export function EyeDropper({
  label,
  onColorChange,
  defaultColor = '#F4E4C1',
}: EyeDropperProps) {
  const t = useTranslations('EyeDropper')
  const hasEyeDropperSupport = () => 'EyeDropper' in window
  const [selectedColor, setSelectedColor] = useState(defaultColor)

  const pickColor = async () => {
    if (!hasEyeDropperSupport()) {
      console.warn(t('notSupported'))
      return
    }
    try {
      // @ts-expect-error - EyeDropper is not defined in the global scope
      const eyeDropper = new window.EyeDropper()
      const result = await eyeDropper.open()
      setSelectedColor(result.sRGBHex)
      onColorChange(result.sRGBHex)
    } catch (e) {
      console.error(t('error'), e)
    }
  }

  return (
    <Button
      variant="outline"
      onClick={pickColor}
      size="lg"
      className="cursor-pointer p-1 justify-start lg:text-xs xl:text-sm"
    >
      <div
        className="w-8 h-8 rounded-md shadow-sm border border-border"
        style={{ backgroundColor: selectedColor }}
      ></div>
      {label}
    </Button>
  )
}
