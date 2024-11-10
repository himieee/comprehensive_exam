import React from "react";
import { Link } from "react-router-dom";

const Instructions = () => {
  return (
    <div className="w-full min-h-screen flex bg-[#FCFAEE]">
      <div className="w-11/12 h-4/5 mx-auto mt-2 flex flex-col p-2">
        <h1 className="text-3xl font-bold mx-auto">Comprehensive Exam Instructions</h1>
        
        <h3 className="mt-4 text-xl font-semibold">Exam Format:</h3>
        <ul className="list-disc mx-4 mt-2">
        <li>The comprehensive exam consists of 100 multiple-choice questions (MCQs).</li>
        <li>Each question has four options, out of which only one is correct.</li>
        <li>The exam duration is <u>2 hours.</u></li>
        </ul>
        
        <h3 className="mt-4 text-xl font-semibold">Eligibility:</h3>
        <ul className="list-disc mx-4 mt-2">
        <li>Only students who have <u>completed at least 65% of the total credits</u> as per their curriculum are eligible to appear for the exam.</li>

        </ul>

        <h3 className="mt-4 text-xl font-semibold">Registration Fees:</h3>
        <ul className="list-disc mx-4 mt-2">
        <li><u>No registration fees</u> for students appearing for the first time.</li>
        <li>A Rs. 2000/- fee is applicable for:</li>
        <ul className="list-disc mx-8">
        <li>Students who failed to clear the exam in previous attempts.</li>
          <li>Students who registered previously but did not attend the exam.</li>
        </ul>
        </ul>
       

        <h3 className="mt-4 text-xl font-semibold">Grading System:</h3>
        <table className="border-collapse border border-gray-300 mt-2 w-full">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">S</th>
              <th className="border border-gray-300 px-4 py-2">A</th>
              <th className="border border-gray-300 px-4 py-2">B</th>
              <th className="border border-gray-300 px-4 py-2">C</th>
              <th className="border border-gray-300 px-4 py-2">D</th>
              <th className="border border-gray-300 px-4 py-2">F</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-2 py-1">Marks >= 90</td>
              <td className="border border-gray-300 px-2 py-1">Marks >= 80 & Marks &lt; 90</td>
              <td className="border border-gray-300 px-2 py-1">Marks >= 70 & Marks &lt; 80</td>
              <td className="border border-gray-300 px-2 py-1">Marks >= 60 & Marks &lt; 70</td>
              <td className="border border-gray-300 px-2 py-1">Marks >= 50 & Marks &lt; 60</td>
              <td className="border border-gray-300 px-2 py-1">Marks &lt; 50 </td>
            </tr>
          </tbody>
        </table>
        
        <div className="mt-8 text-center">
        <Link to="/">
      <button className="w-48 rounded-lg px-4 py-2 bg-yellow-500 text-black hover:bg-blue-600 hover:text-white duration-300 mx-4">Back to Home Page</button>
      </Link>
          <Link to="/quiz">
            <button className="w-48 rounded-lg px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 hover:text-white duration-300">
              Let's Begin Quiz
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
