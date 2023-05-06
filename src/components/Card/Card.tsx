import React, { useState } from 'react'
import preview from "../../assets/images/1.png"
import map from "../../assets/images/Map.svg"
import plus from "../../assets/images/plusIcon.svg"
import check from "../../assets/images/checkIcon.svg"
import { DataType } from "../../@types/data"


interface Props {
  detail: DataType
}
const Card: React.FC<Props> = ({ detail }) => {
  const [checked, setChecked] = useState<boolean>(true);

  const dateArr = detail.date.split(" ");
  return (
    <div className='flex font-galanoReg border-[#DEDEDE] border-2 pr-4'>
      <div className='flex gap-3' style={{ background: "linear-gradient(90deg, black 60%, transparent 50%)" }}>
        <div className='text-cs-pink flex flex-col items-center justify-center px-5'>
          <div>
            {dateArr[0]}
          </div>
          <div>
            {dateArr[1]}
          </div>
          <div>
            {dateArr[2]}
          </div>
          <div>
            {dateArr[3]}
          </div>
        </div>
        <div className='relative flex items-center'>
          <div className='text-white bg-indigo-500 absolute top-8 -left-4 px-5'>{detail.category}</div>
          <img src={preview} alt="eventphoto" width={300} className='min-w-[200px]'></img>
        </div>
      </div>
      <div className='flex gap-5'>
        <div className='ml-5 flex flex-col gap-2 pt-3'>
          <div >
            {detail.title}
          </div>
          <div className='text-[#9C9C9C] flex gap-4'>
            <img src={map} alt="" />
            {detail.location}
          </div>
          <div>
            {detail.description}
          </div>
        </div>
        <div className='flex flex-col justify-center gap-3 min-w-[25%]'>
          <button className='bg-cs-pink text-white py-4 px-2'>Bilet Al</button>
          <div className='flex'>
            <button className='flex items-center gap-2' onClick={() => setChecked(!checked)}>
              <img src={checked ? check : plus} width={22} ></img>
              {checked ? "Takvime Eklendi" : "Takvime Ekle"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card