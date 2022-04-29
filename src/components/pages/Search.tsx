import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import notebook from "../images/notebook.png";
import ellipsis from "../images/Ellipsis.png";
import add from "../images/add.png";
import CloseIcon from "@mui/icons-material/Close";
import Chip from "@mui/material/Chip";
import { getData } from "../data/dummyData";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#f7f7fb",
  ...theme.typography.body2,
  paddingLeft: theme.spacing(0),
  paddingRight: theme.spacing(0),
  textAlign: "center",
  borderRadius: 14,
  width: 360,
  height: 800,
}));

function Search() {
  const data = getData();

  return (
    <div>
      {data.map(
        (item, index) =>
          index === 1 && (
            <>
              <Chip
                deleteIcon={<CloseIcon style={{ fontSize: 20 }} />}
                label={item.title}
                onDelete={() => console.warn("test")}
                style={{
                  marginLeft: -40,
                  marginRight: 50,
                  marginTop: 14,
                  fontFamily: "DMSans-Medium",
                }}
              />
              <Chip
                variant="outlined"
                deleteIcon={
                  <Avatar
                    alt="Remy Sharp"
                    src={add}
                    sx={{ width: 22, height: 22 }}
                  />
                }
                label={"Clear All"}
                onDelete={() => console.warn("test")}
                style={{
                  marginLeft: -40,
                  marginRight: 50,
                  marginTop: 14,
                  fontFamily: "DMSans-Regular",
                  color: "gray"
                }}
              />
              <Grid item xs={12} sm={4} md={4} marginTop={6} marginLeft={-4}>
                <Item elevation={3}>
                  <Grid
                    style={{
                      background:
                        "linear-gradient(129.37deg, rgba(32, 0, 173, 0.5) -12.98%, rgba(57, 137, 238, 0.5) 91.72%)",
                      marginTop: -16,
                      borderTopLeftRadius: 14,
                      borderTopRightRadius: 14,
                      padding: 35,
                      clipPath:
                        "polygon(50% 0%, 100% 0, 100% 100%, 50% 70%, 0 100%, 0 0)",
                    }}
                  ></Grid>
                  <Avatar
                    sx={{
                      bgcolor: "#85CEFF",
                      width: 80,
                      display: "inline-flex",
                      height: 80,
                      fontWeight: "bold",
                      color: "blue",
                      borderWidth: 2,
                      borderStyle: "solid",
                      borderColor: "#fff",
                    }}
                    src={item.image}
                    alt="B"
                  />

                  <Typography
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                      marginTop: 6,
                      fontFamily: "DMSans-Medium",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Grid style={{ display: "inline-flex", color: "gray" }}>
                    <Typography
                      style={{
                        fontSize: 14,
                        marginTop: 6,
                        fontFamily: "DMSans-Regular",
                      }}
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
                      style={{
                        fontSize: 14,
                        marginTop: 6,
                        fontFamily: "DMSans-Regular",
                      }}
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
                  <div style={{ overflowY: "scroll", height: 550 }}>
                    {item.desc.map((sub: any, i: any) => (
                      <Grid
                        key={i}
                        style={{
                          boxShadow: "rgb(241 241 245) 5px 5px 5px 5px",
                          borderStyle: "solid",
                          borderRadius: 12,
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
                          <Avatar
                            alt="Remy Sharp"
                            src={ellipsis}
                            sx={{ width: 25, height: 25 }}
                          />
                        </Grid>
                        <Divider />
                        <Button
                          onClick={() => alert("test click")}
                          variant="outlined"
                          startIcon={
                            <Avatar
                              alt="Remy Sharp"
                              src={notebook}
                              sx={{ width: 15, height: 15 }}
                            />
                          }
                          style={{
                            userSelect: "none",
                            borderRadius: 16,
                            color: "gray",
                            borderColor: "gray",
                            textTransform: "capitalize",
                            display: "flex",
                            marginTop: 12,
                            height: 32,
                            marginBottom: 12,
                            WebkitTouchCallout: "none",
                            marginLeft: 8,
                            fontSize: 12,
                            fontFamily: "DMSans-Regular",
                          }}
                        >
                          Note Block
                        </Button>
                      </Grid>
                    ))}
                  </div>
                </Item>
              </Grid>
            </>
          )
      )}
    </div>
  );
}

export default Search;
