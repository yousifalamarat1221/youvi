import { RegisterForm } from "@/components/auth/register-form"
import { Wallet } from "lucide-react"
import Link from "next/link"

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-6">
            <Wallet className="h-10 w-10 text-blue-600" />
            <span className="text-3xl font-bold text-gray-900">يوفي كاش</span>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">إنشاء حساب جديد</h1>
          <p className="text-gray-600">ابدأ رحلتك نحو الربح المضمون</p>
        </div>

        <RegisterForm />

        <div className="text-center mt-6">
          <p className="text-gray-600">
            لديك حساب بالفعل؟{" "}
            <Link href="/login" className="text-blue-600 hover:text-blue-700 font-semibold">
              تسجيل الدخول
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
