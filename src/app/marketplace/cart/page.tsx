"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { AlertCircle, ChevronDown, Grid3X3, Minus, Plus, ShoppingCart, Trash2 } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
}

interface CartItem {
  id: string
  name: string
  price: number
  originalPrice: number
  image: string
  supplier: string
  quantity: number
  isSelected: boolean
  isUnverified?: boolean
}

const topSellingProducts: Product[] = [
  {
    id: "1",
    name: "Wheat",
    price: 10000,
    image: "/product.jpg",
  },
  {
    id: "2",
    name: "Garden Egg",
    price: 2000,
    image: "/product.jpg",
  },
  {
    id: "3",
    name: "Millet",
    price: 700,
    originalPrice: 1000,
    image: "/product.jpg",
  },
  {
    id: "4",
    name: "Egusi",
    price: 7000,
    originalPrice: 10000,
    image: "/product.jpg",
  },
  {
    id: "5",
    name: "Yam",
    price: 1000,
    originalPrice: 1500,
    image: "/product.jpg",
  },
]

export default function EmptyCart() {
    const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Irish Potato",
      price: 20000,
      originalPrice: 27000,
      image: "/product.jpg",
      supplier: "Baron Farms LTD",
      quantity: 1,
      isSelected: true,
      isUnverified: false,
    },
    {
      id: "2",
      name: "Pineapple",
      price: 20000,
      originalPrice: 27000,
      image: "/product3.jpg",
      supplier: "Baron Farms LTD",
      quantity: 1,
      isSelected: true,
      isUnverified: true,
    },
    {
      id: "3",
      name: "Banana",
      price: 20000,
      originalPrice: 27000,
      image: "/product2.jpg",
      supplier: "Baron Farms LTD",
      quantity: 23,
      isSelected: true,
      isUnverified: false,
    },
  ])

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const calculateDiscount = (original: number, current: number) => {
    return Math.round(((original - current) / original) * 100)
  }

  const toggleItemSelection = (id: string) => {
    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, isSelected: !item.isSelected } : item)))
  }

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const toggleSelectAll = () => {
    const allSelected = cartItems.every((item) => item.isSelected)
    setCartItems((items) => items.map((item) => ({ ...item, isSelected: !allSelected })))
  }

  const selectedItems = cartItems.filter((item) => item.isSelected)
  const subtotal = selectedItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const hasUnverifiedItems = cartItems.some((item) => item.isUnverified && item.isSelected)

  const handleCheckout = () => {
    if (selectedItems.length === 0) {
      alert("Please select items to checkout")
      return
    }
    console.log("Proceeding to checkout with:", selectedItems)
  }

  const formatPrice = (price: number) => {
    return `₦${price.toLocaleString()}`
  }

  const handleContinueShopping = () => {
    // Navigate to marketplace or products page
    location.href = "/marketplace"
  }

  const handleAddToCart = (product: Product) => {
    console.log("Adding to cart:", product.name)
    // Add product to cart logic here
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Empty Cart Section */}
        {cartItems.length ==0 ?<div className="bg-white rounded-sm p-12 mb-12">
          <div className="text-center max-w-md mx-auto">
            {/* Empty Cart Icon */}
            <div className="mb-5">
              <div className="w-32 h-32 mx-auto rounded-2xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width={150} height={150} viewBox="0 0 256 256" className="text-secondary rotate-[-5deg] stroke-[1px]">
                    <path fill="currentColor" d="M227.07 61.44A4 4 0 0 0 224 60H59.34l-6.68-36.72A4 4 0 0 0 48.73 20H24a4 4 0 0 0 0 8h21.39l6.69 36.8l19.41 106.78A20 20 0 0 0 79 183.85a24 24 0 1 0 30.87 4.15h60.26a24 24 0 1 0 17.87-8H91.17a12 12 0 0 1-11.8-9.85l-4-22.15H196.1a20 20 0 0 0 19.68-16.42l12.16-66.86a4 4 0 0 0-.87-3.28M108 204a16 16 0 1 1-16-16a16 16 0 0 1 16 16m96 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16m3.91-73.85A12 12 0 0 1 196.1 140H73.88L60.79 68h158.42Z"></path>
                </svg>
              </div>
            </div>

            {/* Empty Cart Message */}
            <h1 className="text-xl font-normal text-primary mb-8 max-w-sm mx-auto">
              You currently have no product added to your cart
            </h1>

            {/* Continue Shopping Button */}
            <Button
             variant={"default"}
              onClick={handleContinueShopping}
              className="hover:bg-teal-700 text-white px-8 py-3 rounded-sm font-medium"
            >
              Continue shopping
            </Button>
          </div>
        </div>:
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6">
              {/* Cart Header */}
              <div className="flex items-center mb-2 justify-between border-b pb-4">
                <div className="flex items-center gap-3">
                  <Checkbox
                    checked={cartItems.length > 0 && cartItems.every((item) => item.isSelected)}
                    onCheckedChange={toggleSelectAll}
                    className="border border-primary rounded-sm checked:rounded-sm checked:border-primary hover:bg-primary/10 transition-colors flex-shrink-0"
                  />
                  <h1 className="text-xl font-bold text-gray-900">My Cart ({cartItems.length})</h1>
                </div>

                {hasUnverifiedItems && (
                  <div className="flex items-center gap-2 text-[#FD2254] text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 2048 2048">
                        <path fill="currentColor" d="M1024 0q141 0 272 36t244 104t207 160t161 207t103 245t37 272q0 141-36 272t-104 244t-160 207t-207 161t-245 103t-272 37q-141 0-272-36t-244-104t-207-160t-161-207t-103-245t-37-272q0-141 36-272t104-244t160-207t207-161T752 37t272-37m128 1536v-256H896v256zm0-384V512H896v640z"></path>
                    </svg>
                    <span>Some items in your cart are from unverified sellers</span>
                  </div>
                )}
              </div>

              {/* Cart Items */}
              <div className="space-y-2">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-4 border-b">
                    <div className="flex w-full items-start gap-4">
                        <div className="flex-1 flex items-center gap-4">
                            <Checkbox
                            checked={item.isSelected}
                            onCheckedChange={() => toggleItemSelection(item.id)}
                            className="border border-primary rounded-sm checked:rounded-sm checked:border-primary hover:bg-primary/10 transition-colors flex-shrink-0"
                            />

                            <div className="flex-shrink-0">
                            <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                width={80}
                                height={80}
                                className="w-20 h-20 object-cover rounded-lg border border-gray-200"
                            />
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                                    {item.isUnverified && <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 2048 2048" className="text-[#FD2254]">
                                        <path fill="currentColor" d="M1024 0q141 0 272 36t244 104t207 160t161 207t103 245t37 272q0 141-36 272t-104 244t-160 207t-207 161t-245 103t-272 37q-141 0-272-36t-244-104t-207-160t-161-207t-103-245t-37-272q0-141 36-272t104-244t160-207t207-161T752 37t272-37m128 1536v-256H896v256zm0-384V512H896v640z"></path>
                                    </svg>}
                                </div>
                                <p className="text-sm text-gray-600 mb-1">{formatPrice(item.price)}/1kg Basket</p>
                                <p className="text-sm text-gray-500">{item.supplier}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="mb-4 text-right">
                                <p className="text-xl font-bold text-gray-900">{formatPrice(item.price)}</p>
                                <div className="flex items-center gap-2">
                                <p className="text-sm text-gray-500 line-through">{formatPrice(item.originalPrice)}</p>
                                <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">
                                    -{calculateDiscount(item.originalPrice, item.price)}%
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                        <button
                            onClick={() => removeItem(item.id)}
                            className="flex items-center gap-1 text-red-500 hover:text-red-600 text-xs mt-2 transition-colors font-semibold"
                        >
                            <Trash2 className="w-3 h-3" />
                            REMOVE
                        </button>
                      <div className="flex items-center gap-2 border rounded-sm border-[#E1E1E1] p-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-5 h-5 bg-orange-100 hover:bg-orange-200 rounded flex items-center justify-center transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-2 h-2 text-orange-600" />
                        </button>

                        <span className="w-5 text-center text-xs font-medium">{item.quantity}</span>

                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-5 h-5 bg-orange-500 hover:bg-orange-600 rounded flex items-center justify-center transition-colors"
                        >
                          <Plus className="w-2 h-2 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-8">
              <h2 className="text-lg font-bold text-gray-900 mb-6">CART SUMMARY</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">SUBTOTAL</span>
                  <span className="text-2xl font-bold text-gray-900">{formatPrice(subtotal)}</span>
                </div>

                {selectedItems.length > 0 && (
                  <div className="text-sm text-gray-500">
                    {selectedItems.length} item{selectedItems.length !== 1 ? "s" : ""} selected
                  </div>
                )}
              </div>

              <Button
                onClick={handleCheckout}
                disabled={selectedItems.length === 0}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 text-lg font-medium rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Checkout
              </Button>

              {hasUnverifiedItems && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 2048 2048" className="text-[#FD2254] mt-0.5 flex-shrink-0">
                        <path fill="currentColor" d="M1024 0q141 0 272 36t244 104t207 160t161 207t103 245t37 272q0 141-36 272t-104 244t-160 207t-207 161t-245 103t-272 37q-141 0-272-36t-244-104t-207-160t-161-207t-103-245t-37-272q0-141 36-272t104-244t160-207t207-161T752 37t272-37m128 1536v-256H896v256zm0-384V512H896v640z"></path>
                    </svg>
                    <div className="text-sm text-red-700">
                      <p className="font-medium mb-1">Unverified Sellers</p>
                      <p>Some items are from unverified sellers. Please review before checkout.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>}

        {/* Top Selling Items */}
        <section className="bg-white p-6 text-[#222222] rounded-lg mb-10">
          <h2 className="text-xl font-medium mb-8">Top selling items</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {topSellingProducts.map((product) => (
              <Card
                key={product.id}
                className="shadow-none border-none cursor-pointer group p-0"
                onClick={() => handleAddToCart(product)}
              >
                <CardContent className="p-0">
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">{product.name}</h3>

                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-900">{formatPrice(product.price)}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* You may also like */}
        <section className="bg-white p-6 text-[#222222] rounded-lg mb-10">
          <h2 className="text-xl font-medium mb-8">You may also like</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {topSellingProducts.map((product) => (
              <Card
                key={product.id}
                className="shadow-none border-none cursor-pointer group p-0"
                onClick={() => handleAddToCart(product)}
              >
                <CardContent className="p-0">
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">{product.name}</h3>

                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-900">{formatPrice(product.price)}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Most popular */}
        <section className="bg-white p-6 text-[#222222] rounded-lg">
          <h2 className="text-xl font-medium mb-8">Most popular</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {topSellingProducts.map((product) => (
              <Card
                key={product.id}
                className="shadow-none border-none cursor-pointer group p-0"
                onClick={() => handleAddToCart(product)}
              >
                <CardContent className="p-0">
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">{product.name}</h3>

                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-900">{formatPrice(product.price)}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Discover fresh, quality agricultural products from trusted farmers across Plateau State
          </p>
          <Button
            onClick={handleContinueShopping}
            variant="outline"
            className="border-teal-600 text-teal-600 hover:bg-teal-50"
          >
            Explore All Products
          </Button>
        </div>
      </main>
    </div>
  )
}
