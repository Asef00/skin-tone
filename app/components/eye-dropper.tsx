'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface EyeDropperProps {
  label: string
}

export function EyeDropper({ label }: EyeDropperProps) {
  const hasEyeDropperSupport = () => 'EyeDropper' in window
  const [selectedColor, setSelectedColor] = useState('#ffffff')

  const pickColor = async () => {
    if (!hasEyeDropperSupport()) {
      console.warn('EyeDropper API not supported in this browser.')
      return
    }

    try {
      const eyeDropper = new window.EyeDropper()
      const result = await eyeDropper.open()
      setSelectedColor(result.sRGBHex)
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
