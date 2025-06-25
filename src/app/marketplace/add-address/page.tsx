"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ChevronDown, Grid3X3 } from "lucide-react"

// Nigerian states and their LGAs (sample data - you'd want a complete list)
const statesAndLGAs = {
  Plateau: [
    "Barkin Ladi",
    "Bassa",
    "Bokkos",
    "Jos East",
    "Jos North",
    "Jos South",
    "Kanam",
    "Kanke",
    "Langtang North",
    "Langtang South",
    "Mangu",
    "Mikang",
    "Pankshin",
    "Qua'an Pan",
    "Riyom",
    "Shendam",
    "Wase",
  ],
  Lagos: [
    "Agege",
    "Ajeromi-Ifelodun",
    "Alimosho",
    "Amuwo-Odofin",
    "Apapa",
    "Badagry",
    "Epe",
    "Eti Osa",
    "Ibeju-Lekki",
    "Ifako-Ijaiye",
    "Ikeja",
    "Ikorodu",
    "Kosofe",
    "Lagos Island",
    "Lagos Mainland",
    "Mushin",
    "Ojo",
    "Oshodi-Isolo",
    "Shomolu",
    "Surulere",
  ],
  Kano: [
    "Ajingi",
    "Albasu",
    "Bagwai",
    "Bebeji",
    "Bichi",
    "Bunkure",
    "Dala",
    "Dambatta",
    "Dawakin Kudu",
    "Dawakin Tofa",
    "Doguwa",
    "Fagge",
    "Gabasawa",
    "Garko",
    "Garun Mallam",
    "Gaya",
    "Gezawa",
    "Gwale",
    "Gwarzo",
    "Kabo",
    "Kano Municipal",
    "Karaye",
    "Kibiya",
    "Kiru",
    "Kumbotso",
    "Kunchi",
    "Kura",
    "Madobi",
    "Makoda",
    "Minjibir",
    "Nasarawa",
    "Rano",
    "Rimin Gado",
    "Rogo",
    "Shanono",
    "Sumaila",
    "Takai",
    "Tarauni",
    "Tofa",
    "Tsanyawa",
    "Tudun Wada",
    "Ungogo",
    "Warawa",
    "Wudil",
  ],
  Abuja: ["Abaji", "Bwari", "Gwagwalada", "Kuje", "Kwali", "Municipal Area Council"],
}

export default function AddressForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    apartmentNumber: "",
    state: "",
    lga: "",
    streetAddress: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }

    // Reset LGA when state changes
    if (field === "state") {
      setFormData((prev) => ({ ...prev, lga: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required"
    } else if (!/^(\+234|0)[789]\d{9}$/.test(formData.phoneNumber.replace(/\s/g, ""))) {
      newErrors.phoneNumber = "Please enter a valid Nigerian phone number"
    }

    if (!formData.state) {
      newErrors.state = "State is required"
    }

    if (!formData.streetAddress.trim()) {
      newErrors.streetAddress = "Street address is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Here you would typically call your API to save the address
      console.log("Saving address:", formData)
      await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulate API call

      // Handle success - redirect or show success message
      console.log("Address saved successfully")
    } catch (error) {
      console.error("Failed to save address:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCancel = () => {
    // Handle cancel action - go back or close modal
    console.log("Address form cancelled")
  }

  const availableLGAs = formData.state ? statesAndLGAs[formData.state as keyof typeof statesAndLGAs] || [] : []

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl border-[1px] border-primary p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-8">Add new address</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="firstName" className="text-gray-700 font-medium">
                    First name<span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className={`mt-2 border-primary ${errors.firstName ? "border-red-300 focus:border-red-500 focus:ring-red-500" : ""}`}
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                </div>

                <div>
                  <Label htmlFor="lastName" className="text-gray-700 font-medium">
                    Last name
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className="mt-2 border-primary"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <Label htmlFor="phoneNumber" className="text-gray-700 font-medium">
                  Phone number<span className="text-red-500">*</span>
                </Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                  className={`mt-2 border-primary ${errors.phoneNumber ? "border-red-300 focus:border-red-500 focus:ring-red-500" : ""}`}
                  placeholder="e.g., +234 801 234 5678"
                />
                {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
              </div>

              {/* Address Fields */}
              <div className="grid md:grid-cols-3 gap-3">
                <div>
                  <Label htmlFor="apartmentNumber" className="text-gray-700 font-medium">
                    Apartment Number
                  </Label>
                  <Input
                    id="apartmentNumber"
                    type="text"
                    value={formData.apartmentNumber}
                    onChange={(e) => handleInputChange("apartmentNumber", e.target.value)}
                    className="mt-2 border-primary"
                    placeholder="Apt, Suite, etc."
                  />
                </div>

                <div>
                  <Label htmlFor="state" className="text-gray-700 font-medium">
                    State<span className="text-red-500">*</span>
                  </Label>
                  <Select value={formData.state} onValueChange={(value) => handleInputChange("state", value)}>
                    <SelectTrigger
                      className={`mt-2 w-full py-[19px] border-primary ${errors.state ? "border-red-300 focus:border-red-500 focus:ring-red-500" : ""}`}
                    >
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.keys(statesAndLGAs).map((state) => (
                        <SelectItem key={state} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
                </div>

                <div>
                  <Label htmlFor="lga" className="text-gray-700 font-medium">
                    LGA
                  </Label>
                  <Select
                    value={formData.lga}
                    onValueChange={(value) => handleInputChange("lga", value)}
                    disabled={!formData.state}
                  >
                    <SelectTrigger className="mt-2 w-full py-[19px] border-primary">
                      <SelectValue placeholder="Select LGA" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableLGAs.map((lga) => (
                        <SelectItem key={lga} value={lga}>
                          {lga}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Street Address */}
              <div>
                <Label htmlFor="streetAddress" className="text-gray-700 font-medium">
                  Street address
                </Label>
                <Textarea
                  id="streetAddress"
                  value={formData.streetAddress}
                  onChange={(e) => handleInputChange("streetAddress", e.target.value)}
                  className={`mt-2 min-h-[0px] py-[9px] border-primary ${errors.streetAddress ? "border-red-300 focus:border-red-500 focus:ring-red-500" : ""}`}
                  placeholder="Enter your full street address"
                />
                {errors.streetAddress && <p className="text-red-500 text-sm mt-1">{errors.streetAddress}</p>}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-teal-700 text-white px-8 py-3 rounded-sm font-medium"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin font-medium"></div>
                      <span>Saving...</span>
                    </div>
                  ) : (
                    "Finish"
                  )}
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  onClick={handleCancel}
                  className="text-primary hover:text-gray-800 px-8 py-3 rounded-sm font-medium"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
