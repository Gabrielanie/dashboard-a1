import Dashboard from "@/components/custom/dashboard";
import Navbar from "@/components/custom/navbar";
import Sidebar from "@/components/custom/sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-between mx-auto bg-[#f3f4f6]">
     <Navbar/>
     <div className="flex mt-28 mx-10 gap-16 mb-44">
      <Sidebar/>
      <Dashboard/>
     </div>
    </div>
  );
}
