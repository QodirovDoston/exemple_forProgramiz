import { useTranslation } from "react-i18next"
import headerRightImg from "../assets/img/carImg.png"
export default function Header() {
  const { t } = useTranslation()
  return (
    <header>
      <div className="max-w-screen-xl  mx-auto sm:p-0 p-5">
        <div className="sm:flex grid flex-wrap justify-between items-center">
          <div className="sm:w-[35%] w-300px">
            <h1 className="text-white font-bold text-center sm:text-left text-25px sm:text-52px sm:leading-15">
             {t("text.Heaader")}
            </h1>
            <p className="text-gray-400 font-base sm:text-xl mt-10">
              {t("text.HeaaderP")}
            </p>
            <div className="flex sm:ml-0 ml-6 items-center gap-10   sm:gap-15 mt-15">
              <button className="w-100px sm:w-114px text-10px sm:text-base h-48px bg-yellow-500 text-white font-bold hover:bg-transparent hover:text-yellow-500 hover:duration-1000 duration-1000 border-2 border-yellow-500">{t("text.HeaderBTnone")}</button>
              <button className="w-130px sm:w-200px text-10px sm:text-base h-48px bg-transparent text-yellow-500 font-bold hover:shadow-lg hover:shadow-yellow-500 hover:duration-1000 duration-1000  border-2 border-yellow-500">{t("text.HeaderBTntwo")}</button>
            </div>
            <div className="flex items-center gap-15 mt-10 flex-wrap sm:flex hidden sm:flex-nowrap ">
              <div className="flex items-center gap-3">
                <h2 className="text-white font-bold text-40px">500+</h2>
                <h3 className="text-white text-base mt-3">
                 {t("text.Headernumbernear")}
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <h2 className="text-white font-bold text-40px">#1</h2>
                <h3 className="text-white  text-base mt-3">
                 {t("text.Headernumberneartwo")}
                </h3>
              </div>
            </div>
          </div>

          <div className="w-100% sm:w-[45%] sm:h-500px sm:order-last order-first ">
            <img src={headerRightImg} alt="" className=" w-[300px] sm:absolute sm:w-[55%] sm:right-31 relative  sm:bottom-10 " />
          </div>

        </div>
      </div>
    </header>
    
  )
}
