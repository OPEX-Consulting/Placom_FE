"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, Grid3X3, ShoppingCart } from "lucide-react"
import Image from "next/image"

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
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
        <div className="bg-white rounded-sm p-12 mb-12">
          <div className="text-center max-w-md mx-auto">
            {/* Empty Cart Icon */}
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto border-4 border-green-400 rounded-2xl flex items-center justify-center">
                <ShoppingCart className="w-16 h-16 text-green-400" strokeWidth={1.5} />
              </div>
            </div>

            {/* Empty Cart Message */}
            <h1 className="text-2xl font-semibold text-gray-700 mb-8">
              You currently have no product added to your cart
            </h1>

            {/* Continue Shopping Button */}
            <Button
              onClick={handleContinueShopping}
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium"
            >
              Continue shopping
            </Button>
          </div>
        </div>

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
