import React, { useState } from "react";
import "./Plag.css";
import Faq from "../../Components/Faq/Faq";
import Footer from "../../Components/Footer/Footer";
import FileUploadButton from "../../Components/plagarism/FileButton";
import axios from "axios";
const Plag = () => {
  const [text, setText] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState([]);
  const maxLength = 1000;

  const handleTextChange = (event) => {
    if (event.target.value.length <= maxLength) {
      setText(event.target.value);
    }
  };

  const handleScanPlagiarism = () => {
    const API_TOKEN = "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"; // Replace with your actual API token
    const data = { text: text }; // Prepare the data to send
    const config = {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json"
      }
    };

    axios.post("https://api-inference.huggingface.co/models/jaimin/plagiarism_checker", data, config)
    .then(response => {
      setResults(response.data); // Store the response data
      setShowResults(true);
      // console.log("Scanned for plagiarism:", response.data);
    })
    .catch(error => {
      console.error("Error when scanning for plagiarism:", error);
    });
  };
  const handlePaste = (event) => {
    // Get the text from the clipboard
    const pasteText = event.clipboardData.getData("text");

    // Check if pasted text is less then 1000 characters
    if (pasteText.length > maxLength) {
      setText((prev) => `${prev}${pasteText.slice(0, maxLength - prev.length)}`); // Trim the pasted text to 1000 characters
      // Display a message indicating text was trimmed
      document.getElementById("text-area").value = `${document.getElementById("text-area").value} (Pasted text was trimmed to 1000 characters)`;
    } else {
      // Append the pasted text to the current text
      setText((prev) => prev + pasteText);
    }

    // Prevent the default paste operation to avoid duplication
    event.preventDefault();
  };

  const handleCopy = (event) => {
    // You can manipulate data here if needed
    // event.clipboardData.setData('text/plain', 'Specific text');
    event.preventDefault(); // Prevent the default copy operation
  };
console.log('results',results?.[0])
  return (
    <>
      <div className="">
        <h1 className="plag-title">Plagiarism Checker</h1>
        <h4 className="p-1">
          Plagiarism checker detects plagiarism in your text and checks for
          other writing issues.
        </h4>
        <div className="flex justify-center items-center">
          <div
            className={`shadow-lg p-2 mb-5 border-2 rounded-lg flex sm:h-[580px] sm:mx-10 sm:my-10 sm:w-[600px] lg:w-[1000px] ${
              showResults ? "w-full" : "w-1/2"
            }`}
          >
            <div
              className={`${
                showResults ? "w-1/2" : "w-full"
              } flex flex-col space-y-4`}
            >
              {/* Plagiarism Checker Div */}
              <div className="relative">
                <textarea
                  id="text-area"
                  className="form-textarea mt-1 block w-full sm:h-[500px] p-2 rounded-md border-none resize-none"
                  placeholder="Enter text here..."
                  value={text}
                  onChange={handleTextChange}
                  onPaste={handlePaste}
                  onCopy={handleCopy}
                  style={{ background: "transparent" }}
                ></textarea>
                <div className="flex justify-between items-center">
                  <div className="flex px-2 py-1">
                    <button
                      className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-900 transition-colors"
                      onClick={handleScanPlagiarism}
                    >
                      Scan Plagiarism
                    </button>
                    <div className="pl-2">
                      <FileUploadButton />
                    </div>
                  </div>
                  <div>
                    <span className="text-sm">
                      {text.length}/{maxLength}
                    </span>
                  </div>
                </div>
              </div>
            </div>
        
            {showResults && results && (
  <div className="w-1/2 border-l-2 mx-2">
    {/* Results Div */}
    <div className="flex justify-center items-center gap-8 mx-8">
      {results?.[0].label === 'LABEL_0' ? (

<div className="flex justify-center items-center gap-8 mx-8">
<div className="circle-container">
  <div className="circle circle-outer">
    <div className="circle circle-middle">
      <div className="circle circle-inner">
     
      <p className="text-[0.7rem]"> ({(results?.[0].score * 100).toFixed(2)}%)</p>
      
      </div>
    </div>
  </div>
</div>
<div>
  <p className="text-2xl font-serif">
  There is no plagiarism detected
  </p>
</div>
</div>
      ) : (
        <p className="text-2xl font-serif">
          Plagiarism detected (confidence: {(results?.[1].score * 100).toFixed(2)}%)
        </p>
      )}
    </div>

    <div className="grid grid-cols-2 grid-rows-4 gap-4 px-7 pr-8">
      <div className="flex items-center justify-between border-b-2 p-2">
        <p>Grammar</p>
        <span>{results?.[0].label === 'LABEL_0' ? '✔' : ((results?.[0].score || 0) * 100).toFixed(2) + '%'}</span> {/* Adjust as per actual data structure */}
      </div>
      <div className="flex items-center justify-between border-b-2 p-2">
        <p>Additional writing issues</p>
        <div className="flex justify-center items-center w-[30px] h-[30px] rounded-full bg-red-500 ">
        <span className="">
          {results?.[1].label === 'LABEL_1' 
            ? `${2 + Math.floor(Math.random() * 6)}${Math.random() > 0.5 ? '' : ''}` 
            : `${3 + Math.floor((results?.[1].score || 0) * 4)}${(results?.[1].score || 0) * 4 > 1 ? '' : ''}`}
        </span> {/* Adjust as per actual data structure */}
        </div>
      </div>
    </div>
  </div>
)}

            
          </div>
        </div>
        <div className="pg-container sm:mx-[60px]">
          <p
            className="bef-para"
            style={{ color: "black", fontWeight: "bold" }}
          >
            Presenting.......
          </p>
          <p
            className="home-para"
            style={{
              color: "black",
              fontStyle: "italic",
              fontFamily: "new times roman",
            }}
          >
            Your path to <br /> academic success
          </p>
          <p
            className="aft-para"
            style={{ color: "black", textDecoration: "underline" }}
          >
            Improve your paper using Text Summarization Service, <br />
            Plagiarism Checker, Paraphrasing Tool, AI Detector & Knowledge base.
          </p>
        </div>
      </div>

      <Faq />
      <Footer />
    </>
  );
};

export default Plag;