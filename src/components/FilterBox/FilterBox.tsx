import React, { useContext } from 'react'
import search from "../../assets/images/Search.svg"
import { useFilter } from '../../context/FilterContext'


const FilterBox: React.FC = () => {
  const filter = useFilter();
  if (!filter) {
    return null;
  }
  const { filterText, setFilterText } = filter;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  }
  return (
    <div className='flex gap-2 items-center relative self-end'>
      <img src={search} alt="search" width={24} className='absolute left-1'></img>
      <input className='pl-9 pr-2 py-3' placeholder='Etkinlik Ara' onChange={handleInputChange}></input>
    </div>
  )
}

export default FilterBox