import { t } from 'i18next'
import { React } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import img from '../assets/Group 1.png'
import { NavLi } from '../Utlis/Conntes'
import SelectTransla from './ResobleTranslate/TranslateSection'
export default function Navbar() {
  const { t } = useTranslation()
  return (
    <div className="max-w-screen-xl  mx-auto pb-18 ">
      <div className='mt-[20px] flex items-center justify-between'>
        <img src={img} alt="" className='mr-5' />
        <div className='flex items-center'>
          <ul className='text-10px sm:text-18px flex gap-2 sm:gap-[40px]'>
        {NavLi.map(({name,path,id})=>{
         return(
          
         <Link key={id} to={path}><li className='text-white'>{name}</li></Link> 
         )
        })}
          </ul>
          <button className='text-white mr-2 sm:ml-[72px] border-0 bg-[#EE8313] sm:py-[12px] py-[5px] px-[12px] text-10px sm:text-16px sm:px-[24px] border-1 border-solid border-[#EE8313] duration-1500 hover:duration-1500 hover:text-[#EE8313] hover:bg-transparent'>{t("text.Navbtn")}</button>
      <SelectTransla/>
        </div>
      </div>
    </div>
  )
}
