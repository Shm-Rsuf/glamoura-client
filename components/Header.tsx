'use client';
import Link from 'next/link';
import Button, { buttonVariants } from './ui/Button';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navContents = [
  { href: '/', label: 'Home' },
  { href: '/beauty-packages', label: 'Beauty Packages' },
  { href: '/specialists', label: 'Specialists' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contacts' },
];

const Header = () => {
  const pathname = usePathname();
  return (
    <header className='fixed left-0 right-0 top-0 z-[100] flex h-20 w-full items-center border-b border-gray bg-white/90 backdrop-blur-md'>
      <nav className='container flex items-center justify-between gap-5'>
        <Link href='/' className='left text-xl font-semibold uppercase'>
          <span className='text-red'>gla</span>
          <span className='text-purple'>mo</span>
          <span className='text-blue'>ura</span>
        </Link>
        <div className='middle'>
          <ul className='flex items-center justify-center gap-4'>
            {navContents &&
              navContents.map((list, i) => (
                <li key={i}>
                  <Link
                    href={list.href}
                    className={cn(
                      'link-item',
                      pathname === list.href ? 'eq text-black' : 'text-black/50'
                    )}
                  >
                    {list.label}
                  </Link>
                </li>
              ))}
            <Link
              href='/sign-in'
              className={cn(buttonVariants({ variant: 'secondary' }))}
            >
              Sign in
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
