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

export default function ColorPickerCard() {
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
        <CardTitle>🎨 Select Your Colors</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center gap-4">
        <EyeDropper label="Skin Tone" onColorChange={setSkinTone} />
        <EyeDropper label="Hair Color" onColorChange={setHairColor} />
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button
          className="w-full cursor-pointer"
          onClick={handleGenerate}
          disabled={!skinTone || !hairColor || isGenerating}
        >
          {isGenerating ? 'Generating...' : 'Generate'}
        </Button>
      </CardFooter>
    </Card>
  )
}
