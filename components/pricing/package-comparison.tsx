import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X, Star, Crown, Diamond } from "lucide-react"

export function PackageComparison() {
  const features = [
    {
      name: "عمولة الإحالة الواحدة",
      basic: "1,000 ج.س",
      gold: "1,000 ج.س",
      diamond: "1,000 ج.س",
    },
    {
      name: "عدد المستويات",
      basic: "مستوى واحد",
      gold: "4 مستويات",
      diamond: "4 مستويات",
    },
    {
      name: "عمولة الترقية للذهبية",
      basic: false,
      gold: "10,000 ج.س",
      diamond: "10,000 ج.س",
    },
    {
      name: "عمولة الترقية للماسية",
      basic: false,
      gold: false,
      diamond: "25,000 ج.س",
    },
    {
      name: "الدعم الفني",
      basic: "أساسي",
      gold: "متقدم",
      diamond: "VIP 24/7",
    },
    {
      name: "التقارير",
      basic: "شهرية",
      gold: "أسبوعية",
      diamond: "يومية",
    },
    {
      name: "أدوات التسويق",
      basic: "أساسية",
      gold: "متقدمة",
      diamond: "حصرية",
    },
    {
      name: "مدير حساب شخصي",
      basic: false,
      gold: false,
      diamond: true,
    },
  ]

  const packages = [
    {
      name: "الأساسية",
      price: "1,000",
      requirements: "100 إحالة",
      icon: Star,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      popular: true,
    },
    {
      name: "الذهبية",
      price: "20,000",
      requirements: "50 إحالة",
      icon: Crown,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      popular: false,
    },
    {
      name: "الماسية",
      price: "50,000",
      requirements: "10 إحالات",
      icon: Diamond,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      popular: false,
    },
  ]

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">مقارنة الباقات</h2>
        <p className="text-gray-600">اختر الباقة التي تناسب أهدافك</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-right p-4 border-b-2 border-gray-200">المميزات</th>
              {packages.map((pkg, index) => (
                <th key={index} className="text-center p-4 border-b-2 border-gray-200">
                  <Card className={`${pkg.borderColor} border-2 ${pkg.bgColor}`}>
                    <CardHeader className="pb-4">
                      {pkg.popular && <Badge className="mb-2 bg-blue-600">الأكثر شعبية</Badge>}
                      <pkg.icon className={`h-8 w-8 mx-auto mb-2 ${pkg.color}`} />
                      <CardTitle className="text-lg">{pkg.name}</CardTitle>
                      <div className="text-2xl font-bold text-gray-900">
                        {pkg.price}
                        <span className="text-sm font-normal text-gray-600"> ج.س</span>
                      </div>
                      <p className="text-sm text-gray-600">{pkg.requirements}</p>
                    </CardHeader>
                  </Card>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index} className="border-b border-gray-100">
                <td className="p-4 font-medium text-gray-900">{feature.name}</td>
                <td className="p-4 text-center">
                  {typeof feature.basic === "boolean" ? (
                    feature.basic ? (
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-gray-400 mx-auto" />
                    )
                  ) : (
                    <span className="text-gray-700">{feature.basic}</span>
                  )}
                </td>
                <td className="p-4 text-center">
                  {typeof feature.gold === "boolean" ? (
                    feature.gold ? (
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-gray-400 mx-auto" />
                    )
                  ) : (
                    <span className="text-gray-700">{feature.gold}</span>
                  )}
                </td>
                <td className="p-4 text-center">
                  {typeof feature.diamond === "boolean" ? (
                    feature.diamond ? (
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-gray-400 mx-auto" />
                    )
                  ) : (
                    <span className="text-gray-700">{feature.diamond}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
