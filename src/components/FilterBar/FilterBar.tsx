import React from 'react'
import callendar from "../../assets/images/Callendar.svg"

const FilterBar: React.FC = () => {
    return (
        <div className='bg-[#F5F5F5] flex justify-between px-4 py-3 my-5'>
            <select id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
            <button className='flex items-center gap-2'>
              <img src={callendar} width={22} ></img>
              Takvimde Ara
            </button>

            
        </div>
    )
}

export default FilterBar