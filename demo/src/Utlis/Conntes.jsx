import img1 from '../assets/Mask.png'
import img2 from '../assets/Mask 2.png'
import img3 from '../assets/Mask (1).png'
import img4 from '../assets/Mask (2).png'
import { BookNowPage }  from "../Pages/BookNowPage"
import { CarsPage } from "../Pages/CarsPage"
import { HomePage } from "../Pages/HomePage"
import { TermsPage } from "../Pages/TermsPage"
import { four, one, three, two } from '../assets'

export const Transale = [
    {
        text: 'text.translate1',
        value: 'eng'
    },
    {
        text: 'text.translate2',
        value: 'uz'
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
        hover_bottom_name: "Discover >",
    },
    {
        img: img2,
        hover_top_name : "Sportcars",
        hover_bottom_name: "Discover >",
    },
    {
        img: img4,
        hover_top_name : "SUV",
        hover_bottom_name: "Discover >",
    },
    {
        img: img3,
        hover_top_name : "Supersuv",
        hover_bottom_name: "Discover >",
    },
]


export const footerLi = [
    {
        name: "text.footerCompany",
        id: 1,
        style:"text-white font-bold text-xl"
    }, {
        name: "text.aboutUs",
        style:"text-white text-base mt-3 text-gray-300",
        id: 2,
    }, {
        name: "text.Product",
        style:"text-white text-base mt-3 text-gray-300",
        id: 2,
    }, {
        name: "text.Testimonial",
        style:"text-white text-base mt-3 text-gray-300",
        id: 2,
    }
]
export const footerLiTwo = [
    {
        name: "text.Support",
        id: 1,
        style:"text-white font-bold text-xl"
    }, {
        name: "FAQ",
        style:"text-white text-base mt-3 text-gray-300",
        id: 2,
    }, {
        name: "text.Policy",
        style:"text-white text-base mt-3 text-gray-300",
        id: 2,
    }, {
        name: "text.footerterms",
        style:"text-white text-base mt-3 text-gray-300",
        id: 2,
    }
]
export const footerLiThree = [
    {
        name: "text.Category",
        id: 1,
        style:"text-white font-bold text-xl"
    }, {
        name: "text.supercars",
        style:"text-white text-base mt-3 text-gray-300",
        id: 2,
    }, {
        name: "text.SportCars",
        style:"text-white text-base mt-3 text-gray-300",
        id: 2,
    }, {
        name: "text.morecars",
        style:"text-white text-base mt-3 text-gray-300",
        id: 2,
    }
]
export const NavLi = [
            {
                path: "/home",
                name: "text.navhome",
                element: <HomePage />,
                id: 1
            },
            {
                path: "/cars",
                name: "text.navCars",
                element: <CarsPage />,
                id: 2
            },
            {
                path: "/books",
                name: "text.bookNow",
                element: <BookNowPage />,
                id: 3
            },
            {
                path: "/terms",
                name: "text.navCondition",
                element: <TermsPage />,
                id: 4
            }
        ]

export const SecthreeImgs = [
            {
                title:"text.CardTitle",
                paragraf:"text.CardParagraf",
                img: one,
                img_text:"text.sectionNearicon",
                search_text:"text.secThreeSearch"
            },
            {
                title:"text.sectionThreetwotitle",
                paragraf:"text.CardParagraf",
                img: two,
                img_text:"text.sectiontwoCardPrice",
                search_text:"text.secThreeSearch"
            },
            {
                title:"text.cardParis",
                paragraf:"text.CardParagraf",
                img: three,
                img_text:"text.sectionthreeCardPrice",
                search_text:"text.secThreeSearch"
            },
            {
                title:"text.cardDubai",
                paragraf:"text.CardParagraf",
                img: four,
                img_text:"text.sectionNearicon",
                search_text:"text.secThreeSearch"
            },
            {
                title:"text.cardRoma",
                paragraf:"text.CardParagraf",
                img: one,
                img_text:"text.sectiontwoCardPrice",
                search_text:"text.secThreeSearch"
            },
            {
                title:"text.cardJakarta",
                paragraf:"text.CardParagraf",
                img: one,
                img_text:"text.sectionthreeCardPrice",
                search_text:"text.secThreeSearch"
            },
        ]
