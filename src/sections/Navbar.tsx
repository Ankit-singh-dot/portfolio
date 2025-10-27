import React from "react";
import { Separator, Tooltip } from "@radix-ui/themes";
import {
  GitHubLogoIcon,
  SunIcon,
  MoonIcon,
  FileIcon,
  RowsIcon,
  LinkedInLogoIcon,
  CodeIcon,
  HomeIcon,
} from "@radix-ui/react-icons";
// import { usePathname } from "next/navigation";
// import { FaXTwitter } from "react-icons/fa6";
// import { IoPerson } from "react-icons/io5";
// import { useDarkMode } from "@/hooks/useDarkMode";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {

  return (
    <nav className="w-full py-6 flex justify-center bg-gray-100 dark:bg-gray-900">
      <div className="rounded-full px-4 py-2 backdrop-blur-lg border border-gray-300 dark:border-white/20 flex items-center justify-center gap-4">
       
      </div>
    </nav>
  );
};

export default Navbar;
