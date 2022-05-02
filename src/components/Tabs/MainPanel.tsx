import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TimelineTab from "./TimeLine";
import InboxTab from "./Inbox";
import SearchTab from "./Search";
import ProfileTab from "./Profile";
import searchblack from "../images/search-black.png";
import searchblue from "../images/search-blue.png";
import inboxblack from "../images/inbox-black.png";
import inboxblue from "../images/inbox-blue.png";
import timelineblack from "../images/timeline-black.png";
import timelineblue from "../images/timeline-blue.png";
import userlogo from "../images/av1.png";

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function MainPanel() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };
  
  return (
    <Fragment>
      <TabPanel value={value} index={0}>
        <TimelineTab />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <InboxTab />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SearchTab />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ProfileTab />
      </TabPanel>
      <Box
        sx={{
          width: 350,
          position: "fixed",
          left: 0,
          bottom: 10,
          marginLeft: 1,
        }}
      >
        <Box>
          <Tabs
            textColor="secondary"
            component={Paper}
            elevation={4}
            style={{ borderRadius: 40, marginLeft: 1, marginRight: 5 }}
            value={value}
            onChange={handleChange}
          >
            <Tab
              style={{ marginLeft: 10 }}
              onClick={() => {
                setValue(0);
                navigate("/");
              }}
              label={
                <Typography
                  style={{
                    textTransform: "capitalize",
                    fontSize: 14,
                    fontFamily: "DMSans-Medium",
                  }}
                >
                  Timeline
                </Typography>
              }
              icon={
                <Avatar
                  alt="Remy Sharp"
                  src={value !== 0 ? timelineblack : timelineblue}
                  sx={{ width: 25, height: 25, marginTop: 1, borderRadius: 0 }}
                />
              }
              {...a11yProps(0)}
            />
            <Tab
              style={{ marginLeft: -8 }}
              onClick={() => navigate("/inbox")}
              label={
                <Typography
                  style={{
                    textTransform: "capitalize",
                    fontSize: 14,
                    fontFamily: "DMSans-Medium",
                  }}
                >
                  Inbox
                </Typography>
              }
              icon={
                <Avatar
                  alt="Remy Sharp"
                  src={value !== 1 ? inboxblack : inboxblue}
                  sx={{ width: 25, height: 25, marginTop: 1 }}
                />
              }
              {...a11yProps(1)}
            />
            <Tab
              onClick={() => {
                setValue(2);
                navigate("/search");
              }}
              style={{ marginLeft: -8 }}
              label={
                <Typography
                  style={{
                    textTransform: "capitalize",
                    fontSize: 14,
                    fontFamily: "DMSans-Medium",
                  }}
                >
                  Search
                </Typography>
              }
              icon={
                <Avatar
                  alt="Remy Sharp"
                  src={value !== 2 ? searchblack : searchblue}
                  sx={{ width: 25, height: 25, marginTop: 1 }}
                />
              }
              {...a11yProps(2)}
            />
            <Tab
            disabled={true}
              onClick={() => {
                setValue(3);
                navigate("/profile");
              }}
              style={{ marginLeft: -8 }}
              label={
                <Typography
                  style={{
                    textTransform: "capitalize",
                    fontSize: 14,
                    fontFamily: "DMSans-Medium",
                  }}
                >
                  Profile
                </Typography>
              }
              icon={
                <Avatar
                  alt="Remy Sharp"
                  src={userlogo}
                  sx={{ width: 28, height: 28, marginTop: 1, borderRadius: 0 }}
                />
              }
              {...a11yProps(3)}
            />
          </Tabs>
        </Box>
      </Box>
    </Fragment>
  );
}
