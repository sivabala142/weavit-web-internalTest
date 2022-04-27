import React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import SettingsIcon from "@mui/icons-material/Settings";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import InfoIcon from "@mui/icons-material/Info";
import FeedIcon from "@mui/icons-material/Feed";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function ProfileTab() {
  return (
    <div>
      <h2>Profile</h2>
      <div className="row">
        <Button
          style={{ fontWeight: "bold" }}
          startIcon={<SettingsIcon />}
          className="sidebarbtn"
          color="inherit"
          variant="text"
          endIcon={<ArrowRightAltIcon />}
        >
          <span style={{ paddingRight: "140px", fontFamily: "DMSans-Regular" }}>
            {" "}
            Setting
          </span>
        </Button>
      </div>
      <br></br>
      <div className="row">
        <Button
          style={{ fontWeight: "bold" }}
          startIcon={<LockOpenIcon />}
          className="sidebarbtn"
          color="inherit"
          variant="text"
          endIcon={<ArrowRightAltIcon />}
        >
          <span style={{ paddingRight: "85px", fontFamily: "DMSans-Regular" }}>
            {" "}
            Privacy Policy
          </span>
        </Button>
      </div>
      <br></br>
      <div className="row">
        <Button
          style={{ fontWeight: "bold" }}
          startIcon={<InfoIcon />}
          className="sidebarbtn"
          color="inherit"
          variant="text"
          endIcon={<ArrowRightAltIcon />}
        >
          <span style={{ paddingRight: "96px", fontFamily: "DMSans-Regular" }}>
            {" "}
            About Weavit
          </span>
        </Button>
      </div>
      <br></br>
      <div className="row">
        <Button
          style={{ fontWeight: "bold" }}
          startIcon={<FeedIcon />}
          className="sidebarbtn"
          color="inherit"
          variant="text"
          endIcon={<ArrowRightAltIcon />}
        >
          <span style={{ paddingRight: "30px", fontFamily: "DMSans-Regular" }}>
            {" "}
            Terms and Conditions
          </span>
        </Button>
      </div>
      <br></br>

      <div className="row">
        <Button
          style={{ fontWeight: "bold" }}
          startIcon={<ExitToAppIcon />}
          className="sidebarbtn"
          color="inherit"
          variant="text"
          endIcon={<ArrowRightAltIcon />}
        >
          <span style={{ paddingRight: "134px", fontFamily: "DMSans-Regular" }}>
            {" "}
            Sign Out
          </span>
        </Button>
      </div>
    </div>
  );
}

export default ProfileTab;
