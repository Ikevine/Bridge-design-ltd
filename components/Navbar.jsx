import React from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu } from '@headlessui/react'
const Navbar = () => {

   const [nav, setNav] = useState(false);
   const showNav = () => setNav(!nav)
  return (
    <nav className='fixed top-0 right-0 left-0 bg-black text-white  w-screen py-2 px-8'>
        {/*flex div  */}
        <div className="flex justify-between items-center">
           <div className="relative h-8 w-8">
             <Link href="/">
               <Image src="/logo.png" layout="fill"  objectFit="contain"/>
             </Link>
           </div>
           <ul className='hidden md:flex space-x-6'>
                <Link href="/">
                  <li className='font-medium normal text-md ease-linear duration-300  hover:text-orange-400'>Home</li>
                </Link>
                <Link href="/">
                  <li className='font-medium normal text-md ease-linear duration-300 hover:text-orange-400'>About us</li>
                </Link>
                <Link href="/">
                  {/* <li className='font-medium normal text-md ease-linear duration-300 hover:text-orange-400'>Services */}
                  
                    <Menu>
                      <Menu.Button className='font-medium normal text-md ease-linear duration-300 hover:text-orange-400 '>Services</Menu.Button>
                        <Menu.Items className="absolute flex flex-col right-4 mt-4 w-72  bg-white p-8 space-y-4 rounded-xl drop-shadow-2xl text-black pl- navBefore ">
                            <Menu.Item>
                            {({ active }) => (
                                <a
                                className={`${active && 'font-medium normal text-md ease-linear duration-300  hover:text-orange-400'}`}
                                href="/account-settings"
                                >
                                Signs &amp; Banners
                                </a>
                            )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                <a
                                className={`${active && 'font-medium normal text-md ease-linear duration-300  hover:text-orange-400'}`}
                                href="/account-settings"
                                >
                                 Printing &amp; Branding
                                </a>
                            )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                <a
                                className={`${active && 'font-medium normal text-md ease-linear duration-300  hover:text-orange-400'}`}
                                href="/account-settings"
                                >
                                Promotion materials
                                </a>
                            )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                <a
                                className={`${active && 'font-medium normal text-md ease-linear duration-300  hover:text-orange-400'}`}
                                href="/account-settings"
                                >
                                Gift Making
                                </a>
                            )}
                            </Menu.Item>
                             
                      </Menu.Items>
                    </Menu>              
                  {/* </li> */}
                </Link>
                <Link href="/">
                  <li className='font-medium normal text-md ease-linear duration-300  hover:text-orange-400'>Contact us</li>
                </Link>
           </ul>

           <div className="md:hidden block">
                <div className="">
                    {nav? <></> :<></>}
                </div>  
                 {/* Menu */}
           </div>

        </div>
       
    </nav>
  )
}

export default Navbar