import { VideoViewer } from "@/components/video/video-viewer"
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