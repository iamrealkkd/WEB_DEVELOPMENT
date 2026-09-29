import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";

const Profile = () => {
  const [bannerUrl, setBannerUrl] = useState("https://placehold.co/1500x400");
  const [profileUrl, setProfileUrl] = useState("https://placehold.co/160x160");
  const handleBannerChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setBannerUrl(URL.createObjectURL(file));
    }
  };
  const handleProfileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setProfileUrl(URL.createObjectURL(file));
    }
  };
  return (
    <div className="relative w-[95%] ml-[5rem]">
      {/* Banner */}
      <div className="relative">
        <img
          src={bannerUrl}
          alt="Profile banner"
          className="w-full h-60 object-cover"
        />

        {/* Profile picture overlapping the banner */}
        {/* <img
          src={profileUrl}
          alt="Profile"
          className="absolute -bottom-12 left-6 h-32 w-32 rounded-full border-4 border-white object-cover"
        /> */}
        <button className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="banner-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>

          <input
            type="file"
            id="banner-upload"
            accept="image/*"
            className="hidden"
            onChange={handleBannerChange}
          />
        </button>
      </div>
      {/* Channel Logo */}
      <div className="flex items-center ml-4 mt-2[rem]">
        <img
          src={profileUrl}
          alt="Channel Logo"
          className="w-40 h-40 object-cover rounded-full border-white relative"
        />

        <button className="absolute ml-[3.6rem] mt-[9rem] bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="profile-upload" className="cursor-pointer">
            <FaCamera size={20} />
          </label>
          <input
            type="file"
            id="profile-upload"
            accept="image/*"
            className="hidden"
            onChange={handleProfileChange}
          />
        </button>
        <div className="ml-4 mt-4">
          <h1 className="text-2xl font-bold">KKD Web Dev</h1>
          <p>1M Views</p>
          <p className="mt-2">I am a f***ked developer</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
