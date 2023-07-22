import { footerLi, footerLiThree, footerLiTwo } from "../Utlis/Conntes"
import logo from "../assets/logo/logo.png"
import theEnd from "../assets/img/theEnd.png"
import { t } from "i18next"
import { useTranslation } from "react-i18next"

export default function Footer() {
  const {t}= useTranslation()
  return (
    <footer className="bg-[#1F1905]">
    <div className="max-w-screen-xl mx-auto flex items-center justify-between">
      <div className="footer-left sm:ml-0 ml-5 ">
        <div className="flex  items-center gap-5 mb-8">
          <img src={logo} alt=""  />
          <h4 className="text-white">HKinvision</h4>
        </div>
        <p className="text-white w-200px mt-12">
         {t("text.footer_p")}
        </p>
      </div>
      <div className="w-full sm:w-700px flex items-center justify-between mt-8 sm:mt-18 mb-5">
        <ul className="list-footer sm:ml-0 ml-9 ">
          {footerLi.map((elem,index) => {
            return (
              <li key={index} className={elem.style} > {t(elem.name)} </li>
            )
          })}
        </ul>
        <ul className="list-footer hidden sm:block">
          {footerLiTwo.map((elem,index) => {

            return (
              <li key={index} className={elem.style} > {t(elem.name)} </li>
            )
          })}
        </ul>
        <ul className="list-footer  hidden sm:block">
          {footerLiThree.map((elem,index) => {

            return (
              <li key={index} className={elem.style} > {t(elem.name)} </li>
            )
          })}
        </ul>
        <img src={theEnd} alt="" className='w-100px hidden sm:block'/>
      </div>
    </div>
      <div className="bg-[#EE8313] text-center p-5"><h4 className="text-white font-bold text-11px sm:text-lg">{t("text.footerEnd")}</h4></div>
  </footer>
  )
}
