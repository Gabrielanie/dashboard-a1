import React from 'react'
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


const DeleteModal = () => {
  return (
    <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Edit Profile</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Delete this User</DialogTitle>
        <DialogDescription>
          This user and all associated data will be permanently removed. Do  you wish to continue
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button type="submit">
            <Image src="" alt='' width={20} height={20}/>
            <p>Yes, Delete</p>
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
  )
}

export default DeleteModal