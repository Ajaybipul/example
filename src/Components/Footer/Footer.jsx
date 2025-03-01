import React from "react";
import { ajio, followUs, help, shopBy } from "../../Utils/Electronics/footer";
import { FaCcMastercard } from "react-icons/fa";
import { RiVisaFill } from "react-icons/ri";
import { FaAmazonPay } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-[#2c4152] p-6 flex flex-col gap-5">
      <div className=" text-gray-300 grid grid-cols-2 sm:grid-cols-4 px-6 gap-4 opacity-80">
        <div>
          <span className="text-xl">Ajio</span>
          {ajio.map((item) => (
            <div key={item.id}>{item.text}</div>
          ))}
        </div>
        <div>
          <span className="text-xl">Help</span>
          {help.map((item) => (
            <div key={item.id}>{item.text}</div>
          ))}
        </div>
        <div>
          <span className="text-xl">Shop by</span>
          {shopBy.map((item) => (
            <div key={item.id}>
              <Link to={item.url}>{item.text}</Link>
            </div>
          ))}
        </div>
        <div>
          <span className="text-xl">Follow us</span>
          {followUs.map((item) => (
            <div key={item.id}>{item.text}</div>
          ))}
        </div>
      </div>
      <hr></hr>
      <div className="px-6">
        <p className="my-2 text-gray-400">Payments methods</p>
        <div className="flex items-center gap-8 text-white">
          <FaCcMastercard size={50} />
          <RiVisaFill size={50} />
          <FaAmazonPay size={50} />
          <FaCcPaypal size={50} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
