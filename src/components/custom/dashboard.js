"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Modal from "./modal";
import { Button } from "../ui/button";

const Dashboard = () => {
  const baseUrl = process.env.NEXT_PUBLIC_REACT_APP_BASE_URL;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${baseUrl}/users/`;
        console.log(url)
        const data_ = await axios(url);
        console.log(data_.data);
        setData(data_.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    selectedRole: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [addUserLoading, setAddUserLoading] = useState(false);

  const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      try {
        setAddUserLoading(true);
        const url = `${baseUrl}/users/`;
        const response = await axios(url, {
          method: "POST",
          body: JSON.stringify({
            fullName: formValues.fullName,
            email: formValues.email,
            password: formValues.password,
            role: formValues.selectedRole,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          console.log("done");
          // navigation.push("/dashboard/users/admin/create/success");
        } else {
          console.error("Try again:", response.status);
        }
      } catch (error) {
        console.error("An error occurred");
      } finally {
        setAddUserLoading(false);
      }
    }


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
            Trigger={() => (
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
                <p className="text-white text-[14px] font-semibold">
                  New Users
                </p>
              </Button>
            )}
            Title={() => (
              <Image
                src="/assets/addUsers.svg"
                alt="add"
                width={40}
                height={40}
              />
            )}
            Description="New Users"
            Content={() => (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-medium">
                    Email Address
                  </label>
                  <input
                    type="text"
                    value={formValues.email}
                    name="email"
                    onChange={handleChange}
                    placeholder="New User's Email Address"
                    className=" flex items-center text-[12px] gap-2 p-2 rounded-md w-full "
                    style={{
                      border: "1px solid var(--Border-bd-dark, #DADAE7)",
                      outlineStyle: "none",
                    }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-medium text-[#475367]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formValues.fullName}
                    name="fullName"
                    onChange={handleChange}
                    placeholder="New User's Full Name"
                    className=" flex items-center text-[12px] gap-2 p-2 rounded-md w-full "
                    style={{
                      border: "1px solid var(--Border-bd-dark, #DADAE7)",
                      outlineStyle: "none",
                    }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-medium text-[#475367]">
                    Role
                  </label>
                  <select
                    name="selectedRole"
                    value={formValues.selectedRole}
                    onChange={handleChange}
                    id=""
                    style={{
                      border: "1px solid var(--Border-bd-dark, #DADAE7)",
                      outlineStyle: "none",
                    }}
                    className="w-100% text-[12px] px-5 py-2 rounded-lg flex gap-1"
                  >
                    <option value="">Select Role</option>
                    <option value="">Admin</option>
                    <option value="">Sales Manager</option>
                    <option value="">Sales Representative</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-medium text-[#475367]">
                    Create Password
                  </label>
                  <input
                    type="password"
                    value={formValues.password}
                    name="password"
                    onChange={handleChange}
                    placeholder="Create a password for New User"
                    className=" flex text-[12px] items-center gap-2 p-2 rounded-md w-full "
                    style={{
                      border: "1px solid var(--Border-bd-dark, #DADAE7)",
                      outline: "none",
                    }}
                  />
                </div>
                <Button className="bg-[#0D6EFD] text-[14px] mb-4">
                  Add User
                </Button>
              </form>
            )}
            open={isOpen}
            setIsOpen={setIsOpen}
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
                <p className="text-[#0D6EFD] text-[12px] font-semibold cursor-pointer">
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
