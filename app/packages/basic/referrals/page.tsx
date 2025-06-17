import { BasicReferralSubmission } from "@/components/packages/basic-referral-submission"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function BasicReferralsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Header />
      <div className="py-12">
        <BasicReferralSubmission />
      </div>
      <Footer />
    </div>
  )
}
