import React from "react";

interface SideLayoutProps {
  children: React.ReactNode;
}

function SideLayout(props: SideLayoutProps) {
  return (
    <div
      style={{
        backgroundColor: "#F2F4F5",
        width: 360,
        position: "fixed",
        overflowX: "scroll",
        height: "80%",
        left: 0,
        top: 0,
        marginTop: 85,
        textAlign: "center",
      }}
    >
      {props.children}
    </div>
  );
}

export default SideLayout;
