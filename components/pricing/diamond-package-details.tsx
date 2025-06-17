import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Diamond, Users, DollarSign, Shield, TrendingUp, Award, Crown, Star } from "lucide-react"
import Link from "next/link"

export function DiamondPackageDetails() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
          <Diamond className="h-8 w-8 text-purple-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">الباقة الماسية</h1>
        <p className="text-gray-600">الباقة الحصرية للمسوقين المحترفين</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Package Overview */}
        <Card className="border-purple-200 border-2">
          <CardHeader className="bg-purple-50">
            <CardTitle className="flex items-center justify-between">
              <span className="text-purple-800">تفاصيل الباقة</span>
              <Badge className="bg-purple-600">VIP حصري</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">50,000 ج.س</div>
                <p className="text-gray-600">رسوم الاشتراك لمرة واحدة</p>
                <p className="text-xs text-gray-500">أو ما يعادله بالدولار</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="flex items-center mb-2">
                  <Users className="h-5 w-5 text-green-600 ml-2" />
                  <span className="font-semibold text-green-800">المتطلبات</span>
                </div>
                <p className="text-green-700">10 إحالات مؤكدة فقط للاشتراك</p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">المميزات المتضمنة:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-purple-600 ml-2" />
                    <span className="text-gray-700">نفس عمولة الذهبية (4 مستويات × 1,000 ج.س)</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-purple-600 ml-2" />
                    <span className="text-gray-700">
                      25,000 ج.س عند ترقية أحد أسفلك إلى ماسي (إذا لم يكن تحته ماسي خلال 4 مستويات)
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-purple-600 ml-2" />
                    <span className="text-gray-700">دعم فني VIP على مدار الساعة</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-purple-600 ml-2" />
                    <span className="text-gray-700">تقارير يومية مفصلة</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-purple-600 ml-2" />
                    <span className="text-gray-700">أدوات تسويق حصرية</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-purple-600 ml-2" />
                    <span className="text-gray-700">مدير حساب شخصي</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-purple-600 ml-2" />
                    <span className="text-gray-700">أولوية في الدعم والخدمات</span>
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
              <DollarSign className="h-5 w-5 text-purple-600 ml-2" />
              كيف تربح من الباقة الماسية؟
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-sm font-bold text-purple-600">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">اجمع 10 إحالات فقط</h4>
                  <p className="text-gray-600 text-sm">أقل عدد إحالات مطلوب للحصول على أعلى باقة</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-sm font-bold text-purple-600">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">ادفع رسوم الاشتراك</h4>
                  <p className="text-gray-600 text-sm">50,000 ج.س أو ما يعادله بالدولار لمرة واحدة فقط</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-sm font-bold text-purple-600">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">ابدأ في الربح</h4>
                  <p className="text-gray-600 text-sm">أعلى عمولات ترقية + نظام 4 مستويات</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg mt-6">
              <h4 className="font-semibold text-purple-900 mb-2">مثال على الأرباح الشهرية:</h4>
              <div className="text-sm text-purple-800 space-y-1">
                <p>• المستوى الأول: 10 أشخاص × 1,000 = 10,000 ج.س</p>
                <p>• المستوى الثاني: 20 شخص × 1,000 = 20,000 ج.س</p>
                <p>• المستوى الثالث: 30 شخص × 1,000 = 30,000 ج.س</p>
                <p>• المستوى الرابع: 40 شخص × 1,000 = 40,000 ج.س</p>
                <p className="font-bold border-t pt-2">إجمالي: 100,000 ج.س شهرياً</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-900 mb-2">عمولات الترقية الماسية:</h4>
              <div className="text-sm text-orange-800 space-y-1">
                <p>• كل ترقية للماسية = 25,000 ج.س (إذا لم يكن تحته ماسي خلال 4 مستويات)</p>
                <p>• إذا رقى 2 أشخاص = 50,000 ج.س إضافية</p>
                <p>• إذا رقى 4 أشخاص = 100,000 ج.س إضافية</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* VIP Benefits */}
      <Card className="mt-8 border-2 border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50">
        <CardHeader>
          <CardTitle className="flex items-center text-purple-800">
            <Crown className="h-6 w-6 ml-2" />
            مميزات VIP الحصرية
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-white rounded-lg border border-purple-200">
                <Star className="h-6 w-6 text-purple-600 ml-3" />
                <div>
                  <h4 className="font-semibold text-gray-900">مدير حساب شخصي</h4>
                  <p className="text-sm text-gray-600">مدير مخصص لحسابك فقط</p>
                </div>
              </div>
              <div className="flex items-center p-3 bg-white rounded-lg border border-purple-200">
                <Shield className="h-6 w-6 text-purple-600 ml-3" />
                <div>
                  <h4 className="font-semibold text-gray-900">دعم VIP 24/7</h4>
                  <p className="text-sm text-gray-600">أولوية قصوى في الدعم</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-white rounded-lg border border-purple-200">
                <Award className="h-6 w-6 text-purple-600 ml-3" />
                <div>
                  <h4 className="font-semibold text-gray-900">أدوات حصرية</h4>
                  <p className="text-sm text-gray-600">أدوات تسويق متقدمة</p>
                </div>
              </div>
              <div className="flex items-center p-3 bg-white rounded-lg border border-purple-200">
                <TrendingUp className="h-6 w-6 text-purple-600 ml-3" />
                <div>
                  <h4 className="font-semibold text-gray-900">تقارير يومية</h4>
                  <p className="text-sm text-gray-600">إحصائيات مفصلة يومياً</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <Card className="text-center">
          <CardContent className="p-6">
            <Diamond className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">حصرية مطلقة</h3>
            <p className="text-gray-600 text-sm">أعلى مستوى في النظام مع مميزات حصرية</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <Crown className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">أعلى عمولات</h3>
            <p className="text-gray-600 text-sm">25,000 ج.س عن كل ترقية للماسية</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <Star className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">خدمة VIP</h3>
            <p className="text-gray-600 text-sm">مدير حساب شخصي ودعم متميز</p>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8">
        <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">انضم للنخبة!</h3>
            <p className="text-gray-600 mb-6">ابدأ بجمع إحالاتك الآن واحصل على الباقة الماسية الحصرية</p>
            <div className="space-y-4">
              <Button
                size="lg"
                className="w-full md:w-auto px-8 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700"
                asChild
              >
                <Link href="/packages/diamond/referrals">ابدأ جمع الإحالات الآن</Link>
              </Button>
              <div className="text-sm text-gray-500">
                <p>تحتاج 10 إحالات فقط للانضمام للنخبة</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
