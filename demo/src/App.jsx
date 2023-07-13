
import { Route, Routes } from 'react-router-dom'

import Navbar from './Componts/Navbar'

import { NavLi } from './Utlis/Conntes'

function App() {

  return (
    <>
    <Navbar />
      <Routes>
        {NavLi.map((elem) => {
          return (
            <Route path={elem.path} element={elem.element} />
          )
        })}
      </Routes>
    </>
  )
}

export default App
