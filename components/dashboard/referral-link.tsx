"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Copy, Share2, QrCode, Eye } from "lucide-react"
import Link from "next/link"

export function ReferralLink() {
  const referralCode = "ahmed_mohamed"
  const referralLink = `https://youvicash.com/watch/${referralCode}`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink)
    alert("تم نسخ الرابط!")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Share2 className="h-5 w-5 ml-2" />
          رابط الإحالة الخاص بك
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex space-x-2">
          <Input value={referralLink} readOnly className="flex-1" />
          <Button size="icon" variant="outline" onClick={copyToClipboard}>
            <Copy className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <Button variant="outline" size="sm">
            <QrCode className="h-4 w-4 ml-1" />
            QR Code
          </Button>
          <Button variant="outline" size="sm" onClick={copyToClipboard}>
            <Copy className="h-4 w-4 ml-1" />
            نسخ
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href={`/watch/${referralCode}`}>
              <Eye className="h-4 w-4 ml-1" />
              معاينة
            </Link>
          </Button>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-2">نصائح للنجاح:</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• شارك الرابط في مجموعات مهتمة</li>
            <li>• اكتب محتوى جذاب عن المشروع</li>
            <li>• استخدم وسائل التواصل الاجتماعي</li>
            <li>• تأكد من أن الزوار يشاهدون الفيديو كاملاً</li>
          </ul>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-semibold text-green-900 mb-2">🎯 كيف يعمل الرابط:</h4>
          <ol className="text-sm text-green-800 space-y-1">
            <li>1. الزائر يضغط على رابطك</li>
            <li>2. يشاهد فيديو لمدة 30 ثانية كاملة</li>
            <li>3. يتم احتساب الإحالة لك تلقائياً</li>
            <li>4. تحصل على عمولة عند اشتراكه</li>
          </ol>
        </div>
      </CardContent>
    </Card>
  )
}
