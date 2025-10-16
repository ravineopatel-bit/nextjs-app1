import React from 'react'
import styls from './featured.module.css'
import Image from 'next/image'

const Featured = () => {
  return (
    <div   className={styls.container}>
      <h1  className={styls.tittle}>
        <b>Hey ravi  is  here</b>
        Discover  my  stories and  creative  ideas.
        </h1>
        <div className={styls.post}>
          <div className={styls.imgContainer}>
            <Image src="/er.jpeg" alt=""  fill />
          </div>
          <div className={styls.textContainer}>

            <h1 className={styls.postsTitle}>BigDanceac academye  xperience.  
              Title: My First Dance Class: A Beginner’s
               Experience on the Dance Floor</h1>
            <p  className={styls.postDesc}>
              Stepping into a dance class for the first time can feel like walking 
              into a completely different world — one full of movement, music, 
              and nervous excitement. As a beginner, the idea of dancing in front of strangers,
               trying to keep up with choreography, and figuring out what to do with your arms
                can be overwhelming. But it can also be incredibly rewarding.
               This is a look at my first dance class experience and what I learned 
               along the way.

               The First Step: Nerves and Expectations

              Like many beginners
                I walked into the studio feeling a mix of curiosity and anxiety. I had always admired dancers from afar — their grace, confidence, and rhythm seemed almost magical. But I wasn’t sure if I could move like that, let alone in front of others. I wore comfortable clothes and shoes, hoping that would somehow make up for my lack of experience.

              The instructor welcomed everyone with a smile and encouraged us not to worry about perfection. "This class is about learning and enjoying yourself," she said. That helped calm my nerves — a little.



            </p>
            <button className={styls.button}>Read More</button>
          </div>
        </div>
      
      
      
    </div>
  )
}

export default Featured
