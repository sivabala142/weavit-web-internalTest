import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import reactStringReplace from 'react-string-replace';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ellipsis from '../../assets/images/Ellipsis.png';
import { CustomButton, NoteIcon } from '../theme/MuiComponents';
import { GET_ALL_MEMO } from '../../services/queries';
import { IGetAllMemoQueryResult, IGetAllMemoQueryVariables } from '../../graphql-models';
import moment from 'moment';
import OptionModal from '../Modals/OptionModal';
import IconButton from '@mui/material/IconButton';
import { useLazyQueryNoCache, PAGE_SIZE } from '../../store/index';
import { parseBlockContent } from '../constants';
import Badge from '@mui/material/Badge';

function NoteCard() {
    const media = useMediaQuery('(min-width:1800px)');
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const navigate = useNavigate();
    const [clickEvent, setClickEvent] = useState(false);
    const [queryMemos, { error, data, loading }] = useLazyQueryNoCache<IGetAllMemoQueryResult, IGetAllMemoQueryVariables>(GET_ALL_MEMO) as any;

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
    const buttonNavigatePath = (url: any, ids: any) => {
        let id = ids.item;
        setClickEvent(true);
        navigate(url, { state: { id, click: true } });
    };
    const getNode = (item: any) => {
        navigate('/', { state: { id: item, click: true } });
    };
    const handleNodelIdLink = (e: any, id: any) => {
        e.preventDefault();
        navigate('/', { state: { id, click: true } });
    };
    return (
        <>
            <div>
                {data &&
                    data.getAllMemo &&
                    data.getAllMemo?.memos.map((item: any, index: number) => {
                        let parsedContent = item.stringifiedContent !== null ? JSON.parse(item.stringifiedContent) : null;
                        let offsetRange = parsedContent !== null ? parsedContent.entityRanges : [];
                        let offsetValue = offsetRange.map((q: any) => {
                            return parsedContent.text.substr(q.offset, q.length);
                        });
                        let enityData = parsedContent !== null ? parsedContent.entityMap : [];
                        let enityArray = Object.values(enityData);
                        let entityId = enityArray.map((q: any) => {
                            return {
                                nodeID: q.data.nodeID,
                                type: q.data.type,
                            };
                        });
                        let textvar = item.content;
                        offsetValue.map((v: any, i: any) => {
                            if (item.content?.includes(v)) {
                                const textcontent = reactStringReplace(textvar, v, (match, index) => (
                                    <span style={{ textDecoration: 'underline', color: 'blue' }} onClick={() => getNode(entityId[i])} key={index}>
                                        {match}
                                    </span>
                                ));
                                textvar = textcontent;
                            }
                        });
                        return (
                            <Fragment key={index}>
                                <Typography
                                    variant="body2"
                                    style={{
                                        marginLeft: 18,
                                        textAlign: 'left',
                                        fontSize: media ? 16 : 12,
                                        fontWeight: 'bold',
                                        fontFamily: 'DMSans-Medium',
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
                                        backgroundColor: '#fff',
                                        padding: 4,
                                        width: media ? 'auto' : 275,
                                    }}
                                >
                                    {item.displayName ? (
                                        <div style={{ paddingLeft: 6, paddingTop: 6, paddingBottom: 6, paddingRight: 6 }}>
                                            <Grid style={{ display: 'flex', marginBottom: 2 }}>
                                                <a href="javascript:void(0)" onClick={e => handleNodelIdLink(e, item)} style={{ fontSize: media ? 18 : 14, fontWeight: 'bold', marginLeft: 4 }}>
                                                    {item.displayName}
                                                </a>

                                                <IconButton
                                                    onClick={handleClickOpen}
                                                    style={{
                                                        marginLeft: 'auto',
                                                        marginRight: -8,
                                                        marginTop: -6,
                                                    }}
                                                >
                                                    <Avatar
                                                        alt="Remy Sharp"
                                                        src={ellipsis}
                                                        sx={{
                                                            width: media ? 25 : 20,
                                                            height: media ? 25 : 20,
                                                        }}
                                                    />
                                                </IconButton>
                                            </Grid>
                                            <Grid style={{ display: 'flex', marginBottom: 8 }}>
                                                <Typography
                                                    variant="body2"
                                                    style={{
                                                        textAlign: 'left',
                                                        fontWeight: 500,
                                                        fontFamily: 'DMSans-Regular',
                                                        width: media ? 260 : 220,
                                                        fontSize: media ? 14 : 12,
                                                        marginTop: -10,
                                                    }}
                                                >
                                                    {textvar}
                                                </Typography>
                                                {/* <Badge badgeContent={item.suggestedEntities.length} color="primary" style={{ marginLeft: 'auto', marginRight: 10, marginTop: 6 }} /> */}
                                            </Grid>
                                        </div>
                                    ) : (
                                        <div style={{ paddingLeft: 6, paddingTop: 6, paddingBottom: 6, paddingRight: 6 }}>
                                            <Grid style={{ display: 'flex', marginBottom: 2 }}>
                                                <IconButton
                                                    onClick={handleClickOpen}
                                                    style={{
                                                        marginLeft: 'auto',
                                                        marginRight: -8,
                                                        marginTop: -6,
                                                    }}
                                                >
                                                    <Avatar
                                                        alt="Remy Sharp"
                                                        src={ellipsis}
                                                        sx={{
                                                            width: media ? 25 : 20,
                                                            height: media ? 25 : 20,
                                                        }}
                                                    />
                                                </IconButton>
                                            </Grid>
                                            <Grid style={{ display: 'flex', marginBottom: 8 }}>
                                                <Typography
                                                    variant="body2"
                                                    style={{
                                                        textAlign: 'left',
                                                        fontWeight: 500,
                                                        fontFamily: 'DMSans-Regular',
                                                        width: media ? 260 : 220,
                                                        fontSize: media ? 14 : 12,
                                                        marginTop: -35,
                                                    }}
                                                >
                                                    {textvar}
                                                </Typography>
                                                {/* <Badge badgeContent={item.suggestedEntities.length} color="primary" style={{ marginLeft: 'auto', marginRight: 12, marginTop: 6 }} /> */}
                                            </Grid>
                                            {item.displayName ? null : (
                                                <>
                                                    <Divider />
                                                    <CustomButton
                                                        style={{ marginBottom: '8px', fontSize: media ? 12 : 10, height: media ? 'auto' : 25 }}
                                                        onClick={e => {
                                                            buttonNavigatePath('/', { item });
                                                        }}
                                                        color="inherit"
                                                        variant="outlined"
                                                        startIcon={<NoteIcon />}
                                                    >
                                                        {'welcome to Weavit ✨'}
                                                    </CustomButton>
                                                </>
                                            )}
                                        </div>
                                    )}
                                    <OptionModal open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} />
                                </Grid>
                            </Fragment>
                        );
                    })}
            </div>
        </>
    );
}
export default NoteCard;
