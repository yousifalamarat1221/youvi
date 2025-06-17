import { VideoViewer } from "@/components/video/video-viewer"
<<<<<<< HEAD
import members from "@/app/data/members.json"
import { notFound } from "next/navigation"

interface Props {
  params: { ref: string }
}

export default function WatchPage({ params }: Props) {
  const ref = params.ref
  const member = (members as any)[ref]

  if (!member) {
    return notFound()
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center text-green-700 mb-6">
        🎯 صفحة المسوق: <span className="text-blue-600">{member.name}</span>
      </h1>

      <VideoViewer referralCode={ref} videoId={member.videoId} />
    </div>
  )
}
=======
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
>>>>>>> 008814507e9df20a80650fa1380c46ca32316754
