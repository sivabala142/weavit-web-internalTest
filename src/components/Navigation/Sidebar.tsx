import React from "react";
import PropTypes from "prop-types";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import MainPanel from "../Tabs/MainPanel";
import logo from "../../assets/images/Group.png";

const Sidebar = () => {
  return (
    <div style={{ backgroundColor: "#F2F4F5", height: "100%" }}>
      <Stack
        direction="row"
        spacing={1}
        marginTop={4}
        marginLeft={2}
        marginBottom={3}
      >
        <Avatar
          alt="logo"
          src={logo}
          sx={{ width: 25, height: 25 }}
          variant="square"
        />
        <Typography
          style={{
            fontWeight: "bold",
            fontSize: 26,
            marginTop: -5,
            fontFamily: "DMSans-Medium",
          }}
        >
          Weavit
        </Typography>
      </Stack>

      <List>
        <MainPanel />
      </List>
    </div>
  );
};

Sidebar.propTypes = {
  setMobileOpen: PropTypes.func,
};

export default Sidebar;
