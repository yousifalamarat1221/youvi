import { DashboardHeader } from "@/components/dashboard/header"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { ReferralChart } from "@/components/dashboard/referral-chart"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { ReferralLink } from "@/components/dashboard/referral-link"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <StatsCards />
            <ReferralChart />
            <RecentActivity />
          </div>
          <div className="space-y-8">
            <ReferralLink />
          </div>
        </div>
      </div>
    </div>
  )
}
