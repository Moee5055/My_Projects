import { CameraIcon } from "lucide-react";
import React, { ChangeEvent, useContext, useRef, useState } from "react";
import { ProfileImageContext } from "../ProfileContex";

const ProfileSection = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const context = useContext(ProfileImageContext);
  if (!context) return null;
  const { profileURl: profile, handleFileUpload } = context;

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <section className="flex px-3 py-8 gap-4">
      {/* photo section */}
      <div
        style={{
          backgroundImage: profile ? `url(${profile})` : "",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className={`h-28 w-28 rounded-full bg-slate-300 flex items-center justify-center relative`}
      >
        {!profile && (
          <span className="text-gray-500/80 font-serif font-bold text-md tracking-wide">
            100 x 100
          </span>
        )}

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          capture="environment"
          className="hidden"
          onChange={handleFileUpload}
        />

        <div className="absolute bottom-[-12px] bg-black/70 rounded-full p-2 text-white hover:bg-gray-700 hover:shadow-md  transition cursor-pointer">
          <CameraIcon size={18} onClick={handleClick} />
        </div>
      </div>
      {/* profile section */}
      <div className="flex-1">
        <p className="font-bold text-xl font-sans">Kshitij Jung Shahi</p>
        <span className="text-sm relative top-[-4px]">1M views</span>

        <p className="text-sm">
          This is a short description of the Youtube channel. It gives an
          overview of the content and what viewers can except.
        </p>

        <button className="inline-block bg-red-600 text-white px-3 py-1 rounded-md font-medium mt-2 text-sm">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default ProfileSection;
