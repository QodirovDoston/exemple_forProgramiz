import { t } from "i18next"
import { useTranslation } from "react-i18next"
import headerRightImg from "../assets/img/carImg.png"
export default function Header() {
  const { t } = useTranslation()
  return (
    <header>
      <div className="w-[1200px] mx-auto">
        <div className="sm:flex grid flex-wrap justify-between items-center">
          <div className="w-[35%]">
            <h1 className="text-white font-bold text-52px leading-15">
             {t("text.Heaader")}
            </h1>
            <p className="text-gray-400 font-base text-xl mt-10">
              HKinvestor can provide rentals of the most exclusive cars like Ferrari and Lamborghini.
            </p>
            <div className="flex items-center gap-15 mt-15">
              <button className="w-114px h-48px bg-yellow-500 text-white font-bold hover:bg-transparent hover:text-yellow-500 hover:duration-1000 duration-1000 border-2 border-yellow-500">Buy Now</button>
              <button className="w-200px h-48px bg-transparent text-yellow-500 font-bold hover:shadow-lg hover:shadow-yellow-500 hover:duration-1000 duration-1000  border-2 border-yellow-500">Video Introduction</button>
            </div>
            <div className="flex items-center gap-15 mt-10">
              <div className="flex items-center gap-3">
                <h2 className="text-white font-bold text-40px">500+</h2>
                <h3 className="text-white text-base mt-3">
                  Luxury Cars
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <h2 className="text-white font-bold text-40px">#1</h2>
                <h3 className="text-white  text-base mt-3">
                  Best Deal Car
                </h3>
              </div>
            </div>
          </div>

          <div className="w-[45%] bg-gray-900 h-500px sm:order-last order-first ">
            <img src={headerRightImg} alt="" className=" w-[100%] absolute sm:w-[55%] right-31  sm:bottom-10 " />
          </div>

        </div>
      </div>
    </header>
    
  )
}
