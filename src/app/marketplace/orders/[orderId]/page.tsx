"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { ChevronDown, Grid3X3, FileText, Truck, ChevronRight } from "lucide-react"
import Image from "next/image"

interface OrderItem {
  id: string
  name: string
  image: string
  supplier: string
  purchaseDate: string
  price: number
  quantity: number
}

const orderItems: OrderItem[] = [
  {
    id: "1",
    name: "Brown beans",
    image: "/product.jpg",
    supplier: "Ushaseer Farms",
    purchaseDate: "22/04/2023",
    price: 45000,
    quantity: 1,
  },
  {
    id: "2",
    name: "Oil Palm",
    image: "/product3.jpg",
    supplier: "Ushaseer Farms",
    purchaseDate: "22/04/2023",
    price: 60000,
    quantity: 1,
  },
  {
    id: "3",
    name: "Rice",
    image: "/product2.jpg",
    supplier: "Ushaseer Farms",
    purchaseDate: "22/04/2023",
    price: 12000,
    quantity: 1,
  },
]

export default function OrderDetails() {
  const [showCompletedOrders, setShowCompletedOrders] = useState(false)

  const orderInfo = {
    id: "334902461",
    orderDate: "Jul 20, 2023",
    estimatedDelivery: "Aug 1, 2023",
    totalPrice: 60000,
    totalItems: 9,
  }

  const formatPrice = (price: number) => {
    return `₦${price.toLocaleString()}`
  }

  const handleInvoice = () => {
    console.log("Downloading invoice...")
  }

  const handleTrackOrder = () => {
    console.log("Opening order tracking...")
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">

        {/* Order Header */}
        <div className="mb-6">
          <div className="flex flex-col lg:flex-row lg:items-base lg:justify-between gap-4">
            <div className="flex-1">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                    <a href="/home" className="hover:text-teal-600 transition-colors">
                        Home
                    </a>
                    <ChevronRight className="w-4 h-4" />
                    <a href="/orders" className="hover:text-teal-600 transition-colors">
                        Orders
                    </a>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-gray-400">Brown Beans</span>
                </nav>
              <h1 className="text-2xl font-bold text-gray-900 mb-1">Order ID: {orderInfo.id}</h1>

              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-secondary text-sm font-medium">Order date: {orderInfo.orderDate}</span>
                </div>
                <div className="hidden sm:block h-[20px] w-1 border-r-1 border-[#8C8F94]"></div>
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24">
                        <path fill="#23AE46" d="M14 8.947L22 14v2l-8-2.526v5.36l3 1.666V22l-4.5-1L8 22v-1.5l3-1.667v-5.36L3 16v-2l8-5.053V3.5a1.5 1.5 0 0 1 3 0z"></path>
                    </svg>
                  <span className="text-[#23AE46] text-sm font-medium">
                    Estimated delivery date: {orderInfo.estimatedDelivery}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end gap-4">
              <div className="flex gap-3">
                <Button
                  onClick={handleInvoice}
                  variant="outline"
                  className="flex items-center gap-1 border-[#8C8F94] bg-[#EAF3EE] text-gray-700 hover:bg-gray-50"
                >
                  Invoice
                  <FileText className="w-4 h-4" />
                </Button>

                <Button
                  onClick={handleTrackOrder}
                  className="bg-teal-600 hover:bg-teal-700 text-white flex items-center gap-1"
                >
                  Track order
                  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 1024 1024">
                        <path fill="currentColor" d="M952 474H829.8C812.5 327.6 696.4 211.5 550 194.2V72c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v122.2C327.6 211.5 211.5 327.6 194.2 474H72c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h122.2C211.5 696.4 327.6 812.5 474 829.8V952c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V829.8C696.4 812.5 812.5 696.4 829.8 550H952c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8M512 756c-134.8 0-244-109.2-244-244s109.2-244 244-244s244 109.2 244 244s-109.2 244-244 244"></path>
                        <path fill="currentColor" d="M512 392c-32.1 0-62.1 12.4-84.8 35.2c-22.7 22.7-35.2 52.7-35.2 84.8s12.5 62.1 35.2 84.8C449.9 619.4 480 632 512 632s62.1-12.5 84.8-35.2C619.4 574.1 632 544 632 512s-12.5-62.1-35.2-84.8C574.1 404.4 544.1 392 512 392"></path>
                    </svg>
                </Button>
              </div>

              <div className="text-md font-bold text-[#176B3B] flex items-center justify-right gap-1">
                <p className="">Price:</p>
                <p className="">{formatPrice(orderInfo.totalPrice)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Items Section */}
        <div className="bg-white">
          <div className="p-6 border-b border-t border-[#CBCBCB] bg-[#FBFBFB]">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Items: {orderInfo.totalItems} in total</h2>

              <div className="flex items-center gap-3 border rounded-sm p-2">
                <span className="text-sm text-success">Show completed orders</span>
                <Switch
                  checked={showCompletedOrders}
                  onCheckedChange={setShowCompletedOrders}
                  className="data-[state=checked]:bg-green-500"
                />
              </div>
            </div>
          </div>

          <div className="divide-y divide-gray-100">
            {orderItems.map((item) => (
              <div key={item.id} className="p-6 py-3 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 items-center">
                    <div className="flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="w-15 h-15 object-cover rounded-lg border border-gray-200"
                      />
                    </div>
                    <div>
                      <h3 className="text-md font-semibold text-gray-900 mb-0">{item.name}</h3>
                      <p className="text-xs text-secondary mb-2">Purchased from {item.supplier}</p>
                    </div>
                  </div>

                  <div className="w-fit m-auto">
                    <p className="text-sm text-center text-secondary">{item.purchaseDate}</p>
                  </div>


                  <div className="text-right">
                    <p className="text-xl font-bold text-gray-900 mb-1">{formatPrice(item.price)}</p>
                    <p className="text-sm text-green-600">Qty: {item.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="p-6 border-b border-t border-[#CBCBCB] bg-[#FBFBFB]">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-900">Total Order Value</span>
            <span className="text-xl font-bold text-gray-900">{formatPrice(orderInfo.totalPrice)}</span>
          </div>
        </div>
      </main>
    </div>
  )
}
