import React, { useState } from 'react'
import preview from "../../assets/images/1.png"
import map from "../../assets/images/Map.svg"
import plus from "../../assets/images/plusIcon.svg"
import check from "../../assets/images/checkIcon.svg"
import { DataType } from "../../@types/data"
import styles from "./Card.module.css"
interface Props {
  detail: DataType
}
const Card: React.FC<Props> = ({ detail }) => {
  const [checked, setChecked] = useState<boolean>(true);

  const date = new Date(detail.date);
  const localDateString = date.toLocaleString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' });
  const dateArr = localDateString.split(" ");

  const weekDays : string[] = ["Pzt", "Salı", "Çar", "Per", "Cuma", "Cmt", "Pazar"];

  return (
    <div className='flex lg:flex-row max-lg:flex-col font-galanoReg border-[#DEDEDE] border-2 lg:pr-4 max-lg:pb-5'>
      <div className='lg:text-cs-pink max-lg:text-white flex lg:flex-col max-lg:flex-row max-lg:gap-1 items-center justify-center px-5 font-galanoReg bg-black'>
        <div className='max-lg:text-2xl'>
          {dateArr[0]}
        </div>
        <div>
          {dateArr[1]}
        </div>
        <div className='max-lg:hidden'>
          {dateArr[2]}
        </div>
        <div  className='lg:hidden max-lg:text-[#9C9C9C]'>
          {weekDays[date.getDay()]}
        </div>
        <div className='max-lg:text-[#9C9C9C]'>
          {dateArr[3].substring(0, dateArr[3].length - 3)}
        </div>
      </div>
      <div className={`flex lg:items-center max-lg:justify-center ${styles.imgBackground}`} >
        <div className='relative'>
          <img src={preview} alt="eventphoto"  className='min-w-[200px]'></img>
          <div className={`text-white absolute top-3 -left-4 px-5 font-galanoBold text-sm
              ${detail.category === 'Sinema' ? 'bg-[#F07266]' : ''}
              ${detail.category === 'Tiyatro' ? 'bg-[#FF0D87]' : ''}
              ${detail.category === 'Stand Up' ? 'bg-[#F19653]' : ''}`}>
            {detail.category.toUpperCase()}
          </div>
        </div>
      </div>
      <div className='flex lg:flex-row max-lg:flex-col gap-5 font-galanoReg'>
        <div className='ml-5 flex flex-col gap-2 pt-3 text-lg'>
          <div >
            {detail.title}
          </div>
          <div className='text-[#9C9C9C] flex gap-4 text-sm'>
            <img src={map} alt="" />
            {detail.location}
          </div>
          <div className='text-base'>
            {detail.description}
          </div>
        </div>
        <div className='flex lg:flex-col max-lg:flex-row justify-center gap-3 min-w-[25%] max-lg:px-5'>
          <button className='bg-cs-pink text-white py-4 px-2 max-lg:min-w-[50%]'>Bilet Al</button>
          <div className='flex max-lg:grow'>
            <button className='flex items-center gap-2' onClick={() => setChecked(!checked)}>
              <img src={checked ? check : plus} width={22} alt="check"></img>
              {checked ? "Takvime Eklendi" : "Takvime Ekle"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card