import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import Card from '../components/Card/Card'
import { data } from '../data/mockData'
import { useFilter } from '../context/FilterContext'
import FilterBar from '../components/FilterBar/FilterBar'

const HomePage :React.FC = () => {
  const filter = useFilter();
  if (!filter) {
    return null;
  }
  const { filterText, selectedLocation, selectedDate } = filter;
  let filteredData = data;

  if(filterText.length > 2) {
     filteredData = filteredData.filter(item => item.title.toLowerCase().includes(filterText.toLowerCase()))  
  }

  if(selectedLocation.length !== 0){
    filteredData = filteredData.filter(item => selectedLocation.includes(item.location.toLowerCase()));
  }
  if(selectedDate.length !== 0 && selectedDate.length !== 2){
    const pastEvents = selectedDate.includes(1);
    const nextEvents = selectedDate.includes(0);
    if(pastEvents){
      filteredData = filteredData.filter(item => (new Date(item.date).getTime() <= new Date().getTime()));
    }
    if(nextEvents){
      filteredData = filteredData.filter(item => (new Date(item.date).getTime() > new Date().getTime())); 
    }
  } 


  return (
    <div>
      <Header/>
      <Navbar/>
      <FilterBar/>
      <div className='flex flex-col gap-7 p-5 max-w-6xl m-auto'>
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