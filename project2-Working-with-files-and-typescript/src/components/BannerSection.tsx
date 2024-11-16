import { CameraIcon } from "lucide-react";
import React, { ChangeEvent, useRef, useState } from "react";

const BannerSection = () => {
  const [preview, setPreview] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileRef.current?.click();
  };

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return null;
    setPreview(URL.createObjectURL(files[0]));
  };

  return (
    <header
      className="w-full h-[200px] relative bg-slate-300 flex items-center text-center shadow-sm"
      style={{
        backgroundImage: preview ? `url(${preview})` : "",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {!preview && (
        <span className="w-full text-[3rem] font-bold  text-gray-500/80 font-serif">
          1500 x 400
        </span>
      )}

      <div className="absolute top-2 right-3 bg-black/70 rounded-full p-2 text-white hover:bg-gray-700 hover:shadow-md  transition cursor-pointer">
        <input
          type="file"
          ref={fileRef}
          className="hidden"
          accept="image/*"
          capture="environment"
          onChange={handleFileUpload}
        />
        <CameraIcon onClick={handleClick} />
      </div>
    </header>
  );
};

export default BannerSection;
