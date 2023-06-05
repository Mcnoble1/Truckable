import React from "react";
import Image from "next/image";
import Logo from "../images/logo.svg";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  return (
    <div>
      <div className="flex items-center justify-between navbar px-5 mb-5">
        <div className="flex justify-between">
            <div><Image src={Logo} className=""/></div>
        </div>
        <div>
            <Link href="login">
            <button className="text-black bg-[#E3E3E3] hover:bg-[#DBD9D9] flex justify-center px-20 h-10 rounded-md items-center">
              Log Out
            </button>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
