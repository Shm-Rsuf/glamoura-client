import { buttonVariants } from "@/components/ui/Button"
import { cn } from "@/lib/utils"
import { beautyPackageType } from "@/types/beautyPackage"
import Image from "next/image"
import Link from "next/link"

interface BeautyPackageCardProps{
  item:beautyPackageType,
}

const BeautyPackageCard:React.FC<BeautyPackageCardProps> = ({item}) => {
  return (
    <div className="w-full p-4 bg-white rounded-xl shadow-md shadow-gray space-y-5 cursor-pointer">
      <div className="w-full h-[20rem] overflow-hidden rounded-md">
        <Image src={item.images[0]} alt={item.title} width={1280} height={720} priority className="w-full h-full object-cover"/>
      </div>
      <div className="space-y-2.5">
        <small className="text-purple uppercase">{item.category}</small>
        <h3 className="truncate">{item.title}</h3>
        <hr className="border-gray"/>
        <p className="text-black/50">{item.description.substring(0,55)}...</p>
        <div className="flex gap-3 justify-between items-center">
          <h3>${item.price}</h3>
          <Link href={`/beauty-packages/${item._id}`} className={cn(buttonVariants({variant:"secondary"}))}>View Details</Link>
        </div>
      </div>
    </div>
  )
}

export default BeautyPackageCard