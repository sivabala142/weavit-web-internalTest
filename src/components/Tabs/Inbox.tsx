import React, { Fragment } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import SideLayout from "../Layouts/SideLayout";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import notebook from "../images/notebook.png";
import circle from "../images/circle.png";
import ellipsis from "../images/Ellipsis.png";
import { getData } from "../data/dummyData";
import { CustomButton, NoteIcon } from "../theme/MuiComponents";

function InboxTab() {
  const data = getData();
  return (
    <SideLayout>
      <Typography
        style={{
          fontSize: 26,
          textAlign: "left",
          marginLeft: 18,
          marginTop: 12,
          fontFamily: "DMSans-bold",
          fontWeight: "bold",
        }}
      >
        Focus
      </Typography>
      <Stack direction="row" spacing={1} padding={2} marginLeft={2}>
        <Chip
          label="Inbox(5)"
          variant="outlined"
          style={{ borderWidth: 0, fontSize: 14, fontFamily: "DMSans-Medium" }}
        />
        <Chip
          label="Tasks (3)"
          variant="outlined"
          style={{
            fontSize: 14,
            fontFamily: "DMSans-Medium",
            backgroundColor: "#fff",
            borderWidth: 0,
            borderRadius: 8,
          }}
        />
      </Stack>

      <Grid
        style={{
          boxShadow: "rgb(241 241 245) 5px 5px 5px 5px",
          marginLeft: 12,
          marginRight: 12,
          borderStyle: "solid",
          borderRadius: 12,
          borderWidth: 4,
          marginTop: 12,
          backgroundColor: "#fff",
          borderColor: "#fff",
          padding: 4,
        }}
      >
        <Grid
          style={{
            display: "flex",
            marginBottom: 10,
            paddingLeft: 8,
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src={circle}
            sx={{ width: 25, height: 25, marginRight: "auto" }}
          />
          <Typography
            variant="body2"
            style={{
              textAlign: "left",
              fontSize: 14,
              fontFamily: "DMSans-Medium",
              width: 340,
              marginLeft: 6,
              marginTop: 2,
            }}
          >
            The first task
          </Typography>
          <Avatar
            alt="Remy Sharp"
            src={ellipsis}
            sx={{ width: 25, height: 25, marginLeft: "auto" }}
          />
        </Grid>
      </Grid>

      <Grid
        style={{
          boxShadow: "rgb(241 241 245) 5px 5px 5px 5px",
          marginLeft: 12,
          marginRight: 12,
          borderStyle: "solid",
          borderRadius: 12,
          borderWidth: 4,
          marginTop: 12,
          backgroundColor: "#fff",
          borderColor: "#fff",
          padding: 4,
        }}
      >
        <Grid
          style={{
            display: "flex",
            marginBottom: 10,
            paddingLeft: 8,
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src={circle}
            sx={{ width: 25, height: 25, marginRight: "auto" }}
          />
          <Typography
            variant="body2"
            style={{
              textAlign: "left",
              fontSize: 14,
              fontFamily: "DMSans-Medium",
              width: 340,
              marginLeft: 6,
              marginTop: 2,
            }}
          >
            Task number two
          </Typography>
          <Avatar
            alt="Remy Sharp"
            src={ellipsis}
            sx={{ width: 25, height: 25, marginLeft: "auto" }}
          />
        </Grid>
      </Grid>

      <Grid
        style={{
          boxShadow: "rgb(241 241 245) 5px 5px 5px 5px",
          marginLeft: 12,
          marginRight: 12,
          borderStyle: "solid",
          borderRadius: 12,
          borderWidth: 4,
          marginTop: 12,
          backgroundColor: "#fff",
          borderColor: "#fff",
          padding: 4,
        }}
      >
        <Grid
          style={{
            display: "flex",
            marginBottom: 10,
            paddingLeft: 8,
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src={circle}
            sx={{ width: 25, height: 25, marginRight: "auto" }}
          />
          <Typography
            variant="body2"
            style={{
              textAlign: "left",
              fontSize: 14,
              fontFamily: "DMSans-Medium",
              width: 340,
              marginLeft: 6,
              marginTop: 2,
            }}
          >
            A really important task
          </Typography>
          <Avatar
            alt="Remy Sharp"
            src={ellipsis}
            sx={{ width: 25, height: 25, marginLeft: "auto" }}
          />
        </Grid>
        <Divider />
        <CustomButton
          variant="outlined"
          color="inherit"
          startIcon={<NoteIcon />}
        >
          Note Block
        </CustomButton>
      </Grid>
    </SideLayout>
  );
}

export default InboxTab;
