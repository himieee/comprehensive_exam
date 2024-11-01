import React from "react";
import Lottie from "react-lottie";
import comprehensivequiz from "../Assets/comprehensivequiz.json";

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
      <div className="w-1/2  flex justify-center">
        <div className="mt-8">
          <h1 className="font-bold inline-flex font-serif font-extrabold text-3xl text-[#FCCD2A]">
            Introducing <span className="ml-2 text-3xl text-[#006BFF]">VIT | COMPREHENSIVE SITE</span>
          </h1>
        </div>
      </div>
      <div className="w-1/2 flex justify-center">
        <Lottie options={defaultOptions} height={600} width={600} />
      </div>
    </div>
  );
};

export default Home;
