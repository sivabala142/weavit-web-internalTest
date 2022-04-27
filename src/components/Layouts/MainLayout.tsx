import React from "react";
import PropTypes from "prop-types";
import Header from "../Navigation/Header";
import { theme } from "../theme/default";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout(props: MainLayoutProps) {
  return (
    <div style={{ display: "flex" }}>
      <Header />
      <div
      
        style={{ 
          width: "100%",
          padding: theme.spacing(3),
          marginLeft: theme.spacing(6),
          overflow: "hidden",
          height: "auto",
        }}
      >
        {props.children}
      </div>
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.element,
};
