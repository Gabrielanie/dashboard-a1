"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import axios from "axios";

const Content = ({
  setIsOpen,
  setRefresh,
  refresh,
  formValues,
  setFormValues,
  mode,
  userId
}) => {
  const baseUrl = process.env.NEXT_PUBLIC_REACT_APP_BASE_URL;
  const [addUserLoading, setAddUserLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setAddUserLoading(true);
      if (mode === "add") {
        const url = `${baseUrl}/users/`;
  
        await axios.post(url, {
          fullName: formValues.fullName,
          email: formValues.email,
          password: formValues.password,
          role: formValues.selectedRole,
        });

      } else if (mode === "edit") {
        const url = `${baseUrl}/users/${userId}`;
  
        await axios.put(url, {
          fullName: formValues.fullName,
          email: formValues.email,
          password: formValues.password,
          role: formValues.selectedRole,
        });
      }

      setIsOpen(false);
      setRefresh(!refresh);
    } catch (error) {
      console.log("An error occurred", error);
    } finally {
      setAddUserLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <label className="text-[14px] font-medium">Email Address</label>
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
          <label className="text-[14px] font-medium text-[#475367]">Role</label>
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
            <option value="Admin">Admin</option>
            <option value="Sales Manager">Sales Manager</option>
            <option value="Sales Representative">Sales Representative</option>
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
          {mode === "add"
            ? "Add User"
            : mode === "edit"
            ? "Update User"
            : "Delete User"}
        </Button>
      </form>
    </div>
  );
};

export default Content;
