import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-t'>
        <div className='container m-auto py-2 text-sm text-white flex justify-between item-center'>
            <p>Desarrollado por Miller Ladino</p>
            <div className='flex items-center gap-2'>
                <p className='mr-2'>Powered by</p>
                <Image src={"/next.svg"} alt="Next.js" width={50} height={50} />
            </div>
        </div>
    </footer>
  )
}

export default Footer