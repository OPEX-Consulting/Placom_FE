export const products = [
  {
    id: "1",
    name: "Onions",
    userImage: "/userImg.jpg",
    farmer: "Ushaseer Farms",
    verified: true,
    location: "Benue",
    price: "NGN5,000",
    originalPrice: "NGN5,000",
    discount: "-5%",
    image: "/product.jpg",
    inStock: true,
    favourite: true,
  },
  {
    id: "2",
    name: "Onions",
    userImage: "/userImg.jpg",
    farmer: "Ushaseer Farms",
    verified: true,
    location: "Benue",
    price: "NGN5,000",
    originalPrice: "NGN5,000",
    discount: "-5%",
    image: "/product.jpg",
    inStock: true,
    favourite: true,
  },
  {
    id: "3",
    name: "Onions",
    userImage: "/userImg.jpg",
    farmer: "Ushaseer Farms",
    verified: true,
    location: "Benue",
    price: "NGN5,000",
    originalPrice: "NGN5,000",
    discount: "-5%",
    image: "/product.jpg",
    inStock: true,
    favourite: false,
  },
  {
    id: "4",
    name: "Onions",
    userImage: "/userImg.jpg",
    farmer: "Ushaseer Farms",
    verified: true,
    location: "Benue",
    price: "NGN5,000",
    originalPrice: "NGN5,000",
    discount: "-5%",
    image: "/product.jpg",
    inStock: true,
    favourite: false,
  },
  {
    id: "5",
    name: "Onions",
    userImage: "/userImg.jpg",
    farmer: "Ushaseer Farms",
    verified: true,
    location: "Benue",
    price: "NGN5,000",
    originalPrice: "NGN5,000",
    discount: "-5%",
    image: "/product.jpg",
    inStock: true,
    favourite: true,
  },
]

// Define the Product interface
export interface ProductProps {
  id: string;
  name: string;
  farmer: string;
  location: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  image: string;
  verified: boolean;
  favourite: boolean;
}

  export const testimonials = [
    {
      name: "Miriam D.",
      role: "Potato Farmer, Bokkos",
      date: "April 2023",
      rating: 5,
      image: "/impactUser.png",
      testimonial:
        "I used to worry every harvest season. Sometimes, I'd lose over half of my potatoes due to poor storage or lack of buyers. PLACOM changed that story. Now, my produce goes from farm to warehouse, and from there to buyers I never had access to before. I even got a better price than the local market! For the first time in years, my farm is profitable.",
    },
    {
      name: "Bulus G.",
      role: "Onion Farmer, Shendam",
      date: "April 2023",
      rating: 5,
      image: "/impactUser.png",
      testimonial:
        "In the past, we just sold to middlemen who paid whatever they wanted. With PLACOM, I got trained on proper packaging and grading. The platform connected me to a distributor in Abuja who now buys my onions in bulk. My children no longer have to miss school during harvest just to help with selling. We are moving forward!",
    },
    {
      name: "Hannatu I.",
      role: "Mixed Crop Farmer, Riyom",
      date: "April 2023",
      rating: 5,
      image: "/impactUser.png",
      testimonial:
        "I attended one of the sensitization meetings hosted by PLACOM in my LGA and I was skeptical. But everything they said, they did. I now store my onions in the new facility and access market pricing through the platform. It's like stepping into a new world of farming where the farmer finally has power and clarity.",
    },
    {
      name: "Salome J.",
      role: "Produce Supplier, Jos Main Market",
      date: "April 2023",
      rating: 5,
      image: "/impactUser.png",
      testimonial:
        "I've been sourcing potatoes from Plateau farmers for over a decade, but the experience was often chaotic. With PLACOM, the quality is consistent, and the process is smoother. I simply log in, request volume, and get updates from warehouse dispatch. It has brought professionalism into the value chain.",
    },
  ]

  export interface TestimonialsProp {
     name?:string;
      role?:string;
      date?: string;
      rating?:Number;
      image?:string;
      testimonial?:string;
  }