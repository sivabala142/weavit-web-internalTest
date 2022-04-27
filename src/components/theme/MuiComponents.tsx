import React from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import notebook from "../images/notebook.png";

const CustomButton = styled(Button)(({ theme }) => ({
  borderRadius: 16,
  color: "gray",
  borderColor: "gray",
  borderWidth: 1,
  textTransform: "capitalize",
  display: "flex",
  marginTop: 12,
  height: 30,
  marginBottom: 12,
  WebkitTouchCallout: "none",
  marginLeft: 8,
  fontSize: 12,
  fontFamily: "DMSans-Regular",
}));

const NoteIcon = () => {
  return (
    <Avatar alt="Remy Sharp" src={notebook} sx={{ width: 15, height: 15 }} />
  );
};

export { CustomButton, NoteIcon };
