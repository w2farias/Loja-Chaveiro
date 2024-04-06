import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout'
import Product from './pages/Product'
import Service from './pages/Service'
import Contact from './pages/Contact'



function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/product' element={<Product />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>

    </>
  )
}

export default App
