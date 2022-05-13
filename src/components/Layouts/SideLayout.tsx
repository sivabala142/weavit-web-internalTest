import React from "react";
import useMediaQuery from '@mui/material/useMediaQuery';

interface SideLayoutProps {
  children: React.ReactNode;
}

function SideLayout(props: SideLayoutProps) {
  const media = useMediaQuery('(min-width:1800px)')
  return (
    <div
      style={{
        backgroundColor: "#F2F4F5",
        width: media ? 360 : 300,
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
