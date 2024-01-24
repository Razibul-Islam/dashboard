import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(true);

  const mainClassNames = `duration-500 ${isOpen ? "ml-72" : "ml-0"}`; // Add your main class names here
  const overlayClassNames = `
    fixed overflow-hidden inset-0 max-w-72
    transform ease-in-out ${
      isOpen
        ? "transition-opacity opacity-100 duration-500 translate-x-0"
        : "transition-all delay-500 opacity-0 -translate-x-full"
    }
  `;
  const drawerClassNames = `
    max-w-72 text-white left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
  `;

  return (
    <main className={mainClassNames}>
      <header>
        <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
      </header>
      <Outlet />

      <main className={overlayClassNames}>
        <section className={`${drawerClassNames}`}>
          <article className="relative w-screen max-w-96 pb-10 flex flex-col space-y-6 overflow-hidden h-full bg-[#1E282C] ">
            <header className="p-4 font-bold text-lg uppercase">
              Admin Dashboard
            </header>
            <div className="overflow-y-auto overflow-x-hidden flex-grow ">
              <ul className="flex flex-col py-4 space-y-1">
                <li>
                  <Link
                  to="/manageWebsite"
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-[#1A2226] text-white/70 hover:text-white"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 12h18M3 6h18M3 18h18"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Manage Website
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                  to="/alluser"
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-[#1A2226] text-white/70 hover:text-white"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      All User
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                  to=""
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-[#1A2226] text-white/70 hover:text-white"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 12h18M3 6h18M3 18h18"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Item 3
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                  to=""
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-[#1A2226] text-white/70 hover:text-white"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Item 4
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                  to=""
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-[#1A2226] text-white/70 hover:text-white"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 12h18M3 6h18M3 18h18"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Item 5
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                  to=""
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-[#1A2226] text-white/70 hover:text-white"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Item 6
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                  to=""
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-[#1A2226] text-white/70 hover:text-white"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 12h18M3 6h18M3 18h18"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Item 7
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                  to=""
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-[#1A2226] text-white/70 hover:text-white"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Item 8
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                  to=""
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-[#1A2226] text-white/70 hover:text-white"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 12h18M3 6h18M3 18h18"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Item 9
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                  to=""
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-[#1A2226] text-white/70 hover:text-white"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Item 10
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </article>
        </section>
      </main>
    </main>
  );
};

export default DashboardLayout;
