import { footerLi, footerLiThree, footerLiTwo } from "../Utlis/Conntes"
import logo from "../assets/logo/logo.png"
import theEnd from "../assets/img/theEnd.png"
import { t } from "i18next"
import { useTranslation } from "react-i18next"

export default function Footer() {
  const {t}= useTranslation()
  return (
    <footer className="bg-[#1F1905]">
    <div className="w-1200px mx-auto flex items-center justify-between">
      <div className="footer-left">
        <div className="flex items-center gap-5 mb-8">
          <img src={logo} alt=""  />
          <h4 className="text-white">HKinvision</h4>
        </div>
        <p className="text-white w-200px mt-12">
         {t("text.footer_p")}
        </p>
      </div>
      <div className="w-700px flex items-center justify-between mt-18 mb-5">
        <ul className="list-footer">
          {footerLi.map((elem) => {
            return (
              <li key={elem.id} className={elem.style} > {elem.name} </li>
            )
          })}
        </ul>
        <ul className="list-footer">
          {footerLiTwo.map((elem) => {

            return (
              <li key={elem.id} className={elem.style} > {elem.name} </li>
            )
          })}
        </ul>
        <ul className="list-footer">
          {footerLiThree.map((elem) => {

            return (
              <li key={elem.id} className={elem.style} > {elem.name} </li>
            )
          })}
        </ul>
        <img src={theEnd} alt="" className='w-100px'/>
      </div>
    </div>
      <div className="bg-[#EE8313] text-center p-5"><h4 className="text-white font-bold text-lg">{t("text.footerEnd")}</h4></div>
  </footer>
  )
}
