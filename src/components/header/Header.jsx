"use client"
import React from 'react'
import './Header.css'
import Link from 'next/link'
function Header() {
  return (
    <div className='back'>
      <header className='header'>
        <nav className='navbar'>
            <Link href={'/'} style={{textDecoration: 'none' , color: 'black'}}>
            <h3>Fashion <span>Era</span></h3>
            </Link>
            <ul>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Winter</li>
                <Link href={'/contact'} style={{textDecoration: 'none' , color: 'black'}}>
                <li>Contact</li>
                </Link>
            </ul>
            <input type="search" name="" id="" placeholder='Search' />
        </nav>
      </header>
    </div>
  )
}

export default Header
