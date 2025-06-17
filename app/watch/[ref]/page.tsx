import { VideoViewer } from "@/components/video/video-viewer"
import { Suspense } from "react"

interface WatchPageProps {
  params: {
    ref: string
  }
}

function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">جاري تحميل صفحة المشاهدة...</p>
      </div>
    </div>
  )
}

export default function WatchPage({ params }: WatchPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Suspense fallback={<LoadingSpinner />}>
        <VideoViewer referralCode={params.ref} />
      </Suspense>
    </div>
  )
}
