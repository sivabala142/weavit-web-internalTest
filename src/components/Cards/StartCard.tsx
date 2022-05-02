import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import ellipsis from '../../components/images/Ellipsis.png';
import add from '../../components/images/add.png';
import CloseIcon from '@mui/icons-material/Close';
import Chip from '@mui/material/Chip';
import pencil from '../../components/images/pencil.png';
import { getData } from '../data/dummyData';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#F2F4F5',
    ...theme.typography.body2,
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0),
    textAlign: 'center',
    borderRadius: 14,
    width: 360,
    height: 850,
}));

function StartCard() {
    const data = getData();

    return (
        <div>
            {data.map(
                (item, index) =>
                    index === 1 && (
                        <>
                            <Chip
                                deleteIcon={<CloseIcon style={{ fontSize: 20, color: '#313233' }} />}
                                label={item.title}
                                onDelete={() => console.warn('test')}
                                style={{
                                    marginLeft: 40,
                                    marginRight: 50,
                                    marginTop: 14,
                                    fontFamily: 'DMSans-Medium',
                                }}
                            />
                            <Chip
                                variant="outlined"
                                deleteIcon={<CloseIcon style={{ fontSize: 20 }} />}
                                label={'Clear All'}
                                onDelete={() => console.warn('test')}
                                style={{
                                    marginLeft: -40,
                                    marginRight: 50,
                                    marginTop: 14,
                                    fontFamily: 'DMSans-Regular',
                                    color: 'gray',
                                }}
                            />
                            <Grid item xs={12} sm={4} md={4} marginTop={4} marginLeft={4}>
                                <Item elevation={0}>
                                    <Grid className="backgroundimges"></Grid>
                                    <Avatar
                                        sx={{
                                            width: 80,
                                            display: 'inline-flex',
                                            height: 80,
                                            marginTop: -26,
                                        }}
                                        src={pencil}
                                        alt="B"
                                    />

                                    <Typography
                                        style={{
                                            fontSize: 22,
                                            marginTop: 6,
                                            fontFamily: 'DMSans-Bold',
                                        }}
                                    >
                                        ✨ Getting Started
                                    </Typography>
                                    <Grid style={{ display: 'inline-flex', color: 'gray' }}>
                                        <Typography
                                            style={{
                                                fontSize: 14,
                                                marginTop: 6,
                                                fontFamily: 'DMSans-Regular',
                                            }}
                                        >
                                            {'<Time Created>'}
                                        </Typography>
                                        <Typography
                                            style={{
                                                fontSize: 14,
                                                marginTop: 6,
                                                marginLeft: 6,
                                                fontFamily: 'DMSans-Regular',
                                            }}
                                        >
                                            {'<Date Created>'}
                                        </Typography>
                                    </Grid>

                                    <div style={{ overflowY: 'scroll', height: 550 }}>
                                        <div>
                                            <ul className="tree">
                                                <li>
                                                    <div className="sticky">
                                                        <Grid
                                                            style={{
                                                                borderRadius: 12,
                                                                borderWidth: 4,
                                                                marginTop: -20,
                                                                marginLeft: 6,
                                                                marginRight: 6,
                                                                backgroundColor: '#fff',
                                                                borderColor: '#fff',
                                                                padding: 4,
                                                                width: 330,
                                                            }}
                                                        >
                                                            <Grid style={{ display: 'flex' }}>
                                                                <Typography
                                                                    style={{
                                                                        textAlign: 'left',
                                                                        fontSize: 18,
                                                                        marginBottom: 12,
                                                                        fontFamily: 'DMSans-Medium',
                                                                    }}
                                                                >
                                                                    ✨ Getting Started
                                                                </Typography>
                                                                <Avatar
                                                                    alt="Remy Sharp"
                                                                    src={ellipsis}
                                                                    style={{
                                                                        width: 25,
                                                                        height: 25,
                                                                        marginLeft: 'auto',
                                                                    }}
                                                                />
                                                            </Grid>
                                                            <Grid style={{ marginBottom: 10 }}>
                                                                <Typography
                                                                    variant="body2"
                                                                    style={{
                                                                        textAlign: 'left',
                                                                        paddingLeft: '8px',
                                                                        fontFamily: 'DMSans-Regular',
                                                                    }}
                                                                >
                                                                    Netflix Recite what you know you can truly yesterday learn it.
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </div>
                                                    <ul>
                                                        <li>
                                                            <div className="sticky">
                                                                <Grid
                                                                    style={{
                                                                        borderStyle: 'solid',
                                                                        borderRadius: 16,
                                                                        borderWidth: 4,
                                                                        marginLeft: 6,
                                                                        marginRight: 6,
                                                                        backgroundColor: '#fff',
                                                                        borderColor: '#fff',
                                                                        padding: 4,
                                                                        width: 300,
                                                                    }}
                                                                >
                                                                    <Grid
                                                                        style={{
                                                                            display: 'flex',
                                                                            marginBottom: 0,
                                                                        }}
                                                                    >
                                                                        <Typography
                                                                            variant="body2"
                                                                            style={{
                                                                                color: '#000',
                                                                                textAlign: 'left',
                                                                                paddingLeft: '8px',
                                                                                fontFamily: 'DMSans-Regular',
                                                                            }}
                                                                        >
                                                                            Recite what you know soa you can truly learn it. Jane agrees
                                                                        </Typography>
                                                                        <Avatar alt="Remy Sharp" src={ellipsis} sx={{ width: 25, height: 25 }} />
                                                                    </Grid>
                                                                </Grid>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="sticky">
                                                                <Grid
                                                                    style={{
                                                                        borderStyle: 'solid',
                                                                        borderRadius: 16,
                                                                        borderWidth: 4,
                                                                        marginLeft: 6,
                                                                        marginRight: 6,
                                                                        backgroundColor: '#fff',
                                                                        borderColor: '#fff',
                                                                        padding: 4,
                                                                        width: 300,
                                                                    }}
                                                                >
                                                                    <Grid
                                                                        style={{
                                                                            display: 'flex',
                                                                            marginBottom: 0,
                                                                        }}
                                                                    >
                                                                        <Typography
                                                                            variant="body2"
                                                                            style={{
                                                                                color: '#000',
                                                                                textAlign: 'left',
                                                                                paddingLeft: '8px',
                                                                                fontFamily: 'DMSans-Regular',
                                                                            }}
                                                                        >
                                                                            Recite what you know soa you can truly learn it. Jane agrees
                                                                        </Typography>
                                                                        <Avatar alt="Remy Sharp" src={ellipsis} sx={{ width: 25, height: 25 }} />
                                                                    </Grid>
                                                                </Grid>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="sticky">
                                                                <Grid
                                                                    style={{
                                                                        borderStyle: 'solid',
                                                                        borderRadius: 16,
                                                                        borderWidth: 4,
                                                                        marginLeft: 6,
                                                                        marginRight: 6,
                                                                        backgroundColor: '#fff',
                                                                        borderColor: '#fff',
                                                                        padding: 4,
                                                                        width: 300,
                                                                    }}
                                                                >
                                                                    <Grid
                                                                        style={{
                                                                            display: 'flex',
                                                                            marginBottom: 0,
                                                                        }}
                                                                    >
                                                                        <Typography
                                                                            variant="body2"
                                                                            style={{
                                                                                color: '#000',
                                                                                textAlign: 'left',
                                                                                paddingLeft: '8px',
                                                                                fontFamily: 'DMSans-Regular',
                                                                            }}
                                                                        >
                                                                            React.DOM elements support the above properties by default, so you may use those elements.
                                                                        </Typography>
                                                                        <Avatar alt="Remy Sharp" src={ellipsis} sx={{ width: 25, height: 25 }} />
                                                                    </Grid>
                                                                </Grid>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div className="sticky">
                                                                <Grid
                                                                    style={{
                                                                        borderStyle: 'solid',
                                                                        borderRadius: 16,
                                                                        borderWidth: 4,
                                                                        marginLeft: 6,
                                                                        marginRight: 6,
                                                                        backgroundColor: '#fff',
                                                                        borderColor: '#fff',
                                                                        padding: 4,
                                                                        width: 300,
                                                                    }}
                                                                >
                                                                    <Grid
                                                                        style={{
                                                                            display: 'flex',
                                                                            marginBottom: 0,
                                                                        }}
                                                                    >
                                                                        <Typography
                                                                            variant="body2"
                                                                            style={{
                                                                                color: '#000',
                                                                                textAlign: 'left',
                                                                                paddingLeft: '8px',
                                                                                fontFamily: 'DMSans-Regular',
                                                                            }}
                                                                        >
                                                                            Recite what you know soa you can truly learn it. Jane agrees
                                                                        </Typography>
                                                                        <Avatar alt="Remy Sharp" src={ellipsis} sx={{ width: 25, height: 25 }} />
                                                                    </Grid>
                                                                </Grid>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Item>
                            </Grid>
                        </>
                    ),
            )}
        </div>
    );
}

export default StartCard;
