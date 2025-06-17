import { DiamondPackageDetails } from "@/components/pricing/diamond-package-details"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function DiamondPackagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Header />
      <div className="py-12">
        <DiamondPackageDetails />

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-xl px-10 py-6"
            asChild
          >
            <Link href="/packages/diamond/referrals">
              <div className="text-center">
                <div>ابدأ إرسال الإحالات</div>
                <div className="text-sm">Start Submitting Referrals</div>
              </div>
              <ArrowLeft className="mr-3 h-6 w-6" />
            </Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  )
}
