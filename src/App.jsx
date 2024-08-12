import { useState } from 'react'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Kategorey from './components/kategorey/Kategorey'
import Json from './components/json/Json'
import Footer from './components/footer/Footer'


function App() {


  return (
    <>
      <Header />
      <Hero />
      <Kategorey/>
      <Json/>
      <Footer/>
    </>
  )
}

export default App
