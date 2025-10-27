import React from "react";
import { Link } from "@radix-ui/themes";

const Avatar = () => {
  return (
    <Link href="https://github.com/Ankit-singh-dot" target="_blank">
      <img
        src="/main.jpeg"
        alt="Ankit"
        className="w-16 h-16 rounded-full object-cover border border-gray-300"
      />
    </Link>
  );
};

export default Avatar;
