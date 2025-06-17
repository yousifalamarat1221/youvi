import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Crown, Users, DollarSign, Shield, TrendingUp, Award } from "lucide-react"
import Link from "next/link"

export function GoldPackageDetails() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
          <Crown className="h-8 w-8 text-yellow-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">الباقة الذهبية</h1>
        <p className="text-gray-600">للمسوقين الطموحين الذين يريدون أرباحاً أكبر</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Package Overview */}
        <Card className="border-yellow-200 border-2">
          <CardHeader className="bg-yellow-50">
            <CardTitle className="flex items-center justify-between">
              <span className="text-yellow-800">تفاصيل الباقة</span>
              <Badge className="bg-yellow-600">للمسوقين المتقدمين</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-600 mb-2">20,000 ج.س</div>
                <p className="text-gray-600">رسوم الاشتراك لمرة واحدة</p>
                <p className="text-xs text-gray-500">أو ما يعادله بالدولار</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex items-center mb-2">
                  <Users className="h-5 w-5 text-blue-600 ml-2" />
                  <span className="font-semibold text-blue-800">المتطلبات</span>
                </div>
                <p className="text-blue-700">50 إحالة مؤكدة مطلوبة للاشتراك</p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">المميزات المتضمنة:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-yellow-600 ml-2" />
                    <span className="text-gray-700">1,000 ج.س عن كل إحالة مدفوعة حتى 4 مستويات</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-yellow-600 ml-2" />
                    <span className="text-gray-700">
                      10,000 ج.س عند ترقية أحد الأسفل إلى ذهبية (إذا لم يكن تحته ذهبي)
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-yellow-600 ml-2" />
                    <span className="text-gray-700">دعم فني متقدم</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-yellow-600 ml-2" />
                    <span className="text-gray-700">تقارير أسبوعية مفصلة</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-yellow-600 ml-2" />
                    <span className="text-gray-700">أدوات تسويق متقدمة</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-yellow-600 ml-2" />
                    <span className="text-gray-700">نظام العمولات متعدد المستويات</span>
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
              <DollarSign className="h-5 w-5 text-yellow-600 ml-2" />
              كيف تربح من الباقة الذهبية؟
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-sm font-bold text-yellow-600">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">اجمع 50 إحالة</h4>
                  <p className="text-gray-600 text-sm">شارك رابطك واحصل على 50 مشاهدة مؤكدة</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-sm font-bold text-yellow-600">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">ادفع رسوم الاشتراك</h4>
                  <p className="text-gray-600 text-sm">20,000 ج.س أو ما يعادله بالدولار لمرة واحدة فقط</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-sm font-bold text-yellow-600">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">ابدأ في الربح</h4>
                  <p className="text-gray-600 text-sm">أرباح متعددة المستويات + عمولات الترقية</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg mt-6">
              <h4 className="font-semibold text-yellow-900 mb-2">مثال على الأرباح:</h4>
              <div className="text-sm text-yellow-800 space-y-1">
                <p>• المستوى الأول: 5 أشخاص × 1,000 = 5,000 ج.س</p>
                <p>• المستوى الثاني: 10 أشخاص × 1,000 = 10,000 ج.س</p>
                <p>• المستوى الثالث: 15 شخص × 1,000 = 15,000 ج.س</p>
                <p>• المستوى الرابع: 20 شخص × 1,000 = 20,000 ج.س</p>
                <p className="font-bold border-t pt-2">إجمالي: 50,000 ج.س شهرياً</p>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">عمولات الترقية:</h4>
              <div className="text-sm text-green-800 space-y-1">
                <p>• كل ترقية للذهبية = 10,000 ج.س إضافية (إذا لم يكن تحته ذهبي)</p>
                <p>• إذا رقى 3 أشخاص = 30,000 ج.س إضافية</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Multi-Level System */}
      <Card className="mt-8 border-2 border-yellow-200 bg-gradient-to-r from-yellow-50 to-orange-50">
        <CardHeader>
          <CardTitle className="flex items-center text-yellow-800">
            <TrendingUp className="h-6 w-6 ml-2" />
            نظام العمولات متعدد المستويات
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white rounded-lg border border-yellow-200">
              <div className="text-2xl font-bold text-yellow-600 mb-2">المستوى 1</div>
              <p className="text-sm text-gray-700">الإحالات المباشرة</p>
              <p className="text-lg font-semibold text-yellow-800">1,000 ج.س</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-yellow-200">
              <div className="text-2xl font-bold text-yellow-600 mb-2">المستوى 2</div>
              <p className="text-sm text-gray-700">إحالات إحالاتك</p>
              <p className="text-lg font-semibold text-yellow-800">1,000 ج.س</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-yellow-200">
              <div className="text-2xl font-bold text-yellow-600 mb-2">المستوى 3</div>
              <p className="text-sm text-gray-700">المستوى الثالث</p>
              <p className="text-lg font-semibold text-yellow-800">1,000 ج.س</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-yellow-200">
              <div className="text-2xl font-bold text-yellow-600 mb-2">المستوى 4</div>
              <p className="text-sm text-gray-700">المستوى الرابع</p>
              <p className="text-lg font-semibold text-yellow-800">1,000 ج.س</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <Card className="text-center">
          <CardContent className="p-6">
            <TrendingUp className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">أرباح متضاعفة</h3>
            <p className="text-gray-600 text-sm">نظام 4 مستويات يضاعف أرباحك بشكل كبير</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">عمولات الترقية</h3>
            <p className="text-gray-600 text-sm">احصل على 10,000 ج.س عند ترقية أي عضو للذهبية</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">دعم متقدم</h3>
            <p className="text-gray-600 text-sm">دعم فني متقدم وأدوات تسويق حصرية</p>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8">
        <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">جاهز للانطلاق؟</h3>
            <p className="text-gray-600 mb-6">ابدأ بجمع إحالاتك الآن واحصل على الباقة الذهبية</p>
            <div className="space-y-4">
              <Button
                size="lg"
                className="w-full md:w-auto px-8 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700"
                asChild
              >
                <Link href="/packages/gold/referrals">ابدأ جمع الإحالات الآن</Link>
              </Button>
              <div className="text-sm text-gray-500">
                <p>تحتاج 50 إحالة فقط للبدء</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
