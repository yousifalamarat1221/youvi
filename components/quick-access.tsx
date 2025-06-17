import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, BarChart3, RotateCcw } from "lucide-react"
import Link from "next/link"

export function QuickAccess() {
  return (
    <Card className="fixed bottom-4 right-4 z-50 w-64 shadow-xl">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm">الوصول السريع</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Button asChild variant="outline" size="sm" className="w-full justify-start">
          <Link href="/dashboard">
            <BarChart3 className="h-4 w-4 ml-2" />
            لوحة التحكم
          </Link>
        </Button>

        <Button asChild variant="outline" size="sm" className="w-full justify-start">
          <Link href="/register">
            <Users className="h-4 w-4 ml-2" />
            إنشاء حساب
          </Link>
        </Button>

        <Button asChild variant="outline" size="sm" className="w-full justify-start">
          <Link href="/admin/reset">
            <RotateCcw className="h-4 w-4 ml-2" />
            إعادة تعيين الحماية
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
