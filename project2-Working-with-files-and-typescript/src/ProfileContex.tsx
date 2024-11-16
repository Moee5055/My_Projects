import React, { ChangeEvent, createContext, useState } from "react";

type ProfileContextType = {
  profileURl: string;
  handleFileUpload: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const ProfileImageContext = createContext<
  ProfileContextType | undefined
>(undefined);
const ProfileContex = ({ children }: { children: React.ReactNode }) => {
  const [profile, setProfile] = useState("");

  const handleFileUpload = (event) => {
    const files = event.target.files;
    if (!files) return null;
    setProfile(URL.createObjectURL(files[0]));
  };

  return (
    <ProfileImageContext.Provider
      value={{ profileURl: profile, handleFileUpload }}
    >
      {children}
    </ProfileImageContext.Provider>
  );
};

export default ProfileContex;
