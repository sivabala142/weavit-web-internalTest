import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ellipsis from "../images/Ellipsis.png";
import { CustomButton, NoteIcon } from "../theme/MuiComponents";
import { GET_ALL_MEMO } from '../../services/queries';
import { IGetAllMemoQueryResult, IGetAllMemoQueryVariables } from '../../graphql-models';
import moment from 'moment'
import OptionModal from "../Modals/OptionModal";
import IconButton from "@mui/material/IconButton";
import { useLazyQueryNoCache, PAGE_SIZE } from '../../store/index'
import { parseBlockContent } from '../constants'

function NoteCard() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  const [clickEvent, setClickEvent] = useState(false)
  const [queryMemos, { error, data, loading }] = useLazyQueryNoCache<
    IGetAllMemoQueryResult,
    IGetAllMemoQueryVariables
  >(GET_ALL_MEMO);

  useEffect(() => {
    fetchTimeline();
  }, []);

  const fetchTimeline = async (addition?: Partial<IGetAllMemoQueryVariables>) => {
    const variables: IGetAllMemoQueryVariables = {
      pageSize: PAGE_SIZE,
      skipToken: 0,
      ...(addition ?? {}),
    };
    queryMemos({ variables });
  };

  const navigatePath = (url: any, id: any) => {
    setClickEvent(true)
    navigate(url, { state: { id, click: true } });
  }

  const stringified = parseBlockContent(data?.getAllMemo?.memos[1]);
  const parsedContent = stringified?.entityMap[0].data.displayName;
  const parsedContentt = stringified?.entityMap[1].data.displayName;

  return (
    <>
      <div>
        {data && data.getAllMemo && data.getAllMemo?.memos.map((item, index) => (
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
              {moment(item.creationDate).format('dddd,MMM DD, YYYY')}
            </Typography>
            <Grid
              // key={}
              style={{
                marginLeft: 12,
                marginRight: 12,
                borderRadius: 16,
                marginTop: 12,
                backgroundColor: "#fff",
                padding: 4,
              }}
            >
              {item.displayName ? <a href="" style={{ display: "flex", fontSize: 18, fontWeight: "bold", marginLeft: 4 }}>{item.displayName}</a> : null}
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
                  {item.content.includes(parsedContent || parsedContentt) ?
                    <div dangerouslySetInnerHTML={{
                      __html: item.content.replace(parsedContent, `<a href=''>${parsedContent}</a>`).replace(parsedContentt, `<a href="">${parsedContentt}</a>`)
                    }} />
                    : item.content}
                </Typography>

                <IconButton onClick={handleClickOpen} style={{ top: item.displayName ? -40 : -15, }}>
                  <Avatar
                    alt="Remy Sharp"
                    src={ellipsis}
                    sx={{
                      width: 25,
                      height: 25,
                      marginLeft: "auto",
                      marginRight: 1,

                    }}
                  />
                </IconButton>
                <OptionModal
                  open={open}
                  handleClickOpen={handleClickOpen}
                  handleClose={handleClose}
                />
              </Grid>
              {item.displayName ?
                null :
                <>
                  <Divider />
                  <CustomButton
                    onClick={(e) => { navigatePath('/', { id: item }) }}
                    color="inherit"
                    variant="outlined"
                    startIcon={<NoteIcon />}
                  >
                    {"welcome to Weavit ✨"}
                  </CustomButton>
                </>
              }
            </Grid>
          </Fragment>
        ))}
      </div>
    </>
  );
}

export default NoteCard;



