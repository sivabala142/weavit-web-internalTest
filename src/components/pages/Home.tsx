import React, { memo, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import CloseIcon from '@mui/icons-material/Close';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ThoughtCard from '../../components/Cards/ThoughtCard';
import RLDD from 'react-list-drag-and-drop/lib/RLDD';
import { getData } from '../data/dummyData';
import spell from '../images/spell.png';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NotFound from '../../components/NotFound/FindSection';
import NoteCard from '../Cards/NoteCard';
import { useLazyQueryNoCache, PAGE_SIZE } from '../../store/index';
import { IGetAllMemoQueryResult, IGetAllMemoQueryVariables } from '../../graphql-models';
import { GET_ALL_MEMO } from '../../services/queries';

function Home() {
    const dataa = getData();
    const location = useLocation();
    const [post, setPost] = useState(dataa);
    const [thoughtData, setThoughtData] = useState([]);
    const [fetch, getFetch] = useState(dataa);

    const [queryMemos, { error, data, loading }] = useLazyQueryNoCache<IGetAllMemoQueryResult, IGetAllMemoQueryVariables>(GET_ALL_MEMO);

    useEffect(() => {
        let memoInfo = [];
        fetchTimeline();
        memoInfo.push(data?.getAllMemo.memos, ...thoughtData);
        setThoughtData(memoInfo);
    }, []);

    // console.log("djsgfhjsfg",data?.getAllMemo.memos[1]);
    // console.log("locatiomn",location.state.click);

    const fetchTimeline = async (addition?: Partial<IGetAllMemoQueryVariables>) => {
        const variables: IGetAllMemoQueryVariables = {
            pageSize: PAGE_SIZE,
            skipToken: 0,
            targetedNodeID: location.state.id.nodeID,
            targetedNodeLabel: location?.state?.id?.type,
            ...(addition ?? {}),
        };
        queryMemos({ variables });
    };

    // console.log("thoughtData", thoughtData);

    const deleteItem = (index: any) => {
        const newTodoItems = [...fetch];
        newTodoItems.splice(index, 1);
        getFetch(newTodoItems);
        setPost(newTodoItems);
    };

    const ClearAll = () => {
        const newTodoItems = [...fetch];
        newTodoItems.splice(0);
        getFetch(newTodoItems);
        setPost(newTodoItems);
    };

    const itemRenderer = (item: any, index: number): JSX.Element => {
        return (
            <div className="item">
                <div key={index} style={{ marginTop: -60, marginLeft: -20 }}>
                    <ThoughtCard item={item} />
                </div>
            </div>
        );
    };

    const handleRLDDChange = (reorderedItems: any) => {
        // console.log('Example.handleRLDDChange');
        setPost(reorderedItems);
    };

    const elementRef = useRef(null);
    const [arrowDisable, setArrowDisable] = useState(true);

    const handleHorizantalScroll = (element: any, speed: any, distance: any, step: any) => {
        let scrollAmount = -800;
        const slideTimer = setInterval(() => {
            element.scrollLeft += step;
            scrollAmount += Math.abs(step);
            if (scrollAmount >= distance) {
                clearInterval(slideTimer);
            }
            if (element.scrollLeft === 0) {
                setArrowDisable(true);
                console.log(arrowDisable);
            } else {
                setArrowDisable(false);
            }
        }, speed);
    };

    return (
        <>
            <div className="button-contianer">
                <IconButton
                    onClick={() => {
                        handleHorizantalScroll(elementRef.current, 25, 100, -30);
                    }}
                    disabled={arrowDisable}
                >
                    <ArrowBackIcon style={{ color: arrowDisable ? 'gray' : '#000' }} />
                </IconButton>

                <IconButton
                    disabled={!arrowDisable}
                    onClick={() => {
                        handleHorizantalScroll(elementRef.current, 25, 100, 30);
                    }}
                >
                    <ArrowForwardIcon style={{ color: arrowDisable ? '#000' : 'gray' }} />
                </IconButton>
            </div>
            <div style={{ marginTop: -2, marginLeft: 24 }}>
                <Grid container marginLeft={-5} marginTop={-6} style={{ display: 'flex', width: 500, height: '100%' }}>
                    <Avatar alt="Remy Sharp" src={spell} sx={{ width: 25, height: 25, marginTop: 0.5 }} />
                    <Typography
                        style={{
                            marginLeft: 6,
                            fontSize: 22,
                            width: 400,
                            fontFamily: 'DMSans-Regular',
                        }}
                    >
                        Your Thought Space
                    </Typography>
                </Grid>
                {data &&
                    data?.getAllMemo?.memos.map(
                        (item, index) =>
                            index < 0 && (
                                <Chip
                                    // onClick={() => {
                                    //     if (item.id) {
                                    //         handleHorizantalScroll(elementRef.current, 25, 100, -28);
                                    //     }
                                    // }}
                                    deleteIcon={<CloseIcon style={{ fontSize: 20, color: '#313233' }} />}
                                    label={item?.displayName}
                                    onDelete={() => deleteItem(index)}
                                    style={{
                                        marginLeft: -42,
                                        marginRight: 50,
                                        marginTop: 12,
                                        backgroundColor: '#DADDE2',
                                        fontFamily: 'DMSans-Medium',
                                        color: '#313233',
                                    }}
                                />
                            ),
                    )}
                {data?.getAllMemo.memos.length !== 0 && (
                    <Chip
                        variant="outlined"
                        deleteIcon={<CloseIcon style={{ fontSize: 20 }} />}
                        label={'Close All'}
                        onDelete={() => ClearAll()}
                        style={{
                            marginLeft: -40,
                            marginRight: 50,
                            marginTop: 12,
                            color: 'gray',
                            fontFamily: 'DMSans-Medium',
                        }}
                    />
                )}
            </div>
            {/* {location.state.click === false ?  */}
            <div className="img-container" ref={elementRef} style={{ marginLeft: -40 }}>
                {/* {data?.getAllMemo.memos.map((item, index) => (                     */}
                <div style={{ marginTop: -60, marginLeft: -20 }}>
                    <ThoughtCard item={data?.getAllMemo.memos[1]} />
                </div>
                {/* ))} */}
                {data?.getAllMemo.memos.length === 0 && <NotFound />}
            </div>
            {/* : null} */}
        </>
    );
}

export default Home;
