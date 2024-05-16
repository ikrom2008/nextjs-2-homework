import React from 'react'
import './Hero.css'
import imggrl from '@/../public/image1.png'
import Image from 'next/image'
function Hero() {
  return (
    <div className='hero'>
      <div className='herocon'>
        <div className='title'>
            <h3>TRENDING COLLECTION</h3>
            <h2>Explore Summer <br />Collection</h2>
            <button>Shop Now</button>
            </div>
            <Image src={imggrl} width={250} height={400} alt='Img' />
      </div>
    </div>
  )
}

export default Hero
