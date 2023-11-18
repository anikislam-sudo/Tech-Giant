import { Dropdown, Space } from "antd";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import logo from "/src/Assets/logo2.png";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const { data: session } = useSession();
  const items = [
    {
      key: "1",
      label: <Link href="/monitor">Monitor</Link>,
    },
    {
      key: "2",
      label: <Link href="/cpu">Processor</Link>,
    },
    {
      key: "3",
      label: <Link href="/motherboard">Motherboard</Link>,
    },
    {
      key: "4",
      label: <Link href="/ram">Ram</Link>,
    },
    {
      key: "5",
      label: <Link href="/psu">Power Supply</Link>,
    },
    {
      key: "6",
      label: <Link href="/storage">Storage Device</Link>,
    },
   
    {
      key: "7",
      label: <Link href="/others">Others</Link>,
    },
  ];
  const router = useRouter();

  return (
    <div className="navbar  bg-emerald-300 flex justify-between">
      <div className="navbar-start ">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-slate-400 mr-2 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm  bg-slate-300 dropdown-content mt-3 z-[1] p-2 shadow  w-52"
          >
              <li>
              <button
                className=" text-black  shadow-md  px-2"
                onClick={() => router.push("/")}
              >
                Home
              </button>
            </li>
         
            <li>
              <Dropdown
                className=" text-black  px-1  shadow-md   "
                menu={{ items }}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>Category</Space>
                </a>
              </Dropdown>
            </li>
             
            <li>
              <button
                className=" text-black  shadow-md  px-2"
                onClick={() => router.push("/pc-build")}
              >
                Pc Builder
              </button>
            </li>
            <li>
            {session?.user ? (
            <button
              onClick={() => signOut()}
              className=" bg-slate-400 text-white shadow-md rounded-md px-2 py-1 cursor-pointer transition-all duration-200 hover:bg-zinc-900"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => router.push("/login")}
              className="shadow-md  bg-slate-400  text-white rounded-md px-2 py-1 cursor-pointer transition-all duration-200 hover:bg-zinc-900"
            >
              Login
            </button>
          )}
            </li>
          </ul>
        </div>
        <button onClick={() => router.push("/")}>
          <Image src={logo} width={60} height={50} alt="Picture of the author" />
        </button>
      </div>
      <div className="navbar-end gap-4 hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <li>
              <button
                className=" mr-5 text-black text-lg    px-2"
                onClick={() => router.push("/")}
              >
                Home
              </button>
            </li>
          <li>
            <Dropdown
              className=" mr-5 text-black text-lg   px-2   "
              menu={{ items }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>Category</Space>
              </a>
            </Dropdown>
          </li>
          <li>
            <button
              className="ml-3 text-black text-lg     px-2 "
              onClick={() => router.push("/pc-build")}
            >
              Pc Builder
            </button>
          </li>
        </ul>

        <div className="text-black px-2 ">
          {session?.user ? (
            <button
              onClick={() => signOut()}
              className=" bg-yellow-300 text-black shadow-md rounded-md px-2 py-1 cursor-pointer transition-all duration-200 hover:bg-emerald-300"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => router.push("/login")}
              className=" shadow-md  text-lg bg-yellow-300 rounded-md px-2 py-1 cursor-pointer transition-all duration-200 hover:bg-emerald-300"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
