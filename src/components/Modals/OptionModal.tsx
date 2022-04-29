import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Divider from "@mui/material/Divider";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import EditIcon from "@mui/icons-material/Edit";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Grid from "@mui/material/Grid";
import DialogTitle from "@mui/material/DialogTitle";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { theme } from "../../theme/default";

function OptionModal(props: any) {

  return (
    <div>
      <Dialog
      hideBackdrop={true}
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Grid container marginTop={2}>
          <Grid>
            <Typography
              fontSize={25}
              fontFamily="DMSans-Medium"
              textAlign="center"
              marginLeft={3}
            >
              More Information
            </Typography>
          </Grid>
          <Grid marginLeft="auto" marginRight={2}>
            <IconButton onClick={props.handleClose}>
              <CloseOutlinedIcon />
            </IconButton>
          </Grid>
        </Grid>
        <DialogContent>
          <Stack direction="row" spacing={1} marginBottom={2}>
            <Chip
              label="Properties"
              variant="outlined"
              style={{
                borderWidth: 0,
                borderRadius: 5,
                fontSize: 14,
                fontFamily: "DMSans-Medium",
                backgroundColor: "#e7e7e7",
              }}
            />
            <Chip
              label="Links"
              variant="outlined"
              style={{
                color: "gray",
                fontSize: 14,
                fontFamily: "DMSans-Medium",
                backgroundColor: "#fff",
                borderWidth: 0,
                borderRadius: 5,
              }}
            />
          </Stack>
          <Grid container spacing={3}>
            <Grid item xs>
              <Typography
                fontSize={14}
                fontFamily="DMSans-Medium"
                color={"gray"}
              >
                Created On
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography fontSize={14} fontFamily="DMSans-Medium">
                6 days ago
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3} marginTop={0}>
            <Grid item xs>
              <Typography
                fontSize={14}
                fontFamily="DMSans-Medium"
                color={"gray"}
              >
                Last Edited
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography fontSize={14} fontFamily="DMSans-Medium">
                1 day ago
              </Typography>
            </Grid>
          </Grid>
          <br />
          <Divider />
          <Stack direction="row" spacing={3} marginTop={1}>
            <IconButton aria-label="delete" style={{ flexDirection: "column" }}>
              <EditOutlinedIcon
                sx={{
                  fontSize: 30,
                  backgroundColor: "#e5daf3",
                  padding: 1.5,
                  borderRadius: 20,
                  color: "#2714a8"
                }}
              />
              <Typography
                fontSize={14}
                fontFamily="DMSans-Medium"
                color="secondary"
              >
                Edit
              </Typography>
            </IconButton>
            <IconButton aria-label="delete" style={{ flexDirection: "column" }}>
              <ShareOutlinedIcon
                sx={{
                  fontSize: 30,
                  backgroundColor: "#e5daf3",
                  padding: 1.5,
                  borderRadius: 20,
                  color: "#2714a8"
                }}
              />
              <Typography
                fontSize={14}
                fontFamily="DMSans-Medium"
                color="secondary"
              >
                Share
              </Typography>
            </IconButton>
            <IconButton aria-label="delete" style={{ flexDirection: "column" }}>
              <ContentCopyOutlinedIcon
                sx={{
                  fontSize: 30,
                  backgroundColor: "#e5daf3",
                  padding: 1.5,
                  borderRadius: 20,
                  color: "#2714a8"
                }}
              />
              <Typography
                fontSize={14}
                fontFamily="DMSans-Medium"
                color="secondary"
              >
                Copy
              </Typography>
            </IconButton>
            <IconButton aria-label="delete" style={{ flexDirection: "column" }}>
              <DeleteOutlineOutlinedIcon
                sx={{
                  fontSize: 30,
                  backgroundColor: "#e5daf3",
                  padding: 1.5,
                  borderRadius: 20,
                  color: "red",
                }}
              />
              <Typography
                fontSize={14}
                fontFamily="DMSans-Medium"
                color="secondary"
              >
                Delete
              </Typography>
            </IconButton>
          </Stack>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={props.handleClose}>Disagree</Button>
          <Button onClick={props.handleClose}>Agree</Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}

export default OptionModal;
