import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, Crown, Diamond } from "lucide-react"
import Link from "next/link"

export function PricingTiers() {
  const tiers = [
    {
      nameAr: "الأساسية",
      nameEn: "Basic",
      price: "1,000",
      requirementsAr: "100 إحالة",
      requirementsEn: "100 Referrals",
      icon: Star,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      gradientFrom: "from-green-400",
      gradientTo: "to-green-600",
      popular: true,
      featuresAr: [
        "عمولة 1,000 ج.س من كل إحالة ناجحة",
        "من أعضاء مشتركين في الباقة الأساسية فقط",
        "دعم فني أساسي",
        "تقارير شهرية",
      ],
      featuresEn: [
        "1,000 SDG commission from each successful referral",
        "From members subscribed to Basic package only",
        "Basic technical support",
        "Monthly reports",
      ],
    },
    {
      nameAr: "الذهبية",
      nameEn: "Gold",
      price: "20,000",
      requirementsAr: "50 إحالة",
      requirementsEn: "50 Referrals",
      icon: Crown,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      gradientFrom: "from-yellow-400",
      gradientTo: "to-yellow-600",
      popular: false,
      featuresAr: [
        "1,000 ج.س عن كل إحالة مدفوعة حتى 4 مستويات",
        "10,000 ج.س عند ترقية أحد الأسفل إلى ذهبية (إذا لم يكن تحته ذهبي)",
        "دعم فني متقدم",
        "تقارير أسبوعية",
        "أدوات تسويق متقدمة",
      ],
      featuresEn: [
        "1,000 SDG for each paid referral up to 4 levels",
        "10,000 SDG when upgrading someone below to Gold (if no Gold member below them)",
        "Advanced technical support",
        "Weekly reports",
        "Advanced marketing tools",
      ],
    },
    {
      nameAr: "الماسية",
      nameEn: "Diamond",
      price: "50,000",
      requirementsAr: "10 إحالات",
      requirementsEn: "10 Referrals",
      icon: Diamond,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      gradientFrom: "from-purple-400",
      gradientTo: "to-purple-600",
      popular: false,
      featuresAr: [
        "نفس عمولة الذهبية (4 مستويات × 1,000 ج.س)",
        "25,000 ج.س عند ترقية أحد أسفلك إلى ماسي (إذا لم يكن تحته ماسي خلال 4 مستويات)",
        "دعم فني VIP على مدار الساعة",
        "تقارير يومية مفصلة",
        "أدوات تسويق حصرية",
        "مدير حساب شخصي",
      ],
      featuresEn: [
        "Same as Gold commission (4 levels × 1,000 SDG)",
        "25,000 SDG when upgrading someone below to Diamond (if no Diamond member below them within 4 levels)",
        "VIP 24/7 technical support",
        "Detailed daily reports",
        "Exclusive marketing tools",
        "Personal account manager",
      ],
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              باقات يوفي كاش
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent text-3xl md:text-4xl">
              Youvi Cash Packages
            </span>
          </h2>
          <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
            <div className="grid md:grid-cols-2 gap-6">
              <p className="text-xl text-gray-700 text-right">اختر الباقة المناسبة لك وابدأ رحلتك نحو الربح المضمون</p>
              <p className="text-xl text-gray-700 text-left">
                Choose the package that suits you and start your journey towards guaranteed profit
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden ${tier.borderColor} border-3 hover:shadow-2xl transition-all duration-300 ${tier.popular ? "scale-105 ring-4 ring-blue-200" : ""} transform hover:scale-110`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-0 right-0">
                  <div
                    className={`bg-gradient-to-r ${tier.gradientFrom} ${tier.gradientTo} text-white text-center py-2 font-bold`}
                  >
                    <div>الأكثر شعبية</div>
                    <div className="text-sm">Most Popular</div>
                  </div>
                </div>
              )}

              <CardHeader className={`${tier.bgColor} text-center pb-8 ${tier.popular ? "pt-16" : "pt-8"}`}>
                <tier.icon className={`h-20 w-20 mx-auto mb-6 ${tier.color}`} />
                <CardTitle className="space-y-2">
                  <div className="text-2xl font-black text-gray-900">{tier.nameAr}</div>
                  <div className="text-xl font-bold text-gray-700">{tier.nameEn}</div>
                </CardTitle>
                <div className="text-5xl font-black text-gray-900 mb-4">
                  {tier.price}
                  <span className="text-lg font-normal text-gray-600"> ج.س</span>
                  <div className="text-sm text-gray-600">SDG</div>
                  <div className="text-xs text-gray-500">أو ما يعادله بالدولار</div>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-700 font-bold">{tier.requirementsAr}</p>
                  <p className="text-gray-600">{tier.requirementsEn}</p>
                </div>
              </CardHeader>

              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Arabic Features */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 text-right">المميزات:</h4>
                    <ul className="space-y-2">
                      {tier.featuresAr.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-right">
                          <Check className="h-5 w-5 text-green-600 mt-0.5 ml-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* English Features */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 text-left">Features:</h4>
                    <ul className="space-y-2">
                      {tier.featuresEn.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-left">
                          <Check className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button
                  className={`w-full mt-8 py-4 text-lg font-bold ${tier.nameEn === "Basic" ? `bg-gradient-to-r ${tier.gradientFrom} ${tier.gradientTo} hover:shadow-xl` : tier.popular ? `bg-gradient-to-r ${tier.gradientFrom} ${tier.gradientTo} hover:shadow-xl` : ""} transform hover:scale-105 transition-all duration-200`}
                  variant={tier.popular || tier.nameEn === "Basic" ? "default" : "outline"}
                  asChild
                >
                  <Link
                    href={
                      tier.nameEn === "Basic"
                        ? "/packages/basic/referrals"
                        : tier.nameEn === "Gold"
                          ? "/packages/gold"
                          : "/packages/diamond"
                    }
                  >
                    <div className="text-center">
                      <div>اختر هذه الباقة</div>
                      <div className="text-sm">Choose This Package</div>
                    </div>
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
