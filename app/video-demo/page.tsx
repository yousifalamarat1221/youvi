import { VideoViewer } from "@/components/video/video-viewer"

export default function VideoDemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <VideoViewer referralCode="demo_user" />
    </div>
  )
}
