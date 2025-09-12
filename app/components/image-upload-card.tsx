'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

export function ImageUploadCard() {
  const [image, setImage] = useState<string | null>(null)

  const t = useTranslations('ImageUploadCard')

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImage(URL.createObjectURL(file))
    }
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('title')}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Input
          id="picture"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
        {image && (
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 cursor-pointer text-gray-500 text-2xl"
              onClick={() => setImage(null)}
              title={t('removeImage')}
            >
              &times;
            </Button>
            <Image
              src={image}
              alt={t('altText')}
              className="w-full rounded-md"
              width={300}
              height={300}
            />
          </div>
        )}
      </CardContent>
    </Card>
  )
}
