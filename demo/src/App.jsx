
import { Route, Routes } from 'react-router-dom'
import Header from './Componts/Header'
import Navbar from './Componts/Navbar'
import Section3 from './Componts/Section3'
import Section1 from './Componts/section1'
import { NavLi } from './Utlis/Conntes'

function App() {

  return (
    <>

     {/* <Navbar />
      <Header />
      <Section1 /> */}
      {/* <Header />
      <Section1 /> */}
      <Navbar />  
      <Routes>
        {NavLi.map((elem)=>{
          return(
            <Route path={elem.path} element={elem.element} />
            
            )
          })}
      </Routes>
      <Section3 />
    </>
  )
}

export default App
