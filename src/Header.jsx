import React from "react";
import Logo from "../public/images/logo.svg";

export default function Header() {
  return (
    <>
      <div className=" text-center pt-[4rem] flex flex-col space-y-10 m-auto">
        <div className="w-16 m-auto object-none lg:w-28">
          <img src={Logo} alt="Logo Ping" />
        </div>
        <div className="container space-y-4">
          <h1 className="text-Neutral-Gray text-2xl lg:text-5xl font-[300]">
            We are launching{" "}
            <span className="text-Neutral-VeryDarkBlue font-[700]">soon!</span>
          </h1>
          <p className="text-Neutral-VeryDarkBlue lg:text-lg text-sm font-[300]">
            Subscribe and get notified
          </p>
        </div>
      </div>
    </>
  );
}
