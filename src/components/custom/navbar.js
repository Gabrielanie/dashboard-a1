import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center w-full bg-white top-0 left-0 right-0 z-10 fixed h-20 px-16">
      <div className="flex gap-5 items-center">
        <Image src="/assets/logo.svg" alt="logo" width={49} height={48} />
        <div
          className=" flex items-center gap-2 p-2 rounded-md w-[629px] bg-[#f3f4f6]"
        >
          <Image src={"/assets/searchNavbar.svg"} alt="" width={15} height={15} />
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
          <Image src={"/assets/inquiries.svg"} alt="" width={24} height={24} />
          <p className="text-[12px] text-[#647995]">Inquiries</p>
        </div>
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image src={"/assets/settings.svg"} alt="" width={24} height={24} />
          <p className="text-[12px] text-[#0D6EFD]">Settings</p>
        </div>
        <div className="flex gap-4">
          <Image src={"/assets/avatar.svg"} alt="" width={37} height={36} />
          <Image src={"/assets/caretDown.svg"} alt="" width={16} height={16} className="cursor-pointer"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
