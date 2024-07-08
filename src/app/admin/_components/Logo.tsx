import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image height={50} width={50} alt="logo" src={"/logo.svg"} />
      <span className="font-bold text-md">ShadowSneak</span>
    </div>
  );
};

export default Logo;
