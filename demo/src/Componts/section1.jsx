import { t } from 'i18next'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { sectionimages } from '../Utlis/Conntes'
import './section.css'

const Section1 = () => {
    const { t } = useTranslation()
    return (
        <div className='w-[1200px] mx-auto'>
            <div>
                <p className="text-white text-center text-5xl mb-[40px] mt-[60px] font-bold">{t("text.SectionTitle")}</p>
            </div>
            <div className='flex flex-wrap justify-beetwen gap-32px'>
                {
                    sectionimages.map(({img, hover_top_name, hover_bottom_name },index) => {
                        return (
                            <React.Fragment key={index}>
                                <div className='father w-[584px] relative duration-500'>
                                    <img src={img} alt="" className='img_hover'/>
                                    <div className='text_name absolute w-[548px] top-0 duration-500'>
                                        <h1 className='text-white text-left pl-[48px] pt-[48px] text-4xl'>{hover_top_name}</h1>
                                        <h3 className='text-white text-right pr-[70px] pt-[360px] text-2xl'>{hover_bottom_name}</h3>
                                    </div>
                                </div>

                            </React.Fragment>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Section1 