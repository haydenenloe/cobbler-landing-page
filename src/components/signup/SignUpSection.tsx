import * as React from "react";

export function SignUpSection() {
  return (
    <section className="flex flex-col items-center px-24 max-sm:px-4">
      <h1 className="text-6xl text-center text-black max-md:text-5xl max-sm:text-3xl">
        sign up here for our beta test and help make the future more human.
      </h1>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ece52e903f0619b8a5e8fad4f3782ade422b5bb1"
        alt="QR Code"
        className="w-[363px] h-[363px] mt-[60px] max-sm:w-[280px] max-sm:h-[280px]"
      />
    </section>
  );
}
