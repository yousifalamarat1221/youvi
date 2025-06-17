import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Users, DollarSign, Clock, Shield } from "lucide-react"
import Link from "next/link"

export function BasicPackageDetails() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <Star className="h-8 w-8 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">الباقة الأساسية</h1>
        <p className="text-gray-600">نقطة البداية المثالية لرحلتك في يوفي كاش</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Package Overview */}
        <Card className="border-green-200 border-2">
          <CardHeader className="bg-green-50">
            <CardTitle className="flex items-center justify-between">
              <span className="text-green-800">تفاصيل الباقة</span>
              <Badge className="bg-green-600">الأكثر شعبية للمبتدئين</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">1,000 ج.س</div>
                <p className="text-gray-600">رسوم الاشتراك لمرة واحدة</p>
                <p className="text-xs text-gray-500">أو ما يعادله بالدولار</p>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <div className="flex items-center mb-2">
                  <Users className="h-5 w-5 text-yellow-600 ml-2" />
                  <span className="font-semibold text-yellow-800">المتطلبات</span>
                </div>
                <p className="text-yellow-700">100 إحالة مؤكدة مطلوبة للاشتراك</p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">المميزات المتضمنة:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-600 ml-2" />
                    <span className="text-gray-700">عمولة 1,000 ج.س من كل إحالة ناجحة</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-600 ml-2" />
                    <span className="text-gray-700">العمولة من الأعضاء المشتركين في الباقة الأساسية فقط</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-600 ml-2" />
                    <span className="text-gray-700">دعم فني أساسي</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-600 ml-2" />
                    <span className="text-gray-700">تقارير شهرية مفصلة</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-600 ml-2" />
                    <span className="text-gray-700">رابط إحالة شخصي</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How it Works */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <DollarSign className="h-5 w-5 text-green-600 ml-2" />
              كيف تربح من الباقة الأساسية؟
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-sm font-bold text-green-600">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">اجمع 100 إحالة</h4>
                  <p className="text-gray-600 text-sm">شارك رابطك واحصل على 100 مشاهدة مؤكدة</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-sm font-bold text-green-600">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">ادفع رسوم الاشتراك</h4>
                  <p className="text-gray-600 text-sm">1,000 ج.س أو ما يعادله بالدولار لمرة واحدة فقط</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-sm font-bold text-green-600">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">ابدأ في الربح</h4>
                  <p className="text-gray-600 text-sm">1,000 ج.س عن كل عضو جديد يشترك في الأساسية</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mt-6">
              <h4 className="font-semibold text-blue-900 mb-2">مثال على الأرباح:</h4>
              <div className="text-sm text-blue-800 space-y-1">
                <p>• إذا أحال 5 أشخاص اشتركوا في الأساسية = 5,000 ج.س</p>
                <p>• إذا أحال 10 أشخاص اشتركوا في الأساسية = 10,000 ج.س</p>
                <p>• إذا أحال 20 شخص اشتركوا في الأساسية = 20,000 ج.س</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <Card className="text-center">
          <CardContent className="p-6">
            <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">سرعة في البداية</h3>
            <p className="text-gray-600 text-sm">ابدأ فوراً بجمع الإحالات بدون أي رسوم مقدمة</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">أمان مضمون</h3>
            <p className="text-gray-600 text-sm">نظام آمن ومضمون لحماية أرباحك ومعلوماتك</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">مجتمع داعم</h3>
            <p className="text-gray-600 text-sm">انضم لمجتمع من المسوقين الناجحين</p>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8">
        <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">جاهز للبدء؟</h3>
            <p className="text-gray-600 mb-6">ابدأ بجمع إحالاتك الآن واحصل على الباقة الأساسية</p>
            <div className="space-y-4">
              <Button size="lg" className="w-full md:w-auto px-8" asChild>
                <Link href="/packages/basic/referrals">ابدأ جمع الإحالات الآن</Link>
              </Button>
              <div className="text-sm text-gray-500">
                <p>لا توجد رسوم حتى تصل إلى 100 إحالة</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
