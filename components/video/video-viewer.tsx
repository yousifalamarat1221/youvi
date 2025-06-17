"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Shield, Eye, Clock, CheckCircle, AlertTriangle, Wallet } from "lucide-react"

interface VideoViewerProps {
  referralCode: string
}

export function VideoViewer({ referralCode }: VideoViewerProps) {
  const [countdown, setCountdown] = useState(30)
  const [isCompleted, setIsCompleted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [attempts, setAttempts] = useState(0)
  const [showWarning, setShowWarning] = useState(false)
  const [warningMessage, setWarningMessage] = useState("")
  const [isPlayerReady, setIsPlayerReady] = useState(false)

  const playerRef = useRef<any>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const secureIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const allowedTimeRef = useRef(0)

  useEffect(() => {
    // Load YouTube API
    if (!window.YT) {
      const tag = document.createElement("script")
      tag.src = "https://www.youtube.com/iframe_api"
      tag.async = true
      document.head.appendChild(tag)

      window.onYouTubeIframeAPIReady = initializePlayer
    } else {
      initializePlayer()
    }

    // Prevent page visibility changes
    const handleVisibilityChange = () => {
      if (document.hidden && !isCompleted && isPlaying) {
        resetCountdown("الخروج من الصفحة أو التبويب")
      }
    }

    // Prevent right-click and keyboard shortcuts
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent F12, Ctrl+Shift+I, Ctrl+U, etc.
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.key === "u") ||
        (e.ctrlKey && e.key === "s")
      ) {
        e.preventDefault()
        resetCountdown("محاولة استخدام أدوات المطور")
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)
    document.addEventListener("contextmenu", handleContextMenu)
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (secureIntervalRef.current) clearInterval(secureIntervalRef.current)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
      document.removeEventListener("contextmenu", handleContextMenu)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isCompleted, isPlaying])

  const initializePlayer = () => {
    if (window.YT && window.YT.Player) {
      playerRef.current = new window.YT.Player("youtube-player", {
        height: "360",
        width: "640",
        videoId: "RUVLWmdgw1k", // يمكنك تغيير هذا إلى أي فيديو يوتيوب
        playerVars: {
          autoplay: 1,
          controls: 1,
          rel: 0,
          modestbranding: 1,
          fs: 0,
          disablekb: 1,
          iv_load_policy: 3,
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      })
    }
  }

  const onPlayerReady = () => {
    setIsPlayerReady(true)
    if (playerRef.current) {
      playerRef.current.setPlaybackRate(1)
      playerRef.current.playVideo()
    }
  }

  const onPlayerStateChange = (event: any) => {
    const YT = window.YT
    if (event.data === YT.PlayerState.PLAYING && !intervalRef.current && !isCompleted) {
      setIsPlaying(true)
      startCountdown()
    } else if (event.data === YT.PlayerState.PAUSED && !isCompleted && isPlaying) {
      resetCountdown("إيقاف الفيديو قبل اكتماله")
    } else if (event.data === YT.PlayerState.ENDED && !isCompleted) {
      resetCountdown("انتهى الفيديو قبل اكتمال العداد")
    }
  }

  const startCountdown = () => {
    intervalRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          completeViewing()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    // Security check for video manipulation
    secureIntervalRef.current = setInterval(() => {
      if (playerRef.current && typeof playerRef.current.getCurrentTime === "function") {
        try {
          const currentTime = Math.floor(playerRef.current.getCurrentTime())
          if (currentTime > allowedTimeRef.current + 2) {
            resetCountdown("تقديم الفيديو")
          } else {
            allowedTimeRef.current = Math.max(allowedTimeRef.current, currentTime)
          }
        } catch (error) {
          console.error("Error checking video time:", error)
        }
      }
    }, 1000)
  }

  const resetCountdown = (reason: string) => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (secureIntervalRef.current) clearInterval(secureIntervalRef.current)

    intervalRef.current = null
    secureIntervalRef.current = null

    setCountdown(30)
    setIsPlaying(false)
    setAttempts((prev) => prev + 1)
    allowedTimeRef.current = 0

    if (!isCompleted) {
      setWarningMessage(reason)
      setShowWarning(true)

      if (playerRef.current && typeof playerRef.current.seekTo === "function") {
        try {
          playerRef.current.pauseVideo()
          playerRef.current.seekTo(0)
        } catch (error) {
          console.error("Error resetting video:", error)
        }
      }

      // Hide warning after 3 seconds
      setTimeout(() => setShowWarning(false), 3000)
    }
  }

  const completeViewing = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (secureIntervalRef.current) clearInterval(secureIntervalRef.current)

    setIsCompleted(true)
    setIsPlaying(false)

    // Play success sound
    try {
      const audio = new Audio(
        "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT",
      )
      audio.play().catch(() => {})
    } catch (error) {
      console.log("Could not play success sound")
    }

    // Record the referral
    recordReferral(referralCode)
  }

  const recordReferral = async (refCode: string) => {
    try {
      const response = await fetch("/api/referrals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refCode,
          viewerInfo: {
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            attempts: attempts + 1,
          },
        }),
      })

      const result = await response.json()
      console.log("Referral recorded:", result)
    } catch (error) {
      console.error("Failed to record referral:", error)
    }
  }

  const progress = ((30 - countdown) / 30) * 100

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Wallet className="h-8 w-8 text-blue-600 ml-2" />
          <h1 className="text-3xl font-bold text-gray-900">يوفي كاش المحمية</h1>
          <Shield className="h-8 w-8 text-green-600 mr-2" />
        </div>

        <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-xl mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed">
            🚀 <span className="text-yellow-600">شاهد الفيديو الآن</span> لتفتح باب أرباحك!
            <br />✨ انضم إلى <span className="text-cyan-600 font-bold">Youvi Cash</span> وابدأ رحلتك التسويقية
            <br />💸 احصل على <span className="text-pink-600">عمولات من كل إحالة</span> ومشاهدات مضمونة
            <br />🕒 فقط <span className="text-red-600 font-bold">30 ثانية</span> تفصلك عن الفرصة!
          </h2>
        </div>
      </div>

      {/* Warning Alert */}
      {showWarning && (
        <div className="fixed top-4 right-4 z-50 animate-bounce">
          <Card className="border-red-500 border-2 bg-red-50 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center text-red-700">
                <AlertTriangle className="h-5 w-5 ml-2" />
                <span className="font-semibold">تم اكتشاف محاولة غش!</span>
              </div>
              <p className="text-sm text-red-600 mt-1">{warningMessage}</p>
              <p className="text-xs text-red-500 mt-1">سيتم إعادة الفيديو من البداية</p>
            </CardContent>
          </Card>
        </div>
      )}

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden border-2 border-blue-200">
              <CardContent className="p-0">
                <div className="relative bg-black">
                  <div id="youtube-player" className="w-full aspect-video"></div>

                  {!isPlayerReady && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                      <div className="text-white text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                        <p>جاري تحميل الفيديو...</p>
                      </div>
                    </div>
                  )}

                  {/* Security overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: "transparent" }}
                    onContextMenu={(e) => e.preventDefault()}
                  ></div>
                </div>
              </CardContent>
            </Card>

            {/* Progress Bar */}
            <Card className="mt-4">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">تقدم المشاهدة</span>
                  <span className="text-sm text-gray-500">{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-3" />
                <p className="text-xs text-gray-500 mt-2">
                  {isCompleted ? "تم الانتهاء من المشاهدة بنجاح!" : `${countdown} ثانية متبقية`}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Timer */}
            <Card
              className={`${
                isCompleted
                  ? "border-green-500 bg-green-50"
                  : countdown <= 10
                    ? "border-red-500 bg-red-50 animate-pulse"
                    : "border-blue-500 bg-blue-50"
              }`}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  {isCompleted ? (
                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto animate-bounce" />
                  ) : (
                    <Clock className="h-16 w-16 text-blue-600 mx-auto" />
                  )}
                </div>

                <div
                  className={`text-3xl font-bold mb-2 ${
                    isCompleted ? "text-green-600" : countdown <= 10 ? "text-red-600" : "text-blue-600"
                  }`}
                >
                  {isCompleted ? "✅ مكتمل" : `⏳ ${countdown}`}
                </div>

                <p className="text-gray-600">{isCompleted ? "تم الانتهاء من المشاهدة" : "ثانية متبقية"}</p>
              </CardContent>
            </Card>

            {/* Stats */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-3">إحصائيات المشاهدة</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">كود الإحالة:</span>
                    <span className="font-mono text-blue-600">{referralCode}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">محاولات المشاهدة:</span>
                    <span className="font-semibold">{attempts + 1}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">الحالة:</span>
                    <span
                      className={`font-semibold ${
                        isCompleted ? "text-green-600" : isPlaying ? "text-blue-600" : "text-gray-500"
                      }`}
                    >
                      {isCompleted ? "مكتملة ✅" : isPlaying ? "قيد المشاهدة ▶️" : "في الانتظار ⏸️"}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Button */}
            {isCompleted && (
              <Card className="border-green-500 bg-green-50 animate-pulse">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-bold text-green-800 mb-2">تهانينا! 🎉</h3>
                  <p className="text-green-700 text-sm mb-4">تم احتساب مشاهدتك بنجاح</p>
                  <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                    <a href="/register">
                      <Eye className="h-4 w-4 ml-2" />
                      انضم إلى يوفي كاش الآن
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Security Notice */}
            <Card className="border-yellow-500 bg-yellow-50">
              <CardContent className="p-4">
                <div className="flex items-center mb-2">
                  <Shield className="h-5 w-5 text-yellow-600 ml-2" />
                  <h4 className="font-semibold text-yellow-800">تنبيه أمني</h4>
                </div>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>🚫 لا تغادر الصفحة أثناء المشاهدة</li>
                  <li>⏸️ لا توقف الفيديو قبل انتهاء 30 ثانية</li>
                  <li>⏩ لا تحاول تقديم الفيديو</li>
                  <li>🔄 أي محاولة غش ستعيد العداد للصفر</li>
                  <li>🛡️ الصفحة محمية ضد التلاعب</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
