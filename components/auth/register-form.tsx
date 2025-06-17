"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, User, Mail, Phone, Lock, UserPlus } from "lucide-react"
import { useRouter } from "next/navigation"

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    referralCode: "",
    agreeToTerms: false,
    agreeToMarketing: false,
  })
  const router = useRouter()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Redirect to dashboard after successful registration
    router.push("/dashboard")
  }

  const isFormValid =
    formData.firstName &&
    formData.lastName &&
    formData.email &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
    formData.phone &&
    /^\+?[1-9]\d{1,14}$/.test(formData.phone.replace(/\s/g, "")) &&
    formData.password &&
    formData.password.length >= 8 &&
    formData.confirmPassword &&
    formData.password === formData.confirmPassword &&
    formData.agreeToTerms

  return (
    <Card className="shadow-xl border-0">
      <CardHeader className="space-y-1 pb-6">
        <CardTitle className="text-center flex items-center justify-center">
          <UserPlus className="h-5 w-5 ml-2 text-blue-600" />
          معلومات الحساب
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">الاسم الأول</Label>
              <div className="relative">
                <User className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="أحمد"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="pr-10"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">الاسم الأخير</Label>
              <div className="relative">
                <User className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="محمد"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="pr-10"
                  required
                />
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">البريد الإلكتروني</Label>
            <div className="relative">
              <Mail className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="ahmed@example.com"
                value={formData.email}
                onChange={handleInputChange}
                className="pr-10"
                required
              />
            </div>
            {formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && (
              <p className="text-sm text-red-600">البريد الإلكتروني غير صحيح</p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone">رقم الهاتف</Label>
            <div className="relative">
              <Phone className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+963 XXX XXX XXX"
                value={formData.phone}
                onChange={handleInputChange}
                className="pr-10"
                required
              />
            </div>
            {formData.phone && !/^\+?[1-9]\d{1,14}$/.test(formData.phone.replace(/\s/g, "")) && (
              <p className="text-sm text-red-600">رقم الهاتف غير صحيح</p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password">كلمة المرور</Label>
            <div className="relative">
              <Lock className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={formData.password}
                onChange={handleInputChange}
                className="pr-10 pl-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute left-3 top-3 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {formData.password && formData.password.length < 8 && (
              <p className="text-sm text-red-600">كلمة المرور يجب أن تكون 8 أحرف على الأقل</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">تأكيد كلمة المرور</Label>
            <div className="relative">
              <Lock className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="pr-10 pl-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute left-3 top-3 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {formData.confirmPassword && formData.password !== formData.confirmPassword && (
              <p className="text-sm text-red-600">كلمات المرور غير متطابقة</p>
            )}
          </div>

          {/* Referral Code */}
          <div className="space-y-2">
            <Label htmlFor="referralCode">كود الإحالة (اختياري)</Label>
            <Input
              id="referralCode"
              name="referralCode"
              type="text"
              placeholder="أدخل كود الإحالة إن وجد"
              value={formData.referralCode}
              onChange={handleInputChange}
            />
          </div>

          {/* Terms and Conditions */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="agreeToTerms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, agreeToTerms: checked as boolean }))}
              />
              <Label htmlFor="agreeToTerms" className="text-sm">
                أوافق على{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  الشروط والأحكام
                </a>{" "}
                و{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  سياسة الخصوصية
                </a>
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="agreeToMarketing"
                name="agreeToMarketing"
                checked={formData.agreeToMarketing}
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({ ...prev, agreeToMarketing: checked as boolean }))
                }
              />
              <Label htmlFor="agreeToMarketing" className="text-sm">
                أوافق على تلقي العروض والتحديثات عبر البريد الإلكتروني
              </Label>
            </div>
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full h-12 text-lg" disabled={!isFormValid || isLoading}>
            {isLoading ? "جاري إنشاء الحساب..." : "إنشاء حساب"}
          </Button>
        </form>

        {/* Additional Info */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-2">مميزات الانضمام:</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• ابدأ بجمع الإحالات فوراً</li>
            <li>• تتبع أرباحك في الوقت الفعلي</li>
            <li>• دعم فني متاح 24/7</li>
            <li>• نظام عمولات شفاف ومضمون</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
