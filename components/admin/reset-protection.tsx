"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RotateCcw, Shield } from "lucide-react"

export function ResetProtection() {
  const resetWatchedStatus = () => {
    localStorage.removeItem("youvi-cash-watched")
    window.location.reload()
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Shield className="h-5 w-5 ml-2" />
          إعادة تعيين الحماية
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">
          هذا الزر للمطورين فقط - يعيد تعيين حالة مشاهدة الفيديو لاختبار الحماية مرة أخرى
        </p>
        <Button onClick={resetWatchedStatus} variant="outline" className="w-full">
          <RotateCcw className="h-4 w-4 ml-2" />
          إعادة تعيين وإعادة تحميل الصفحة
        </Button>
      </CardContent>
    </Card>
  )
}
