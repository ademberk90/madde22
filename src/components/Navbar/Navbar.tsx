import React, { useState } from 'react'
import FilterBox from '../FilterBox/FilterBox';
import styles from "./Navbar.module.css"
const Navbar : React.FC = () => {
  const [selectedRoute, setSelectedRoute] = useState<number>(0);

  const navbarData = [
    {
      id: 0,
      label: 'Tüm Etkinlikler'
    },
    {
      id: 1,
      label: 'Tiyatro'
    },
    {
      id: 2,
      label: 'Konser'
    },
    {
      id: 3,
      label: 'Stand Up'
    },
    {
      id: 4,
      label: 'Sinema'
    },
    {
      id: 5,
      label: 'Çocuk' // text-galanoReg pb-5
    }
  ];

  const handleClickRoute = (index : number) => (e: React.MouseEvent<HTMLAnchorElement> | undefined) : void => {
    setSelectedRoute(index);
  }

  return (
    <div className='mt-10 flex flex-row justify-center items-center gap-7 px-4 items-stretch'>
      <div className='invisible mr-auto max-lg:hidden'><FilterBox/></div>
      <div className={`flex gap-7 max-lg:overflow-x-scroll lg:overflow-visible ${styles.scroll}`} style={{ WebkitOverflowScrolling: "touch"}}>
        {navbarData.map((item, index) => {
          return (
            <div key={item.id} className='flex flex-col justify-between max-lg:min-h-[40px]'>
              <a key={item.id} href="/#" className={`text-galanoReg whitespace-nowrap`} onClick={handleClickRoute(index)}>{item.label}</a>
              <div className={`${index === selectedRoute ? "border-b-4 border-cs-pink" : ""}`}></div>
            </div>
          )
        })}
      </div>
      <div className='ml-auto max-lg:hidden pb-3'>
      <FilterBox/>
      </div>
     
    </div>
  )
}

export default Navbar