import { Card, CardContent } from "@/components/ui/card"
import { Eye, Link2, Users, Wallet } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Eye,
      titleAr: "مشاهدة الفيديو",
      titleEn: "Watch Video",
      descriptionAr: "الزائر يشاهد فيديو إلزامي لمدة 30 ثانية في صفحة مؤمنة بالكامل",
      descriptionEn: "Visitor watches a mandatory 30-second video in a fully secured page",
      color: "text-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
    },
    {
      icon: Link2,
      titleAr: "احتساب الإحالة",
      titleEn: "Count Referral",
      descriptionAr: "بعد المشاهدة الكاملة، يُحتسب الزائر كإحالة لصاحب الرابط",
      descriptionEn: "After complete viewing, the visitor is counted as a referral for the link owner",
      color: "text-green-600",
      bgColor: "from-green-50 to-green-100",
      borderColor: "border-green-200",
    },
    {
      icon: Users,
      titleAr: "تجميع الإحالات",
      titleEn: "Collect Referrals",
      descriptionAr: "الإحالات تُخزن وتُحسب حتى بلوغ العدد المطلوب للاشتراك",
      descriptionEn: "Referrals are stored and counted until reaching the required number for subscription",
      color: "text-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
    },
    {
      icon: Wallet,
      titleAr: "الحصول على الأرباح",
      titleEn: "Earn Profits",
      descriptionAr: "عند بلوغ المتطلبات، يمكن الاشتراك في الباقة والبدء في الربح",
      descriptionEn: "Upon meeting requirements, you can subscribe to a package and start earning",
      color: "text-orange-600",
      bgColor: "from-orange-50 to-orange-100",
      borderColor: "border-orange-200",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              كيف يعمل يوفي كاش
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent text-3xl md:text-4xl">
              How Youvi Cash Works
            </span>
          </h2>
          <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
            <div className="grid md:grid-cols-2 gap-6">
              <p className="text-xl text-gray-700 text-right">
                نظام بسيط وشفاف يضمن العدالة والشفافية في جميع المعاملات
              </p>
              <p className="text-xl text-gray-700 text-left">
                A simple and transparent system that ensures fairness and transparency in all transactions
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden border-2 ${step.borderColor} bg-gradient-to-br ${step.bgColor} hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
            >
              <CardContent className="p-8 text-center">
                <div className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-black text-gray-600 shadow-lg">
                  {index + 1}
                </div>
                <step.icon className={`h-20 w-20 mx-auto mb-6 ${step.color}`} />

                <div className="space-y-4">
                  <h3 className="text-xl font-black text-gray-900">{step.titleAr}</h3>
                  <h4 className="text-lg font-bold text-gray-700">{step.titleEn}</h4>

                  <div className="space-y-3 text-sm">
                    <p className="text-gray-700 leading-relaxed text-right">{step.descriptionAr}</p>
                    <p className="text-gray-600 leading-relaxed text-left">{step.descriptionEn}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
