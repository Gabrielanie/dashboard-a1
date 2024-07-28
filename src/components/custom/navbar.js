"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { AiOutlineClose } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggler = () => {
    setOpen(!open);
  };

  const closeNavbar = () => {
    setOpen(false);
  };

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const isMobile = useMediaQuery({
    query: "(min-width: 360px) and (max-width: 1224px)",
  });

  return (
    <>
      {isDesktopOrLaptop && (
        <div className=" flex justify-between items-center w-full bg-white top-0 left-0 right-0 z-10 fixed h-20 px-16">
          <div className="flex gap-5 items-center">
            <Image src="/assets/logo.svg" alt="logo" width={49} height={48} />
            <div className=" flex items-center gap-2 p-2 rounded-md w-[629px] bg-[#f3f4f6]">
              <Image
                src={"/assets/searchNavbar.svg"}
                alt=""
                width={15}
                height={15}
              />
              <input
                type="text"
                value=""
                placeholder="Search here..."
                className="text-[12px] text-[#667185] "
                style={{
                  outlineStyle: "none",
                  backgroundColor: "transparent",
                }}
              />
            </div>
          </div>
          <div className="flex items-center justify-between gap-8 ">
            <div className="flex flex-col gap-2 items-center cursor-pointer">
              <Image
                src={"/assets/notification.svg"}
                alt=""
                width={24}
                height={24}
              />
              <p className="text-[12px] text-[#647995]">Notifications</p>
            </div>
            <div className="flex flex-col gap-2 items-center cursor-pointer">
              <Image src={"/assets/wallet.svg"} alt="" width={24} height={24} />
              <p className="text-[12px] text-[#647995]">Wallet</p>
            </div>
            <div className="flex flex-col gap-2 items-center cursor-pointer">
              <Image
                src={"/assets/inquiries.svg"}
                alt=""
                width={24}
                height={24}
              />
              <p className="text-[12px] text-[#647995]">Inquiries</p>
            </div>
            <div className="flex flex-col gap-2 items-center cursor-pointer">
              <Image
                src={"/assets/settings.svg"}
                alt=""
                width={24}
                height={24}
              />
              <p className="text-[12px] text-[#0D6EFD]">Settings</p>
            </div>
            <div className="flex gap-4">
              <Image src={"/assets/avatar.svg"} alt="" width={37} height={36} />
              <Image
                src={"/assets/caretDown.svg"}
                alt=""
                width={16}
                height={16}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}
      {isMobile && (
        <>
          <div className="flex justify-between items-center">
            <div
              className={`${
                open ? "hidden" : "flex"
              }  px-4 gap-2 border-none items-center justify-between py-4`}
            >
              <div className="flex gap-5 items-center">
                <Image
                  src="/assets/logo.svg"
                  alt="logo"
                  width={39}
                  height={38}
                />
                <div className=" flex items-center gap-2 p-2 rounded-md w-[100%] bg-[#f3f4f6]">
                  <Image
                    src={"/assets/searchNavbar.svg"}
                    alt=""
                    width={15}
                    height={15}
                  />
                  <input
                    type="text"
                    value=""
                    placeholder="Search here..."
                    className="text-[12px] text-[#667185] "
                    style={{
                      outlineStyle: "none",
                      backgroundColor: "transparent",
                    }}
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Image
                  src={"/assets/avatar.svg"}
                  alt=""
                  width={28}
                  height={29}
                />
                <Image
                  src={"/assets/caretDown.svg"}
                  alt=""
                  width={16}
                  height={16}
                  className="cursor-pointer"
                />
              </div>
            </div>
            <div
              className={`${
                open ? "hidden" : "flex"
              } flex-col p-4 gap-[6px] w-16  border-none cursor-pointer`}
              onClick={toggler}
            >
              <div className="h-[2px] w-8 border-none bg-slate-600"></div>
              <div className="h-[2px] w-6 border-none bg-slate-600"></div>
              <div className="h-[2px] w-8 border-none bg-slate-600"></div>
            </div>
          </div>
          <div>
            {open && (
              <div className="flex w-full justify-between gap-4 h-full bg-white px-[10%] fixed z-10">
                <div className="flex flex-col w-full gap-9 text-neutral font-medium">
                  <h1 className="mt-8 font-bold text-xl text-[#334155]">
                    Settings
                  </h1>
                  <div className="flex flex-col gap-9 w-full">
                    <div className="flex items-center gap-2 cursor-pointer">
                      <Image
                        src="/assets/account.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                      <p className="text-[#94A3B8] text-base">Account</p>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                      <Image
                        src="/assets/security.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                      <p className="text-[#94A3B8] text-base">Security</p>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                      <Image
                        src="/assets/notiSidebar.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                      <p className="text-[#94A3B8] text-base">Notifications</p>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                      <Image
                        src="/assets/pricing.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                      <p className="text-[#94A3B8] text-base">Pricing</p>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                      <Image
                        src="/assets/tag.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                      <p className="text-[#94A3B8] text-base">Sales</p>
                    </div>
                    <div
                      onClick={closeNavbar}
                      className="flex items-center gap-2 px-3 bg-[#F0F6FE] rounded-md p-2 cursor-pointer"
                    >
                      <Image
                        src="/assets/users.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                      <p className="text-[#0D6EFD] font-semibold text-base">
                        Users & Roles
                      </p>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                      <Image
                        src="/assets/cloud.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                      <p className="text-[#94A3B8] text-base">Backups</p>
                    </div>
                    <hr className="" style={{ border: "1px solid #F0F2F5" }} />
                  </div>
                  <div
                    className="flex items-center mb-10 mt-5 gap-2 px-3 p-2 rounded-md cursor-pointer"
                    style={{ border: "1px solid #475569" }}
                  >
                    <Image
                      src="/assets/signOut.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                    <p className="text-[#475569] text-base">
                      Back to Dashboard
                    </p>
                  </div>
                  {/* <Link
                    href={"/dashboard/complaints"}
                    className="text-grey text-[22px]"
                    onClick={() => setOpen(false)}
                  >
                    Complaints
                  </Link> */}
                </div>
                <div onClick={closeNavbar} className="mt-8 w-11">
                  <AiOutlineClose className="w-14" />
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
