{showResults && (
    <div className="w-1/2 border-l-2 mx-2">
      {/* Results Div */}
      <div className="flex justify-center items-center gap-8 mx-8">
        <div className="circle-container">
          <div className="circle circle-outer">
            <div className="circle circle-middle">
              <div className="circle circle-inner">
             24
              
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-2xl font-serif">
          
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 grid-rows-4 gap-4 px-7 pr-8">
        <div className="flex items-center justify-between border-b-2 p-2">
          <p>Grammar Issues</p>
          <span>5</span>
        </div>
        <div className="flex items-center justify-between border-b-2 p-2">
          <p>Punctuation Errors</p>
          <span>3</span>
        </div>
      </div>
    </div>
  )}




  <p className="text-2xl font-serif">
          No plagiarism detected (confidence: {(results?.[0].score * 100).toFixed(2)}%)
        </p>