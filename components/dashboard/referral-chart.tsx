"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3 } from "lucide-react"

export function ReferralChart() {
  // Mock data for the chart
  const data = [
    { day: "السبت", referrals: 12 },
    { day: "الأحد", referrals: 19 },
    { day: "الاثنين", referrals: 8 },
    { day: "الثلاثاء", referrals: 15 },
    { day: "الأربعاء", referrals: 22 },
    { day: "الخميس", referrals: 18 },
    { day: "الجمعة", referrals: 25 },
  ]

  const maxReferrals = Math.max(...data.map((d) => d.referrals))

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <BarChart3 className="h-5 w-5 ml-2" />
          الإحالات الأسبوعية
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-16 text-sm text-gray-600">{item.day}</div>
              <div className="flex-1 bg-gray-200 rounded-full h-3">
                <div
                  className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${(item.referrals / maxReferrals) * 100}%` }}
                />
              </div>
              <div className="w-8 text-sm font-semibold text-gray-900">{item.referrals}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
