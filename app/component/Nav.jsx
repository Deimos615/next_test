"use client";
import React, { useState } from "react";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import ".//effect.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

const Nav = () => {
  const [isHover, setIsHover] = useState(false);
  const [itemOne, setOne] = useState(false);
  const [itemTwo, setTwo] = useState(false);
  const [itemThree, setThree] = useState(false);
  return (
    <div className="bg-white">
      <div
        className="fixed left-0 top-0 pt-2 px-2 w-[60px] h-[360px] rounded-br-[50px]  bg-[#00346B] z-20"
        style={{
          background: "linear-gradient(158deg, #002946 0%, #0044A0 100%)",
        }}
        onMouseEnter={() => setIsHover(true)}
      >
        <div className="border-white rounded-full border h-10 w-10 mb-8"></div>
        <ul className="flex flex-col text-center gap-y-8">
          <li
            className={classNames({
              "flex rounded-full w-[40px] h-[40px] mr-[10px] text-[16px] relative ": true,
              " before:bg-[#FD7C56] bg-gray-400 before:absolute before:-right-3 before:-bottom-[4px] before:w-[2px] before:h-[48px] before:rounded-full":
                itemOne,
              "cursor-pointer": itemOne,
            })}
            onMouseEnter={() => setOne(true)}
            onMouseLeave={() => setOne(false)}
          >
            {/* <Image src={Home} className="w-10 h-10 p-2" alt="noIMG" /> */}
            <FontAwesomeIcon
              icon={faHome}
              className="text-white m-auto"
            ></FontAwesomeIcon>
          </li>

          <li
            className={classNames({
              "flex rounded-full w-[40px] h-[40px] mr-[10px] text-[16px] relative ": true,
              " before:bg-[#FD7C56] bg-gray-400 before:absolute before:-right-3 before:-bottom-[4px] before:w-[2px] before:h-[48px] before:rounded-full":
                itemTwo,
              "cursor-pointer": itemTwo,
            })}
            onMouseEnter={() => setTwo(true)}
            onMouseLeave={() => setTwo(false)}
          >
            <FontAwesomeIcon
              icon={faUser}
              className="text-white m-auto"
            ></FontAwesomeIcon>
          </li>
          <li
            className={classNames({
              "flex rounded-full w-[40px] h-[40px] mr-[10px] text-[16px] relative ": true,
              " before:bg-[#FD7C56] bg-gray-400 before:absolute before:-right-3 before:-bottom-[4px] before:w-[2px] before:h-[48px] before:rounded-full":
                itemThree,
              "cursor-pointer": itemThree,
            })}
            onMouseEnter={() => setThree(true)}
            onMouseLeave={() => setThree(false)}
          >
            <FontAwesomeIcon
              icon={faInbox}
              className="text-white m-auto"
            ></FontAwesomeIcon>
          </li>
        </ul>
      </div>
      <div
        className={classNames({
          "fixed -left-[300px] top-0 rounded-br-[50px] pt-2 px-[60px] h-[360px] w-[300px] bg-white transition-width duration-500 shadow-0": true,
          "!shadow-xl": isHover,
        })}
        style={{
          left: isHover ? "0" : "-300px",
          transitionDelay: isHover ? "0s" : "0.2s",
        }}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className="rounded-full border h-10 w-10 mb-8 opacity-0"></div>
        <ul className="flex flex-col text-center gap-y-8 ">
          <li
            className={classNames({
              "w-0 px-4 rounded-r-full h-10 flex transition-width duration-500 ease-in-out": true,
              "bg-gray-200 !w-[80%]": itemOne,
              "cursor-pointer": itemOne,
            })}
            onMouseEnter={() => setOne(true)}
            onMouseLeave={() => setOne(false)}
          >
            <h1 className="text-[#00566A] text-[17px] font-medium my-auto ">
              Home
            </h1>
          </li>
          <li
            className={classNames({
              "w-0 px-4 rounded-r-full h-10 flex transition-width duration-500 ease-in-out": true,
              "bg-gray-200 !w-[80%]": itemTwo,
              "cursor-pointer": itemTwo,
            })}
            onMouseEnter={() => setTwo(true)}
            onMouseLeave={() => setTwo(false)}
          >
            <h1 className="text-[#00566A] text-[17px] font-medium my-auto ">
              People
            </h1>
          </li>
          <li
            className={classNames({
              "w-0 px-4 rounded-r-full h-10 flex transition-width duration-500 ease-in-out": true,
              "bg-gray-200 !w-[80%]": itemThree,
              "cursor-pointer": itemThree,
            })}
            onMouseEnter={() => setThree(true)}
            onMouseLeave={() => setThree(false)}
          >
            <h1 className="text-[#00566A] text-[17px] font-medium my-auto ">
              Inbox
            </h1>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
