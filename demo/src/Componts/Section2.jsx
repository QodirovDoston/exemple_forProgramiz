import React from 'react'
import oneImg from "../assets/img/cardOneImg.png"
import twoImg from "../assets/img/TwoImgSection.png"
import threeImg from "../assets/img/cardThreeImg.png"
import { t } from 'i18next'
import { useTranslation } from 'react-i18next'

export default function Section2() {
    const { t } = useTranslation()
  return (
    <div className='w-[1200px] mx-auto '>
        <div className="w-full p-15">
            <h2 className="text-white text-5xl font-bold">{t("text.sectwotitle")}</h2>
            <div className="flex items-center justify-between mt-10">
                <div className="w-345px">
                    <img src={oneImg} alt="" className="w-100%" />
                    <h4 className="text-white font-bold text-xl mt-5">{t("text.SecCardOneTitle")}</h4>
                    <p className="text-white text-gray-300 mt-5">{t("text.SecCardOnePragraf")}</p>
                </div>
                <div className="w-345px">
                    <img src={twoImg} alt="" className="w-100%" />
                    <h4 className="text-white font-bold text-xl mt-5">{t("text.SecCardTwoTitle")}</h4>
                    <p className="text-white text-gray-300 mt-5">{t("text.SecCardTwoPragraf")}</p>
                </div>
                <div className="w-345px">
                    <img src={threeImg} alt="" className="w-100%" />
                    <h4 className="text-white font-bold text-xl mt-5">{t("text.SecCardThreeTitle")}</h4>
                    <p className="text-white text-gray-300 mt-5">{t("text.SecCardThreePragraf")}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
