'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

interface EyeDropperProps {
  label: string
  onColorChange: (color: string) => void
}

export function EyeDropper({ label, onColorChange }: EyeDropperProps) {
  const t = useTranslations('EyeDropper')
  const hasEyeDropperSupport = () => 'EyeDropper' in window
  const [selectedColor, setSelectedColor] = useState('#ffffff')

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
        className="w-8 h-8 rounded-md"
        style={{ backgroundColor: selectedColor }}
      ></div>
      {label}
    </Button>
  )
}
