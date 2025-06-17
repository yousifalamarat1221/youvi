import { Button } from "@/components/ui/button"
import { Wallet, Menu } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Wallet className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">يوفي كاش - Youvi Cash</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">
              كيف يعمل - How It Works
            </Link>
            <Link href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">
              الباقات - Packages
            </Link>
            <Link href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">
              المميزات - Features
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link href="/login">تسجيل الدخول - Login</Link>
            </Button>
            <Button asChild>
              <Link href="/register">إنشاء حساب - Sign Up</Link>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
