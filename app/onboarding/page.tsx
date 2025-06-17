"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, ArrowLeft, Eye, Users, DollarSign, Share2 } from "lucide-react"
import Link from "next/link"

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      title: "مرحباً بك في يوفي كاش",
      icon: Users,
      content: (
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
            <Users className="h-10 w-10 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">أهلاً وسهلاً!</h3>
          <p className="text-gray-600">
            يوفي كاش هو نظام تسويق إلكتروني ذكي يتيح لك ربح المال من خلال الإحالات والمشاهدات المؤكدة.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>نصيحة:</strong> كلما زاد عدد الإحالات، زادت أرباحك!
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "كيف تعمل المشاهدات",
      icon: Eye,
      content: (
        <div className="space-y-4">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <Eye className="h-10 w-10 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 text-center">نظام المشاهدة الآمن</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <p className="text-gray-700">الزائر يشاهد فيديو لمدة 30 ثانية كاملة</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <p className="text-gray-700">أي محاولة للخروج تعيد العداد للصفر</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <p className="text-gray-700">بعد المشاهدة الكاملة، تُحتسب كإحالة لك</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "مشاركة رابط الإحالة",
      icon: Share2,
      content: (
        <div className="space-y-4">
          <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
            <Share2 className="h-10 w-10 text-purple-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 text-center">شارك واربح</h3>
          <p className="text-gray-600 text-center">احصل على رابط إحالة خاص بك وشاركه مع الأصدقاء والعائلة</p>
          <div className="bg-gray-100 p-3 rounded-lg">
            <code className="text-sm text-gray-800">https://youvicash.com/ref=اسمك</code>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-green-50 p-3 rounded-lg text-center">
              <strong className="text-green-800">أفضل الأماكن للمشاركة:</strong>
              <ul className="mt-2 text-green-700">
                <li>• مجموعات واتساب</li>
                <li>• فيسبوك وتويتر</li>
                <li>• الأصدقاء والعائلة</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-3 rounded-lg text-center">
              <strong className="text-yellow-800">نصائح للنجاح:</strong>
              <ul className="mt-2 text-yellow-700">
                <li>• اكتب وصف جذاب</li>
                <li>• شارك بانتظام</li>
                <li>• كن صادقاً ومفيداً</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "الباقات والأرباح",
      icon: DollarSign,
      content: (
        <div className="space-y-4">
          <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
            <DollarSign className="h-10 w-10 text-yellow-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 text-center">اختر باقتك</h3>
          <div className="space-y-3">
            <div className="border border-green-200 bg-green-50 p-3 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-green-800">الأساسية</span>
                <span className="text-green-600">1,000 ج.س</span>
              </div>
              <p className="text-sm text-green-700 mt-1">100 إحالة مطلوبة</p>
            </div>
            <div className="border border-yellow-200 bg-yellow-50 p-3 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-yellow-800">الذهبية</span>
                <span className="text-yellow-600">20,000 ج.س</span>
              </div>
              <p className="text-sm text-yellow-700 mt-1">50 إحالة مطلوبة</p>
            </div>
            <div className="border border-purple-200 bg-purple-50 p-3 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-purple-800">الماسية</span>
                <span className="text-purple-600">50,000 ج.س</span>
              </div>
              <p className="text-sm text-purple-700 mt-1">10 إحالات مطلوبة</p>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-800 text-center">
              <strong>تذكر:</strong> كلما ارتقيت في الباقات، زادت عمولاتك وأرباحك!
            </p>
          </div>
        </div>
      ),
    },
  ]

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const progress = ((currentStep + 1) / steps.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <Card className="shadow-xl border-0">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl text-gray-900">جولة تعريفية</CardTitle>
            <div className="mt-4">
              <Progress value={progress} className="w-full" />
              <p className="text-sm text-gray-600 mt-2">
                الخطوة {currentStep + 1} من {steps.length}
              </p>
            </div>
          </CardHeader>

          <CardContent className="min-h-[400px]">
            {steps[currentStep].content}

            <div className="flex justify-between items-center mt-8 pt-6 border-t">
              <Button variant="outline" onClick={prevStep} disabled={currentStep === 0} className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                السابق
              </Button>

              {currentStep === steps.length - 1 ? (
                <Button asChild className="flex items-center">
                  <Link href="/dashboard">
                    ابدأ الآن
                    <ArrowRight className="mr-2 h-4 w-4" />
                  </Link>
                </Button>
              ) : (
                <Button onClick={nextStep} className="flex items-center">
                  التالي
                  <ArrowRight className="mr-2 h-4 w-4" />
                </Button>
              )}
            </div>

            <div className="text-center mt-4">
              <Button variant="ghost" asChild className="text-sm">
                <Link href="/dashboard">تخطي الجولة التعريفية</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
