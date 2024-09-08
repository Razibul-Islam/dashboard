import DashboardLayout from "./compinents/layout/DashboardLayout";
// import logo from "./assets/logo.jpeg";
// import { CiSearch } from "react-icons/ci";
// import { CgProfile } from "react-icons/cg";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { RxCross2 } from "react-icons/rx";
// import Sidebar from "./compinents/Sidebar";
// import { useState } from "react";

function App() {
  return <DashboardLayout />;
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen);
  // };
  // return (
  //   <>
  //     <nav className="w-full h-20 flex justify-between bg-black items-center lg:px-10 md:px-4">
  //       <div className="md:w-1/2 flex items-center">
  //         <img src={logo} alt="logo" className="h-20 w-20" />
  //         <ul className="md:flex items-center text-[#bed6f3] gap-5 text-lg lg:ml-32 md:ml-10 hidden">
  //           <li className="hover:text-[#FF3988] cursor-pointer">Home</li>
  //           <li className="hover:text-[#FF3988] cursor-pointer">Job Post</li>
  //         </ul>
  //         {isOpen ? (
  //           <RxCross2
  //             onClick={toggleSidebar}
  //             className="text-white text-3xl block md:hidden"
  //           />
  //         ) : (
  //           <GiHamburgerMenu
  //             onClick={toggleSidebar}
  //             className="text-white text-3xl block md:hidden"
  //           />
  //         )}
  //       </div>
  //       <div className="flex items-center gap-3 md:gap-0 justify-between md:w-1/2 w-2/3">
  //         <div className="flex items-center justify-between bg-[#1B2E46] text-[#6A7482] w-full text-lg h-10 px-3 rounded-2xl">
  //           <input
  //             type="text"
  //             name=""
  //             id=""
  //             className="border-none outline-none bg-transparent placeholder:text-[#6A7482] w-full"
  //             placeholder="Search"
  //           />
  //           <CiSearch className="" />
  //         </div>
  //         <div className="flex items-center lg:ml-24 md:ml-10 gap-5">
  //           <button className="bg-[#FF3988] text-white py-2 px-4 rounded-2xl">
  //             Create
  //           </button>
  //           <CgProfile className="text-[#7B91AD] text-3xl" />
  //         </div>
  //       </div>
  //     </nav>
  //     <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />
  //   </>
  // );
}

export default App;
