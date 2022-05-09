import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SideLayout from "../Layouts/SideLayout";
import notebook from "../../assets/images/notebook.png";
import ellipsis from "../../assets/images/Ellipsis.png";
import { getData } from "../data/dummyData";
import NoteCard from "../Cards/NoteCard";

function TimelineTab() {
  const navigate = useNavigate();
  const data = getData();

  return (
    <SideLayout>
      <Typography
        fontSize={26}
        textAlign="left"
        marginLeft={2}
        marginTop={2}
        fontFamily="DMSans-Bold"
      >
        Timeline
      </Typography>
      <NoteCard />
    </SideLayout>
  );
}

export default TimelineTab;
