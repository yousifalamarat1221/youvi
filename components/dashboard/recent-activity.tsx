import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Activity } from "lucide-react"

export function RecentActivity() {
  const activities = [
    {
      user: "محمد أحمد",
      action: "شاهد الفيديو وأصبح إحالة جديدة",
      time: "منذ 5 دقائق",
      avatar: "مأ",
    },
    {
      user: "فاطمة علي",
      action: "اشتركت في الباقة الذهبية",
      time: "منذ 15 دقيقة",
      avatar: "فع",
    },
    {
      user: "عمر خالد",
      action: "شاهد الفيديو وأصبح إحالة جديدة",
      time: "منذ 30 دقيقة",
      avatar: "عخ",
    },
    {
      user: "نور حسن",
      action: "شاهد الفيديو وأصبح إحالة جديدة",
      time: "منذ ساعة",
      avatar: "نح",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Activity className="h-5 w-5 ml-2" />
          النشاط الأخير
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-center space-x-4">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="text-xs">{activity.avatar}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{activity.user}</p>
                <p className="text-sm text-gray-600 truncate">{activity.action}</p>
              </div>
              <div className="text-xs text-gray-500">{activity.time}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
