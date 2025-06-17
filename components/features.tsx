import { Card, CardContent } from "@/components/ui/card"
import { Shield, Zap, BarChart3, Users, Clock, Award } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Shield,
      titleAr: "أمان مضمون",
      titleEn: "Guaranteed Security",
      descriptionAr: "نظام حماية متقدم يضمن أمان جميع المعاملات والبيانات",
      descriptionEn: "Advanced protection system ensuring security of all transactions and data",
      color: "text-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
    },
    {
      icon: Zap,
      titleAr: "سرعة في التنفيذ",
      titleEn: "Fast Execution",
      descriptionAr: "معالجة فورية للإحالات والمدفوعات بدون تأخير",
      descriptionEn: "Instant processing of referrals and payments without delay",
      color: "text-yellow-600",
      bgColor: "from-yellow-50 to-yellow-100",
      borderColor: "border-yellow-200",
    },
    {
      icon: BarChart3,
      titleAr: "تقارير مفصلة",
      titleEn: "Detailed Reports",
      descriptionAr: "احصائيات شاملة ومفصلة لتتبع أداءك وأرباحك",
      descriptionEn: "Comprehensive and detailed statistics to track your performance and profits",
      color: "text-green-600",
      bgColor: "from-green-50 to-green-100",
      borderColor: "border-green-200",
    },
    {
      icon: Users,
      titleAr: "شبكة واسعة",
      titleEn: "Wide Network",
      descriptionAr: "انضم إلى شبكة كبيرة من المسوقين الناجحين",
      descriptionEn: "Join a large network of successful marketers",
      color: "text-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
    },
    {
      icon: Clock,
      titleAr: "دعم 24/7",
      titleEn: "24/7 Support",
      descriptionAr: "فريق دعم متاح على مدار الساعة لمساعدتك",
      descriptionEn: "Support team available around the clock to help you",
      color: "text-red-600",
      bgColor: "from-red-50 to-red-100",
      borderColor: "border-red-200",
    },
    {
      icon: Award,
      titleAr: "مكافآت إضافية",
      titleEn: "Additional Rewards",
      descriptionAr: "برنامج مكافآت وحوافز للأعضاء المتميزين",
      descriptionEn: "Rewards and incentives program for distinguished members",
      color: "text-orange-600",
      bgColor: "from-orange-50 to-orange-100",
      borderColor: "border-orange-200",
    },
  ]

  return (
    <section id="features" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              لماذا يوفي كاش؟
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent text-3xl md:text-4xl">
              Why Youvi Cash?
            </span>
          </h2>
          <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
            <div className="grid md:grid-cols-2 gap-6">
              <p className="text-xl text-gray-700 text-right">
                مميزات فريدة تجعل من يوفي كاش الخيار الأمثل لبناء دخل مستدام
              </p>
              <p className="text-xl text-gray-700 text-left">
                Unique features that make Youvi Cash the best choice for building sustainable income
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`border-2 ${feature.borderColor} bg-gradient-to-br ${feature.bgColor} hover:shadow-2xl transition-all duration-300 group transform hover:scale-105`}
            >
              <CardContent className="p-8 text-center">
                <feature.icon
                  className={`h-20 w-20 mx-auto mb-6 ${feature.color} group-hover:scale-110 transition-transform duration-300`}
                />

                <div className="space-y-4">
                  <h3 className="text-xl font-black text-gray-900">{feature.titleAr}</h3>
                  <h4 className="text-lg font-bold text-gray-700">{feature.titleEn}</h4>

                  <div className="space-y-3">
                    <p className="text-gray-700 leading-relaxed text-right text-sm">{feature.descriptionAr}</p>
                    <p className="text-gray-600 leading-relaxed text-left text-sm">{feature.descriptionEn}</p>
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
