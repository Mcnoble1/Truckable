import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Logo from "../images/logo.svg"
import { League_Spartan } from 'next/font/google'
import Link from "next/link";

const league = League_Spartan({ subsets: ['latin'] })

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/dashboard`);
    }


  return (
    <main className={`flex h-screen flex-col items-center justify-center p-24 ${league.className}`}>
        <div className="mb-10">
            <div><Image src={Logo} className=""/></div>
        </div>
        
          <form onSubmit={handleSubmit} className="w-[258px]">
            <div className="w-full relative mb-16">
              <input
                type="email"
                value={email}
                id="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                className="w-full block absolute h-[40px] px-3 py-3 border border-[#E3E3E3] rounded focus:outline-0"
              />
              <label className="absolute text-sm -top-2 left-4 px-1 bg-white"  htmlFor="Email">Email</label>
            </div>

            <div className="w-full relative mb-16">
              <input
                type="password"
                id="password"
                value={email}
                required
                onChange={(e) => setPassword(e.target.value)}
                className="w-full block absolute h-[40px] px-3 py-3 mb-20 border rounded focus:outline-0"
              />
              <label className="absolute -top-2 text-sm left-4 px-1 bg-white" htmlFor="Password">Password</label>
            </div>
              
            <button
              type="submit"
              // disabled={isLoading}
              className="text-black relative top-16 bg-[#74F2C9] flex justify-center w-[100%] h-[40px] rounded items-center"
            >
              {/* {isLoading ? "Purchasing..." : "Proceed"} */}
              Log In
            </button>
          </form>
          <Link href="https://truckable.co/for-advertisers#8818f842-7973-48ef-b52b-7da81f06f189">
          <p className=" relative text-[#449379] top-20 underline text-center">Don't have an account yet?</p>
          </Link>
    </main>
  )
}
