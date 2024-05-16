"use client"
import React, { useEffect, useState } from 'react'
import '../main/Main.css'
import { PatternFormat } from 'react-number-format'
import Link from 'next/link';
function Contactus() {
    useEffect(() => {
        window.scrollTo(0,0)
    })
    const [iplocation, setIplocation] = useState('');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      setIplocation(`Latitude: ${latitude}, Longitude: ${longitude}`)
    }
    function error() {
      console.log("Unable to retrieve your location");
    }
    const [number,setNumber] = useState(8)
    const [fname,setFname] = useState('')
    const [lname,setLname] = useState('')
    const [address,setAddress] = useState('')
    let bot_Token = '6361316833:AAGYaAgdy7WfJ4MdZc5Sh73iqWTZesqqigA'
    // https://api.telegram.org/bot6361316833:AAGYaAgdy7WfJ4MdZc5Sh73iqWTZesqqigA/getUpdates
    let chatId = '-4241654105'
    const handleOrder = () =>{
        let text = ""
        text += `Familiyasi: ${fname} %0A`;
        text += `Ismi: ${lname} %0A`;
        text += `Joylashuvi: ${address} %0A`;
        text += `Telefon raqami: ${number} %0A %0A`;
        text += `Ip location %0A`;
        text += `${iplocation}`;
        let url = `https://api.telegram.org/bot${bot_Token}/sendMessage?chat_id=${chatId}&text=${text}`;
        let api = new XMLHttpRequest();
        api.open("GET", url, true);
        api.send();
        alert('Sizning biz bilan boglandingiz!')
    }
  return (
    <div>
      <div className='contactme'>
        <div>
        <h2>Let's contact bro 😉</h2>
        <Link href={'https://t.me/+n9zRDa-ygndhM2Ey'}>
        <h4>👉 Bot 👈</h4>
        </Link>
        </div>
        <form action="" className='contactme' onSubmit={handleOrder}>
        <div className='coninps'>
            
        <input type="name" name="" id=""value={fname} onChange={(e) => setFname(e.target.value)} required placeholder='FirstName' />
        <input type="name" name="" id="" value={lname} onChange={(e) => setLname(e.target.value)} required placeholder='LastName' />
        <input type="Address" name="" value={address} onChange={(e) => setAddress(e.target.value)} required id="" placeholder='Address' /> 
        <PatternFormat value={number} required onChange={(e) => setNumber(e.target.value)} format="+99# (##) ###-##-##" />;
        </div>
        <button type='sumbit'>Send Contact</button>
        </form>
      </div>
    </div>
  )
}

export default Contactus
