import React, { useState } from "react";

const Question = (props) => {
  const { data } = props;
  const [selectedOption, setselectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setselectedOption(option);
  };

  return (
    <div className="border-2 rounded-lg w-5/5 border-[#1E3E62] my-2 flex flex-col select-none">
    <div className="ml-2 mt-2">
      <h1>
        {" "}
        <b>Question: </b> {data.question}
      </h1>
      {data.options.map((option, index) => (
        <h4
          className={`cursor-pointer p-2 rounded ${
            selectedOption === option ? "bg-blue-200 font-bold" : ""
          }`}
          key={index}
          onClick={() => {
            handleOptionChange(option);
          }}
        >
          {option}
        </h4>
      ))}
      {selectedOption && 
      <div className="mt-2 mx-2">
        {selectedOption===data.answer?(<span className="text-green-500">Correct 🎉</span>):(<span className="text-red-500">Incorrect 😔</span>)}
      </div>
      }
    </div>
    </div>
  );
};

export default Question;
