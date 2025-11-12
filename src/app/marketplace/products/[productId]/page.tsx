"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Grid3X3, X, Star, Minus, Plus, ShoppingCart } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface ProductImage {
  id: string
  src: string
  alt: string
}

const productImages: ProductImage[] = [
  {
    id: "1",
    src: "/product3.jpg",
    alt: "Fresh avocados on wooden surface",
  },
  {
    id: "2",
    src: "/product2.jpg",
    alt: "Avocados growing on tree",
  },
  {
    id: "3",
    src: "/product.jpg",
    alt: "Cut avocado showing flesh and pit",
  },
//   {
//     id: "4",
//     src: "/product3.jpg",
//     alt: "Diced avocados in pan",
//   },
]

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

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(4)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const product = {
    name: "Avocado",
    seller: "Ushaseer Farms",
    isVerified: true,
    rating: 4.8,
    reviewCount: 58,
    price: 15000,
    unit: "2kg sack",
    vat: 200,
  }

  const total = product.price * quantity + product.vat

  const formatPrice = (price: number) => {
    return `NGN${price.toLocaleString()}`
  }

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity)
    }
  }

  const handleAddToCart = () => {
    console.log("Adding to cart:", {
      product: product.name,
      quantity,
      total,
    })
  }

  const handleClose = () => {
    console.log("Closing product detail...")
  }

  const handleSeeAllImages = () => {
    console.log("Opening image gallery...")
  }

  const handleSellerClick = () => {
    console.log("Viewing seller profile...")
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 pb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Product Info and Images */}
          <div className="lg:col-span-2">
            {/* Product Header */}
            <div className="flex items-center justify-between mb-6 mt-5">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>

                <div className="flex items-center gap-4">
                  <button
                    onClick={handleSellerClick}
                    className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                  >
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{product.seller}</span>
                    {product.isVerified && (
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    )}
                  </button>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-gray-700">{product.rating}</span>
                    </div>
                    <span className="text-gray-500">•</span>
                    <button className="text-teal-600 hover:text-teal-700 font-medium">
                      {product.reviewCount} Reviews
                    </button>
                  </div>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="flex items-center justify-center cursor-pointer"
              >
                <X className="w-6 h-6 text-secondary" />
              </button>
            </div>

            {/* Image Gallery */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 rounded-2xl overflow-hidden">
                {/* Main Image */}
                <div className="col-span-1 row-span-2">
                  <Image
                    src={productImages[0].src || "/placeholder.svg"}
                    alt={productImages[0].alt}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Secondary Images */}
                {productImages.slice(1).map((image, index) => (
                  <div key={image.id} className="aspect-square">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* See All Images Button */}
              <button
                onClick={handleSeeAllImages}
                className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 px-4 py-2 rounded-lg font-medium shadow-lg transition-colors italic"
              >
                See all images
              </button>
            </div>
          </div>

          {/* Right Column - Purchase Options */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-sm border sticky top-20">
              {/* Price */}
              <div className="mb-0">
                <div className="text-3xl font-bold text-gray-900 bg-[#EEEEEE] p-6 text-center">
                  {formatPrice(product.price)}
                  <span className="text-lg font-normal text-gray-600">/{product.unit}</span>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-0 p-6">
                <div className="flex items-center justify-between mb-0">
                  <label className="text-gray-700 font-medium text-sm">Quantity(Sacks)</label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleQuantityChange(quantity - 1)}
                      disabled={quantity <= 1}
                      className="w-5 h-5 hover:bg-red-200 disabled:bg-gray-100 disabled:cursor-not-allowed rounded flex items-center justify-center transition-colors"
                    >
                      <Minus className="w-5 h-5 text-[#EF6D59] hover:text-white" />
                    </button>

                    <span className="text-center font-semibold text-sm">{quantity}</span>

                    <button
                      onClick={() => handleQuantityChange(quantity + 1)}
                      className="w-5 h-5 hover:bg-green-600 rounded flex items-center justify-center transition-colors"
                    >
                      <Plus className="w-5 h-5 text-[#55B802] hover:text-white" />
                    </button>
                  </div>
                </div>
              </div>

                <hr className="border-gray-200 mx-2 -mt-3" />


              {/* Price Breakdown */}
              <div className="space-y-4 mb-0 p-6">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">VAT</span>
                  <span className="font-medium">{product.vat}</span>
                </div>
                <div className="flex justify-between items-center text-lg">
                  <span className="font-semibold text-gray-900">TOTAL</span>
                  <span className="font-bold text-gray-900">{formatPrice(total)}</span>
                </div>
              </div>

              {/* Add to Cart Button */}
             <div className="w-full px-6 pb-6">
                 <Button
                onClick={handleAddToCart}
                variant={'default'}
                className="w-full text-white py-5 text-lg font-medium rounded-sm flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to cart
              </Button>
             </div>
            </div>
          </div>
        </div>

        {/* Top Selling Items */}
        <section className="bg-white p-6 text-[#222222] rounded-lg mt-10 mb-10">
          <h2 className="text-xl font-medium mb-8">More from Ushaseer farms</h2>

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

        {/* Top Selling Items */}
        <section className="bg-white p-6 text-[#222222] rounded-lg mt-10 mb-10">
          <h2 className="text-xl font-medium mb-8">Similar products</h2>

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

        {/* Top Selling Items */}
        <section className="bg-white p-6 text-[#222222] rounded-lg mt-10 mb-10">
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
      </main>
    </div>
  )
}
