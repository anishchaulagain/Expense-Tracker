import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-5 md:p-10 border shadow-sm '>
        <div className='cursor-pointer'>
        <Image src={'/logo.svg'} width={180} height={80} alt='logo'/>
        </div>
       
        <Button>Get Started</Button>
    </div>
  )
}

export default Navbar