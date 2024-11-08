import React from "react";
import { Link } from "react-router-dom";

const Instructions = () => {
  return (
    <div className="w-full h-screen flex bg-[#FCFAEE]">
      <div className="w-9/12 h-4/5 mx-auto mt-5 flex items-center justify-center flex-col">
        <h1>INSTRUCTIONS</h1>
        <br></br>
        <br></br>
        <ul>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            rem tempore at, autem minus id reprehenderit, nam{" "}
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            rem tempore at, autem minus id reprehenderit, nam{" "}
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            rem tempore at, autem minus id reprehenderit, nam{" "}
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            rem tempore at, autem minus id reprehenderit, nam{" "}
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            rem tempore at, autem minus id reprehenderit, nam{" "}
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            rem tempore at, autem minus id reprehenderit, nam{" "}
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            rem tempore at, autem minus id reprehenderit, nam{" "}
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            rem tempore at, autem minus id reprehenderit, nam{" "}
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            rem tempore at, autem minus id reprehenderit, nam{" "}
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            rem tempore at, autem minus id reprehenderit, nam{" "}
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            rem tempore at, autem minus id reprehenderit, nam{" "}
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            rem tempore at, autem minus id reprehenderit, nam{" "}
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            rem tempore at, autem minus id reprehenderit, nam{" "}
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            rem tempore at, autem minus id reprehenderit, nam{" "}
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            rem tempore at, autem minus id reprehenderit, nam{" "}
          </li>
          <div className="mt-16 text-center">
            <Link to="/quiz">
              <button className="w-48 rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300">
                Let's Begin Quiz
              </button>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Instructions;
