import OverLay from '@/components/ui/OverLay';
import Image from 'next/image';

const SignUpPicture = () => {
  return (
    <div className='relative h-full w-full overflow-hidden'>
      <Image
        src='/assets/images/sign-in-picture.jpg' //will change
        alt='signupImage'
        height={1280}
        width={720}
        priority
        className='h-full w-full object-cover'
      />
      <OverLay />
      <div className='absolute bottom-0 left-0 right-0 top-0 z-[2] flex items-end p-10 text-center text-white'>
        <h3>“Everythupg has beauty, but not everyone sees it” — Confucius</h3>
      </div>
    </div>
  );
};

export default SignUpPicture;
