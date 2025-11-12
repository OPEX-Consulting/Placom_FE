"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ChevronDown, Grid3X3, Plus } from "lucide-react"

interface Address {
  id: string
  name: string
  location: string
  fullAddress: string
}

const savedAddresses: Address[] = [
  {
    id: "1",
    name: "Angela Okwori",
    location: "Rivers, Port Harcourt",
    fullAddress: "144 Kevlar Avenue, Cranberry Road",
  },
  {
    id: "2",
    name: "James Alheri",
    location: "Makurdi, Benue",
    fullAddress: "7th Avenue, James Maddison Street",
  },
]

export default function DeliveryAddressSelection() {
  const [selectedAddressId, setSelectedAddressId] = useState("1")
  const [isConfirming, setIsConfirming] = useState(false)

  const handleConfirm = async () => {
    setIsConfirming(true)

    try {
      // Here you would typically save the selected address and proceed to next step
      const selectedAddress = savedAddresses.find((addr) => addr.id === selectedAddressId)
      console.log("Selected delivery address:", selectedAddress)

      await new Promise((resolve) => setTimeout(resolve, 1500)) // Simulate API call

      // Proceed to next step in checkout process
      console.log("Proceeding to next step...")
    } catch (error) {
      console.error("Failed to confirm address:", error)
    } finally {
      setIsConfirming(false)
    }
  }

  const handleAddNewAddress = () => {
    // Navigate to add new address form
    location.href = "/marketplace/add-address"
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto mt-10">
          {/* Progress Indicator */}
          <div className="flex items-center justify-start mb-12">
            <div className="flex items-center">
              {/* Step 1 - Active */}
              <div className="flex items-center">
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="w-32 h-1 bg-linear-to-r from-primary to-gray-300"></div>
              </div>

              {/* Step 2 - Inactive */}
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                <div className="w-32 h-1 bg-gray-300"></div>
              </div>

              {/* Step 3 - Inactive */}
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            </div>
          </div>

          {/* Title */}
          <div className="text-left mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Where do we <br/>deliver your order to?</h1>
            <p className="text-xl text-gray-600">Choose a delivery location</p>
          </div>

          {/* Address Selection */}
          <div className="space-y-4 mb-8">
            <RadioGroup value={selectedAddressId} onValueChange={setSelectedAddressId}>
              {savedAddresses.map((address) => (
                <div key={address.id}>
                  <Label
                    htmlFor={address.id}
                    className="flex items-start gap-4 p-6 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-teal-300 transition-colors data-[state=checked]:border-teal-500 data-[state=checked]:bg-teal-50"
                  >
                    <RadioGroupItem
                      value={address.id}
                      id={address.id}
                      className="mt-1 border-2 border-gray-400 text-teal-600 focus:ring-teal-500 data-[state=checked]:border-teal-600"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{address.name}</h3>
                      <p className="text-gray-600 mb-1">{address.location}</p>
                      <p className="text-gray-500">{address.fullAddress}</p>
                    </div>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <Button
              onClick={handleConfirm}
              disabled={isConfirming || !selectedAddressId}
              className="bg-primary hover:bg-teal-700 text-white px-8 py-3 rounded-sm font-medium"
            >
              {isConfirming ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Confirming...</span>
                </div>
              ) : (
                "Confirm"
              )}
            </Button>

            <Button
              onClick={handleAddNewAddress}
              variant="ghost"
              className="flex items-center gap-2 text-primary px-6 py-3 rounded-lg font-medium"
            >
              Add new address <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
