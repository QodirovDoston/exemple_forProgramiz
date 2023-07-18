
import { Route, Routes } from 'react-router-dom'
import Footer from './Componts/Footer'

import Navbar from './Componts/Navbar'

import { NavLi } from './Utlis/Conntes'

function App() {

  return (
    <>

    <Navbar />
      <Routes>
        {NavLi.map((elem,index) => {
          return (
            <Route key={index} path={elem.path} element={elem.element} />
          )
        })}

      </Routes>
   <Footer/>
    </>
  )
}

export default App
