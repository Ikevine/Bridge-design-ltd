import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'
const Layout = ({children}) => {
  return (
    <>
     <Head>
       <title>Bridge design rwanda</title>
       <meta name="description" content="we design" />
       <meta name="viewport" content="width=device-width, initial-scale=1" />
       <link rel="icon" href="/logo.ico" />
     </Head>

       <Navbar/>
         {children}
       <Footer/>
    </>
  )
}

export default Layout