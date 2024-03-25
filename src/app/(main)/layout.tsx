import React from "react";
import Sidebar from "@/components/sidebar";
interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  return (
    <div className="overflow-hidden flex h-screen">
      <Sidebar />
      <div className="w-full">{props.children}</div>
    </div>
  );
};

export default Layout;
