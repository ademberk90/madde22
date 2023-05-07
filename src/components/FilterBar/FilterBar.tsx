import React, { useState } from 'react'
import calendar from "../../assets/images/Calendar.svg"
import FilterModal from '../FilterModal/FilterModal'
import filterGroup from "../../assets/images/FilterGroup.svg"

const FilterBar: React.FC = () => {
    const [showFilterModal, setShowFilterModal] = useState<boolean>(false);
    return (
        <div>
            <div className='bg-[#F5F5F5]  px-7 py-3  font-galanoReg '>
                <div className='max-w-6xl flex justify-between m-auto px-5'>
                    <div className=''>
                        <button className='flex gap-2 text-base text-cs-pink ' onClick={() => setShowFilterModal(!showFilterModal)}>
                            <img src={filterGroup} alt="filter" />Filtreler</button>
                        <div className='relative '>
                            {showFilterModal && <FilterModal />}
                        </div>
                    </div>
                    <button className='flex items-center gap-2'>
                        <img src={calendar} width={22} alt="Calendar"></img>
                        Takvimde Gör
                    </button>
                </div>

            </div>

        </div>
    )
}

export default FilterBar