import { sectionimages } from '../Utlis/Conntes'
import img from '../assets/Mask.png'    
import './section.css'

const Section1 = () => {
    return (
        <div className='w-[1200px] mx-auto'>
            <div>
                <p className="text-white text-center text-5xl mb-[40px] mt-[60px]">Rent a Luxury Car</p>
            </div>
            <div className='flex flex-wrap justify-beetwen gap-32px'>
                {
                    sectionimages.map(({ hover_top_name, hover_bottom_name }) => {
                        return (
                            <>
                                <div className='father w-[584px] relative'>
                                    <img src={img} alt="" />
                                    <div className='absolute w-[548px] top-0 duration-1500'>
                                        <h1 className='text-white text-left pl-[48px] pt-[48px] text-4xl'>{hover_top_name}</h1>
                                        <h3 className='text-white text-right pr-[70px] pt-[360px] text-2xl'>{hover_bottom_name}</h3>
                                    </div>
                                </div>

                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Section1 