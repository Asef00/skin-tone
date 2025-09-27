import { ImageUploadCard } from '@/app/components/image-upload-card'
import ColorPickerCard from '@/app/components/color-picker-card'
import ResultsCard from '@/app/components/results-card'

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="grid grid-cols-2 gap-16 max-w-7xl mx-auto">
        <div className="flex flex-col gap-[32px]">
          <ImageUploadCard />
          <ColorPickerCard />
        </div>
        <ResultsCard />
      </main>
    </div>
  )
}
