import React from 'react'
import Header from '../../Components/Header/Header'
import Services from '../../Components/Services/Services'
import Faq from '../../Components/Faq/Faq'
import Footer from '../../Components/Footer/Footer'
import Summarizer from "../../Components/Summarizer/Summarizer"
import Plag from "../../Pages/Plagcheck/Plag"
const Summarizers = () => {
  return (
    <>
        <Header/>
          <Summarizer/>
          <Services/>
          <Faq/>
          <Footer/>  
          <Plag/>
    </>
  )
}

export default Summarizers