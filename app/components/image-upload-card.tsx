import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export function ImageUploadCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>📸 Upload Your Photo</CardTitle>
      </CardHeader>
      <CardContent>
        <Input id="picture" type="file" />
      </CardContent>
    </Card>
  )
}
