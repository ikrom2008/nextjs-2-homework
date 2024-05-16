import React from 'react'
import './Main.css'
import Image from 'next/image'
import { Rating } from '@mui/material'
import brands from '@/../public/Group48.png'
import userimg from '@/../public/image24.png'
import email from '@/../public/email.png'
import Send from '@/../public/Send.png'
function Main({data}) {
  let prs = data?.map((item) => (
    <li key={item.id} className='list'>
        <Image src={item.image} alt={item.title} width={150} height={150} />
        <Rating  name="half-rating" defaultValue={0.5} precision={0.5} />
        <h5>{item.title.slice(0,10)}</h5>
        <h4>${item.price}</h4>
    </li>
  ))
  let pr = prs.slice(0,4)
  let prtwo = prs.slice(16,20)
  return (
    <div>
      <main className='main'>
        <section className='arrivals'>
            <div>
            <h3>New Arrivals</h3>
            <p>Check out most promising product bought by our buyers</p>
            </div>
            <ul className='cats'>
              <li>All</li>
              <li style={{opacity: '0.6'}}>Men</li>
              <li style={{opacity: '0.6'}}>Women</li>
              <li style={{opacity: '0.6'}}>Kids</li>
            </ul>
            <ul className='lists'>
              {
                pr
              }
            </ul>
        </section>
        <section className='brands'>
            <div>
            <h3>Top Brands Deal</h3>
            <p>Up To <span>60%</span> off on brands</p>
            </div>
            <Image src={brands} alt='brands' width={900} height={70} />
        </section>
        <section className='trand'>
              <div>
              <h3>Trending Collection</h3>
              <p>Check out most promising product bought by our buyers</p>
              </div>
              <ul className='lists'>
                {
                  prtwo
                }
              </ul>
        </section>
        <section className='reviews'>
                <div style={{display: 'grid', textAlign: 'center', gap: '10px'}}>
                <h3>Reviews</h3>
                <p>This is what our customers have to say </p>
                </div>
                <div className='user'>
                    <Image style={{marginLeft: '20px'}} src={userimg} alt='user' width={220} height={200} />
                    <div>
                        <p>There are many variations of passages of Lorem Ipsum <br />available, but the majority have suffered alteration in <br /> some form, by injected humour, or randomised words <br />which don't look even slightly believable. If you are <br /> going to use a passage of Lorem Ipsum</p>
                        <h5>Sameer Jain</h5>
                    </div>
                </div>
        </section>
        <section className='email'>
          <Image src={email} width={80} height={80} alt='email' />
          <h4>Subscibe Newsletter</h4>
          <p>Subscribe to our email and get updates right in your inbox</p>
          <div>
            <input type="email" name="" id="" placeholder='Enter Your Email ' />
            <button><Image src={Send} alt='send' width={35} height={35} /></button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Main
