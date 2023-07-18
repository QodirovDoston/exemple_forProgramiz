import { t } from 'i18next'
import React from 'react'
import { useTranslation } from 'react-i18next'
import lacation from "../assets/img/location.png"
export default function Section4() {
  const { t } = useTranslation()
  return (
    <div className='max-w-screen-xl mx-auto mb-10 sm:mb-28'>
           <h2 className="text-white text-2xl sm:text-5xl font-bold text-center ">{t("text.secfourtitle")}</h2>
           <img src={lacation} alt="" className='w-full mt-5 sm:mt-15'/>
    </div>
  )
}
