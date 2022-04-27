import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import NoSearch from "../../images/No-Search-Results.png";
import { theme } from "../../theme/default";

function NotFound() {
  return (
    <div
      style={{
        position: "fixed",
        top: "55%",
        left: "65%",
        width: "30em",
        height: "18em",
        marginTop: "-10em",
        marginLeft: "-15em",
      }}
    >
      <Avatar
        sx={{
          width: 150,
          height: 150,
          marginLeft: 6,
        }}
        src={NoSearch}
        alt="NoSearch"
      />
      <Typography
        style={{
          fontSize: 20,
          width: 400,
          textAlign: "center",
          marginTop: 6,
          marginLeft: -80,
          fontFamily: "DMSans-Regular",
        }}
      >
        Tap on any link in the timeline, inbox or search and it will open here.
      </Typography>
      <Button
        size="large"
        variant="outlined"
        color="secondary"
        startIcon={<SearchIcon />}
        style={{
          borderRadius: 30,
          borderColor: theme.palette.secondary.main,
          textTransform: "capitalize",
          marginTop: 12,
          height: 50,
          width: 300,
          marginBottom: 12,
          marginLeft: -30,
          fontSize: 16,
          fontFamily: "DMSans-Regular",
        }}
      >
        Find Something...
      </Button>
    </div>
  );
}

export default NotFound;
