import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  return (
    <div className="overflow-hidden flex h-screen">
      <div className="w-full">{props.children}</div>
    </div>
  );
};

export default Layout;
