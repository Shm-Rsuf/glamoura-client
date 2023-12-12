'use client';
import Button from '@/components/ui/Button';
import { photoUrlChecker } from '@/helpers/photoUrlChecker';
import { axiosPost } from '@/lib/axiosPost';
import { login } from '@/redux/features/auth/authSlice';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  photoUrl: string;
}

const SignUpForm = () => {
  const [formData, setFormData] = useState<SignUpFormData>({
    name: '',
    email: '',
    password: '',
    photoUrl: '',
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useDispatch();

  /* handleSubmit */
  const handleSubmit = useCallback(
    async (e: React.SyntheticEvent) => {
      e.preventDefault();
      setIsLoading(true);
      const hasPermitted = photoUrlChecker(formData.photoUrl);

      if (hasPermitted) {
        const data = await axiosPost('/api/auth/register', formData);
        if (data) {
          setIsLoading(false);
          setFormData({
            name: '',
            email: '',
            password: '',
            photoUrl: '',
          });
          dispatch(login(data));
          toast.success('Register successful.');
          router.push('/');
        } else {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
        toast.error('Please paste a photo url from pixels/unplash/cloudinary');
      }
    },
    [formData, router, dispatch]
  );

  return (
    <div className='flex flex-col gap-10'>
      <div className='flex flex-col gap-1.5'>
        <h3>Create an account!</h3>
        <p className='text-black/50'>Please provide your details to register</p>
      </div>
      <form onSubmit={handleSubmit} className='flex w-full flex-col gap-5'>
        <div className='flex flex-col items-start gap-1.5'>
          <label htmlFor='email' className='cursor-pointer'>
            Name
          </label>
          <input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            type='text'
            name='name'
            id='name'
            placeholder='Enter your name'
            className='eq w-full rounded-md border border-gray bg-transparent px-4 py-2 outline-none focus:border-blue
            '
          />
        </div>
        <div className='flex flex-col items-start gap-1.5'>
          <label htmlFor='email' className='cursor-pointer'>
            Email address
          </label>
          <input
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            type='email'
            name='email'
            id='email'
            placeholder='usuf@example.com'
            className='eq w-full rounded-md border border-gray bg-transparent px-4 py-2 outline-none focus:border-blue
            '
          />
        </div>
        <div className='flex flex-col items-start gap-1.5'>
          <label htmlFor='password' className='cursor-pointer capitalize'>
            password
          </label>
          <input
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            type='password'
            name='password'
            id='password'
            placeholder='Enter your password'
            className='eq w-full rounded-md border border-gray bg-transparent px-4 py-2 outline-none focus:border-blue
            '
          />
        </div>
        <div className='flex flex-col items-start gap-1.5'>
          <label htmlFor='password' className='cursor-pointer capitalize'>
            Photo Url
          </label>
          <input
            value={formData.photoUrl}
            onChange={(e) =>
              setFormData({ ...formData, photoUrl: e.target.value })
            }
            type='text'
            name='photoUrl'
            id='photoUrl'
            placeholder='Paste your photoUrl from pixels/unplash/cloudinary'
            className='eq w-full rounded-md border border-gray bg-transparent px-4 py-2 outline-none focus:border-blue
            '
          />
        </div>
        <Button type='submit' variant='secondary' isLoading={isLoading}>
          Register
        </Button>
        <p>
          <span className='text-black/50'>Already have an account? </span>
          <Link href='/sign-in' className='link-item'>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
