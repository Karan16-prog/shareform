import React from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4">
      <div className="flex items-center">
        {/* <Image src="/logo.png" alt="Company Logo" width={100} height={50} /> */}
        <span className="text-white text-lg ml-2">Company Name</span>
      </div>
      <div className="flex items-center">
        {/* <Image
          src="/avatar.png"
          alt="User Avatar"
          width={50}
          height={50}
          className="rounded-full"
        /> */}
      </div>
    </nav>
  );
};

export default Navbar;
