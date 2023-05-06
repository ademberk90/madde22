import React from 'react'
import logo from "../../assets/images/Exclude.svg"

const Header: React.FC = () => {
  return (
    <div className='flex items-center mt-[37px] flex-col'>
      <img src={logo} width="60px" alt="logo" />
      <h1 className='text-[32px] mt-[55px] leading-10 font-galanoBold'>ETKİNLİKLER</h1>
    </div>
  )
}

export default Header