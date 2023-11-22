'use client';
import SectionTitle from '@/components/ui/SectionTitle';
import useFetch from '@/hooks/useFetch';
import BeautyPackageCard from './BeautyPackageCard';
import Loading from '@/components/ui/Loading';
import Error from '@/components/ui/Error';
import { beautyPackageType } from '@/types/beautyPackage';

interface BeautyPackagesProps {
  native?: boolean;
}

const BeautyPackages: React.FC<BeautyPackagesProps> = ({ native }) => {
  const {
    data: beauty_packages,
    error,
    isLoading,
  } = useFetch('/api/beauty_packages');

  return (
    <section className='sp container'>
      <SectionTitle title='Beauty Packages' />
      {!error && isLoading && <Loading isLoading={isLoading} />}

      {!isLoading && error && <Error error={error.message} />}

      {beauty_packages && (
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
          {beauty_packages.map((item: beautyPackageType) => (
            <BeautyPackageCard key={item._id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
};

export default BeautyPackages;