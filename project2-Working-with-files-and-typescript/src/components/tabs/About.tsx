import React, { useContext } from "react";

import { profileData } from "../../data/profileData";
import { Mail, MapPinHouse, Phone } from "lucide-react";
import { ProfileImageContext } from "../../ProfileContex";

const About = () => {
  const context = useContext(ProfileImageContext);
  if (!context) return null;
  const { profileURl: image } = context;

  return (
    <section className="flex px-3 py-6 gap-4 bg-slate-100/40">
      <div
        className="w-28 h-28 rounded-full bg-slate-400 relative mt-5"
        style={{
          backgroundImage: image ? `url(${image})` : "none",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      {/* here goes the about section */}
      <div className="flex-1">
        <h3 className="text-md font-semibold">{profileData.name}</h3>
        <span className="inline-block text-sm tracking-wide">
          {profileData.title}
        </span>
        <p className="mt-3 text-md mb-3">{profileData.description}</p>
        <div className="flex gap-5">
          <span className="flex gap-2">
            <Mail /> {profileData.contactInfo.email}
          </span>
          <span className="flex gap-2">
            <Phone /> {profileData.contactInfo.phone}
          </span>
          <span className="flex gap-2">
            <MapPinHouse />
            {profileData.contactInfo.location}
          </span>
        </div>
        <div className="flex flex-wrap gap-3 mt-3">
          {profileData.skills?.map((skill) => {
            return (
              <button
                key={skill}
                className="bg-white text-gray-600 shadow-md py-1 px-2 rounded-md tracking-wide"
              >
                {skill}
              </button>
            );
          })}
        </div>
        <button className="inline-block mt-5 py-1 px-2 font-semibold shadow-lg bg-neutral-200 tracking-wider">
          More Details...
        </button>
      </div>
    </section>
  );
};

export default About;
