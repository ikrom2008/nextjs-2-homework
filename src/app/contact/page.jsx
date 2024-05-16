import React from 'react'
import '../../components/main/Main.css'
import Link from 'next/link'
import Contactus from '@/components/contact/Contact'
function Contact() {
  return (
    <div className='contact'>
      <span style={{textAlign: 'center'}}><Link href={'../'} style={{textDecoration: 'none' , color: 'black'}}>Home</Link> / Contact Us</span>
      <h3 style={{textAlign: 'center'}}>Contact Us</h3>
      <Contactus />
    </div>
  )
}

export default Contact
