import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import reactStringReplace from 'react-string-replace';
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
                        let a = item.stringifiedContent !== null ? JSON.parse(item.stringifiedContent) : null;
                        let c = a !== null ? a.entityRanges : [];
                        let f = c.map((q: any) => {
                            return a.text.substr(q.offset, q.length);
                        });
                        let d = a !== null ? a.entityMap : [];
                        let z = Object.values(d);
                        let g = z.map((q: any) => {
                            return {
                                nodeID: q.data.nodeID,
                                type: q.data.type,
                            };
                        });
                        let textvar = item.content;
                        f.map((v: any, i: any) => {
                            if (item.content?.includes(v)) {
                                const textcontent = reactStringReplace(textvar, v, (match, index) => (
                                    <span style={{ textDecoration: 'underline', color: 'blue' }} onClick={() => getNode(g[i])} key={index}>
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
                                        fontSize: 16,
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
                                    }}
                                >
                                    {item.displayName ? (
                                        <div style={{ paddingLeft: 6, paddingTop: 6, paddingBottom: 6, paddingRight: 6 }}>
                                            <Grid style={{ display: 'flex', marginBottom: 2 }}>
                                                <a href="javascript:void(0)" onClick={e => handleNodelIdLink(e, item)} style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 4 }}>
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
                                                            width: 25,
                                                            height: 25,
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
                                                        width: 260,
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
                                                            width: 25,
                                                            height: 25,
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
                                                        width: 260,
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
                                                        style={{ marginBottom: '8px' }}
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
