import React from "react";
import { quesList } from "../utils/quesList";
import Question from "./Question";

const Quiz = () => {
  return (
    <div className="w-full h-screen flex bg-[#FCFAEE] justify-center">
      <div className="border-2 rounded-lg w-3/5 h-5/6 border-[#1E3E62] my-1 flex flex-col overflow-y-auto">
        <div className="p-4 overflow-y-auto">
         {quesList.map((question,index)=>(
             <Question data={question} key={index} />
         ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
