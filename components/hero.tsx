import { Button } from "@/components/ui/button"
import { ArrowLeft, Play, Users, DollarSign } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-6xl mx-auto">
          {/* Main Title */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                نظام تسويق إلكتروني ذكي
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent text-4xl md:text-6xl">
                Smart Electronic Marketing System
              </span>
            </h1>

            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent text-3xl md:text-5xl font-black mb-8">
              <div>لربح مضمون 💰</div>
              <div className="text-2xl md:text-4xl">For Guaranteed Profit</div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200 mb-12">
            <div className="grid md:grid-cols-2 gap-8 text-lg leading-relaxed">
              <div className="text-right">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">🇸🇩 العربية</h3>
                <p className="text-gray-700">
                  يوفي كاش هو نظام تسويق إلكتروني ذكي يوفر فرصة ربح مضمونة عبر الإحالات والمشاهدات المؤكدة. ابدأ رحلتك
                  نحو دخل مستدام بنظام بسيط وشفاف يضمن لك الأرباح من كل إحالة ناجحة.
                </p>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-green-600 mb-4">🇺🇸 English</h3>
                <p className="text-gray-700">
                  Youvi Cash is a smart electronic marketing system that provides guaranteed earning opportunities
                  through referrals and confirmed views. Start your journey towards sustainable income with a simple and
                  transparent system that guarantees profits from every successful referral.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              className="text-xl px-10 py-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-2xl transform hover:scale-105 transition-all duration-200"
              asChild
            >
              <Link href="/packages/basic/referrals">
                <div className="text-center">
                  <div>ابدأ الآن مجاناً</div>
                  <div className="text-sm">Start Now for Free</div>
                </div>
                <ArrowLeft className="mr-3 h-6 w-6" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-xl px-10 py-6 border-2 border-blue-500 text-blue-600 hover:bg-blue-50 shadow-xl"
            >
              <Play className="ml-3 h-6 w-6" />
              <div className="text-center">
                <div>شاهد كيف يعمل</div>
                <div className="text-sm">Watch How It Works</div>
              </div>
            </Button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <Users className="h-16 w-16 text-blue-600 mx-auto mb-6" />
              <h3 className="text-4xl font-black text-gray-900 mb-4">+10,000</h3>
              <div className="space-y-2">
                <p className="text-blue-700 font-bold text-lg">مستخدم نشط</p>
                <p className="text-blue-600">Active Users</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 border-2 border-green-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <DollarSign className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-4xl font-black text-gray-900 mb-4">5M+</h3>
              <div className="space-y-2">
                <p className="text-green-700 font-bold text-lg">جنيه سوداني تم توزيعها</p>
                <p className="text-green-600">Sudanese Pounds Distributed</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 border-2 border-purple-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <Play className="h-16 w-16 text-purple-600 mx-auto mb-6" />
              <h3 className="text-4xl font-black text-gray-900 mb-4">1M+</h3>
              <div className="space-y-2">
                <p className="text-purple-700 font-bold text-lg">مشاهدة مؤكدة</p>
                <p className="text-purple-600">Confirmed Views</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
