import React from "react";
import Logo from "@/assets/Logo.png";
const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">Lorem </p>
          <p>Copy Right</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa Orci</p>
          <p className="my-5">Massa Orci</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5"> (333)425-5156 </p>
          <p> Come on... </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
