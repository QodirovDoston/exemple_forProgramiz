import React from 'react'
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { Transale } from '../../Utlis/Conntes';



export default function SelectTransla() {
  const { t } = useTranslation();
  const changeLanguage = (language) => {
    i18next.changeLanguage(language.target.value);
  }
  return (
    <div className="w-50px rounded-3xl z-1 truncate fixed right-1 bottom-18 sm:top-5 sm:left-7 ">

    <select onChange={changeLanguage} className='bg-yellow-500 py-2 text-[#000000] text-[19px] font-light bg-[#ffffff] border-none' name="Translate" id="1">
      {Transale.map((option, index) => {
        return (
          <React.Fragment key={index}>
            <option className='bg-slate-200 border-none ' value={option.value}>{t(option.text)}</option>
          </React.Fragment>
        )
      })}


      
    </select>
    </div>
  )
}