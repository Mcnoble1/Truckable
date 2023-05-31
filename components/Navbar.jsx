import React from "react";
import Image from "next/image";
import Logo from "../images/logo.png";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  return (
    <div>
      <div className="flex items-center justify-between navbar px-5 mb-5">
        <div className="flex justify-between">
            <div><Image src={Logo} className=""/></div>
            <div className="text-4xl font-bold text-black">Truckable</div>
        </div>
        <div>
            <Link href="login">
            <button className="text-black bg-[#E3E3E3] flex justify-center px-20 h-10 rounded-md items-center">
              Log Out
            </button>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
