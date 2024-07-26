"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Modal from "./modal";
import { Button } from "../ui/button";
import TriggerButton from "./trigger";
import Title from "./title";
import Content from "./content";

const Dashboard = () => {
  const baseUrl = process.env.NEXT_PUBLIC_REACT_APP_BASE_URL;

  const [data, setData] = useState([]);
  const [mode, setMode] = useState("add");
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [userId, setUserId] = useState('')
  const [isOpen, setIsOpen] = useState(false);
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    selectedRole: "",
  };

  const [formValues, setFormValues] = useState(initialValues);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${baseUrl}/users/`;
        console.log(url);
        const data_ = await axios(url);
        console.log(data_.data);
        setData(data_.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [refresh]);

  return (
    <div className="w-full mt-9">
      <p className="text-[#98A2B3] text-[14px]">
        Settings / Users & Roles Settings
      </p>
      <div className="mt-14 flex flex-col gap-2">
        <h1 className="text-[#334155] font-bold text-[24px]">Users & Roles</h1>
        <p className="text-[#98A2B3] text-[14px]">
          Manage all users in your business
        </p>
      </div>
      <div className="flex gap-6 items-center mt-14">
        <p
          className="text-[#0D6EFD] font-semibold text-[14px] py-3 px-4"
          style={{ borderBottom: " 2px solid #0D6EFD" }}
        >
          Users
        </p>
        <p className="text-[#98A2B3] text-[14px]">Roles</p>
      </div>
      <div className="mt-6">
        <div
          className="flex justify-between items-center p-5 bg-white"
          style={{ borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}
        >
          <div className="flex  gap-3 items-center">
            <div
              className=" flex items-center gap-2 p-2 rounded-md w-[291px] "
              style={{
                border: "1px solid var(--Border-bd-dark, #DADAE7)",
              }}
            >
              <Image src={"/assets/search.svg"} alt="" width={15} height={15} />
              <input
                type="text"
                value=""
                placeholder="Search here..."
                // onChange={(e) => setQuery(e.target.value)}
                className="text-[12px] text-[#667185] "
                style={{
                  outlineStyle: "none",
                  backgroundColor: "transparent",
                }}
              />
            </div>
            <div
              className=" flex justify-center items-center gap-2 p-2 rounded-md w-[100px] cursor-pointer"
              style={{
                border: "1px solid var(--Border-bd-dark, #DADAE7)",
              }}
            >
              <Image
                src={"/assets/filterIcon.svg"}
                alt=""
                width={20}
                height={20}
              />
              <p className="text-[14px] text-[#334155] font-semibold">Filter</p>
            </div>
          </div>

          <Modal
            TriggerButton={<TriggerButton setIsOpen={setIsOpen} setMode={setMode} />}
            Title={Title}
            userId={userId}
            Description="New Users"
            open={isOpen}
            setIsOpen={setIsOpen}
            Content={
              <Content
                setIsOpen={setIsOpen}
                formValues={formValues}
                setFormValues={setFormValues}
                refresh={refresh}
                userId={userId}
                mode={mode}
                setRefresh={setRefresh}
              />
            }
          />
        </div>
        <div className="mt-4 flex justify-between px-6 items-center">
          <div className="flex gap-1 items-center">
            <input type="checkbox" className="w-[24px] h-[24]" />
            <p className="text-[#1D2739] text-[12px] font-semibold">Name</p>
            <Image
              src="/assets/chevronV.svg"
              alt="chevron"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
          <div className="flex gap-1 items-center">
            <p className="text-[#1D2739] text-[12px] font-semibold">
              Email Address
            </p>
            <Image
              src="/assets/chevronV.svg"
              alt="chevron"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
          <div className="flex gap-1 items-center">
            <p className="text-[#1D2739] text-[12px] font-semibold">Role</p>
            <Image
              src="/assets/chevronV.svg"
              alt="chevron"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
          <div className="flex gap-1 items-center">
            <p className="text-[#1D2739] text-[12px] font-semibold">Actions</p>
          </div>
        </div>
        <div
          className="flex flex-col gap-5 p-5 bg-white mt-4 "
          style={{
            borderBottomLeftRadius: "8px",
            borderBottomRightRadius: "8px",
          }}
        >
          {data?.map((item, index) => (
            <div
              key={index}
              className="flex justify-between py-4 items-center"
              style={{ borderBottom: "1px solid #E5E7EB" }}
            >
              <div className="flex gap-1 items-center">
                <input type="checkbox" className="w-[24px] h-[24]" />
                <p className="text-[#101928] text-[12px] font-semibold">
                  {item?.fullName}
                </p>
              </div>
              <p className="text-[#344054] text-[12px]">{item?.email}</p>

              <p className="text-[#1D2739] text-[12px] font-semibold">
                {item?.role}
              </p>
              <div className="flex items-center gap-4">
                <p
                  onClick={() => {
                    setIsOpen(true);
                    setMode("edit")
                    setUserId(item.id)
                    setFormValues({
                      email: item.email,
                      fullName: item.fullName,
                      selectedRole: item.role,
                      password: item.password
                    });
                  }}
                  className="text-[#0D6EFD] text-[12px] font-semibold cursor-pointer"
                >
                  Edit
                </p>
                <p className="text-[#98A2B3] text-[12px] cursor-pointer">
                  Delete
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
