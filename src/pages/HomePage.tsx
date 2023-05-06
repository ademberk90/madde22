import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import Card from '../components/Card/Card'
import { data } from '../data/mockData'
import { useFilter } from '../context/FilterContext'
import { DataType } from '../@types/data'
import FilterBar from '../components/FilterBar/FilterBar'

const HomePage :React.FC = () => {
  const filter = useFilter();
  if (!filter) {
    return null;
  }
  const { filterText, setFilterText } = filter;

  let filteredData;

  if(filterText.length > 2) {
    console.log("heter")
     filteredData = data.filter(item => item.title.toLowerCase().includes(filterText.toLowerCase()))  
  }
  else{
    filteredData = data;
  }

  return (
    <div>
      <Header/>
      <Navbar/>
      <FilterBar/>
      <div className='flex flex-col gap-7'>
        {filteredData.map(item => {
          return(
            <Card detail={item} />
          )
        })}
      </div>

    </div>
  )
}

export default HomePage