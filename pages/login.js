import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Logo from "../images/logo.png"
import { League_Spartan } from 'next/font/google'

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
    <main className={`flex min-h-screen flex-col items-center justify-center p-24 ${league.className}`}>
        <div className="lg:w-[30%]">
        <div className="flex justify-between mb-10">
            <div><Image src={Logo} className=""/></div>
            <div className="text-4xl font-bold text-black">Truckable</div>
        </div>
        
          <form onSubmit={handleSubmit} className="">
            <div className="w-[100%] mr-10 mb-5">
                <label htmlFor="Email">Email</label>
              <input
                type="email"
                value={email}
                placeholder="Enter Email"
                id="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                className="w-full cursor-pointer px-3 py-3 border-2 mt-1 rounded-lg"
              />
            </div>
            <div className="w-[100%] mr-10 mb-5">
                <label htmlFor="Password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                value={email}
                required
                onChange={(e) => setPassword(e.target.value)}
                className="w-full cursor-pointer px-3 py-3 border-2 mt-1 rounded-lg"
              />
            </div>
            {/* {showBuying && (
                <div className="absolute top-[90px] w-44 z-10">
                  <div className="bg-slate-50 w-full border-2 cursor-pointer py-6 border-slate-50 border-t-green-800">
                    <ul className="flex flex-col w-full justify-center items-center">
                      <li
                        className=" py-3 hover:bg-slate-300 w-full text-center"
                        onClick={() => changeBuying("Co2E")}
                      >
                        <p>Co2E</p>
                      </li>
                      <li
                        className=" py-3 hover:bg-slate-300 w-full text-center"
                        onClick={() => changeBuying("USDT")}
                      >
                        <p>USDT</p>
                      </li>
                    </ul>
                  </div>
                </div>
              )} */}

              
            <button
              type="submit"
              // disabled={isLoading}
              className="text-black bg-[#74F2C9] flex justify-center w-[100%] h-16 mt-10 rounded-md items-center"
            >
              {/* {isLoading ? "Purchasing..." : "Proceed"} */}
              Log In
            </button>
          </form>
          <p className="text-[#449379] mt-5 text-center">Don't have an account yet?</p>
        </div>
    </main>
  )
}
