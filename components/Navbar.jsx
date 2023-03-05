import React from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { useState , useEffect } from 'react'
import { Menu } from '@headlessui/react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';
const Navbar = () => {

   const [nav, setNav] = useState(false);
   const showNav = () => setNav(!nav);

   const [textcolor, setTextcolor] = useState("white");
   const [bgcolor, setBgcolor] = useState("black");


  useEffect(() => {
    
    const ChangeColor = ()=>{
      if(window.scrollY >= 90)
      {
        setBgcolor("rgba(0, 0, 0, 0.76)");
        setTextcolor("white");
      }
      else
      {
        setBgcolor("black");
        setTextcolor("white");
      }
    }
   
    window.addEventListener('scroll',ChangeColor);
  }, [])
  

  return (
    <nav style={{backgroundColor:`${bgcolor}`}} className=' fixed top-0 right-0 left-0 text-black  w-screen py-2 px-8 z-[11]'>
        {/*flex div  */}
        <div className="flex justify-between items-center container mx-auto">
          <Link href="/">
             <div className="relative h-12 w-12">
                <Image src="/logo.png" alt='logo image' layout="fill"  objectFit="contain" priority="false"/>
               </div>
             </Link>
           
           <ul className='hidden md:flex space-x-6' style={{color:`${textcolor}`}}>
                <Link href="/">
                  <li className='font-medium normal text-md ease-linear duration-300  hover:text-orange-400'>Home</li>
                </Link>
                <Link href="/about">
                  <li className='font-medium normal text-md ease-linear duration-300 hover:text-orange-400'>About us</li>
                </Link>
                <Link href="/">
                    <Menu>
                      <Menu.Button className='font-medium normal text-md ease-linear duration-300 hover:text-orange-400 '>Services</Menu.Button>
                        <Menu.Items className="absolute flex flex-col right-8 mt-4 w-60  bg-white p-8 space-y-8 rounded-xl drop-shadow-medium  text-black  navBefore border border-orange-400 ">
                            <Menu.Item>
                            {({ active }) => (
                                <Link
                                className={`${active && 'font-medium normal text-md   hover:text-orange-400 ease-in duration-500'}`}
                                href="/"
                                >
                                Signs &amp; Banners
                                </Link>
                            )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                <Link
                                className={`${active && 'font-medium normal text-md ease-linear duration-300  hover:text-orange-400'}`}
                                href="/printing"
                                >
                                 Printing &amp; Branding
                                </Link>
                            )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                <Link
                                className={`${active && 'font-medium normal text-md ease-linear duration-300  hover:text-orange-400'}`}
                                href="/decoration"
                                >
                                 Decoration
                                </Link>
                            )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                <Link
                                className={`${active && 'font-medium normal text-md ease-linear duration-300  hover:text-orange-400'}`}
                                href="/sticker"
                                >
                                Promotion materials
                                </Link>
                            )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                <Link
                                className={`${active && 'font-medium normal text-md ease-linear duration-300  hover:text-orange-400'}`}
                                href="/gift"
                                >
                                Gift Making
                                </Link>
                            )}
                            </Menu.Item>
                             
                      </Menu.Items>
                    </Menu>              
                  {/* </li> */}
                </Link>
                <Link href="/contact">
                  <li className='font-medium normal text-md ease-linear duration-300  hover:text-orange-400'>Contact us</li>
                </Link>
           </ul>

           {/* mobile navbar */}
           <div className='block md:hidden cursor-pointer text-2xl z-[11] ' onClick={showNav}>
             {nav ? <AiOutlineClose/>:<AiOutlineMenu/>}
           </div>
           <div className={nav?"absolute   top-0  right-0 bottom-0 bg-black text-white z-[10] h-screen w-[80%] ease-in duration-300":"absolute top-0  right-[-100%] bottom-0 bg-black text-white z-[2] h-screen w-[80%] ease-in duration-300"}>
            <ul className='mt-16 flex flex-col space-y-10 px-8' style={{color:`${textcolor}`}}>
                <Link href="/">
                  <li className='font-2xl normal text-md ease-linear duration-300   hover:text-orange-400 text-xl'>Home</li>
                </Link>
                <Link href="/">
                  <li className='font-2xl normal text-md ease-linear duration-300  hover:text-orange-400 text-xl'>About us</li>
                </Link>
                <Link href="/">
                    <Menu>
                      <Menu.Button className='font-2xl normal text-md ease-linear duration-300  hover:text-orange-400 text-xl'>Services</Menu.Button>
                        <Menu.Items className="absolute flex flex-col md:right-8  mt-4 w-60  bg-white p-8 space-y-8 rounded-xl drop-shadow-2xl text-black  navBefore border border-orange-400 ">
                            <Menu.Item>
                            {({ active }) => (
                                <Link
                                className={`${active && 'font-medium normal text-md   hover:text-orange-400 ease-in duration-500'}`}
                                href="/"
                                >
                                Signs &amp; Banners
                                </Link>
                            )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                <Link
                                className={`${active && 'font-medium  normal text-md ease-linear duration-300   hover:text-orange-400'}`}
                                href="/"
                                >
                                 Printing &amp; Branding
                                </Link>
                            )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                <Link
                                className={`${active && 'font-medium  normal text-md ease-linear duration-300   hover:text-orange-400'}`}
                                href="/"
                                >
                                Promotion materials
                                </Link>
                            )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                <Link
                                className={`${active && 'font-medium  normal text-md ease-linear duration-300   hover:text-orange-400'}`}
                                href="/gift"
                                >
                                Gift Making
                                </Link>
                            )}
                            </Menu.Item>
                             
                      </Menu.Items>
                    </Menu>              
                  {/* </li> */}
                </Link>
                <Link href="/contact">
                  <li className='font-medium  normal text-md ease-linear duration-300   hover:text-orange-400 text-xl'>Contact us</li>
                </Link>
            </ul>              
           </div>
      </div>
    </nav>
  )
}

export default Navbar