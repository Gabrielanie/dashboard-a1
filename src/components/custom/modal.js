import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";


const Modal = ({Trigger, Title, Description, Content, open, setIsOpen}) => {
  return (
    <Dialog open={open} onOpenChange={()=> setIsOpen(!open)}>
      <DialogTrigger asChild>
        <Trigger/>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="flex justify-center items-center">
          <DialogTitle><Title/></DialogTitle>
          <DialogDescription className="text-[#1D2739] font-semibold text-[17px]">
            {Description}
          </DialogDescription>
        </DialogHeader>
       <Content/>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
