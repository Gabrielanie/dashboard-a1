"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const TriggerButton = ({ setIsOpen, setMode, setFormValues }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const isMobile = useMediaQuery({
    query: "(min-width: 360px) and (max-width: 1224px)",
  });
  return (
    <>
      {isDesktopOrLaptop && (
        <Button
          onClick={() => {
            setFormValues({
              email: "",
              fullName: "",
              selectedRole: "",
              password: "",
            });
            setIsOpen(true);
            setMode("add");
          }}
          className="flex items-center gap-2 justify-center bg-[#0D6EFD] rounded-lg p-3"
        >
          <Image
            src="/assets/buttonNewUsers.svg"
            alt="button"
            width={20}
            height={20}
          />
          <p className="text-white md:text-[14px] text-[12px] font-semibold">
            New Users
          </p>
        </Button>
      )}
      {isMobile && (
        <Button
          onClick={() => {
            setFormValues({
              email: "",
              fullName: "",
              selectedRole: "",
              password: "",
            });
            setIsOpen(true);
            setMode("add");
          }}
          className="flex items-center w-full gap-2 justify-center bg-[#0D6EFD] rounded-lg p-2"
        >
          <Image
            src="/assets/buttonNewUsers.svg"
            alt="button"
            width={20}
            height={20}
          />
          <p className="text-white md:text-[14px] text-[13px] font-semibold">
            New Users
          </p>
        </Button>
      )}
    </>
  );
};

export default TriggerButton;
