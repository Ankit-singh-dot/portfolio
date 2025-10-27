import React from "react";
import Avatar from "../components/Avatar";
import Button from "../components/Button";
// import { Link as ScrollLink } from "react-scroll";

const HeroSection = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center dark:bg-black">
      <div className="w-2/3 max-sm:w-full flex flex-col items-center">
        <div>
          <Avatar />
        </div>
        <div className="mt-4 px-32 max-sm:px-4 text-amber-50 text-center">
          <h1 className="asimovian-regular text-6xl  font-bold mb-4">
            Hi, I'm Ankit
            <span className="text-red-500"> $</span>ingh
          </h1>
          <h1 className="syne-mono-regular">
            I break things, learn fast, and make stuff work (eventually).
            Obsessed with pushing limits in web3, CS, and life — and on my bike
            when the roads call. Let’s build something real.
          </h1>
          <div className="inline-flex mt-2">
            <div className="mr-3">
              <a href="https://github.com/Ankit-singh-dot" target="_blank">
                <Button label="Book a meet" id="meetBtn" />
              </a>
            </div>
            <div className="ml-3">
              <a
                href="https://www.linkedin.com/in/ankit-raj-4b1343320/"
                target="_blank"
              >
                <Button label="Get in touch" id="meetBtn" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
