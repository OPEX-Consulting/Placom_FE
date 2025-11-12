"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronDown, Grid3X3, CreditCard } from "lucide-react"
import Image from "next/image"

export default function PaymentForm() {
  const [formData, setFormData] = useState({
    email: "idokojoel316@gmail.com",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    saveCard: false,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isProcessing, setIsProcessing] = useState(false)

  // Format card number with spaces
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ""
    const parts = []

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }

    if (parts.length) {
      return parts.join(" ")
    } else {
      return v
    }
  }

  // Format expiry date as MM/YY
  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\D/g, "")
    if (v.length >= 2) {
      return `${v.slice(0, 2)}/${v.slice(2, 4)}`
    }
    return v
  }

  // Mask card number for display
  const maskCardNumber = (value: string) => {
    if (value.length === 0) return ""
    const cleaned = value.replace(/\s/g, "")
    if (cleaned.length <= 4) return "•".repeat(cleaned.length)
    return "•".repeat(Math.max(0, cleaned.length - 4)) + cleaned.slice(-4)
  }

  const handleInputChange = (field: string, value: string) => {
    let formattedValue = value

    if (field === "cardNumber") {
      formattedValue = formatCardNumber(value)
      if (formattedValue.replace(/\s/g, "").length > 16) return
    } else if (field === "expiryDate") {
      formattedValue = formatExpiryDate(value)
      if (formattedValue.replace(/\D/g, "").length > 4) return
    } else if (field === "cvv") {
      formattedValue = value.replace(/\D/g, "").slice(0, 4)
    }

    setFormData((prev) => ({ ...prev, [field]: formattedValue }))

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    const cardNumber = formData.cardNumber.replace(/\s/g, "")
    if (!cardNumber) {
      newErrors.cardNumber = "Card number is required"
    } else if (cardNumber.length < 13 || cardNumber.length > 19) {
      newErrors.cardNumber = "Please enter a valid card number"
    }

    if (!formData.expiryDate) {
      newErrors.expiryDate = "Expiry date is required"
    } else if (!/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
      newErrors.expiryDate = "Please enter a valid expiry date (MM/YY)"
    } else {
      const [month, year] = formData.expiryDate.split("/")
      const currentDate = new Date()
      const currentYear = currentDate.getFullYear() % 100
      const currentMonth = currentDate.getMonth() + 1

      if (Number.parseInt(month) < 1 || Number.parseInt(month) > 12) {
        newErrors.expiryDate = "Please enter a valid month"
      } else if (
        Number.parseInt(year) < currentYear ||
        (Number.parseInt(year) === currentYear && Number.parseInt(month) < currentMonth)
      ) {
        newErrors.expiryDate = "Card has expired"
      }
    }

    if (!formData.cvv) {
      newErrors.cvv = "CVV is required"
    } else if (formData.cvv.length < 3 || formData.cvv.length > 4) {
      newErrors.cvv = "Please enter a valid CVV"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsProcessing(true)

    try {
      // Here you would typically process the payment with your payment provider
      console.log("Processing payment:", {
        ...formData,
        cardNumber: "****-****-****-" + formData.cardNumber.slice(-4),
      })

      await new Promise((resolve) => setTimeout(resolve, 3000)) // Simulate payment processing

      // Handle successful payment
      console.log("Payment successful!")
    } catch (error) {
      console.error("Payment failed:", error)
    } finally {
      setIsProcessing(false)
    }
  }

  const handleMyCards = () => {
    console.log("Opening saved cards...")
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Main Content */}
      <main className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 h-screen w-full mx-auto">
          {/* Left Side - Image */}
          <div className="relative -left-30 hidden lg:block">
            <Image
              src="/payment.png"
              alt="Person holding credit card"
              width={500}
              height={600}
              className="w-full h-full object-cover transform scale-x-[-1] absolute left-0"
            />
          </div>

          {/* Right Side - Payment Form */}
          <div className="flex flex-col justify-start items-center space-y-8 py-8">            

            {/* Payment Form */}
            <div className="p-8">
                <div className="flex items-center justify-start mb-10 w-full max-w-md m-auto">
                    <div className="flex items-center">
                    {/* Step 1 - Active */}
                    <div className="flex items-center">
                        <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                        <div className="w-35 h-1 bg-primary"></div>
                    </div>

                    {/* Step 2 - Inactive */}
                    <div className="flex items-center">
                        <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                        <div className="w-35 h-1 bg-primary"></div>
                    </div>

                    {/* Step 3 - Inactive */}
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                    </div>
                </div>
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Enter your card details</h1>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email */}
                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    Email address or phone number
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`mt-2 text-secondary ${errors.email ? "border-red-300 focus:border-red-500 focus:ring-red-500" : ""}`}
                    placeholder="Enter your email"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Card Number */}
                <div>
                  <Label htmlFor="cardNumber" className="text-gray-700 font-medium">
                    Credit card number
                  </Label>
                  <div className="relative">
                    <Input
                      id="cardNumber"
                      type="text"
                      value={formData.cardNumber}
                      onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                      className={`mt-2 pr-12 text-secondary ${errors.cardNumber ? "border-red-300 focus:border-red-500 focus:ring-red-500" : ""}`}
                      placeholder="•••• •••• •••• ••••"
                    />
                    <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                  {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
                </div>

                {/* Expiry and CVV */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiryDate" className="text-gray-700 font-medium">
                      Expiry date
                    </Label>
                    <Input
                      id="expiryDate"
                      type="text"
                      value={formData.expiryDate}
                      onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                      className={`mt-2 text-secondary ${errors.expiryDate ? "border-red-300 focus:border-red-500 focus:ring-red-500" : ""}`}
                      placeholder="mm/yy"
                    />
                    {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>}
                  </div>

                  <div>
                    <Label htmlFor="cvv" className="text-gray-700 font-medium">
                      CVV
                    </Label>
                    <Input
                      id="cvv"
                      type="text"
                      value={formData.cvv}
                      onChange={(e) => handleInputChange("cvv", e.target.value)}
                      className={`mt-2 text-secondary ${errors.cvv ? "border-red-300 focus:border-red-500 focus:ring-red-500" : ""}`}
                      placeholder="•••"
                    />
                    {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
                  </div>
                </div>

                {/* Save Card */}
                <div className="flex items-center justify-between space-x-2">
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="saveCard"
                            checked={formData.saveCard}
                            onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, saveCard: !!checked }))}
                            className="border-1 border-primary rounded-sm text-green-500"
                        />
                        <Label htmlFor="saveCard" className="text-secondary font-medium cursor-pointer">
                            Save Card
                        </Label>
                    </div>

                    <button
                    onClick={handleMyCards}
                    className="text-secondary text-sm underline hover:text-green-600 font-medium transition-colors"
                    >
                    My cards
                    </button>
                </div>

                {/* Payment Methods */}
                <div className="flex items-center gap-4 py-4">
                  <div className="flex items-center gap-1 cursor-pointer" onClick={() => console.log("PayPal clicked")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={15.26} height={18} viewBox="0 0 256 302">
                        <path fill="#27346a" d="M217.168 23.507C203.234 7.625 178.046.816 145.823.816h-93.52A13.39 13.39 0 0 0 39.076 12.11L.136 259.077c-.774 4.87 2.997 9.28 7.933 9.28h57.736l14.5-91.971l-.45 2.88c1.033-6.501 6.593-11.296 13.177-11.296h27.436c53.898 0 96.101-21.892 108.429-85.221c.366-1.873.683-3.696.957-5.477q-2.334-1.236 0 0c3.671-23.407-.025-39.34-12.686-53.765"></path>
                        <path fill="#27346a" d="M102.397 68.84a11.7 11.7 0 0 1 5.053-1.14h73.318c8.682 0 16.78.565 24.18 1.756a102 102 0 0 1 6.177 1.182a90 90 0 0 1 8.59 2.347c3.638 1.215 7.026 2.63 10.14 4.287c3.67-23.416-.026-39.34-12.687-53.765C203.226 7.625 178.046.816 145.823.816H52.295C45.71.816 40.108 5.61 39.076 12.11L.136 259.068c-.774 4.878 2.997 9.282 7.925 9.282h57.744L95.888 77.58a11.72 11.72 0 0 1 6.509-8.74"></path>
                        <path fill="#2790c3" d="M228.897 82.749c-12.328 63.32-54.53 85.221-108.429 85.221H93.024c-6.584 0-12.145 4.795-13.168 11.296L61.817 293.621c-.674 4.262 2.622 8.124 6.934 8.124h48.67a11.71 11.71 0 0 0 11.563-9.88l.474-2.48l9.173-58.136l.591-3.213a11.71 11.71 0 0 1 11.562-9.88h7.284c47.147 0 84.064-19.154 94.852-74.55c4.503-23.15 2.173-42.478-9.739-56.054c-3.613-4.112-8.1-7.508-13.327-10.28c-.283 1.79-.59 3.604-.957 5.477"></path>
                        <path fill="#1f264f" d="M216.952 72.128a90 90 0 0 0-5.818-1.49a110 110 0 0 0-6.177-1.174c-7.408-1.199-15.5-1.765-24.19-1.765h-73.309a11.6 11.6 0 0 0-5.053 1.149a11.68 11.68 0 0 0-6.51 8.74l-15.582 98.798l-.45 2.88c1.025-6.501 6.585-11.296 13.17-11.296h27.444c53.898 0 96.1-21.892 108.428-85.221c.367-1.873.675-3.688.958-5.477q-4.682-2.47-10.14-4.279a83 83 0 0 0-2.77-.865"></path>
                    </svg>
                    <div><span className="text-sm font-extrabold text-blue-600 italic">Pay</span><span className="text-sm font-extrabold text-blue-400 italic">Pal</span>
                    </div>
                  </div>
                  <div className="cursor-pointer" onClick={() => console.log("Zapper clicked")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={46.27} height={18} viewBox="0 0 256 83">
                        <defs>
                            <linearGradient id="logosVisa0" x1="45.974%" x2="54.877%" y1="-2.006%" y2="100%">
                                <stop offset="0%" stopColor="#222357"></stop>
                                <stop offset="100%" stopColor="#254aa5"></stop>
                            </linearGradient>
                        </defs>
                        <path fill="url(#logosVisa0)" d="M132.397 56.24c-.146-11.516 10.263-17.942 18.104-21.763c8.056-3.92 10.762-6.434 10.73-9.94c-.06-5.365-6.426-7.733-12.383-7.825c-10.393-.161-16.436 2.806-21.24 5.05l-3.744-17.519c4.82-2.221 13.745-4.158 23-4.243c21.725 0 35.938 10.724 36.015 27.351c.085 21.102-29.188 22.27-28.988 31.702c.069 2.86 2.798 5.912 8.778 6.688c2.96.392 11.131.692 20.395-3.574l3.636 16.95c-4.982 1.814-11.385 3.551-19.357 3.551c-20.448 0-34.83-10.87-34.946-26.428m89.241 24.968c-3.967 0-7.31-2.314-8.802-5.865L181.803 1.245h21.709l4.32 11.939h26.528l2.506-11.939H256l-16.697 79.963zm3.037-21.601l6.265-30.027h-17.158zm-118.599 21.6L88.964 1.246h20.687l17.104 79.963zm-30.603 0L53.941 26.782l-8.71 46.277c-1.022 5.166-5.058 8.149-9.54 8.149H.493L0 78.886c7.226-1.568 15.436-4.097 20.41-6.803c3.044-1.653 3.912-3.098 4.912-7.026L41.819 1.245H63.68l33.516 79.963z" transform="matrix(1 0 0 -1 0 82.668)"></path>
                    </svg>
                  </div>
                  <div className="cursor-pointer" onClick={() => console.log("Zapper clicked")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={23.16} height={18} viewBox="0 0 256 199">
                        <path d="M46.54 198.011V184.84c0-5.05-3.074-8.342-8.343-8.342c-2.634 0-5.488.878-7.464 3.732c-1.536-2.415-3.731-3.732-7.024-3.732c-2.196 0-4.39.658-6.147 3.073v-2.634h-4.61v21.074h4.61v-11.635c0-3.731 1.976-5.488 5.05-5.488c3.072 0 4.61 1.976 4.61 5.488v11.635h4.61v-11.635c0-3.731 2.194-5.488 5.048-5.488c3.074 0 4.61 1.976 4.61 5.488v11.635zm68.271-21.074h-7.463v-6.366h-4.61v6.366h-4.171v4.17h4.17v9.66c0 4.83 1.976 7.683 7.245 7.683c1.976 0 4.17-.658 5.708-1.536l-1.318-3.952c-1.317.878-2.853 1.098-3.951 1.098c-2.195 0-3.073-1.317-3.073-3.513v-9.44h7.463zm39.076-.44c-2.634 0-4.39 1.318-5.488 3.074v-2.634h-4.61v21.074h4.61v-11.854c0-3.512 1.536-5.488 4.39-5.488c.878 0 1.976.22 2.854.439l1.317-4.39c-.878-.22-2.195-.22-3.073-.22m-59.052 2.196c-2.196-1.537-5.269-2.195-8.562-2.195c-5.268 0-8.78 2.634-8.78 6.805c0 3.513 2.634 5.488 7.244 6.147l2.195.22c2.415.438 3.732 1.097 3.732 2.195c0 1.536-1.756 2.634-4.83 2.634s-5.488-1.098-7.025-2.195l-2.195 3.512c2.415 1.756 5.708 2.634 9 2.634c6.147 0 9.66-2.853 9.66-6.805c0-3.732-2.854-5.708-7.245-6.366l-2.195-.22c-1.976-.22-3.512-.658-3.512-1.975c0-1.537 1.536-2.415 3.951-2.415c2.635 0 5.269 1.097 6.586 1.756zm122.495-2.195c-2.635 0-4.391 1.317-5.489 3.073v-2.634h-4.61v21.074h4.61v-11.854c0-3.512 1.537-5.488 4.39-5.488c.879 0 1.977.22 2.855.439l1.317-4.39c-.878-.22-2.195-.22-3.073-.22m-58.833 10.976c0 6.366 4.39 10.976 11.196 10.976c3.073 0 5.268-.658 7.463-2.414l-2.195-3.732c-1.756 1.317-3.512 1.975-5.488 1.975c-3.732 0-6.366-2.634-6.366-6.805c0-3.951 2.634-6.586 6.366-6.805c1.976 0 3.732.658 5.488 1.976l2.195-3.732c-2.195-1.757-4.39-2.415-7.463-2.415c-6.806 0-11.196 4.61-11.196 10.976m42.588 0v-10.537h-4.61v2.634c-1.537-1.975-3.732-3.073-6.586-3.073c-5.927 0-10.537 4.61-10.537 10.976s4.61 10.976 10.537 10.976c3.073 0 5.269-1.097 6.586-3.073v2.634h4.61zm-16.904 0c0-3.732 2.415-6.805 6.366-6.805c3.732 0 6.367 2.854 6.367 6.805c0 3.732-2.635 6.805-6.367 6.805c-3.951-.22-6.366-3.073-6.366-6.805m-55.1-10.976c-6.147 0-10.538 4.39-10.538 10.976s4.39 10.976 10.757 10.976c3.073 0 6.147-.878 8.562-2.853l-2.196-3.293c-1.756 1.317-3.951 2.195-6.146 2.195c-2.854 0-5.708-1.317-6.367-5.05h15.587v-1.755c.22-6.806-3.732-11.196-9.66-11.196m0 3.951c2.853 0 4.83 1.757 5.268 5.05h-10.976c.439-2.854 2.415-5.05 5.708-5.05m114.372 7.025v-18.879h-4.61v10.976c-1.537-1.975-3.732-3.073-6.586-3.073c-5.927 0-10.537 4.61-10.537 10.976s4.61 10.976 10.537 10.976c3.074 0 5.269-1.097 6.586-3.073v2.634h4.61zm-16.903 0c0-3.732 2.414-6.805 6.366-6.805c3.732 0 6.366 2.854 6.366 6.805c0 3.732-2.634 6.805-6.366 6.805c-3.952-.22-6.366-3.073-6.366-6.805m-154.107 0v-10.537h-4.61v2.634c-1.537-1.975-3.732-3.073-6.586-3.073c-5.927 0-10.537 4.61-10.537 10.976s4.61 10.976 10.537 10.976c3.074 0 5.269-1.097 6.586-3.073v2.634h4.61zm-17.123 0c0-3.732 2.415-6.805 6.366-6.805c3.732 0 6.367 2.854 6.367 6.805c0 3.732-2.635 6.805-6.367 6.805c-3.951-.22-6.366-3.073-6.366-6.805"></path>
                        <path fill="#ff5f00" d="M93.298 16.903h69.15v124.251h-69.15z"></path>
                        <path fill="#eb001b" d="M97.689 79.029c0-25.245 11.854-47.637 30.074-62.126C114.373 6.366 97.47 0 79.03 0C35.343 0 0 35.343 0 79.029s35.343 79.029 79.029 79.029c18.44 0 35.343-6.366 48.734-16.904c-18.22-14.269-30.074-36.88-30.074-62.125"></path>
                        <path fill="#f79e1b" d="M255.746 79.029c0 43.685-35.343 79.029-79.029 79.029c-18.44 0-35.343-6.366-48.734-16.904c18.44-14.488 30.075-36.88 30.075-62.125s-11.855-47.637-30.075-62.126C141.373 6.366 158.277 0 176.717 0c43.686 0 79.03 35.563 79.03 79.029"></path>
                    </svg>
                  </div>
                  <div className="cursor-pointer" onClick={() => console.log("Zapper clicked")}>
                    <Image
                      src="/zapper.svg"
                      alt="Mastercard logo"
                      width={24}
                      height={24}
                      className="w-20"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-primary hover:bg-teal-700 text-white py-6 text-lg font-medium rounded-sm"
                >
                  {isProcessing ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Processing payment...</span>
                    </div>
                  ) : (
                    "Make payment"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
