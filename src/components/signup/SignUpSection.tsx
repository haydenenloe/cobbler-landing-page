import * as React from "react";

export function SignUpSection() {
  return (
    <section className="flex flex-col items-center px-24 max-sm:px-4">
      <h1 className="text-6xl text-center text-black max-md:text-5xl max-sm:text-3xl">
        sign up here for our beta test and help make the future more human.
      </h1>
      <br></br>
      <h2 className="text-6xl text-center text-black max-md:text-5xl max-sm:text-3xl">
        <a
          href="https://docs.google.com/forms/d/19TUG-OPjfo5TuQtwG8p6tEm3EGWKWlGfOoHtfKCTxjs/viewform?edit_requested=true"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Cobbler Sign Up
        </a>
      </h2>
      <img
        src="/images/frame.png"
        alt="QR Code"
        className="w-[363px] h-[363px] mt-[60px] max-sm:w-[280px] max-sm:h-[280px]"
      />
    </section>
  );
}
