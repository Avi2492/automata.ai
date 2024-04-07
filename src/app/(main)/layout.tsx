import React from "react";
import Sidebar from "@/components/sidebar";
import InfoBar from "@/components/infobar";
interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  return (
    <div className="overflow-hidden flex h-screen">
      <Sidebar />
      <div className="w-full">
        <InfoBar />
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
