import React from "react";
import { useState, useEffect } from "react";
import Confetti from "react-confetti";

const Profile = () => {
  const [profileData, setProfileData] = useState("Null");
  const [profileRepos, setProfileRepos] = useState("Null");
  const [showConfetti, setshowConfetti] = useState(false);


  const getProfile = async () => {
    const userProfile = await fetch(
      "https://api.github.com/users/deepanshurana16"
    );
    const jsonProfile = await userProfile.json();
    console.log(jsonProfile);
    const userRepos = await fetch("https://api.github.com/users/deepanshurana16/repos");
    const jsonRepos = await userRepos.json();
    console.log(jsonRepos);
    setProfileData(jsonProfile);
    setProfileRepos(jsonRepos);


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
    <div className="h-screen flex justify-center mt-24">
     {showConfetti && <Confetti numberOfPieces={200} />}
      <div className="border border-sky-500 w-80 h-96 flex items-center flex-col bg-amber-200 rounded-xl">
      <div className="border w-44 h-44 flex  bg-white rounded-lg items-start justify-start p-0.8 mt-2 ">
          <img src={profileData.avatar_url} alt="userIMG" className="rounded-lg" />
      </div>
          <h1 className="font-bold text-xl mt-4">{profileData.name}</h1>
          <h1 className="font-medium text-md mt-4">Hometown : {profileData.location}</h1>
          <h1 className="font-medium text-md mt-4">Username : {profileData.login}</h1>
          <h1 className="font-medium text-md mt-4">Repo Count : {profileRepos.length}</h1>


      </div>
    </div>
  );
};

export default Profile;
