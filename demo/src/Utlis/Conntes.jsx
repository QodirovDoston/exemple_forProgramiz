import img1 from '../assets/Mask.png'
import img2 from '../assets/Mask 2.png'
import img3 from '../assets/Mask (1).png'
import img4 from '../assets/Mask (2).png'

import { BookNowPage } from "../Pages/BookNowPage"
import { CarsPage } from "../Pages/CarsPage"
import { HomePage } from "../Pages/HomePage"
import { TermsPage } from "../Pages/TermsPage"

// export const NavbarList = [
//     {

//     }, 
export const NavLi = [
            {
                path: "/home",
                name: "Home",
                element: <HomePage />,
                id: 1
            },
            {
                path: "/cars",
                name: "Cars",
                element: <CarsPage />,
                id: 2
            },
            {
                path: "/books",
                name: "Book now",
                element: <BookNowPage />,
                id: 3
            },
            {
                path: "/terms",
                name: "Terms and Conditions",
                element: <TermsPage />,
                id: 4
            },
        ]

export const sectionimages = [
            {
                img: img1,
                hover_top_name: "Supercars",
                hover_bottom_name: "Discover🔜",
            },
            {
                img: img2,
                hover_top_name: "Sportcars",
                hover_bottom_name: "Discover🔜",
            },
            {
                img: img4,
                hover_top_name: "SUV",
                hover_bottom_name: "Discover🔜",
            },
            {
                img: img3,
                hover_top_name: "Supersuv",
                hover_bottom_name: "Discover🔜",
            },
        ]