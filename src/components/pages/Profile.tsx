import * as React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import SendIcon from "@mui/icons-material/Send";

function Profile() {
  return (
    <div>
      <h2>Profile</h2>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "55ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="First Name" variant="outlined" />
        <TextField id="outlined-basic" label="Last  Name" variant="outlined" />
        <br />
        <TextField
          id="outlined-basic"
          label="Account Email"
          variant="outlined"
        />
        <TextField id="outlined-basic" label="Company" variant="outlined" />
        <TextField id="outlined-basic" label="Title" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Save Changes"
          variant="outlined"
        />
      </Box>
      <Button
        className="deletebtn"
        variant="outlined"
        endIcon={<SendIcon />}
        color="error"
        style={{ borderRadius: 19 }}
      >
        Permanently Delete Button
      </Button>
    </div>
  );
}

export default Profile;
