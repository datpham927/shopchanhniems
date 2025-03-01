/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import { LogoTiktok, logo, logoFb, logoTiktokMobile, logoZalo } from '../../assets'
import { getContact } from '../../api/contact'

const Header = () => {
  const [contact, setContact] = useState()

  useEffect(() => {
    const fetchApi = async () => {
      const res = await getContact()
      console.log("res", res)
      if (res.data?.length > 0) {
        setContact(res.data[0])
      }
    }
    fetchApi()
  }, [])

  return (
    <div className='flex shadow-md h-[70px] w-full shrink-0 items-center bg-gradient-to-r from-teal-200 to-pink-200 bg-center bg-no-repeat bg-cover bg-scroll overflow-hidden max-h-full px-6'>

      <div className='w-4/12 flex gap-3 mobile:hidden'>
        {contact?.contact_facebook && <a className="flex  gap-2 items-center " target="_blank" href={contact?.contact_facebook} >
          <img className='h-8 rounded-md' src={logoFb} />
        </a>}
        {contact?.contact_zalo && <a className="flex  gap-2 items-center " target="_blank" href={`https://zalo.me/${contact?.contact_zalo}`} >
          <img className='h-8 rounded-md' src={logoZalo} />
        </a>}
      </div>
      <div className="flex justify-center  mobile:w-full w-4/12">
        <img src={logo} className='w-40 rounded-full' />
      </div>
      {contact?.contact_tiktok && <a className="flex mobile:hidden justify-end w-4/12" target="_blank" href={contact?.contact_tiktok} >
        <span className='mobile:hidden'> {LogoTiktok} </span>
        <img className='mobile:block w-10 h-10 rounded-lg hidden' src={logoTiktokMobile} />
      </a>}
    </div>
  )
}

export default Header
