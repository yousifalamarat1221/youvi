import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Gift, ArrowRight, Share2 } from "lucide-react"
import Link from "next/link"

interface VideoSuccessProps {
  referralCode: string
}

export function VideoSuccess({ referralCode }: VideoSuccessProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-xl border-0">
          <CardHeader className="text-center pb-6">
            <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl text-gray-900">تم بنجاح! 🎉</CardTitle>
            <p className="text-gray-600 mt-2">شكراً لك على مشاهدة الفيديو كاملاً</p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <div className="flex items-center mb-2">
                <Gift className="h-5 w-5 text-green-600 ml-2" />
                <h3 className="font-semibold text-green-800">تم احتساب إحالتك!</h3>
              </div>
              <p className="text-sm text-green-700">
                تم تسجيل مشاهدتك بنجاح لصالح المسوق صاحب كود الإحالة: <strong>{referralCode}</strong>
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">الخطوة التالية:</h4>
              <p className="text-sm text-blue-800 mb-3">انضم إلى يوفي كاش الآن وابدأ في ربح المال من إحالاتك الخاصة!</p>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• احصل على رابط إحالة خاص بك</li>
                <li>• اربح من كل مشاهدة مؤكدة</li>
                <li>• نظام عمولات شفاف ومضمون</li>
              </ul>
            </div>

            <div className="space-y-3">
              <Button asChild className="w-full h-12 bg-green-600 hover:bg-green-700">
                <Link href="/register">
                  انضم إلى يوفي كاش الآن
                  <ArrowRight className="mr-2 h-4 w-4" />
                </Link>
              </Button>

              <Button variant="outline" asChild className="w-full">
                <Link href="/">
                  <Share2 className="ml-2 h-4 w-4" />
                  تعرف على المزيد
                </Link>
              </Button>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                لديك حساب بالفعل؟{" "}
                <Link href="/login" className="text-blue-600 hover:underline">
                  تسجيل الدخول
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
