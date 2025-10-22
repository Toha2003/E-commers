import { NavLink } from "react-router-dom";

import searchIcon from "../Assets/icons/search icon.svg";
// import heartIcon from "../Assets/icons/heart_icon.svg";
// import basketIcon from "../Assets/icons/basket icon.svg";

const Header = () => {
  return (
    <header className="border-b border-b-gray-400">
      <div className="bg-black ">
        <div className=" h-12 flex justify-center items-center gap-20">
          <p className="text-white text-[18px] ">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <select
            name="language"
            id="language"
            className=" bg-black text-white"
          >
            <option value="en">EN</option>
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
          </select>
        </div>
      </div>
      <div className="w-[1170px] mx-auto flex justify-between items-center p-[40px_0_16px]">
        <div>
          <h2 className="text-[26px] font-bold cursor-pointer">E-commers</h2>
        </div>
        <div className="head__link">
          <ul className="flex justify-between items-center gap-12">
            <li>
              <NavLink className='cursor-pointer font-medium text-xl' to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink className='cursor-pointer font-medium text-xl' to={"/contact"}>Contact</NavLink>
            </li>
            <li>
              <NavLink className='cursor-pointer font-medium text-xl' to={"about"}>About</NavLink>
            </li>
            <li>
              <NavLink className='cursor-pointer font-medium text-xl' to={"/news"}>News</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-6">
          <div className="flex justify-between items-center h-[38px] bg-[#F5F5F5] px-[16px] rounded-[4px]">
            <input type="text" placeholder="What are you looking for?" />
            <img src={searchIcon} alt="" />
          </div>

          <div className="flex justify-between items-center gap-4">
            <svg className="cursor-pointer"
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <svg className="cursor-pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.25 20.25C8.66421 20.25 9 19.9142 9 19.5C9 19.0858 8.66421 18.75 8.25 18.75C7.83579 18.75 7.5 19.0858 7.5 19.5C7.5 19.9142 7.83579 20.25 8.25 20.25Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.75 20.25C19.1642 20.25 19.5 19.9142 19.5 19.5C19.5 19.0858 19.1642 18.75 18.75 18.75C18.3358 18.75 18 19.0858 18 19.5C18 19.9142 18.3358 20.25 18.75 20.25Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.25 3.75H5.25L7.5 16.5H19.5"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.5 12.5H19.1925C19.2792 12.5001 19.3633 12.4701 19.4304 12.4151C19.4975 12.3601 19.5434 12.2836 19.5605 12.1986L20.9105 5.44859C20.9214 5.39417 20.92 5.338 20.9066 5.28414C20.8931 5.23029 20.8679 5.18009 20.8327 5.13717C20.7975 5.09426 20.7532 5.05969 20.703 5.03597C20.6528 5.01225 20.598 4.99996 20.5425 5H6"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <svg className="cursor-pointer"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="32" height="32" rx="16" fill="#DB4444" />
              <path
                d="M21 23V21.3333C21 20.4493 20.691 19.6014 20.1408 18.9763C19.5907 18.3512 18.8446 18 18.0667 18H12.9333C12.1554 18 11.4093 18.3512 10.8592 18.9763C10.309 19.6014 10 20.4493 10 21.3333V23"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 15C17.6569 15 19 13.6569 19 12C19 10.3431 17.6569 9 16 9C14.3431 9 13 10.3431 13 12C13 13.6569 14.3431 15 16 15Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
