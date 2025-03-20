"use client";
import * as React from "react";
import { Link } from "react-scroll";
import { ArrowDown } from "../common/icons/ArrowDown";

export default function DemoLandingPage() {
  return (
    <section
      id="demo"
      className="flex flex-col items-center justify-between min-h-screen px-4 py-16"
    >
      <div className="flex flex-col items-center text-center mt-26">
        <h1 className="text-5xl text-black mb-8 max-w-4xl max-md:text-4xl max-sm:text-3xl">
          Watch what we want to build here:
        </h1>
        <h2 className="text-6xl text-black max-md:text-5xl max-sm:text-3xl">
          <a
            href="https://www.loom.com/share/a17beb56d79f425fbf2f353b8ff40361?sid=124acbef-a717-44b7-b08a-b1c7a57bda65"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Demo Video
          </a>
        </h2>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-xl text-black">Sign Up</h2>
        <Link to="signup" smooth={true} duration={500}>
          <ArrowDown className="w-6 h-6 cursor-pointer" />
        </Link>
      </div>
    </section>
  );
}
