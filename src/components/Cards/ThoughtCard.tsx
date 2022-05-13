import React, { useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ellipsis from '../../assets/images/Ellipsis.png';
import IconButton from '@mui/material/IconButton';
import { CustomButton, NoteIcon } from '../theme/MuiComponents';
import OptionModal from '../Modals/OptionModal';
import moment from 'moment';

function ThoughtCard(props: any) {
    const matches = useMediaQuery('(min-width:1800px)');

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#F2F4F5',
        ...theme.typography.body2,
        paddingLeft: theme.spacing(0),
        paddingRight: theme.spacing(0),
        textAlign: 'center',
        borderRadius: 14,
        width: matches ? 360 : 290,
        height: 800,
    }));

    const { item, node } = props;
    const [open, setOpen] = useState(false);
    const [first, setfirst] = useState([]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        const tilefilterObjects: any = [...new Map(node.map((item: any) => [item.id, item])).values()];
        setfirst(tilefilterObjects);
    }, [props]);

    const onDragEnd = (result: any) => {
        const { source, destination } = result;
        if (!destination) return;

        const items = Array.from(first);
        const [newOrder] = items.splice(source.index, 1);
        items.splice(destination.index, 0, newOrder);
        setfirst([...items]);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="todo" direction="horizontal">
                {provided => (
                    <div className="todo" {...provided.droppableProps} ref={provided.innerRef}>
                        {first &&
                            first.map((val: any, index: number) => {
                                return (
                                    <Draggable key={val?.id?.toString()} draggableId={val?.id?.toString()} index={index}>
                                        {(provided, snapshot) => (
                                            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                <div>
                                                    <Grid item xs={12} sm={4} md={4} marginTop={9} marginLeft={2}>
                                                        <Item elevation={0}>
                                                            <Grid className="backgroundimges">
                                                                <Avatar
                                                                    sx={{
                                                                        bgcolor: '#85CEFF',
                                                                        width: 80,
                                                                        display: 'inline-flex',
                                                                        height: 80,
                                                                        fontWeight: 'bold',
                                                                        color: 'blue',
                                                                        marginTop: 3,
                                                                    }}
                                                                    src={val?.profilePictureUrl}
                                                                    alt="B"
                                                                />
                                                            </Grid>
                                                            <Typography
                                                                style={{
                                                                    fontWeight: 'bold',
                                                                    fontSize: 20,
                                                                    marginTop: 6,
                                                                    fontFamily: 'DMSans-Medium',
                                                                }}
                                                            >
                                                                {val?.displayName}
                                                            </Typography>
                                                            <Grid style={{ display: 'inline-flex', color: 'gray' }}>
                                                                <Typography style={{ fontSize: 14, marginTop: 6, fontFamily: 'DMSans-Regular' }}>
                                                                    {moment(props.item?.creationDate).format('dddd,MMM DD, YYYY')}
                                                                </Typography>
                                                                <Typography
                                                                    style={{
                                                                        fontSize: 14,
                                                                        marginTop: 6,
                                                                        marginLeft: 6,
                                                                        fontFamily: 'DMSans-Regular',
                                                                    }}
                                                                >
                                                                    {'<Calender Name>'}
                                                                </Typography>
                                                            </Grid>
                                                            <br />
                                                            <Grid style={{ display: 'inline-flex', color: 'gray' }}>
                                                                <Typography style={{ fontSize: 14, marginTop: 6, fontFamily: 'DMSans-Regular' }}>{'<Location>'}</Typography>
                                                                <Typography
                                                                    style={{
                                                                        fontSize: 14,
                                                                        marginTop: 6,
                                                                        marginLeft: 6,
                                                                        fontFamily: 'DMSans-Regular',
                                                                    }}
                                                                >
                                                                    {'<Status>'}
                                                                </Typography>
                                                            </Grid>
                                                            <div style={{ overflowY: 'scroll', height: 610 }}>
                                                                <div>
                                                                    <Typography
                                                                        variant="body2"
                                                                        style={{
                                                                            marginLeft: 18,
                                                                            textAlign: 'left',
                                                                            fontSize: 16,
                                                                            fontFamily: 'DMSans-bold',
                                                                            marginTop: 20,
                                                                            marginBottom: 2,
                                                                        }}
                                                                    >
                                                                        {moment(val?.creationDate).format('dddd')}
                                                                    </Typography>

                                                                    <Grid
                                                                        style={{
                                                                            borderStyle: 'solid',
                                                                            borderRadius: 16,
                                                                            borderWidth: 4,
                                                                            marginTop: 12,
                                                                            marginLeft: 12,
                                                                            marginRight: 12,
                                                                            backgroundColor: '#fff',
                                                                            borderColor: '#fff',
                                                                            padding: 4,
                                                                        }}
                                                                    >
                                                                        <Grid style={{ display: 'flex', marginBottom: 10 }}>
                                                                            <Typography
                                                                                variant="body2"
                                                                                style={{
                                                                                    textAlign: 'left',
                                                                                    paddingLeft: '8px',
                                                                                    fontFamily: 'DMSans-Regular',
                                                                                }}
                                                                            >
                                                                                {val?.content}
                                                                            </Typography>
                                                                            <IconButton onClick={handleClickOpen}>
                                                                                <Avatar alt="Remy Sharp" src={ellipsis} sx={{ width: 25, height: 25 }} />
                                                                            </IconButton>
                                                                            <OptionModal
                                                                                open={open}
                                                                                handleClickOpen={handleClickOpen}
                                                                                handleClose={handleClose}
                                                                                createdDate={props.item?.creationDate}
                                                                                lastViewes={props.item?.lastViewed}
                                                                            />
                                                                        </Grid>
                                                                        <Divider />
                                                                        <CustomButton variant="outlined" color="inherit" startIcon={<NoteIcon />}>
                                                                            Note Block
                                                                        </CustomButton>
                                                                    </Grid>
                                                                </div>

                                                                {item?.getAllMemo?.memos?.map((val: any, i: any) => {
                                                                    return val?.attachedNode.map((a: any, i: any) => {
                                                                        return (
                                                                            <div key={i}>
                                                                                <Typography
                                                                                    variant="body2"
                                                                                    style={{
                                                                                        marginLeft: 18,
                                                                                        textAlign: 'left',
                                                                                        fontSize: 16,
                                                                                        fontFamily: 'DMSans-bold',
                                                                                        marginTop: 20,
                                                                                        marginBottom: 2,
                                                                                    }}
                                                                                >
                                                                                    {moment(a?.creationDate).format('dddd')}
                                                                                </Typography>

                                                                                <Grid
                                                                                    style={{
                                                                                        borderStyle: 'solid',
                                                                                        borderRadius: 16,
                                                                                        borderWidth: 4,
                                                                                        marginTop: 12,
                                                                                        marginLeft: 12,
                                                                                        marginRight: 12,
                                                                                        backgroundColor: '#fff',
                                                                                        borderColor: '#fff',
                                                                                        padding: 4,
                                                                                    }}
                                                                                >
                                                                                    <div style={{ paddingLeft: 6, paddingTop: 6, paddingBottom: 6, paddingRight: 6 }}>
                                                                                        <Grid style={{ display: 'flex', marginBottom: 2 }}>
                                                                                            <a href="" style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 4 }}>
                                                                                                {a?.displayName}
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
                                                                                        <Grid style={{ display: 'flex', marginBottom: 10 }}>
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
                                                                                                {a?.content}
                                                                                            </Typography>
                                                                                        </Grid>
                                                                                    </div>
                                                                                    {/* <Divider /> */}
                                                                                    {/* <CustomButton variant="outlined" color="inherit" startIcon={<NoteIcon />}>
                                                Note Block
                                            </CustomButton> */}
                                                                                </Grid>
                                                                            </div>
                                                                        );
                                                                    });
                                                                })}
                                                            </div>
                                                        </Item>
                                                    </Grid>
                                                </div>
                                            </div>
                                        )}
                                    </Draggable>
                                );
                            })}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}

export default React.memo(ThoughtCard);
