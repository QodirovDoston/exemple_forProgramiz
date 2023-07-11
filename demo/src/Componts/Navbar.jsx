import img from '../assets/Group 1.png'
import { Link } from 'react-scroll'

export default function Navbar() {
  let nav = [
    {name:"Home", link:"home"},
    {name:"Cars", link:"cars"},
    {name:"Book now", link:"book"},
    {name:"Terms and Conditions", link:"terms"},

  ]
  return (
    <div className="container mx-auto py-[10px] sm:px-[30px] px-[10px]">
      <div className='mt-[20px] flex items-center'>
        <img src={img} alt="" className='mr-[400px]'/>
       <ul className='flex gap-[40px]'>
       {
          nav.map(link => <li key={link.name} className='text-current '>
            <Link
              to={link.link}
              activeClass='active'
              smooth={true}
              spy={true}
              className='text-white transition-all duration-500 hover:text-primary'
            >
              {link.name}
            </Link>

          </li>)
        }
       </ul>
        <button className='text-white ml-[72px] border-0 bg-[#EE8313] py-[12px] px-[24px]'>Manage Booking</button>
      </div>
    </div>
  )
}
