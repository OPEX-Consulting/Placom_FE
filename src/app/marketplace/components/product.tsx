import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function Product({product}: {product: any }) {
  return (
    <Card className="bg-white min-w-[280px] md:min-w-[280px] shadow-none border-none group py-0">
        <CardContent className="p-0">
            <div className="relative">
                <Image
                    src={product?.image || ""}
                    alt={product?.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t"
                    onClick={()=>location.href = `/marketplace/${product?.id}`}
                />
                <div className="absolute top-3 right-3 bg-secondary text-white px-2 py-1 rounded text-sm font-semibold">
                    {product?.discount}
                </div>
            </div>

            <div className="px-4 py-2">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="font-semibold text-lg cursor-pointer" onClick={()=>location.href = `/marketplace/${product?.id}`}>{product?.name}</h3>
                        <div className="flex items-center justify-between gap-1 mb-2">
                            <div className="flex items-center">
                                <Image
                                    src={product?.userImage || "/default-farmer.png"}
                                    alt={product?.farmer}
                                    width={24}
                                    height={24}
                                    className="rounded-full object-cover h-6 w-6 mr-2"
                                />
                                <span className="text-xs text-[#717171]">{product?.farmer}</span>
                            </div>
                            <div className="flex items-center">
                                {product?.verified && <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 24 24">
                                    <path fill="#0F6862" d="M12.65 3.797c.487.131.908.458 1.42.854l.297.23c.243.187.301.23.359.261a1 1 0 0 0 .196.081c.063.019.134.03.438.07l.373.047c.642.082 1.17.149 1.607.4c.383.22.7.537.92.92c.251.436.318.965.4 1.607l.048.373c.039.304.05.375.069.438q.03.102.08.196c.032.058.075.116.262.359l.23.297c.396.512.723.933.854 1.42a2.5 2.5 0 0 1 0 1.3c-.131.487-.458.908-.854 1.42l-.23.297c-.187.243-.23.301-.261.359q-.051.094-.081.196c-.019.063-.03.134-.07.438l-.047.373c-.082.642-.149 1.17-.4 1.607a2.5 2.5 0 0 1-.92.92c-.436.251-.965.318-1.607.4l-.373.048c-.304.039-.375.05-.438.069q-.102.03-.196.08c-.058.032-.116.075-.359.262l-.297.23c-.512.396-.933.723-1.42.854a2.5 2.5 0 0 1-1.3 0c-.487-.131-.908-.458-1.42-.854l-.297-.23c-.243-.187-.301-.23-.359-.261a1 1 0 0 0-.196-.081c-.063-.019-.134-.03-.438-.07l-.373-.047c-.642-.082-1.17-.149-1.607-.4a2.5 2.5 0 0 1-.92-.92c-.251-.436-.318-.965-.4-1.607l-.048-.373c-.039-.304-.05-.375-.069-.438a1 1 0 0 0-.08-.196c-.032-.058-.075-.116-.262-.359l-.23-.297c-.396-.512-.723-.933-.854-1.42a2.5 2.5 0 0 1 0-1.3c.131-.487.458-.908.854-1.42l.23-.297c.187-.243.23-.301.261-.359a1 1 0 0 0 .081-.196c.019-.063.03-.134.07-.438l.047-.373c.082-.642.149-1.17.4-1.607a2.5 2.5 0 0 1 .92-.92c.436-.251.965-.318 1.607-.4l.373-.048c.304-.039.375-.05.438-.069a1 1 0 0 0 .196-.08c.058-.032.116-.075.359-.262l.297-.23c.512-.396.933-.723 1.42-.854a2.5 2.5 0 0 1 1.3 0m3.057 5.496a1 1 0 0 0-1.414 0L11 12.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414"></path>
                                </svg>}
                                <span className="text-xs text-[#717171]">• {product?.location}</span>
                            </div>
                        </div>
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={25}
                        height={25}
                        viewBox="0 0 24 24"
                        className="filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
                    >
                        <path
                            fill={product?.favourite ? "#FF2200" : "#FFFFFF"}
                            d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"
                        ></path>
                    </svg>
                </div>
                <div className="flex items-center justify-between">
                    <div className="">
                        <p className="text-sm">{product?.price}</p>
                        <p className="text-sm text-[#171C26] line-through">{product?.originalPrice}</p>
                    </div>
                    <div className="hover:bg-[#F6FFE9] rounded-full transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 24 24">
                            <path fill="#8AC73C" d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M18 6H4.27l2.55 6H15c.33 0 .62-.16.8-.4l3-4c.13-.17.2-.38.2-.6a1 1 0 0 0-1-1m-3 7H6.87l-.77 1.56L6 15a1 1 0 0 0 1 1h11v1H7a2 2 0 0 1-2-2a2 2 0 0 1 .25-.97l.72-1.47L2.34 4H1V3h2l.85 2H18a2 2 0 0 1 2 2c0 .5-.17.92-.45 1.26l-2.91 3.89c-.36.51-.96.85-1.64.85"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </CardContent>
    </Card>
  )
}
