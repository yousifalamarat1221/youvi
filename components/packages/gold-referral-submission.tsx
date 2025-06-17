"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import {
  Crown,
  Users,
  CheckCircle,
  Upload,
  Eye,
  Clock,
  AlertTriangle,
  Copy,
  Share2,
  Download,
  FileText,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"

export function GoldReferralSubmission() {
  const [currentReferrals, setCurrentReferrals] = useState(32) // Mock current count
  const [newReferrals, setNewReferrals] = useState("")
  const [referralLinks, setReferralLinks] = useState("")
  const [description, setDescription] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const requiredReferrals = 50
  const remainingReferrals = requiredReferrals - currentReferrals
  const progressPercentage = (currentReferrals / requiredReferrals) * 100

  const userReferralLink = "https://youvicash.com/watch/ahmed_mohamed"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setShowSuccess(true)
    setIsSubmitting(false)

    // Reset form
    setNewReferrals("")
    setReferralLinks("")
    setDescription("")

    // Update current referrals (mock)
    setCurrentReferrals((prev) => prev + Number.parseInt(newReferrals) || 0)

    setTimeout(() => setShowSuccess(false), 5000)
  }

  const copyReferralLink = () => {
    navigator.clipboard.writeText(userReferralLink)
    alert("تم نسخ رابط الإحالة!")
  }

  const downloadTemplate = () => {
    const template = `قائمة الإحالات - يوفي كاش (الباقة الذهبية)
===========================================

الرابط المستخدم: ${userReferralLink}

قائمة الإحالات:
1. 
2. 
3. 
4. 
5. 

ملاحظات:
- تأكد من أن كل إحالة شاهدت الفيديو لمدة 30 ثانية كاملة
- اكتب اسم أو معرف كل إحالة
- أضف أي ملاحظات إضافية

التاريخ: ${new Date().toLocaleDateString("ar-EG")}
`

    const blob = new Blob([template], { type: "text/plain;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "youvi-cash-gold-referrals-template.txt"
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-100 rounded-full mb-6">
          <Crown className="h-10 w-10 text-yellow-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
          <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
            إرسال الإحالات للباقة الذهبية
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-6">Submit Referrals for Gold Package</h2>

        <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
          <div className="grid md:grid-cols-2 gap-6">
            <p className="text-lg text-gray-700 text-right">
              أرسل إحالاتك المؤكدة للحصول على الباقة الذهبية والاستفادة من نظام 4 مستويات
            </p>
            <p className="text-lg text-gray-700 text-left">
              Submit your confirmed referrals to get the Gold package and benefit from 4-level system
            </p>
          </div>
        </div>
      </div>

      {/* Success Alert */}
      {showSuccess && (
        <div className="fixed top-4 right-4 z-50 animate-bounce">
          <Card className="border-yellow-500 border-2 bg-yellow-50 shadow-xl">
            <CardContent className="p-4">
              <div className="flex items-center text-yellow-700">
                <CheckCircle className="h-6 w-6 ml-2" />
                <div>
                  <span className="font-bold">تم إرسال الإحالات بنجاح!</span>
                  <p className="text-sm">سيتم مراجعتها خلال 24 ساعة</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-8">
          {/* Progress Card */}
          <Card className="border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-yellow-600 ml-2" />
                  <span>تقدم الإحالات - Referral Progress</span>
                </div>
                <Badge
                  variant={currentReferrals >= requiredReferrals ? "default" : "secondary"}
                  className={currentReferrals >= requiredReferrals ? "bg-yellow-600" : ""}
                >
                  {currentReferrals >= requiredReferrals ? "مكتمل - Complete" : "قيد التقدم - In Progress"}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-5xl font-black text-yellow-600 mb-2">
                  {currentReferrals}/{requiredReferrals}
                </div>
                <p className="text-gray-600">إحالة مؤكدة - Confirmed Referrals</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>التقدم - Progress</span>
                  <span>{Math.round(progressPercentage)}%</span>
                </div>
                <Progress value={progressPercentage} className="h-4" />
              </div>

              {currentReferrals < requiredReferrals ? (
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <div className="flex items-center mb-2">
                    <Clock className="h-5 w-5 text-orange-600 ml-2" />
                    <span className="font-semibold text-orange-800">تحتاج {remainingReferrals} إحالة إضافية</span>
                  </div>
                  <p className="text-sm text-orange-700">
                    Need {remainingReferrals} more referrals to qualify for the Gold package
                  </p>
                </div>
              ) : (
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="h-5 w-5 text-yellow-600 ml-2" />
                    <span className="font-semibold text-yellow-800">مبروك! أكملت العدد المطلوب</span>
                  </div>
                  <p className="text-sm text-yellow-700">
                    Congratulations! You've completed the required number of referrals
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Multi-Level Benefits */}
          <Card className="border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50">
            <CardHeader>
              <CardTitle className="flex items-center text-orange-800">
                <TrendingUp className="h-6 w-6 ml-2" />
                مميزات نظام 4 المستويات
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-3 bg-white rounded-lg border border-orange-200">
                  <div className="text-lg font-bold text-orange-600 mb-1">المستوى 1</div>
                  <p className="text-xs text-gray-600">إحالاتك المباشرة</p>
                  <p className="text-sm font-semibold text-orange-800">1,000 ج.س</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg border border-orange-200">
                  <div className="text-lg font-bold text-orange-600 mb-1">المستوى 2</div>
                  <p className="text-xs text-gray-600">إحالات إحالاتك</p>
                  <p className="text-sm font-semibold text-orange-800">1,000 ج.س</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg border border-orange-200">
                  <div className="text-lg font-bold text-orange-600 mb-1">المستوى 3</div>
                  <p className="text-xs text-gray-600">المستوى الثالث</p>
                  <p className="text-sm font-semibold text-orange-800">1,000 ج.س</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg border border-orange-200">
                  <div className="text-lg font-bold text-orange-600 mb-1">المستوى 4</div>
                  <p className="text-xs text-gray-600">المستوى الرابع</p>
                  <p className="text-sm font-semibold text-orange-800">1,000 ج.س</p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                <p className="text-sm text-green-800 text-center">
                  <strong>عمولة الترقية:</strong> 10,000 ج.س عند ترقية أي عضو للذهبية
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Submission Form */}
          <Card className="border-2 border-yellow-200">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Upload className="h-6 w-6 text-yellow-600 ml-2" />
                <div>
                  <div>إرسال إحالات جديدة</div>
                  <div className="text-sm font-normal text-gray-600">Submit New Referrals</div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Number of Referrals */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="newReferrals">
                      عدد الإحالات الجديدة
                      <span className="text-sm text-gray-500 block">Number of New Referrals</span>
                    </Label>
                    <Input
                      id="newReferrals"
                      type="number"
                      min="1"
                      max="30"
                      value={newReferrals}
                      onChange={(e) => setNewReferrals(e.target.value)}
                      placeholder="مثال: 8"
                      className="text-center text-lg font-semibold"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>
                      الرابط المستخدم
                      <span className="text-sm text-gray-500 block">Used Referral Link</span>
                    </Label>
                    <div className="flex space-x-2">
                      <Input value={userReferralLink} readOnly className="flex-1 bg-gray-50" />
                      <Button type="button" variant="outline" size="icon" onClick={copyReferralLink}>
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Referral Links */}
                <div className="space-y-2">
                  <Label htmlFor="referralLinks">
                    قائمة الإحالات (اختياري)
                    <span className="text-sm text-gray-500 block">
                      List of Referrals (Optional) - أسماء أو معرفات الأشخاص الذين شاهدوا الفيديو
                    </span>
                  </Label>
                  <Textarea
                    id="referralLinks"
                    value={referralLinks}
                    onChange={(e) => setReferralLinks(e.target.value)}
                    placeholder="مثال:
أحمد محمد - شاهد في 2024/01/15
فاطمة علي - شاهد في 2024/01/15
محمد خالد - شاهد في 2024/01/16"
                    rows={6}
                    className="resize-none"
                  />
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">
                    ملاحظات إضافية (اختياري)
                    <span className="text-sm text-gray-500 block">Additional Notes (Optional)</span>
                  </Label>
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="أي ملاحظات أو تفاصيل إضافية حول الإحالات..."
                    rows={3}
                    className="resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full h-12 text-lg font-bold bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700"
                  disabled={!newReferrals || isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white ml-2"></div>
                      جاري الإرسال...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Upload className="h-5 w-5 ml-2" />
                      <div>
                        <div>إرسال الإحالات</div>
                        <div className="text-sm">Submit Referrals</div>
                      </div>
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Package Info */}
          <Card className="border-2 border-yellow-200 bg-yellow-50">
            <CardHeader>
              <CardTitle className="flex items-center text-yellow-800">
                <Crown className="h-5 w-5 ml-2" />
                الباقة الذهبية
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">50,000 ج.س</div>
                <p className="text-sm text-yellow-700">رسوم الاشتراك</p>
                <p className="text-xs text-yellow-600">أو ما يعادله بالدولار</p>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-yellow-700">المطلوب:</span>
                  <span className="font-semibold">50 إحالة</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-yellow-700">العمولة:</span>
                  <span className="font-semibold">4 مستويات</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-yellow-700">Required:</span>
                  <span className="font-semibold">50 Referrals</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-yellow-700">Commission:</span>
                  <span className="font-semibold">4 Levels</span>
                </div>
              </div>

              <Button variant="outline" className="w-full" asChild>
                <Link href="/packages/gold">
                  <Eye className="h-4 w-4 ml-2" />
                  تفاصيل الباقة
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Tools */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Share2 className="h-5 w-5 ml-2" />
                أدوات مساعدة
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start" onClick={copyReferralLink}>
                <Copy className="h-4 w-4 ml-2" />
                نسخ رابط الإحالة
              </Button>

              <Button variant="outline" className="w-full justify-start" onClick={downloadTemplate}>
                <Download className="h-4 w-4 ml-2" />
                تحميل قالب الإحالات
              </Button>

              <Button variant="outline" className="w-full justify-start" asChild>
                <Link href="/dashboard">
                  <FileText className="h-4 w-4 ml-2" />
                  لوحة التحكم
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Instructions */}
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="flex items-center text-orange-800">
                <AlertTriangle className="h-5 w-5 ml-2" />
                تعليمات مهمة
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm text-orange-800 space-y-2">
                <h4 className="font-semibold">العربية:</h4>
                <ul className="space-y-1 text-xs">
                  <li>• تأكد من أن كل إحالة شاهدت الفيديو 30 ثانية كاملة</li>
                  <li>• لا ترسل نفس الإحالة أكثر من مرة</li>
                  <li>• سيتم مراجعة الإحالات خلال 24 ساعة</li>
                  <li>• الإحالات المزيفة ستؤدي لإلغاء الحساب</li>
                </ul>

                <h4 className="font-semibold mt-3">English:</h4>
                <ul className="space-y-1 text-xs">
                  <li>• Ensure each referral watched the full 30-second video</li>
                  <li>• Don't submit the same referral multiple times</li>
                  <li>• Referrals will be reviewed within 24 hours</li>
                  <li>• Fake referrals will result in account suspension</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Contact Support */}
          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="p-4 text-center">
              <h4 className="font-semibold text-blue-800 mb-2">تحتاج مساعدة؟</h4>
              <p className="text-sm text-blue-700 mb-3">Need Help?</p>
              <Button variant="outline" size="sm" className="w-full">
                تواصل مع الدعم
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
