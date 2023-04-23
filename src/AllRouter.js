import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Blog from './Blog'
import About from './About'
import Contect from './Contect'
import Help from './Help'

const AllRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/contect' element={<Contect />} />
        <Route path='/help' element={<Help />} />
      </Routes>

    </div>
  )
}

export default AllRouter
