'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface EyeDropperProps {
  label: string
  onColorChange: (color: string) => void
}

export function EyeDropper({ label, onColorChange }: EyeDropperProps) {
  const hasEyeDropperSupport = () => 'EyeDropper' in window
  const [selectedColor, setSelectedColor] = useState('#ffffff')

  const pickColor = async () => {
    if (!hasEyeDropperSupport()) {
      console.warn('EyeDropper API not supported in this browser.')
      return
    }
    try {
      // @ts-expect-error - EyeDropper is not defined in the global scope
      const eyeDropper = new window.EyeDropper()
      const result = await eyeDropper.open()
      setSelectedColor(result.sRGBHex)
      onColorChange(result.sRGBHex)
    } catch (e) {
      console.error('EyeDropper error:', e)
    }
  }

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        onClick={pickColor}
        size="lg"
        className="pr-1 cursor-pointer"
      >
        {label}
        <div
          className="w-14 h-8 rounded-md"
          style={{ backgroundColor: selectedColor }}
        ></div>
      </Button>
    </div>
  )
}
