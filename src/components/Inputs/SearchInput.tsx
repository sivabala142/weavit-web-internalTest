import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { theme } from "../theme/default";

function SearchInput() {
  const [search, setSearch] = useState("");
  const [cancel, setCancel] = useState(false);

  const ClearInput = () => {
    setSearch("");
  };

  const HideButton = () => {
    if (search) {
      setCancel(true);
    }
  };
  return (
    <div style={{ display: "flex" }}>
      <Paper
        component="form"
        elevation={0}
        sx={{
          p: "1px 1px",
          display: "flex",
          alignItems: "center",
          width: "auto",
          borderWidth: 2,
          height: 35,
          marginLeft: 1,
          marginRight: 1,
          borderColor: theme.palette.secondary.main,
          borderStyle: "solid",
          borderRadius: 18,
        }}
      >
        <IconButton sx={{ p: "10px" }} aria-label="menu">
          <SearchIcon />
        </IconButton>
        <InputBase
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton sx={{ p: "10px" }} onClick={ClearInput}>
          <CloseIcon />
        </IconButton>
      </Paper>
      {cancel === true || search === "" ? (
        <Button
          variant="text"
          style={{ textTransform: "capitalize", color: "#901fed" }}
          onClick={HideButton}
        >
          Cancel
        </Button>
      ) : null}
    </div>
  );
}

export default SearchInput;
