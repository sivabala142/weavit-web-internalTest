import React, { Fragment } from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import notebook from "../images/notebook.png";
import ellipsis from "../images/Ellipsis.png";
import { getData } from "../data/dummyData";
import { CustomButton, NoteIcon } from "../theme/MuiComponents";

function NoteCard() {
  const data = getData();
  return (
    <div>
      {data.map((item, index) => (
        <Fragment key={index}>
          <Typography
            variant="body2"
            style={{
              marginLeft: 18,
              textAlign: "left",
              fontSize: 16,
              fontWeight: "bold",
              fontFamily: "DMSans-Medium",
              marginTop: 20,
              marginBottom: 2,
            }}
          >
            {item.dateTime}
          </Typography>
          {item.desc.map((sub, i) => (
            <Grid
              key={i}
              style={{
                marginLeft: 12,
                marginRight: 12,
                borderRadius: 16,
                marginTop: 12,
                backgroundColor: "#fff",
                padding: 4,
              }}
            >
              <Grid
                style={{ display: "flex", marginBottom: 10, paddingLeft: 8 }}
              >
                <Typography
                  variant="body2"
                  style={{
                    textAlign: "left",
                    fontWeight: 500,
                    fontFamily: "DMSans-Regular",
                    width: 260,
                    marginTop: 4,
                  }}
                >
                  {Object.values(sub).map((a) => a)}
                </Typography>
                <Avatar
                  alt="Remy Sharp"
                  src={ellipsis}
                  sx={{
                    width: 25,
                    height: 25,
                    marginLeft: "auto",
                    marginRight: 1,
                    top: 4,
                  }}
                />
              </Grid>
              <Divider />
              <CustomButton
                // onClick={() => navigate('about', {state: item.id})}
                color="inherit"
                variant="outlined"
                startIcon={<NoteIcon />}
              >
                Note Block
              </CustomButton>
            </Grid>
          ))}
        </Fragment>
      ))}
    </div>
  );
}

export default NoteCard;
