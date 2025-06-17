import { DiamondReferralSubmission } from "@/components/packages/diamond-referral-submission"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function DiamondReferralsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Header />
      <div className="py-12">
        <DiamondReferralSubmission />
      </div>
      <Footer />
    </div>
  )
}
