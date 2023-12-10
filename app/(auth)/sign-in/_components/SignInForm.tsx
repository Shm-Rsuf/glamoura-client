'use client';
import Button from '@/components/ui/Button';
import { axiosPost } from '@/lib/axiosPost';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import toast from 'react-hot-toast';

interface SignInFormData {
  email: string;
  password: string;
}

const SignInForm = () => {
  const [formData, setFormData] = useState<SignInFormData>({
    email: '',
    password: '',
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  /* handleSubmit */
  const handleSubmit = useCallback(
    async (e: React.SyntheticEvent) => {
      e.preventDefault();
      setIsLoading(true);
      const data = await axiosPost('/api/auth/login', formData);
      if (data) {
        setIsLoading(false);
        setFormData({
          email: '',
          password: '',
        });
        toast.success('login successful.');
      } else {
        setIsLoading(false);
      }
    },
    [formData]
  );

  return (
    <div className='flex flex-col gap-10'>
      <div className='flex flex-col gap-1.5'>
        <h3>Welcome back!</h3>
        <p className='text-black/50'>Please login to your account</p>
      </div>
      <form onSubmit={handleSubmit} className='flex w-full flex-col gap-5'>
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
        <Button type='submit' variant='secondary' isLoading={isLoading}>
          Login
        </Button>
        <p>
          <span className='text-black/50'>Don&apos;t have an accoutn? </span>
          <Link href='/sign-up' className='link-item'>
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignInForm;
