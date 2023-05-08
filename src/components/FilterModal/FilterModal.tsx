import React from 'react'
import { useFilter } from '../../context/FilterContext';

interface Location{
    id: number;
    label: string
}

interface Date{
    id: number;
    label: string
}

const locationData: Location[] = [
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

const dateData: Date[] = [
    {
        id: 0,
        label: "Güncel Etkinlikler"
    },
    {
        id: 1,
        label: "Geçmiş Etkinlikler"
    }
];

const FilterModal: React.FC = () => {
    const filter = useFilter();

    const { selectedLocation, setSelectedLocation, selectedDate, setSelectedDate } = filter;


    const handleClickLocationCbx = (item: string) => (e: React.MouseEvent<HTMLInputElement> | undefined): void => {
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
    <div className='absolute  bg-white flex flex-col px-9 py-9 z-10 gap-5 drop-shadow-2xl min-w-[290px] top-3'>
        <div className='font-galanoReg'>Etkinlik Mekanı</div>
        <div className='flex flex-col gap-3'>
            {locationData.map(item => {
                return (
                    <div key={item.id} className='flex gap-4'>
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
                    <div key={item.id} className='flex gap-4'>
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