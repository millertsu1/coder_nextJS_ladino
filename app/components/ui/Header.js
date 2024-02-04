'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'About',
    href: '/about'
  },
  {
    label: 'Blog',
    href: '/blog'
  },
  {
    label: 'Contact',
    href: '/contact'
  },
  /* {
    label: 'Portfolio',
    href: '/portfolio'
  } */
]

const Header = () => {

  const pathname = usePathname()

  return (
    <header className='w-full bg-blue-600'>
        <div className='container m-auto py-6 flex justify-between items-center'>
          <Link href={'/'}>
            <Image src={"/FOKIU code-Negro.svg"} width={120} height={120} alt='logo Fokiu Code' />
          </Link>
            <nav className='flex justify-between gap-2'>
                {
                  links.map(link=> {
                    return (
                    <Link 
                    key={link.label} 
                    href={link.href} 
                    className={`${pathname === link.href ? 'font-bold': ''} text-base text-slate-100 p-3`}
                    >
                    {link.label}
                    </Link>
                    )
                  })
                }
            </nav>
        </div>
    </header>
  )
}

export default Header