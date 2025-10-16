import React from 'react'
import styls from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import AuthLinks from '../authLinks/AuthLinks'
import TheamToggel from '../themeToggle/ThemeToggle'
const Navbar = () => {
  return (
    <div    className={styls.container}>
      <div  className={styls.social}>
        <Image src="/facebook.png"  alt="facebook"  width={24} height={24} />
        <Image src="/instagram.png" width={24} height={24} alt="instagram"/>
        <Image src="/tiktok.png" width={24} height={24} alt="tiktok"/>
        <Image src="/youtube.png" width={24} height={24} alt="youtube"/>

      </div>
      <div className={styls.logo}>Raviblog</div>
      <div className={styls.links}>
        <TheamToggel/>
        <Link href="/"  className={styls.link}>Homepage</Link>
        <Link href="/"  className={styls.link}>Contact</Link>
        <Link href="/"  className={styls.link}>About</Link>
        <AuthLinks/>
      </div>
    </div>
  )
}

export default Navbar
