import img1 from '../assets/Mask.png'
import img2 from '../assets/Mask 2.png'
import img3 from '../assets/Mask (1).png'
import img4 from '../assets/Mask (2).png'
import { BookNowPage }  from "../Pages/BookNowPage"
import { CarsPage } from "../Pages/CarsPage"
import { HomePage } from "../Pages/HomePage"
import { TermsPage } from "../Pages/TermsPage"

export const Transale = [
    {
        text: 'text.translate2',
        value: 'uz'
    },
    {
        text: 'text.translate1',
        value: 'eng'
    },
    {
        text: 'text.translate3',
        value: 'rus'
    }
]

export const sectionimages = [
    {
        img: img1,
        hover_top_name : "Supercars",
        hover_bottom_name: "Discover🔜",
    },
    {
        img: img2,
        hover_top_name : "Sportcars",
        hover_bottom_name: "Discover🔜",
    },
    {
        img: img4,
        hover_top_name : "SUV",
        hover_bottom_name: "Discover🔜",
    },
    {
        img: img3,
        hover_top_name : "Supersuv",
        hover_bottom_name: "Discover🔜",
    },
]


export const footerLi = [
    {
        name: "Company",
        id: 1,
        style:"text-white font-bold text-xl"
    }, {
        name: "About Us",
        style:"text-white text-base mt-3 text-gray-300",
        id: 2,
    }, {
        name: "Product",
        style:"text-white text-base mt-3 text-gray-300",
        id: 2,
    }, {
        name: "Testimonial",
        style:"text-white text-base mt-3 text-gray-300",
        id: 2,
    }
]
export const footerLiTwo = [
    {
        name: "Support",
        id: 1,
        style:"text-white font-bold text-xl"
    }, {
        name: "FAQ",
        style:"text-white text-base mt-3 text-gray-300",
        id: 2,
    }, {
        name: "Privacy Policy",
        style:"text-white text-base mt-3 text-gray-300",
        id: 2,
    }, {
        name: "Terms of Services",
        style:"text-white text-base mt-3 text-gray-300",
        id: 2,
    }
]
export const footerLiThree = [
    {
        name: "Category",
        id: 1,
        style:"text-white font-bold text-xl"
    }, {
        name: "Super Cars",
        style:"text-white text-base mt-3 text-gray-300",
        id: 2,
    }, {
        name: "Sport Cars",
        style:"text-white text-base mt-3 text-gray-300",
        id: 2,
    }, {
        name: "More Cars",
        style:"text-white text-base mt-3 text-gray-300",
        id: 2,
    }
]
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

// export const sectionimages = [
//             {
//                 img: img1,
//                 hover_top_name: "Supercars",
//                 hover_bottom_name: "Discover🔜",
//             },
//             {
//                 img: img2,
//                 hover_top_name: "Sportcars",
//                 hover_bottom_name: "Discover🔜",
//             },
//             {
//                 img: img4,
//                 hover_top_name: "SUV",
//                 hover_bottom_name: "Discover🔜",
//             },
//             {
//                 img: img3,
//                 hover_top_name: "Supersuv",
//                 hover_bottom_name: "Discover🔜",
//             },
//         ]
