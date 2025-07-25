import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function ResultsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Results</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-500">Skin Tone</p>
            <p className="text-sm text-gray-500">Hair Color</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
