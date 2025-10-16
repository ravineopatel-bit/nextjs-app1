"use client"
import React, { useState } from 'react'
import styls from './authLinks.module.css'
import Link from 'next/link'


const AuthLinks = () => {
  const [open,setOpen]  =useState(false)
  const status = "notauthenticated" //temporary
  return (
    //temporary
    <>
    {status === "notauthenticated" ? (
      <Link href="/login" className={styls.link}>login</Link>
    ):(
      <>
        <Link href="/write" className={styls.link}>Write</Link>
        <span className={styls.link}>Logout</span>
        </>
    )}
    <div  className={styls.burger}  onClick={()=>setOpen(!open)}>
    <div  className={styls.line}></div>
    <div  className={styls.line}></div>
    <div  className={styls.line}></div>
    </div>
    {open && (
      <div  className={styls.responsiveMenu}>
        <Link href="/">Homepage</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        {status === "notauthenticated" ? (
      <Link href="/login">login</Link>
    ):(
      <>
        <Link href="/write">Write</Link>
        <span className={styls.link}>Logout</span>
        </>
    )}
        </div>
    )}
    </>
  )}

export default AuthLinks
