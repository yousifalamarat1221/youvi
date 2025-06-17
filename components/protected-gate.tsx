"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { PricingTiers } from "@/components/pricing-tiers"
import { Features } from "@/components/features"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export function ProtectedGate() {
  const [hasWatchedVideo, setHasWatchedVideo] = useState(false)
  const [countdown, setCountdown] = useState(30)
  const [hasCompleted, setHasCompleted] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")

  const playerRef = useRef<any>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const secureIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const allowedTimeRef = useRef(0)

  useEffect(() => {
    // Check if user has already watched the video (stored in localStorage)
    const watchedStatus = localStorage.getItem("youvi-cash-watched")
    if (watchedStatus === "true") {
      setHasWatchedVideo(true)
      return
    }

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
      if (document.hidden && !hasCompleted) {
        resetCountdown("الخروج من الصفحة أو التبويب - Leaving the page or tab")
      }
    }

    // Prevent right-click and keyboard shortcuts
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.key === "u") ||
        (e.ctrlKey && e.key === "s")
      ) {
        e.preventDefault()
        resetCountdown("محاولة استخدام أدوات المطور - Attempting to use developer tools")
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
  }, [hasCompleted])

  const initializePlayer = () => {
    if (window.YT && window.YT.Player) {
      playerRef.current = new window.YT.Player("yt-player", {
        height: "360",
        width: "640",
        videoId: "RUVLWmdgw1k",
        playerVars: {
          autoplay: 1,
          controls: 1,
          rel: 0,
          modestbranding: 1,
          fs: 0,
          disablekb: 1,
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      })
    }
  }

  const onPlayerReady = () => {
    if (playerRef.current) {
      playerRef.current.setPlaybackRate(1)
      playerRef.current.playVideo()
    }
  }

  const onPlayerStateChange = (event: any) => {
    const YT = window.YT
    if (event.data === YT.PlayerState.PLAYING && !intervalRef.current && !hasCompleted) {
      startCountdown()
    } else if (event.data === YT.PlayerState.PAUSED && !hasCompleted) {
      resetCountdown("إيقاف الفيديو قبل اكتماله - Pausing video before completion")
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

    secureIntervalRef.current = setInterval(() => {
      if (playerRef.current && typeof playerRef.current.getCurrentTime === "function") {
        try {
          const currentTime = Math.floor(playerRef.current.getCurrentTime())
          if (currentTime > allowedTimeRef.current + 1) {
            resetCountdown("تقديم الفيديو - Fast forwarding video")
          } else {
            allowedTimeRef.current = currentTime
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
    allowedTimeRef.current = 0

    if (!hasCompleted) {
      setAlertMessage(
        `🚫 تم اكتشاف محاولة غش - Cheating attempt detected: ${reason}، سيتم إعادة الفيديو من البداية - Video will restart from beginning.`,
      )
      setShowAlert(true)

      if (playerRef.current) {
        try {
          playerRef.current.pauseVideo()
          playerRef.current.seekTo(0)
        } catch (error) {
          console.error("Error resetting video:", error)
        }
      }

      setTimeout(() => setShowAlert(false), 4000)
    }
  }

  const completeViewing = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (secureIntervalRef.current) clearInterval(secureIntervalRef.current)

    setHasCompleted(true)

    // Play success sound
    try {
      const audio = new Audio(
        "https://cdn.pixabay.com/download/audio/2022/10/03/audio_ee78134803.mp3?filename=notification-110113.mp3",
      )
      audio.play().catch(() => {})
    } catch (error) {
      console.log("Could not play success sound")
    }
  }

  const handleContinue = () => {
    // Store in localStorage that user has watched the video
    localStorage.setItem("youvi-cash-watched", "true")
    setHasWatchedVideo(true)
  }

  // If user hasn't watched the video, show the protected gate
  if (!hasWatchedVideo) {
    return (
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col items-center justify-center min-h-screen p-6">
        {/* Alert */}
        {showAlert && (
          <div className="fixed top-4 right-4 z-50 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded animate-bounce max-w-md text-sm">
            {alertMessage}
          </div>
        )}

        {/* Main Header */}
        <div className="text-center mb-8 max-w-5xl">
          <div className="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent mb-6">
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              🚀 شاهد الفيديو الآن
              <br />
              <span className="text-yellow-500">Watch the Video Now</span>
            </h1>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
            <div className="space-y-4 text-lg md:text-xl font-bold leading-relaxed">
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <span className="text-green-600">✨ انضم إلى</span>
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full font-black text-xl">
                  Youvi Cash
                </span>
                <span className="text-green-600">وابدأ رحلتك التسويقية</span>
              </div>

              <div className="flex items-center justify-center gap-3 flex-wrap">
                <span className="text-blue-600">Join</span>
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full font-black text-xl">
                  Youvi Cash
                </span>
                <span className="text-blue-600">and start your marketing journey</span>
              </div>

              <div className="flex items-center justify-center gap-3 flex-wrap">
                <span className="text-purple-600">مع</span>
                <span className="bg-gradient-to-r from-lime-400 to-green-500 text-white px-4 py-2 rounded-full font-black text-xl shadow-lg">
                  YOUSIF TIGANI
                </span>
                <span className="text-purple-600">with</span>
              </div>

              <div className="border-t border-gray-200 pt-4 mt-6">
                <div className="text-pink-600 mb-2">
                  💸 احصل على <span className="bg-pink-100 px-3 py-1 rounded-full">عمولات من كل إحالة</span> ومشاهدات
                  مضمونة
                </div>
                <div className="text-pink-600">
                  Get <span className="bg-pink-100 px-3 py-1 rounded-full">commissions from every referral</span> and
                  guaranteed views
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-2xl p-4 border-2 border-red-200">
                <div className="text-red-600 text-2xl font-black">
                  🕒 فقط <span className="text-3xl animate-pulse">30 ثانية</span> تفصلك عن الفرصة!
                </div>
                <div className="text-red-600 text-xl font-bold mt-1">
                  Only <span className="text-2xl animate-pulse">30 seconds</span> separate you from the opportunity!
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section Header */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-green-200 mb-6 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            <span className="text-green-600">🎥 شاهد الفيديو دون تلاعب لمدة 30 ثانية</span>
            <br />
            <span className="text-blue-600 text-xl md:text-2xl">
              Watch the video without manipulation for 30 seconds
            </span>
          </h2>
        </div>

        {/* Video Player */}
        <div className="bg-white rounded-2xl p-4 shadow-2xl border border-gray-200 mb-6">
          <div id="yt-player" className="w-full max-w-xl aspect-video rounded-xl overflow-hidden"></div>
        </div>

        {/* Timer */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-blue-200 mb-6">
          <div
            className={`text-2xl md:text-3xl font-black text-center ${
              countdown <= 10 ? "text-red-600 animate-pulse" : "text-blue-600"
            }`}
          >
            {hasCompleted ? (
              <div className="text-green-600">
                <div className="text-4xl mb-2">✅</div>
                <div>تم الانتهاء من المشاهدة</div>
                <div className="text-xl">Viewing completed successfully</div>
              </div>
            ) : (
              <div>
                <div className="text-5xl mb-2">⏳</div>
                <div>{countdown} ثانية متبقية</div>
                <div className="text-xl">{countdown} seconds remaining</div>
              </div>
            )}
          </div>
        </div>

        {/* Continue Button */}
        {hasCompleted && (
          <div className="text-center animate-bounce mb-6">
            <Button
              onClick={handleContinue}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-2xl font-bold text-xl shadow-2xl border-2 border-green-300 transform hover:scale-105 transition-all duration-200"
            >
              <div className="text-center">
                <div className="text-2xl mb-1">✅</div>
                <div>يمكنك الآن المتابعة</div>
                <div className="text-sm">You can now continue</div>
              </div>
            </Button>
          </div>
        )}

        {/* Security Notice */}
        <div className="max-w-3xl bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-2xl p-6 shadow-xl">
          <div className="text-center mb-4">
            <div className="text-3xl mb-2">⚠️</div>
            <h3 className="font-black text-yellow-800 text-xl">تنبيه أمني - Security Warning</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <h4 className="font-bold text-yellow-800 mb-2">العربية:</h4>
              <ul className="text-yellow-700 space-y-1">
                <li>🚫 لا تغادر الصفحة أثناء المشاهدة</li>
                <li>⏸️ لا توقف الفيديو قبل انتهاء 30 ثانية</li>
                <li>⏩ لا تحاول تقديم الفيديو</li>
                <li>🔄 أي محاولة غش ستعيد العداد للصفر</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-yellow-800 mb-2">English:</h4>
              <ul className="text-yellow-700 space-y-1">
                <li>🚫 Don't leave the page during viewing</li>
                <li>⏸️ Don't stop the video before 30 seconds</li>
                <li>⏩ Don't try to fast forward the video</li>
                <li>🔄 Any cheating attempt will reset the timer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // If user has watched the video, show the main website
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <Hero />
      <HowItWorks />
      <PricingTiers />
      <Features />
      <Footer />
    </div>
  )
}
