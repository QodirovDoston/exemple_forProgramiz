import { t } from "i18next"
import { useTranslation } from "react-i18next"
import imgagain from "../assets/img/Front Car.svg"
import { SecthreeImgs } from "../Utlis/Conntes"
const Section3 = () => {
  const { t } = useTranslation()
  return (
    <div className="max-w-screen-xl mx-auto py-[60px]">
         <center>

            <h1 className="text-white text-2xl sm:text-[52px]  sm:leading-18 text-center font-bold">{t("text.secthreetitle")}</h1>
         </center>
            <div className="flex gap-5 items-center flex-wrap justify-center mt-15">
              {SecthreeImgs.map(({title,paragraf,img,img_text,search_text},index)=>{
                return(

              <div key={index} className="w-250px sm:w-[350px] bg-[#171717] border border-black">
                <img src={img} alt="" className="w-[100%]" />
              <div className="p-5">
              <h4 className="text-white font-bold text-xl pb-1">
              {title}
                </h4>
                <p className="text-gray-400 text-base pb-3">
                {paragraf}
                </p>
                <div className="flex items-center gap-3 pb-5">
                  <img src={imgagain} alt="" />
                  <h6 className="text-white font-bold">{img_text}</h6>
                </div>
                <h6 className="text-yellow-600">
                {search_text}
                </h6>
              </div>
              </div>
                )

              })}
            </div>
      
    </div>
  )
}

export default Section3