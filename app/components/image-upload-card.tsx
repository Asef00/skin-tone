'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useState, useRef } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import { Label } from '@/components/ui/label'

export function ImageUploadCard() {
  const [image, setImage] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const t = useTranslations('ImageUploadCard')

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImage(URL.createObjectURL(file))
    }
  }

  const handleRemoveImage = () => {
    setImage(null)
    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('title')}</CardTitle>
        <p className="text-sm text-muted-foreground">{t('subtitle')}</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {!image && (
          <Label
            htmlFor="hiddenFileInput"
            onClick={handleButtonClick}
            className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center block"
          >
            <p className="text-sm text-muted-foreground mb-2">
              {t('uploadPrompt')}
            </p>
            <p className="text-xs text-muted-foreground mb-4">
              {t('requirements')}
            </p>
            <p className="text-xs text-primary font-medium">{t('uploadTip')}</p>
          </Label>
        )}
        <Input
          id="picture"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          ref={inputRef}
          className="hidden"
        />
        {image && (
          <div className="relative">
            <div className="mb-2 p-2 bg-green-50 border border-green-200 rounded-md">
              <p className="text-sm text-green-700 font-medium">
                {t('uploadSuccess')}
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 cursor-pointer text-gray-500 text-2xl"
              onClick={handleRemoveImage}
              title={t('removeImage')}
            >
              &times;
            </Button>
            <TransformWrapper>
              <TransformComponent
                wrapperClass="!w-full !h-64 rounded-md"
                contentClass="!w-full !h-full"
              >
                <Image
                  src={image}
                  alt={t('altText')}
                  className="object-cover"
                  fill
                />
              </TransformComponent>
            </TransformWrapper>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
