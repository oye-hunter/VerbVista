// Home.js

import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import teamimage from "../../../public/Assets/teamimage.png"
import Image from "/Assets/photo-1507208773393-40d9fc670acf.avif"
import textlogo from "../../../public/Assets/text.png"
import plaglogo from "../../../public/Assets/plag.png"
import paraplogo from "../../../public/Assets/parap.png"
import Faq from "../../Components/Faq/Faq";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  const cardsData = [
    {
      logo: textlogo, 
      title: "Text Summarization",
      text: "Empower your writing experience with the VerbVista text summarization tool. Summarize lengthy content efficiently, extracting key information to deliver concise and impactful summaries.",
      buttonText: "Text Summarization",
      link: "/Summarizers",
    },
    {
      logo: plaglogo, 
      title: "Plagiarism Checker",
      text: "Detect and resolve unintentional plagiarism with the VerbVista Plagiarism Checker. Elevate your confidence when submitting papers, as our tool meticulously detects and resolve plagiarism.",
      buttonText: "Plagiarism Checker",
      link: "/plag",
    },
    {
      logo: paraplogo, 
      title: "Paraphrasing Tool",
      text: "Transform your writing with the VerbVista Paraphrasing Tool, designed to rephrase sentences and passages while maintaining the original meaning.",
      buttonText: "Paraphrasing Tool",
      link: "/Summarizers"
    },
  ];

  return (
    <>
      <div className="center" style={{ width: "100%" }}>
        <div className="grid-container">
          <div>
            <p className="bef-para">Presenting.......</p>
            <p className="home-para">Your path to <br /> academic success</p>
            <p className="aft-para">Improve your paper using Text Summarization Service, <br /> Plagiarism Checker, Paraphrasing Tool, AI Detector & Knowledge base.</p>
          </div>
          <div className="">
            <img src={Image} alt="Your Alt Text" width={'100%'} height={'100%'} className="home-img" />
          </div>
        </div>
        <div className="custom-shape-divider-bottom-1704800928">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".25"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              opacity=".95"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
       <div className="container1">
        {cardsData.map((card, index) => (
          <div style={{height:"400px"}}  className="card1" key={index}>
            <img src={card.logo} alt="Logo" className="card1-logo" />
            <h2 className="card1-title">{card.title}</h2>
            <p className="card1-text">{card.text}</p>
            <button className="card1-button"><Link style={{color:"white",textDecoration:"none"}}  to={card.link}>{card.buttonText}</Link></button>
          </div>
        ))}
      </div>
      <div className="teams-main">
      <div className="teams">
      <div className="con1">
        <h3>Our dream team</h3>
        <h4>Happy to help you</h4>
<p>You’re not alone. Together with our team and highly qualified editors, we help you answer all your questions about academic writing.

Open 24/7 – 365 days a year. Always available to help you.

</p>

        </div>  
        <div className="con2">
          <img src={teamimage} alt="" />
        </div>
        
      </div>
      </div> 
      <div className="mission">
        <div className="con3">
        <h5>Our Mission?</h5>
        <h6>Help you achieve your academic goals</h6>
        </div>
        <div className="con4">
        <p>Whether we’re proofreading and editing, checking for plagiarism or AI content, generating citations, or writing useful Knowledge Base articles, our aim is to support students on their journey to become better academic writers.

We believe that every student should have the right tools for academic success. Free tools like a paraphrasing tool, grammar checker, summarizer and an AI Proofreader. We pave the way to your academic degree.

</p>
        </div>
        
      </div>
      <div className="faq">
        <Faq/>
      </div>
      <div className="footer">
        <Footer/>
      </div>

    </>
  );
  
};

export default Home;