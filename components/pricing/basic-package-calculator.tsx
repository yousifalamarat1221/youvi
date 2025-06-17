"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calculator, DollarSign } from "lucide-react"

export function BasicPackageCalculator() {
  const [referrals, setReferrals] = useState(5)

  const calculateEarnings = (numReferrals: number) => {
    const commissionPerReferral = 1000
    const totalEarnings = numReferrals * commissionPerReferral
    const subscriptionCost = 1000
    const netProfit = totalEarnings - subscriptionCost

    return {
      totalEarnings,
      subscriptionCost,
      netProfit,
    }
  }

  const earnings = calculateEarnings(referrals)

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Calculator className="h-5 w-5 ml-2 text-blue-600" />
          حاسبة أرباح الباقة الأساسية
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="referrals">عدد الإحالات المتوقعة</Label>
          <Input
            id="referrals"
            type="number"
            min="1"
            max="100"
            value={referrals}
            onChange={(e) => setReferrals(Number.parseInt(e.target.value) || 0)}
            className="text-center text-lg font-semibold"
          />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
            <span className="text-green-800">إجمالي الأرباح:</span>
            <span className="font-bold text-green-600">{earnings.totalEarnings.toLocaleString()} ج.س</span>
          </div>

          <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
            <span className="text-red-800">رسوم الاشتراك:</span>
            <span className="font-bold text-red-600">-{earnings.subscriptionCost.toLocaleString()} ج.س</span>
          </div>

          <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border-2 border-blue-200">
            <span className="text-blue-800 font-semibold">صافي الربح:</span>
            <span className="font-bold text-blue-600 text-lg">{earnings.netProfit.toLocaleString()} ج.س</span>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <div className="flex items-center mb-2">
            <DollarSign className="h-4 w-4 text-yellow-600 ml-1" />
            <span className="text-sm font-semibold text-yellow-800">نصيحة:</span>
          </div>
          <p className="text-sm text-yellow-700">
            {referrals < 2
              ? "تحتاج إلى إحالتين على الأقل لتغطية رسوم الاشتراك"
              : referrals < 5
                ? "أرباح جيدة! حاول زيادة الإحالات للمزيد من الأرباح"
                : referrals < 10
                  ? "أرباح ممتازة! أنت في الطريق الصحيح"
                  : "أرباح رائعة! فكر في الترقية للباقة الذهبية"}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
