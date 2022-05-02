import React, { useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ellipsis from '../..//components/images/Ellipsis.png';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import filelogo from '../../components/images/filelogo.png';
import imglogo from '../../components/images/imaglogo.png';
import { CustomButton, NoteIcon } from '../theme/MuiComponents';
import OptionModal from '../Modals/OptionModal';
import moment from 'moment';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#F2F4F5',
    ...theme.typography.body2,
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0),
    textAlign: 'center',
    borderRadius: 14,
    width: 360,
    height: 840,
}));

function ThoughtCard(props: any) {
    const [open, setOpen] = useState(false);
    console.log('props', props);

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
                            bgcolor: '#85CEFF',
                            width: 80,
                            display: 'inline-flex',
                            height: 80,
                            fontWeight: 'bold',
                            color: 'blue',
                            marginTop: 3,
                        }}
                        // src={props.item.image}
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
                    {props.item?.displayName}
                </Typography>
                <Grid style={{ display: 'inline-flex', color: 'gray' }}>
                    <Typography style={{ fontSize: 14, marginTop: 6, fontFamily: 'DMSans-Regular' }}>{moment(props.item?.creationDate).format('dddd,MMM DD, YYYY')}</Typography>
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
                        {moment(props.item?.creationDate).format('dddd')}
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
                                {props.item?.content}
                            </Typography>
                            <IconButton onClick={handleClickOpen}>
                                <Avatar alt="Remy Sharp" src={ellipsis} sx={{ width: 25, height: 25 }} />
                            </IconButton>
                            <OptionModal open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} createdDate={props.item?.creationDate} lastViewes={props.item?.lastViewed} />
                        </Grid>
                        <Divider />
                        <CustomButton variant="outlined" color="inherit" startIcon={<NoteIcon />}>
                            Note Block
                        </CustomButton>
                    </Grid>
                </div>
            </Item>
        </Grid>
    );
}

export default ThoughtCard;
