"use client";
import * as React from "react";
import { Link } from "react-scroll";
import { ArrowDown } from "../common/icons/ArrowDown";

export default function DemoLandingPage() {
  return (
    <section
      id="demo"
      className="flex flex-col items-center justify-center min-h-screen px-4 py-16"
    >
      <div className="flex-grow flex items-center justify-center mt-16">
        <h1 className="text-5xl text-black mb-12 max-w-4xl text-center max-md:text-4xl max-sm:text-3xl">
          watch what we want to build here:
        </h1>
      </div>
      <section
        className="w-full max-w-[1087px] bg-zinc-100 h-[332px] rounded-[30px] mb-12 max-md:h-[280px] max-sm:h-[200px]"
        role="region"
        aria-label="Video preview"
      />
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-xl text-black">sign up</h2>
        <Link to="signup" smooth={true} duration={500}>
          <ArrowDown className="w-6 h-6 cursor-pointer" />
        </Link>
      </div>
    </section>
  );
}
