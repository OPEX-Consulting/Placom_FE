"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronDown, Grid3X3, AlertTriangle } from "lucide-react"
import Image from "next/image"

interface OrderItem {
  id: string
  name: string
  image: string
  supplier: string
  quantity: number
  unit: string
  deliveryDate: string
}

const orderItems: OrderItem[] = [
  {
    id: "1",
    name: "Oil Palm",
    image: "/product2.jpg",
    supplier: "Alice Wendy farmsasdfadfadfa",
    quantity: 2,
    unit: "Bags",
    deliveryDate: "Mon, 23rd Jan 2022",
  },
  {
    id: "2",
    name: "Carrot",
    image: "/product3.jpg",
    supplier: "Debbie Dare farms",
    quantity: 2,
    unit: "Bags",
    deliveryDate: "Wed, 25th Jan 2022",
  },
  {
    id: "3",
    name: "Strawberry",
    image: "/product.jpg",
    supplier: "Mueibeak berries",
    quantity: 2,
    unit: "Bags",
    deliveryDate: "Thu, 26th Jan 2022",
  }
]

export default function OrderSummary() {
  const [couponCode, setCouponCode] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("online")
  const [pickupStation, setPickupStation] = useState(false)

  const orderTotals = {
    items: 406000.46,
    doorDelivery: 1400,
    vat: 150,
    delivery: 2600,
  }

  const subtotal = orderTotals.items + orderTotals.doorDelivery + orderTotals.vat
  const total = subtotal + orderTotals.delivery

  const formatPrice = (price: number) => {
    return `₦${price.toLocaleString()}`
  }

  const handleModifyCart = () => {
    console.log("Redirecting to cart...")
  }

  const handleApplyCoupon = () => {
    console.log("Applying coupon:", couponCode)
  }

  const handleChangeAddress = () => {
    console.log("Opening address selection...")
  }

  const handleMakePayment = () => {
    console.log("Proceeding to payment...")
  }

  const handleContinueShopping = () => {
    console.log("Continuing shopping...")
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Order Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Progress Indicator */}
            <div className="flex items-center mt-10">
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
                <div className="w-35 h-1 bg-linear-to-r from-primary to-[#D9D9D9]"></div>
            </div>

            {/* Step 3 - Inactive */}
            <div className="w-5 h-5 bg-[#D9D9D9] rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-8">Your order summary</h1>

            {/* Ordered Items */}
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-black">ORDERED ITEMS({orderItems.length})</h2>
                <Button
                  onClick={handleModifyCart}
                  className="border border-[#1B7B44] bg-[#1B7B4426] text-[#1B7B44] hover:bg-[#1B7B4426]/90"
                >
                  Modify cart
                </Button>
              </div>

              <div className="space-y-4">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 justify-between p-4 border border-gray-100 rounded-lg">

                    <div className="flex gap-2 items-center flex-wrap">
                        <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={60}
                        height={60}
                        className="w-15 h-15 object-cover rounded-lg border border-gray-200"
                        />
                      <div>
                        <h3 className="font-semibold text-[#717171] mb-1">{item.name}</h3>
                        <p className="text-sm text-[#717171] mb-1">From: <span className="text-secondary">{item.supplier}</span></p>
                      </div>
                    </div>

                    <div className="flex-1 flex justify-start items-base">
                        <p className="text-sm text-[#717171] mt-6">
                            Qty: <span className="text-secondary">{item.quantity} {item.unit}</span>
                        </p>
                    </div>

                    <div className="text-right">
                      <p className="text-sm text-[#CFCACD] mb-1">Delivery date</p>
                      <p className="text-sm font-medium text-[#717171]">{item.deliveryDate}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping */}
            <div className="bg-white rounded-lg p-6 text-[#717171]">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-black">SHIPPING</h2>
                <div className="flex items-center gap-2">
                  <Label htmlFor="pickup" className="text-sm">
                    Pick up station
                  </Label>
                  <Checkbox
                    id="pickup"
                    checked={pickupStation}
                    onCheckedChange={setPickupStation}
                    className="border border-primary rounded-sm"
                  />
                </div>
              </div>

              <p className="mb-4">Your order will be delivered to the following address</p>

              <div className="border-2 border-[#1B7B44] rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-600 rounded-full mt-1 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Angela Okwori</h3>
                      <p className="text-gray-2 font-semibold text-sm">Rivers, Port Harcourt <span className="text-gray-2 font-normal ml-3">144 Kevlar Avenue, Cranberry Road</span></p>
                    </div>
                  </div>
                  <Button onClick={handleChangeAddress} size="sm" className="bg-[#FF7B7B] hover:bg-red-600 text-white">
                    Change Address
                  </Button>
                </div>
              </div>

              {/* Delivery Notes */}
              <div className="border border-red-200 rounded-lg p-4">
                <div className="flex items-start gap-2 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" className="text-[#FF7B7B]">
                    <path fill="currentColor" d="M13 14h-2V9h2m0 9h-2v-2h2M1 21h22L12 2z"></path>
                </svg>
                  <p className="text-sm font-medium text-gray-3">
                    Please note the following to ensure smooth delivery
                  </p>
                </div>

                <ul className="space-y-2 text-sm text-black">
                  <li>• Ensure your address is current as delivery agents will only deliver to the stated address</li>
                  <li>• Payment must be made before collection as delivery agents are not allowed to open a package</li>
                  <li>• Package may arrive before the delivery date.</li>
                  <li>• On delivery day, delivery time may vary due to possible eventualities.</li>
                  <li>
                    • Free return within 15 days for eligible products, read our{" "}
                    <a href="#" className="text-red-600 underline">
                      return policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Delivery Method */}
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">DELIVERY METHOD</h2>

              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="online" id="online" className="border-gray-400 text-green-600" />
                  <Label htmlFor="online" className="text-gray-700">
                    Online payment through debit/credit card
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="cash" id="cash" className="border-gray-400 text-green-600" />
                  <Label htmlFor="cash" className="text-gray-700">
                    Cash on delivery
                  </Label>
                </div>
              </RadioGroup>

              {/* Payment Methods */}
                {paymentMethod=="online" && <div className="flex items-center gap-4 py-4 mt-2">
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
                </div>}
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 sticky top-20">
            <div className="border rounded-sm p-3 text-gray-2">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Order Summary</h2>
              <p className="text-sm mb-6">All details and totals before you proceed</p>

              <div className="space-y-3 mb-2">
                <div className="flex justify-between text-sm">
                  <span className="">Item(3)</span>
                  <span className="font-medium">{formatPrice(orderTotals.items)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="">Door delivery</span>
                  <span className="font-medium">{formatPrice(orderTotals.doorDelivery)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Vat</span>
                  <span className="font-medium">{formatPrice(orderTotals.vat)}</span>
                </div>
                <hr className="border-gray-200" />
                <div className="flex justify-between">
                  <span className="text-gray-2 font-semibold">Sub-total</span>
                  <span className="font-semibold">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-2">Delivery</span>
                  <span className="font-medium">{formatPrice(orderTotals.delivery)}</span>
                </div>
                <hr className="border-gray-200" />
                <div className="flex justify-between text-lg text-secondary">
                  <span className="font-semibold">Total</span>
                  <span className="font-bold">{formatPrice(total)}</span>
                </div>
              </div>
            </div>

              {/* Coupon */}
              <div className="mb-6 mt-10">
                <h3 className="font-medium text-gray-900 mb-2">Apply Coupon</h3>
                <p className="text-sm text-gray-500 mb-3">Using A Promo Code?</p>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter Your Coupon"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 border border-[#ECECEC]"
                  />
                  <Button
                    onClick={handleApplyCoupon}
                    variant="outline"
                    className="border-primary text-primary hover:bg-teal-50 py-[19px]"
                  >
                    Apply
                  </Button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button
                  onClick={handleMakePayment}
                  className="w-full bg-[#1B7B44] hover:bg-green-700 text-white rounded-sm py-5 text-md font-medium"
                >
                  Make payment
                </Button>
                <Button
                  onClick={handleContinueShopping}
                  variant="secondary"
                  className="w-full border-green-500 rounded-sm py-5"
                >
                  Continue shopping
                </Button>
              </div>

              {/* Terms */}
              <p className="text-xs text-gray-500 mt-4 text-center">
                By placing order, you agree to our company{" "}
                <a href="#" className="text-teal-600 underline">
                  Privacy policy
                </a>{" "}
                and{" "}
                <a href="#" className="text-teal-600 underline">
                  Conditions of Use
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
