import React, { useState } from "react";
import "./grammar.css";
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

  const handleScanPlagiarism = async () => {
    if (!text) {
      alert("Please enter text to check!");
      return;
    }
    try {
      const response = await axios.post("https://api-inference.huggingface.co/models/eugenesiow/bart-paraphrase", {
        inputs: text
      }, {
        headers: { Authorization: "Bearer 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" }
      });
      if (response.data) {
        setResults(response.data);
        console.log("Scanned for grammar:", response.data?.[0].generated_text);
        setShowResults(true);
      }
    } catch (error) {
      console.error("Failed to fetch results:", error);
      alert("Error fetching results. Please try again.");
    }
  };


  //  addhere function to fetch paraphrasing tool
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
console.log('results',results)


  return (
    <>
      <div className="">
        <h1 className="plag-title">Grammar Checker</h1>
        <h4 className="p-1">
        Paraphrasing checkers enhance originality, improve writing quality, and ensure content integrity
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
                        Paraphrasing Tool
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
              <div className="w-1/2 border-l-2 mx-2 ">
                    <h1 className="text-2xl w-full">  Transforming the written word without changing its heart
                    </h1>
               
                  <p className="text-xl mx-4" >{results?.[0].generated_text}</p>
              
              </div>
            )}
          </div>
        </div>
      </div>

      <Faq />
      <Footer />
    </>
  );
};

export default Plag;

