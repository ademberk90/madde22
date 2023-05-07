import React from 'react'
import callendar from "../../assets/images/Callendar.svg"
//Merhabalar,

//Öncelikli olarak başvurumu dikkate aldığınız için teşekkür ederim. Aktif olarak çalıştığım için ve hafta sonu önceden planlanmış bir şehir dışı aile ziyaretim olduğu için verilen kısıtlı sürede projeyi yetiştirmem zor gibi gözüküyor. Sizlerinde onayı olursa 1-2 gün ek süre istemekteyim. Şu ana kadar yapmış olduğum geliştirmelerin repo linki: github , önizleme linki: netlify.

//İyi Çalışmalar.

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