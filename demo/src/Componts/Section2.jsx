import React from 'react'
import oneImg from "../assets/img/cardOneImg.png"
import twoImg from "../assets/img/TwoImgSection.png"
import threeImg from "../assets/img/cardThreeImg.png"

export default function Section2() {
  return (
    <div className='w-[1200px] mx-auto '>
        <div className="w-full p-15">
            <h2 className="text-white text-5xl font-bold">Our Other Services</h2>
            <div className="flex items-center justify-between mt-10">
                <div className="w-345px">
                    <img src={oneImg} alt="" className="w-100%" />
                    <h4 className="text-white font-bold text-xl mt-5">Private Charter</h4>
                    <p className="text-white text-gray-300 mt-5">Pinjam Mobil Rent also offers you discreet and speedy, transfers via helicopter or private planes.</p>
                </div>
                <div className="w-345px">
                    <img src={twoImg} alt="" className="w-100%" />
                    <h4 className="text-white font-bold text-xl mt-5">Chauffer Driven Car Rentals</h4>
                    <p className="text-white text-gray-300 mt-5">Our chauffers are professional drivers who provide a discreet, reliable punctual and professional service.</p>
                </div>
                <div className="w-345px">
                    <img src={threeImg} alt="" className="w-100%" />
                    <h4 className="text-white font-bold text-xl mt-5">Wedding Car Rentals</h4>
                    <p className="text-white text-gray-300 mt-5">If you want to celebrate your wedding in style and elegance, choose one car from our luxury collection.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
