import { React } from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/Group 1.png'
import { NavLi } from '../Utlis/Conntes'
import SelectTransla from './ResobleTranslate/TranslateSection'
export default function Navbar() {

  return (
    <div className="w-[1290px] mx-auto py-[10px] sm:px-[30px] px-[10px] ">
      <div className='mt-[20px] flex items-center justify-between'>
        <img src={img} alt="" className='mr-[400px]' />
        <div className='flex items-center'>
          <ul className='flex gap-[40px]'>
        {NavLi.map(({name,path})=>{
         return(
          
         <Link to={path}><li className='text-white'>{name}</li></Link> 
         )
        })}
          </ul>
          <button className='text-white ml-[72px] border-0 bg-[#EE8313] py-[12px] px-[24px] border-1 border-solid border-[#EE8313] duration-1500 hover:duration-1500 hover:text-[#EE8313] hover:bg-transparent'>Manage Booking</button>
      <SelectTransla/>
        </div>
      </div>
    </div>
  )
}
