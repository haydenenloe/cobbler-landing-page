import * as React from "react";
import { Link } from "react-scroll";
import { ArrowDown } from "../common/icons/ArrowDown";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-between min-h-screen px-4 py-16"
    >
      <div className="flex-grow flex items-center justify-center mt-16">
        <h1 className="text-5xl text-black mb-12 max-w-4xl text-center max-md:text-4xl max-sm:text-3xl">
          hello :)
        </h1>
      </div>
      <div className="flex flex-col items-center gap-4 mb-16">
        <h2 className="text-xl text-black">about us</h2>
        <Link to="about" smooth={true} duration={500}>
          <ArrowDown className="w-6 h-6 cursor-pointer" />
        </Link>
      </div>
    </section>
  );
};
