import { t } from 'i18next'
import React from 'react'
import { useTranslation } from 'react-i18next'
import lacation from "../assets/img/location.png"
export default function Section4() {
  const { t } = useTranslation()
  return (
    <div className='w-1200px mx-auto mb-28'>
           <h2 className="text-white text-5xl font-bold text-center ">{t("text.secfourtitle")}</h2>
           <img src={lacation} alt="" className='w-full mt-15'/>
    </div>
  )
}
