import React from 'react'
import search from "../../assets/images/Search.svg"
import { useFilter } from '../../context/FilterContext'


const FilterBox: React.FC = () => {
  const filter = useFilter();

  const { setFilterText } = filter;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  }
  return (
    <div className='flex gap-2 items-center relative self-end border-2 border-[#9C9C9C]'>
      <img src={search} alt="search" width={24} className='absolute left-1'></img>
      <input className='pl-9 pr-2 py-3 font-galanoReg placehıkder-[#9C9C9C]' placeholder='Etkinlik Ara' onChange={handleInputChange}></input>
    </div>
  )
}

export default FilterBox