import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "../../public/logo.webp";
import { FaInstagram, FaFacebook, FaTwitter, FaDiscord } from "react-icons/fa";

export default function FooterPage() {
  return (
    <>
      <div className="flex justify-between h-full  items-center">
        <div className="p-10 flex">
          <Image
            src={Logo}
            alt="logo"
            width={150}
            height={150}
            className="bg-white cursor-poiter rounded-md p-2"
          />
          <br />
        </div>
        <div className="flex flex-row text-white text-base ">
          <div className="flex">
            <div className="flex">
            <label className="mr-5">
                <a href="#about">Home</a>
              </label>
              <label className="mr-5">
                <a href="#">Feature</a>
              </label>
              <br />
              <label className="mr-5">
                <a href="#">Support</a>
              </label>
              <br />
              <label className="mr-5">
                <a href="#">Sponsers</a>
              </label>
              <br />
              
            </div>
          </div>
          {/* <div className="flex">
            <label className="mr-5">
              <a href="#sponsors">Sponsers</a>
            </label>
            <br />
            <label className="mr-5">
              <a href="#prizes">Prizes</a>
            </label>
            <br />
            <label className="mr-5">
              <a href="#faqs">Faqs</a>
            </label>
          </div> */}
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-full bg-white h-px " />
      </div>
      <div className="flex justify-between items-center">
        <div className="p-5">
          <p className="text-center text-white text-sm">
            © 2023 Nebula, All Rights Reserved
          </p>
        </div>

        <div className="text-center border-0 bg-[#1d1d1e]">
          <a href="">
            <FaInstagram className="text-white text-2xl m-5" />
          </a>
          <a href="">
            <FaFacebook className="text-white text-2xl m-5" />
          </a>
          <a href="">
            <FaTwitter className="text-white text-2xl m-5" />
          </a>
          <a href="">
            <FaDiscord className="text-white text-2xl m-5" />
          </a>
        </div>
      </div>
    </>
  );
}
