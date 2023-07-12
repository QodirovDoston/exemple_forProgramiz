import img from '../assets/Group 1.png'
import { Link } from 'react-scroll'

export default function Navbar() {
    let nav = [
      { name: "Home", link: "home" },
      { name: "Cars", link: "cars" },
      { name: "Book now", link: "book" },
      { name: "Terms and Conditions", link: "terms" },

    ]
  return (    
    <div className="w-[1290px] mx-auto py-[10px] sm:px-[30px] px-[10px]">
      <div className='mt-[20px] flex items-center justify-between'>
        <img src={img} alt="" className='mr-[400px]' />
        <div className='flex items-center'>
          <ul className='flex gap-[40px]'>
            {
              nav.map(link => <li key={link.name} className='hover:text-[#EE8313] text-white cursor-pointer duration-1500'>
                <Link
                  to={link.link}
                  activeClass='active'
                  smooth={true}
                  spy={true}
                  className='transition-all  '
                >
                  {link.name}
                </Link>

              </li>)
            }
          </ul>
          <button className='text-white ml-[72px] border-0 bg-[#EE8313] py-[12px] px-[24px] border-1 border-solid border-[#EE8313] duration-1500 hover:duration-1500 hover:text-[#EE8313] hover:bg-transparent'>Manage Booking</button>
        </div>
      </div>
    </div>
  )
}
