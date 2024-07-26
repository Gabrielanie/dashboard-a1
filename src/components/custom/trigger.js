import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const TriggerButton = ({setIsOpen}) => {
  return (
    <div>
      <Button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 w-[130px] justify-center bg-[#0D6EFD] rounded-lg p-3"
      >
        <Image
          src="/assets/buttonNewUsers.svg"
          alt="button"
          width={20}
          height={20}
        />
        <p className="text-white text-[14px] font-semibold">New Users</p>
      </Button>
    </div>
  );
};

export default TriggerButton;
