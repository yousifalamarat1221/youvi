import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Eye, DollarSign, TrendingUp } from "lucide-react"

export function StatsCards() {
  const stats = [
    {
      title: "إجمالي الإحالات",
      value: "1,247",
      change: "+12%",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "المشاهدات اليوم",
      value: "89",
      change: "+5%",
      icon: Eye,
      color: "text-green-600",
    },
    {
      title: "الأرباح الشهرية",
      value: "45,000 ج.س",
      change: "+18%",
      icon: DollarSign,
      color: "text-yellow-600",
    },
    {
      title: "معدل التحويل",
      value: "3.2%",
      change: "+0.5%",
      icon: TrendingUp,
      color: "text-purple-600",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <p className="text-xs text-green-600 mt-1">{stat.change} من الشهر الماضي</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
