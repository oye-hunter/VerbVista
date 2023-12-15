// MainPage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Plag.css';
import upload from "../../assets/cloud-computing.png";
import Header from '../../Components/Header/Header';
import Faq from '../../Components/Faq/Faq';
import Plagchkr from '../../Components/Plagchkr/Plagchkr';
import Footer from '../../Components/Footer/Footer';
import Summarizer from "../../Components/Summarizer/Summarizer"

const Plag = () => {
  return(
    <>
    <Header/>
<<<<<<< HEAD
    <Summarizer  head={"Plagiarism Checker"} button={"Check"} placeholder={"Enter Text "} />
=======
    {/* <Summarizer  head={"Plagirisim Checker"} button={"Check"}  /> */}
<Plagchkr/>

>>>>>>> 7ce8a314630abbb78357051a4964bb69b89c20e9
    <Faq/>
    <Footer/>
    </>
  )
  
};

export default Plag;
