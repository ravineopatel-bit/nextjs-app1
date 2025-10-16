import React from 'react'
import styls from './categoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'
const CategoryList = () => {
  return (
    <div    className={styls.container}>
      <h1 className={styls.title}>Popular Category</h1>
      <div className={styls.categories}>
        
          <Link href="/blog?cat=style" className={'${styls.category} ${styls.category}'}>
          <Image src="/style.png" alt="" width={32} height={32}  className={styls.image} 
           /> 
          

          style
          
          </Link>
           <Link href="/blog?cat=style" className={'${styls.category} ${styls.category}'}>
          <Image src="/style.png" alt="" width={32} height={32}  className={styls.image} 
           /> 
          

          style
          
          </Link>
           <Link href="/blog?cat=style" className={'${styls.category} ${styls.category}'}>
          <Image src="/style.png" alt="" width={32} height={32}  className={styls.image} 
           /> 
          

          style
          
          </Link>
           <Link href="/blog?cat=style" className={'${styls.category} ${styls.category}'}>
          <Image src="/style.png" alt="" width={32} height={32}  className={styls.image} 
           /> 
          

          style
          
          </Link>
           <Link href="/blog?cat=style" className={'${styls.category} ${styls.category}'}>
          <Image src="/style.png" alt="" width={32} height={32}  className={styls.image} 
           /> 
          

          style
          
          </Link>

      
    </div>
    </div>
  )
}

export default CategoryList
