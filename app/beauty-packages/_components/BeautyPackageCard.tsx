import { buttonVariants } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { beautyPackageType } from '@/types/beautyPackage';
import Image from 'next/image';
import Link from 'next/link';

interface BeautyPackageCardProps {
  item: beautyPackageType;
}

const BeautyPackageCard: React.FC<BeautyPackageCardProps> = ({ item }) => {
  return (
    <div className='w-full space-y-5 rounded-xl bg-white p-4 shadow-md shadow-gray'>
      <Link
        href={`/beauty-packages/${item._id}`}
        className='group inline-block h-[20rem] w-full cursor-pointer overflow-hidden rounded-md shadow-gray'
      >
        <Image
          src={item.images[0]}
          alt={item.title}
          width={1280}
          height={720}
          priority
          className='eq h-full w-full object-cover brightness-75 group-hover:scale-125 group-hover:brightness-100'
        />
      </Link>

      <div className='space-y-2.5'>
        <small className='uppercase text-purple'>{item.category}</small>
        <h3 className='truncate'>{item.title}</h3>
        <hr className='border-gray' />
        <p className='text-black/50'>{item.description.substring(0, 55)}...</p>
        <div className='flex items-center justify-between gap-3'>
          <h3>${item.price}</h3>
          <Link
            href={`/beauty-packages/${item._id}`}
            className={cn(buttonVariants({ variant: 'secondary' }))}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BeautyPackageCard;
