import React from "react";
import Lottie from "react-lottie";
import comprehensivequiz from "../Assets/comprehensivequiz.json";
import { Link, NavLink } from "react-router-dom";

const Home = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: comprehensivequiz,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };


  return (
    <div className="w-full h-screen flex bg-[#FCFAEE]">
      <div className="w-1/2 flex mt-28 flex-col items-center">
        <div className="mt-8 flex justify-center">
          <h1 className="font-bold inline-flex font-serif font-extrabold text-3xl text-[#FCCD2A]">
            Introducing <span className="ml-2 text-3xl text-[#006BFF]">VIT | COMPREHENSIVE QUIZ</span>
          </h1>
        </div>
        <div className="mt-16 text-center">
          <blockquote className="font-serif text-xl italic text-[#333] border-l-4 border-[#006BFF] pl-4">
            "Comprehensive exams: because memorizing 1600 questions is just what we call 'fun' at VIT!"
          </blockquote>
        </div>
        <div className="mt-16 text-center">
        <Link to="/instructions">
          <button className="w-48 rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300">Let's Get Started!</button>
          </Link>
        </div>
      </div>
      <div className="w-1/2 flex justify-center">
        <Lottie options={defaultOptions} height={600} width={600} />
      </div>
    </div>
  );
};

export default Home;
