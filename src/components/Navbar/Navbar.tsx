import React, { useState } from 'react'
import FilterBox from '../FilterBox/FilterBox';

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
    <div className='mt-10 flex flex-row justify-center items-center gap-7'>
      <div className='invisible mr-auto'><FilterBox/></div>
      <div className='flex gap-7' >
        {navbarData.map((item, index) => {
          return (
            <div className='flex flex-col'>
              <a key={item.id} href="/#" className={`text-galanoReg`} onClick={handleClickRoute(index)}>{item.label}</a>
              <div className={`${index === selectedRoute ? "border-b-4 border-cs-pink" : ""}`}></div>
            </div>
          )
        })}
      </div>
      <div className='ml-auto'>
      <FilterBox/>
      </div>
     
    </div>
  )
}

export default Navbar