import Image from "next/image";
import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-10 mt-5 w-fit bg-white rounded-md h-fit px-4">
      <h1 className="mt-8 font-bold text-[12px] text-[#334155]">Settings</h1>
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-center gap-2 cursor-pointer">
          <Image src="/assets/account.svg" alt="" width={20} height={20} />
          <p className="text-[#94A3B8] text-[14px]">Account</p>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <Image src="/assets/security.svg" alt="" width={20} height={20} />
          <p className="text-[#94A3B8] text-[14px]">Security</p>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <Image src="/assets/notiSidebar.svg" alt="" width={20} height={20} />
          <p className="text-[#94A3B8] text-[14px]">Notifications</p>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <Image src="/assets/pricing.svg" alt="" width={20} height={20} />
          <p className="text-[#94A3B8] text-[14px]">Pricing</p>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <Image src="/assets/tag.svg" alt="" width={20} height={20} />
          <p className="text-[#94A3B8] text-[14px]">Sales</p>
        </div>
        <div className="flex items-center gap-2 px-3 bg-[#F0F6FE] rounded-md w-[190px] h-[44px] cursor-pointer">
          <Image src="/assets/users.svg" alt="" width={20} height={20} />
          <p className="text-[#0D6EFD] font-semibold text-[14px]">Users & Roles</p>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <Image src="/assets/cloud.svg" alt="" width={20} height={20} />
          <p className="text-[#94A3B8] text-[14px]">Backups</p>
        </div>
        <hr className="" style={{ border: "1px solid #F0F2F5" }} />
      </div>
      <div
        className="flex items-center mb-11 mt-32 gap-2 px-3 rounded-md w-[190px] h-[44px] cursor-pointer"
        style={{ border: "1px solid #475569" }}
      >
        <Image src="/assets/signOut.svg" alt="" width={20} height={20} />
        <p className="text-[#475569] text-[14px]">Back to Dashboard</p>
      </div>
    </div>
  );
};

export default Sidebar;
