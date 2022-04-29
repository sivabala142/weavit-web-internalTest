import React, {useState} from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ellipsis from "../..//components/images/Ellipsis.png";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import filelogo from "../../components/images/filelogo.png";
import imglogo from "../../components/images/imaglogo.png";
import { CustomButton, NoteIcon } from "../theme/MuiComponents";
import OptionModal from "../Modals/OptionModal";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#F2F4F5",
  ...theme.typography.body2,
  paddingLeft: theme.spacing(0),
  paddingRight: theme.spacing(0),
  textAlign: "center",
  borderRadius: 14,
  width: 360,
  height: 840,
}));

function ThoughtCard(props: any) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid item xs={12} sm={4} md={4} marginTop={9} marginLeft={4}>
      <Item elevation={0}>
        <Grid className="backgroundimges">
          <Avatar
            sx={{
              bgcolor: "#85CEFF",
              width: 80,
              display: "inline-flex",
              height: 80,
              fontWeight: "bold",
              color: "blue",
              marginTop: 3,
            }}
            src={props.item.image}
            alt="B"
          />
        </Grid>
        <Typography
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginTop: 6,
            fontFamily: "DMSans-Medium",
          }}
        >
          {props.item.title}
        </Typography>
        <Grid style={{ display: "inline-flex", color: "gray" }}>
          <Typography
            style={{ fontSize: 14, marginTop: 6, fontFamily: "DMSans-Regular" }}
          >
            {"<Time>"}
          </Typography>
          <Typography
            style={{
              fontSize: 14,
              marginTop: 6,
              marginLeft: 6,
              fontFamily: "DMSans-Regular",
            }}
          >
            {"<Calender Name>"}
          </Typography>
        </Grid>
        <br />
        <Grid style={{ display: "inline-flex", color: "gray" }}>
          <Typography
            style={{ fontSize: 14, marginTop: 6, fontFamily: "DMSans-Regular" }}
          >
            {"<Location>"}
          </Typography>
          <Typography
            style={{
              fontSize: 14,
              marginTop: 6,
              marginLeft: 6,
              fontFamily: "DMSans-Regular",
            }}
          >
            {"<Status>"}
          </Typography>
        </Grid>
        <div style={{ overflowY: "scroll", height: 630 }}>
          {props.item.desc.map(
            (sub: any, i: any) =>
              props.item.id === 2 && (
                <Grid
                  key={i}
                  style={{
                    borderStyle: "solid",
                    borderRadius: 16,
                    borderWidth: 4,
                    marginTop: 12,
                    marginLeft: 12,
                    marginRight: 12,
                    backgroundColor: "#fff",
                    borderColor: "#fff",
                    padding: 4,
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <List
                      sx={{
                        width: 288,
                        borderStyle: "solid",
                        borderWidth: 1.8,
                        borderRadius: 6,
                        height: 60,
                        marginBottom: 1,
                        backgroundColor: "#fff",
                        borderColor: "#F0F3F6",
                      }}
                    >
                      <ListItem style={{ marginTop: -12 }}>
                        <ListItemAvatar>
                          <Avatar
                            sx={{
                              width: 50,
                              height: 50,
                              fontWeight: "bold",
                              color: "blue",
                            }}
                            src={imglogo}
                            alt="B"
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography
                              variant="body2"
                              style={{
                                marginLeft: 8,
                                textAlign: "left",
                                paddingLeft: "2px",
                                fontFamily: "DMSans-bold",
                              }}
                            >
                              Getting thing Done
                            </Typography>
                          }
                          secondary={
                            <div>
                              <a
                                href="https://www.goodreads.com/23 oijeoijwe.html"
                                style={{
                                  textDecoration: "none",
                                  color: "gray",
                                  marginLeft: 8,
                                  textAlign: "left",
                                  fontFamily: "DMSans-Regular",
                                }}
                              >
                                https://www.goodreads.com/
                                <br />
                                <a
                                  href="https://www.goodreads.com/23 oijeoijwe.html"
                                  style={{
                                    textDecoration: "none",
                                    color: "gray",
                                    marginLeft: 8,
                                    textAlign: "left",
                                    fontFamily: "DMSans-Regular",
                                  }}
                                >
                                  23 oijeoijwe.html
                                </a>
                              </a>
                            </div>
                          }
                        />
                      </ListItem>
                    </List>
                    <IconButton onClick={handleClickOpen}>
                      <Avatar
                        alt="Remy Sharp"
                        src={ellipsis}
                        sx={{ width: 25, height: 25, marginTop: -6 }}
                      />
                    </IconButton>
                    <OptionModal
                      open={open}
                      handleClickOpen={handleClickOpen}
                      handleClose={handleClose}
                    />
                  </div>
                  <Grid style={{ display: "flex", marginBottom: 10 }}>
                    <Typography
                      variant="body2"
                      style={{
                        width: 260,
                        textAlign: "left",
                        paddingLeft: "8px",
                        fontFamily: "DMSans-Regular",
                      }}
                    >
                      {Object.values(sub).map((a: any) => a)}
                    </Typography>
                  </Grid>
                </Grid>
              )
          )}
          <Typography
            variant="body2"
            style={{
              marginLeft: 18,
              textAlign: "left",
              fontSize: 16,
              fontFamily: "DMSans-bold",
              marginTop: 20,
              marginBottom: 2,
            }}
          >
            {props.item.dateTime}
          </Typography>
          {props.item.extra.map(
            (sub: any, i: any) =>
              props.item.id === 2 ||
              (1 && (
                <Grid
                  key={i}
                  style={{
                    borderStyle: "solid",
                    borderRadius: 16,
                    borderWidth: 4,
                    marginTop: 12,
                    marginLeft: 12,
                    marginRight: 12,
                    backgroundColor: "#fff",
                    borderColor: "#fff",
                    padding: 4,
                  }}
                >
                  <Grid style={{ display: "flex", marginBottom: 10 }}>
                    <Typography
                      variant="body2"
                      style={{
                        textAlign: "left",
                        paddingLeft: "8px",
                        fontFamily: "DMSans-Regular",
                      }}
                    >
                      {Object.values(sub).map((a: any) => a)}
                    </Typography>
                    <IconButton onClick={handleClickOpen}>
                      <Avatar
                        alt="Remy Sharp"
                        src={ellipsis}
                        sx={{ width: 25, height: 25 }}
                      />
                    </IconButton>
                    <OptionModal
                      open={open}
                      handleClickOpen={handleClickOpen}
                      handleClose={handleClose}
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
              ))
          )}

          {props.item.extra.map((sub: any, i: any) => (
            <Grid
              key={i}
              style={{
                borderStyle: "solid",
                borderRadius: 16,
                borderWidth: 4,
                marginTop: 12,
                marginLeft: 12,
                marginRight: 12,
                backgroundColor: "#fff",
                borderColor: "#fff",
                padding: 4,
              }}
            >
              <Grid style={{ display: "flex", marginBottom: 10 }}>
                <Typography
                  variant="body2"
                  style={{
                    textAlign: "left",
                    paddingLeft: "8px",
                    fontFamily: "DMSans-Regular",
                  }}
                >
                  {Object.values(sub).map((a: any) => a)}
                </Typography>
                <IconButton onClick={handleClickOpen}>
                  <Avatar
                    alt="Remy Sharp"
                    src={ellipsis}
                    sx={{ width: 25, height: 25 }}
                  />
                </IconButton>
                <OptionModal
                  open={open}
                  handleClickOpen={handleClickOpen}
                  handleClose={handleClose}
                />
              </Grid>
            </Grid>
          ))}
          {props.item.id === 2 && (
            <Grid
              style={{
                borderStyle: "solid",
                borderRadius: 16,
                borderWidth: 4,
                marginTop: 12,
                marginLeft: 12,
                marginRight: 12,
                backgroundColor: "#fff",
                borderColor: "#fff",
                padding: 4,
              }}
            >
              <div style={{ display: "flex" }}>
                <List
                  sx={{
                    width: "100%",
                    borderStyle: "solid",
                    borderWidth: 1.8,
                    borderRadius: 6,
                    height: 50,
                    marginBottom: 1,
                    backgroundColor: "#fff",
                    borderColor: "#F0F3F6",
                  }}
                >
                  <ListItem style={{ marginTop: -8 }}>
                    <ListItemAvatar>
                      <Avatar
                        sx={{
                          width: 50,
                          height: 50,
                          fontWeight: "bold",
                          color: "blue",
                        }}
                        src={filelogo}
                        alt="B"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography
                          variant="body2"
                          style={{
                            marginLeft: 8,
                            textAlign: "left",
                            paddingLeft: "2px",
                            fontFamily: "DMSans-bold",
                          }}
                        >
                          Getting thing Done
                        </Typography>
                      }
                      secondary={
                        <a
                          href="https://www.npmjs.com/package/react-paginate"
                          style={{
                            textDecoration: "none",
                            color: "gray",
                            marginLeft: 8,
                          }}
                        >
                          JPG file . 443.0 KB
                        </a>
                      }
                    />
                  </ListItem>
                </List>
                <IconButton onClick={handleClickOpen}>
                  <Avatar
                    alt="Remy Sharp"
                    src={ellipsis}
                    sx={{ width: 25, height: 25, marginTop: -6 }}
                  />
                </IconButton>
                <OptionModal
                  open={open}
                  handleClickOpen={handleClickOpen}
                  handleClose={handleClose}
                />
              </div>
              <Grid style={{ display: "flex", marginBottom: 10 }}>
                <Typography
                  variant="body2"
                  style={{
                    width: 280,
                    textAlign: "left",
                    paddingLeft: "8px",
                    fontFamily: "DMSans-Regular",
                  }}
                >
                  Recite what you know soa you can truly learn it. Jane agrees
                </Typography>
              </Grid>
            </Grid>
          )}

          {props.item.extra.map(
            (sub: any, i: any) =>
              props.item.id === 2 && (
                <Grid
                  key={i}
                  style={{
                    borderStyle: "solid",
                    borderRadius: 16,
                    borderWidth: 4,
                    marginTop: 12,
                    marginLeft: 12,
                    marginRight: 12,
                    backgroundColor: "#fff",
                    borderColor: "#fff",
                    padding: 4,
                  }}
                >
                  <Grid style={{ display: "flex", marginBottom: 10 }}>
                    <Typography
                      variant="body2"
                      style={{
                        textAlign: "left",
                        paddingLeft: "8px",
                        fontFamily: "DMSans-Regular",
                      }}
                    >
                      {Object.values(sub).map((a: any) => a)}
                    </Typography>
                    <IconButton onClick={handleClickOpen}>
                      <Avatar
                        alt="Remy Sharp"
                        src={ellipsis}
                        sx={{ width: 25, height: 25 }}
                      />
                    </IconButton>
                    <OptionModal
                      open={open}
                      handleClickOpen={handleClickOpen}
                      handleClose={handleClose}
                    />
                  </Grid>
                </Grid>
              )
          )}
        </div>
      </Item>
    </Grid>
  );
}

export default ThoughtCard;

