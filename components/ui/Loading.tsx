import { MoonLoader } from 'react-spinners';

interface LoadingProps {
  isLoading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <div className='flex justify-center'>
      <MoonLoader
        color='rgb(0, 145, 181)'
        loading={isLoading}
        size={30}
        speedMultiplier={1.25}
      />
    </div>
  );
};

export default Loading;
