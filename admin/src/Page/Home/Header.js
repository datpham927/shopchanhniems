/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { LogoTiktok, logo, logoFb, logoTiktokMobile } from '../../assets'

const Header = () => {
  return (
    <div className='flex shadow-md h-[70px] w-full shrink-0 items-center bg-gradient-to-r from-teal-200 to-pink-200 bg-center bg-no-repeat bg-cover bg-scroll overflow-hidden max-h-full px-6'>
     
      <div className="flex justify-center   w-full ">
        <img src={logo} className='w-40 rounded-full' />
      </div>
     
    </div>
  )
}

export default Header
