'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import Image from 'next/image'

export function ImageUploadCard() {
  const [image, setImage] = useState<string | null>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImage(URL.createObjectURL(file))
    }
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>📸 Upload Your Photo</CardTitle>
      </CardHeader>
      <CardContent>
        <Input
          id="picture"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
        {image && (
          <Image
            src={image}
            alt="Uploaded"
            className="w-full"
            width={300}
            height={300}
          />
        )}
      </CardContent>
    </Card>
  )
}
