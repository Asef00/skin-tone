import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { EyeDropper } from './eye-dropper'

export default function ColorPickerCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>🎨 Select Your Colors</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center gap-4">
        <EyeDropper label="Skin Tone" />
        <EyeDropper label="Hair Color" />
      </CardContent>
    </Card>
  )
}
