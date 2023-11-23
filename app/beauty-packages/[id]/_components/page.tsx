import { beautyPackageType } from '@/types/beautyPackage';

interface BeautyPackagesItemProps {
  item: beautyPackageType;
}

const BeautyPackagesItem: React.FC<BeautyPackagesItemProps> = ({ item }) => {
  return <div>{item.title}</div>;
};

export default BeautyPackagesItem;
