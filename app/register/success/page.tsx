import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Mail, Smartphone, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function RegisterSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-xl border-0">
          <CardHeader className="text-center pb-6">
            <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl text-gray-900">تم إنشاء الحساب بنجاح!</CardTitle>
            <p className="text-gray-600 mt-2">مرحباً بك في عائلة يوفي كاش</p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-3">الخطوات التالية:</h3>
              <div className="space-y-3">
                <div className="flex items-center text-blue-800">
                  <Mail className="h-4 w-4 ml-2 flex-shrink-0" />
                  <span className="text-sm">تحقق من بريدك الإلكتروني لتفعيل الحساب</span>
                </div>
                <div className="flex items-center text-blue-800">
                  <Smartphone className="h-4 w-4 ml-2 flex-shrink-0" />
                  <span className="text-sm">ابدأ بمشاركة رابط الإحالة الخاص بك</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">هدية الترحيب 🎁</h4>
              <p className="text-sm text-green-800">احصل على 100 نقطة ترحيب مجانية لبدء رحلتك في يوفي كاش</p>
            </div>

            <div className="space-y-3">
              <Button asChild className="w-full h-12">
                <Link href="/dashboard">
                  الذهاب إلى لوحة التحكم
                  <ArrowRight className="mr-2 h-4 w-4" />
                </Link>
              </Button>

              <Button variant="outline" asChild className="w-full">
                <Link href="/onboarding">جولة تعريفية سريعة</Link>
              </Button>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                تحتاج مساعدة؟{" "}
                <Link href="/support" className="text-blue-600 hover:underline">
                  تواصل معنا
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
