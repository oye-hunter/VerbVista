
// import Header from '../../Components/Header/Header';
import Faq from '../../Components/Faq/Faq';
import Footer from '../../Components/Footer/Footer';
import Summarizer from "../../Components/Summarizer/Summarizer"

const Plag = () => {
  return(
    <>
    <Summarizer  head={"Plagiarism Checker"} button={"Check"} placeholder={"Enter Text "} />

    <Faq/>
    <Footer/>
    </>
  )
  
};

export default Plag;
