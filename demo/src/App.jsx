
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './Componts/Footer'

import Navbar from './Componts/Navbar'
import { HomePage } from './Pages/HomePage'

import { NavLi } from './Utlis/Conntes'

function App() {

  return (
    <div className='overflow-hidden'>

    <Navbar />
      <Routes>
        {NavLi.map((elem,index) => {
          return (
            <React.Fragment  key={index}>
            <Route path={elem.path} element={elem.element} />
            <Route path='/' element={<HomePage/>} />
            <Route path='*' element={<h1 className='text-5xl text-white text-center w-[100%]  mx-auto'>404 Page</h1>} />
            </React.Fragment>
          )
        })}

      </Routes>
   <Footer/>
    </div>
  )
}

export default App
