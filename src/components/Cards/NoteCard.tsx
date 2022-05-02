import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import notebook from "../images/notebook.png";
import ellipsis from "../images/Ellipsis.png";
import { getData } from "../data/dummyData";
import { CustomButton, NoteIcon } from "../theme/MuiComponents";

import { useGlobalContext } from '../../hooks/GlobalContext';
// import { WIButton } from '@weavit/weavit-material-ui';
import { DocumentNode, GraphQLError } from 'graphql';
import { GET_ALL_MEMO } from '../../services/queries';
import { IGetAllMemoQueryResult, IGetAllMemoQueryVariables } from '../../graphql-models';
import moment from 'moment'
import { parseJSONString } from '../../utils'
import { useLazyQueryNoCache, PAGE_SIZE } from '../../store/index'

function NoteCard() {
  const navigate  = useNavigate();
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
  // console.log("data", parseJSONString(data?.getAllMemo?.memos[1].stringifiedContent));

  const navigatePath = (url: any, id: any) => {
     setClickEvent(!clickEvent)
    console.log("clickEvent",clickEvent);
    navigate (url, { state: { id: { nodeID: id.nodeID, type: id.type }, click: clickEvent } });
  }


  return (
    <div>
      {data && data.getAllMemo && data.getAllMemo!.memos.map((item, index) => (
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
                {item.content}
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
              onClick={() =>{ navigatePath('/', { id: item })}}
              color="inherit"
              variant="outlined"
              startIcon={<NoteIcon />}
            >
              Note Block
            </CustomButton>
          </Grid>

        </Fragment>
      ))}
    </div>
  );
}

export default NoteCard;

