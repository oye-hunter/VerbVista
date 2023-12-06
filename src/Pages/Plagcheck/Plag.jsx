// MainPage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Plag.css';
import upload from "../../assets/cloud-computing.png";
import Header from '../../Components/Header/Header';
import Faq from '../../Components/Faq/Faq';
import Footer from '../../Components/Footer/Footer';
import Summarizer from "../../Components/Summarizer/Summarizer"

const Plag = () => {
  return(
    <>
    <Header/>
    <Summarizer  head={"Plagirisim Checker"} button={"Check"}  />
    <Faq/>
    <Footer/>
    </>
  )
  
};

export default Plag;
