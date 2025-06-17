import { BasicPackageDetails } from "@/components/pricing/basic-package-details"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function BasicPackagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Header />
      <div className="py-12">
        <BasicPackageDetails />

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-xl px-10 py-6"
            asChild
          >
            <Link href="/packages/basic/referrals">
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
