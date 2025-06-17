import { GoldReferralSubmission } from "@/components/packages/gold-referral-submission"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function GoldReferralsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
      <Header />
      <div className="py-12">
        <GoldReferralSubmission />
      </div>
      <Footer />
    </div>
  )
}
