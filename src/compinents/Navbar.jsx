import { FaMessage } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { CiFlag1 } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Navbar = ({ setIsOpen, isOpen }) => {
  return (
    <div className="bg-[#3C8DBC] w-full p-3 flex justify-between items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="30"
        height="30"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer"
      >
        <path d="M3 12h18M3 6h18M3 18h18"></path>
      </svg>
      <div className="flex gap-5 text-white">
        <FaMessage className="w-[24px] h-[24px]  text-white" />
        <IoIosNotifications className="w-[24px] h-[24px] text-white" />
        <CiFlag1 className="w-[24px] h-[24px] text-white" />
        <div className="flex items-center">
          <FaUserAlt className="w-[24px] h-[24px] text-white" />
          <span className="text-xs ml-2">Profile Name</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
