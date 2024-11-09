import React from "react";
import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import profilecoverphoto from "../Assets/profilecoverphoto.jpg";

const Profile = () => {
  const [profileData, setProfileData] = useState("Null");
  // const [profileRepos, setProfileRepos] = useState("Null");
  const [showConfetti, setshowConfetti] = useState(false);

  const getProfile = async () => {
    const userProfile = await fetch(
      "https://api.github.com/users/deepanshurana16"
    );
    const jsonProfile = await userProfile.json();
    console.log(jsonProfile);
    // const userRepos = await fetch(
    //   "https://api.github.com/users/deepanshurana16/repos"
    // );
    // const jsonRepos = await userRepos.json();
    // console.log(jsonRepos);
    setProfileData(jsonProfile);
    // setProfileRepos(jsonRepos);
  };

  useEffect(() => {
    getProfile();
    setshowConfetti(true);
    const timer = setTimeout(() => {
      setshowConfetti(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    // <div className="w-full h-screen flex bg-[#FCFAEE] justify-center">
    // <div className="h-screen flex justify-center mt-24">
    //  {showConfetti && <Confetti numberOfPieces={200} />}
    //   <div className="border border-sky-500 w-80 h-96 flex items-center flex-col bg-amber-200 rounded-xl">
    //   <div className="border w-44 h-44 flex  bg-white rounded-lg items-start justify-start p-0.8 mt-2 ">
    //       <img src={profileData.avatar_url} alt="userIMG" className="rounded-lg" />
    //   </div>
    //       <h1 className="font-bold text-xl mt-4">{profileData.name}</h1>
    //       <h1 className="font-medium text-md mt-4">Location 📍: <span className="font-bold">{profileData.location}</span></h1>
    //       <h1 className="font-medium text-md mt-4">Github Username : <span className="font-bold">{profileData.login}</span></h1>
    //       <h1 className="font-medium text-md mt-4">Repo Count : <span className="font-bold">{profileRepos.length}</span></h1>
    //       <a href={profileData.html_url} className="font-medium text-md mt-4">Github URL : <span className="font-bold hover:text-indigo-700 visited:text-purple-600">https://github.com/deepanshurana16🚀</span></a>

    //   </div>
    // </div>
    // </div>
    <div className="w-full h-screen flex bg-[#FCFAEE] justify-center">
    {showConfetti && <Confetti numberOfPieces={200} />}
      <div className="w-80 h-[540px] border border-2 mt-10 relative rounded-lg shadow-lg">
        {/* Cover Photo */}
        <div className="w-full h-2/6 rounded-t-lg overflow-hidden relative">
          <img src={profilecoverphoto} alt="Cover" className="w-full h-full object-cover" />
        </div>
        <div className="absolute left-1 top-[104px] w-24 h-24 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-1">
          <div className="rounded-full w-full h-full bg-white p-1">
            <img
              src={profileData.avatar_url}
              alt="userIMG"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="absolute left-1 top-[210px]">
          <h1 className="text-xl font-bold ml-2">Deepanshu Rana</h1>
          <h1 className="text-sm text-slate-400 font-medium ml-2">@deepanshuranaa</h1>
          <span className="text-sm text-slate-100 font-medium mx-3 border-2 rounded-full p-1 mt-4 inline-block bg-amber-300 border-amber-300">💻 Frontend Developer</span>
          <span className="text-sm text-slate-100 font-medium mx-3 border-2 rounded-full p-1 mt-4 inline-block bg-violet-500 border-violet-500">🎓 Final Year Student</span>
          <span className="text-sm text-slate-100 font-medium mx-3 border-2 rounded-full p-1 mt-4 inline-block bg-rose-500 border-rose-500">📚 CSE with Business Systems</span><br></br>
          <span className="text-sm text-slate-100 font-medium mx-3 border-2 rounded-full p-1 mt-4 inline-block border-sky-400 bg-sky-400">📍 {profileData.location}</span><br></br>
          <a href={profileData.html_url} className="text-sm text-black-100 font-medium mx-3 border-2 rounded-full p-1 mt-4 inline-block font-bold hover:text-indigo-700 visited:text-purple-600">🔗 {profileData.html_url}</a>

        </div>
      </div>
    </div>
  );
};

export default Profile;
