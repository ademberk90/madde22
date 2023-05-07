import React from 'react'
import { useFilter } from '../../context/FilterContext';

const FilterModal: React.FC = () => {
    const filter = useFilter();
    if (!filter) {
        return null;
    }
    const { selectedLocation, setSelectedLocation, selectedDate, setSelectedDate } = filter;

    const locationData = [
        {
            id: 0,
            label: "Maximum Uniq Hall"
        },
        {
            id: 1,
            label: "Maximum Uniq Box"
        },
        {
            id: 2,
            label: "Maximum Uniq Lounge"
        },
        {
            id: 3,
            label: "Maximum Uniq Açıkhava"
        },
        {
            id: 4,
            label: "Bahçe Fuaye"
        }
    ];

    const dateData = [
        {
            id: 0,
            label: "Güncel Etkinlikler"
        },
        {
            id: 1,
            label: "Geçmiş Etkinlikler"
        }
    ];


    const handleClickLocationCbx = (item: string) => (e: React.MouseEvent<HTMLInputElement> | undefined): void => {
       console.log("123");
        if (!selectedLocation.includes(item.toLowerCase())) {
            setSelectedLocation([...selectedLocation, item.toLowerCase()]);
        }
        else{
            const filteredNumbers = selectedLocation.filter((loc) => loc !== item.toLowerCase());
            setSelectedLocation(filteredNumbers);
        }
    }

    const handleClickDateCbx = (itemId: number) => (e: React.MouseEvent<HTMLInputElement> | undefined): void => {
        if (!selectedDate.includes(itemId)) {
            setSelectedDate([...selectedDate, itemId]);
        }
        else{
            const filteredNumbers = selectedDate.filter((date) => date !== itemId);
            setSelectedDate(filteredNumbers);
        }
    }


return (
    <div className='absolute  bg-white flex flex-col px-9 py-9 z-10 gap-5 left-10 drop-shadow-2xl'>
        <div className='font-galanoReg'>Etkinlik Mekanı</div>
        <div className='flex flex-col gap-3'>
            {locationData.map(item => {
                return (
                    <div className='flex gap-4'>
                        <input className='w-5 accent-cs-pink' type='checkbox' checked={selectedLocation.includes(item.label.toLowerCase())} onClick={handleClickLocationCbx(item.label)} />
                        <div >{item.label}</div>
                    </div>
                )
            })}
        </div>
        <div className='font-galanoReg'>Etkinlik Tarihi</div>
        <div className='flex flex-col gap-3'>
            {dateData.map(item => {
                return (
                    <div className='flex gap-4'>
                        <input className='w-5 accent-cs-pink' type='checkbox' checked={selectedDate.includes(item.id)} onClick={handleClickDateCbx(item.id)} />
                        <div >{item.label}</div>
                    </div>
                )
            })}
        </div>
    </div>
)
}

export default FilterModal