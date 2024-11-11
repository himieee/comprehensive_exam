import React, { useState } from "react";
import { quesList } from "../utils/quesList";
import Question from "./Question";
import arrayShuffle from "array-shuffle";
import { Link } from "react-router-dom";

const Quiz = () => {
  const [shuffledList, setshuffledList] = useState(quesList);

  const handleshuffleQuestions = () => {
    const newshuffledQuestionList = arrayShuffle(shuffledList);
    setshuffledList(newshuffledQuestionList);
  };

  const handleShuffleOptions = () => {
    const newshuffledOptionsList = shuffledList.map((question) => ({
      ...question,
      options: arrayShuffle(question.options),
    }));
    setshuffledList(newshuffledOptionsList);
  };

  return (
    <div className="w-full h-screen flex bg-[#FCFAEE] justify-center">
      <div
        className="border-2 rounded-lg w-3/5 h-5/6 border-[#1E3E62] my-1 flex flex-col overflow-y-auto p-2"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#FCFAEE,",
        }}
      >
        <div className="flex justify-center outline-dotted outline-2 p-2 mb-2">
          <Link to="/instructions">
            <button className="w-48 rounded-lg px-4 py-2 bg-yellow-500 text-black hover:bg-blue-600 hover:text-white duration-300 mx-4">
              Back to Instructions
            </button>
          </Link>
          <button
            className="w-48 rounded-lg px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 hover:text-white duration-300"
            onClick={handleshuffleQuestions}
          >
            Shuffle Questions
          </button>
          <button
            className="w-48 rounded-lg px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 hover:text-white duration-300 mx-4"
            onClick={handleShuffleOptions}
          >
            Shuffle Options
          </button>
        </div>

        <div className="p-4 overflow-y-auto">
          {shuffledList.map((question, index) => (
            <Question data={question} key={index} />
          ))}
        </div>
      </div>
      <style jsx>{`
        .overflow-y-auto::-webkit-scrollbar {
          width: 8px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background-color: #f4ce14; /* Primary color for scrollbar thumb */
          border-radius: 10px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background-color: #fcfaee; /* Accent color on hover */
        }
        .overflow-y-auto::-webkit-scrollbar-track {
          background-color: #024caa; /* Background for scrollbar track */
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default Quiz;
