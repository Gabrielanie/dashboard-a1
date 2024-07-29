"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Modal from "./modal";
import { Button } from "../ui/button";
import TriggerButton from "./trigger";
import Title from "./title";
import Content from "./content";
import { useMediaQuery } from "react-responsive";

const Dashboard = () => {
  const baseUrl = process.env.NEXT_PUBLIC_REACT_APP_BASE_URL;

  const [data, setData] = useState([]);
  const [mode, setMode] = useState("add");
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [userId, setUserId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(false);
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
        setLoading(true);
        const url = `${baseUrl}/users/`;
        console.log(url);
        const data_ = await axios(url);
        console.log(data_.data);
        setData(data_.data);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [refresh]);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const isMobile = useMediaQuery({
    query: "(min-width: 360px) and (max-width: 1224px)",
  });

  return (
    <>
      {isDesktopOrLaptop && (
        <div className="w-full mt-9">
          <p className="text-[#98A2B3] text-[14px]">
            Settings / Users & Roles Settings
          </p>
          <div className="mt-14 flex flex-col gap-2">
            <h1 className="text-[#334155] font-bold text-[24px]">
              Users & Roles
            </h1>
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

          <div
            className="flex justify-between items-center p-5 bg-white mt-6"
            style={{ borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}
          >
            <div className="flex  gap-3 items-center">
              <div
                className=" flex items-center gap-2 p-2 rounded-md w-[100%] "
                style={{
                  border: "1px solid var(--Border-bd-dark, #DADAE7)",
                }}
              >
                <Image
                  src={"/assets/search.svg"}
                  alt=""
                  width={15}
                  height={15}
                />
                <input
                  type="text"
                  value=""
                  placeholder="Search here..."
                  className="text-[12px] text-[#667185] w-[100%]"
                  style={{
                    outlineStyle: "none",
                    backgroundColor: "transparent",
                  }}
                />
              </div>
              <div
                className=" flex justify-center items-center gap-2 p-2 rounded-md w-[40%] cursor-pointer"
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
                <p className="text-[14px] text-[#334155] font-semibold">
                  Filter
                </p>
              </div>
            </div>

            <Modal
              TriggerButton={
                <TriggerButton
                  setIsOpen={setIsOpen}
                  setMode={setMode}
                  setFormValues={setFormValues}
                />
              }
              Title={Title}
              userId={userId}
              Description={
                mode === "add"
                  ? "New User"
                  : mode === "edit"
                  ? "Update User"
                  : "Delete this User"
              }
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
            <div className="flex gap-1 items-center w-[15%]">
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
            <div className="flex gap-1 items-center w-[15%]">
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
            <div className="flex gap-1 items-center w-[15%]">
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
              <p className="text-[#1D2739] text-[12px] font-semibold">
                Actions
              </p>
            </div>
          </div>
          {loading ? (
            <p className="text-center mt-9">Loading...</p>
          ) : (
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
                  <div className="flex gap-1 items-center w-[15%]">
                    <input type="checkbox" className="w-[24px] h-[24]" />
                    <p className="text-[#101928] text-[12px]  font-semibold truncate whitespace-break-space">
                      {item?.fullName}
                    </p>
                  </div>
                  <p className="text-[#344054] text-[12px] w-[15%] truncate whitespace-break-space">
                    {item?.email}
                  </p>

                  <p
                    className={`text-[#1D2739] p-1 text-center  rounded-3xl w-[15%] text-[14px] font-semibold ${
                      item.role.toLowerCase() === "administrator"
                        ? "bg-[#F0F6FE] text-[#297bf7]"
                        : item.role.toLowerCase() === "sales manager"
                        ? "bg-[#E7F6EC] text-[#27d361]"
                        : item.role.toLowerCase() === "sales representative"
                        ? "bg-[#FEF4E6] text-[#F58A07]"
                        : ""
                    }`}
                  >
                    {item?.role}
                  </p>
                  <div className="flex items-center gap-4">
                    <p
                      onClick={() => {
                        setIsOpen(true);
                        setMode("edit");
                        setUserId(item.id);
                        setFormValues({
                          email: item.email,
                          fullName: item.fullName,
                          selectedRole: item.role,
                          password: item.password,
                        });
                      }}
                      className="text-[#0D6EFD] text-[12px] font-semibold cursor-pointer"
                    >
                      Edit
                    </p>
                    <p
                      onClick={() => {
                        setIsOpen(true);
                        setUserId(item.id);
                        setMode("delete");
                      }}
                      className="text-[#98A2B3] text-[12px] cursor-pointer"
                    >
                      Remove
                    </p>
                  </div>
                </div>
              ))}

              {error && (
                <div className="flex flex-col items-center p-12 mt-3">
                  <Image
                    src="/assets/emptyPack.svg"
                    alt="This represents no data found"
                    width={150}
                    height={150}
                  />
                  <p className="mt-4 text-slate-500">An error occurred</p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
      {isMobile && (
        <div className="w-full ">
          <p className="text-[#98A2B3] text-[14px]">
            Settings / Users & Roles Settings
          </p>
          <div className="mt-10 flex flex-col gap-2">
            <h1 className="text-[#334155] font-bold text-[24px]">
              Users & Roles
            </h1>
            <p className="text-[#98A2B3] text-[14px]">
              Manage all users in your business
            </p>
          </div>
          <div className="flex gap-6 items-center mt-10">
            <p
              className="text-[#0D6EFD] font-semibold text-[14px] py-3 px-4"
              style={{ borderBottom: " 2px solid #0D6EFD" }}
            >
              Users
            </p>
            <p className="text-[#98A2B3] text-[14px]">Roles</p>
          </div>

          <div
            className="flex flex-col justify-between items-center p-5 bg-white mt-6"
            style={{ borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}
          >
            <div className="flex  gap-3 items-center mb-3">
              <div
                className=" flex items-center gap-2 p-2 rounded-md w-[100%] "
                style={{
                  border: "1px solid var(--Border-bd-dark, #DADAE7)",
                }}
              >
                <Image
                  src={"/assets/search.svg"}
                  alt=""
                  width={15}
                  height={15}
                />
                <input
                  type="text"
                  value=""
                  placeholder="Search here..."
                  className="text-[12px] text-[#667185] w-[50%]"
                  style={{
                    outlineStyle: "none",
                    backgroundColor: "transparent",
                  }}
                />
              </div>
              <div
                className=" flex justify-center items-center gap-2 p-2 rounded-md w-[40%] cursor-pointer"
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
                <p className="text-[12px] text-[#334155] font-semibold">
                  Filter
                </p>
              </div>
            </div>

            <Modal
              TriggerButton={
                <TriggerButton
                  setIsOpen={setIsOpen}
                  setMode={setMode}
                  setFormValues={setFormValues}
                />
              }
              Title={Title}
              userId={userId}
              Description={
                mode === "add"
                  ? "New User"
                  : mode === "edit"
                  ? "Update User"
                  : "Delete this User"
              }
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

          <div className="flex flex-col justify-center">
            {loading ? (
              <p className="text-center mt-9">Loading...</p>
            ) : (
              <>
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
                      className="flex flex-col gap-6 items-center"
                      style={{ borderBottom: "1px solid #E5E7EB" }}
                    >
                      <div className="flex justify-between gap-14 w-[100%] mt-5">
                        <p className="text-[#1D2739] text-[12px] font-semibold">
                          Name
                        </p>
                        <p className="text-[#101928] text-[12px]  font-semibold truncate whitespace-break-space">
                          {item?.fullName}
                        </p>
                      </div>
                      <div className="flex justify-between gap-14 w-[100%]">
                        <p className="text-[#1D2739] text-[12px] font-semibold">
                          Email
                        </p>

                        <p className="text-[#344054] text-[12px] truncate whitespace-break-space">
                          {item?.email}
                        </p>
                      </div>
                      <div className="flex items-center justify-between gap-14 w-[100%]">
                        <p className="text-[#1D2739] text-[12px] font-semibold">
                          Role
                        </p>

                        <p
                          className={`text-[#1D2739] p-[.3rem] text-center  rounded-3xl text-[12px] font-semibold ${
                            item.role.toLowerCase() === "administrator"
                              ? "bg-[#F0F6FE] text-[#297bf7]"
                              : item.role.toLowerCase() === "sales manager"
                              ? "bg-[#E7F6EC] text-[#27d361]"
                              : item.role.toLowerCase() ===
                                "sales representative"
                              ? "bg-[#FEF4E6] text-[#F58A07]"
                              : ""
                          }`}
                        >
                          {item?.role}
                        </p>
                      </div>
                      <div className="flex justify-between gap-14 w-[100%]">
                        <p className="text-[#1D2739] text-[12px] font-semibold">
                          Actions
                        </p>

                        <div className="flex items-center gap-3 mb-5">
                          <p
                            onClick={() => {
                              setIsOpen(true);
                              setMode("edit");
                              setUserId(item.id);
                              setFormValues({
                                email: item.email,
                                fullName: item.fullName,
                                selectedRole: item.role,
                                password: item.password,
                              });
                            }}
                            className="text-[#0D6EFD] text-[12px] font-semibold cursor-pointer"
                          >
                            Edit
                          </p>
                          <p
                            onClick={() => {
                              setIsOpen(true);
                              setUserId(item.id);
                              setMode("delete");
                            }}
                            className="text-[#98A2B3] text-[12px] cursor-pointer"
                          >
                            Remove
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {error && (
                    <div className="flex flex-col items-center p-12 mt-3">
                      <Image
                        src="/assets/emptyPack.svg"
                        alt="This represents no data found"
                        width={150}
                        height={150}
                      />
                      <p className="mt-4 text-slate-500">An error occurred</p>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
