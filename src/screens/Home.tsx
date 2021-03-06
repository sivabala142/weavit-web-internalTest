import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import Avatar from '@mui/material/Avatar';
import CloseIcon from '@mui/icons-material/Close';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ThoughtCard from '../components/Cards/ThoughtCard';
import spell from '../assets/images/spell.png';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NotFound from '../components/NotFound/FindSection';
import { useLazyQueryNoCache, PAGE_SIZE } from '../store/index';
import { IGetAllMemoQueryResult, IGetAllMemoQueryVariables, IGetNodeByIdQueryResult, IGetNodeByIdQueryVariables } from '../graphql-models';
import { GET_ALL_MEMO, GET_NODE_BY_ID } from '../services/queries';

function Home() {
    const media = useMediaQuery('(min-width:1800px)');
    const location: any = useLocation();
    const navigate = useNavigate();
    const [thoughtData, setThoughtData] = useState<any>([]);
    const [NodeData, setNodeData] = useState<any>([]);
    const [ClearAll, setClearAll] = useState('');
    const [queryMemos, { error, data, loading }] = useLazyQueryNoCache<IGetAllMemoQueryResult, IGetAllMemoQueryVariables>(GET_ALL_MEMO) as any;
    const [queryNode, { error: nodeError, data: nodeData }] = useLazyQueryNoCache<IGetNodeByIdQueryResult, IGetNodeByIdQueryVariables>(GET_NODE_BY_ID);
    console.log('ClearAll', ClearAll);

    useEffect(() => {
        if (location.state?.click) {
            fetchNode().then((e: any) => {
                let node = [...NodeData, e.data?.getNodeById];
                node = node.filter(function (element) {
                    return element !== undefined;
                });
                setNodeData([...node]);
            });
            fetchTimeline().then((e: any) => {
                let v = [...thoughtData, e.data?.getAllMemo?.memos];
                v = v.filter(function (element) {
                    return element !== undefined;
                });
                setThoughtData([...v]);
            });
        }
    }, [location?.state?.id?.nodeID]);

    const fetchTimeline = async (addition?: Partial<IGetAllMemoQueryVariables>) => {
        const variables: IGetAllMemoQueryVariables = {
            pageSize: PAGE_SIZE,
            skipToken: 0,
            targetedNodeID: location?.state?.id?.nodeID,
            targetedNodeLabel: location?.state?.id?.type,
            // nodeIDs:location?.state?.nodeID, "memo_9b3ef904-9a85-4dc2-b509-ebaf6f1d6052" ,2 , memo_95672cfb-ba56-43bd-adff-d83a7ecc320e ,1
            ...(addition ?? {}),
        };
        return new Promise((resolve, reject) => {
            resolve(queryMemos({ variables }));
        });
    };
    const fetchNode = async () => {
        const variables: IGetNodeByIdQueryVariables = {
            nodeID: location?.state?.id?.nodeID,
            nodeLabel: location?.state?.id?.type,
            setLastViewed: true,
        };
        return new Promise((resolve, reject) => {
            resolve(queryNode({ variables }));
        });
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
            } else {
                setArrowDisable(false);
            }
        }, speed);
    };
    const clearChip = (e: any) => {
        let filterdData = NodeData.filter((res: any) => res.id !== e);
        setNodeData(filterdData);
    };
    const clearAll = () => {
        setThoughtData([]);
        setNodeData([]);
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
                    <Avatar alt="Remy Sharp" src={spell} sx={{ width: media ? 25 : 20, height: media ? 25 : 20, marginTop: 0.5 }} />
                    <Typography
                        style={{
                            marginLeft: 6,
                            fontSize: media ? 22 : 18,
                            width: 400,
                            fontFamily: 'DMSans-Regular',
                        }}
                    >
                        Your Thought Space
                    </Typography>
                </Grid>
                {NodeData.length > 0 &&
                    NodeData?.map((e: any) => {
                        return (
                            <Chip
                                deleteIcon={<CloseIcon style={{ fontSize: 20, color: '#313233' }} />}
                                onDelete={() => clearChip(e.id)}
                                label={e?.displayName}
                                style={{
                                    marginLeft: -42,
                                    marginRight: 50,
                                    marginTop: 12,
                                    backgroundColor: '#DADDE2',
                                    fontFamily: 'DMSans-Medium',
                                    color: '#313233',
                                }}
                            />
                        );
                    })}

                {NodeData.length > 0 && (
                    <Chip
                        variant="outlined"
                        deleteIcon={<CloseIcon style={{ fontSize: 20, color: '#313233' }} />}
                        onDelete={() => {
                            clearAll();
                        }}
                        label={'Clear All'}
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

            {location?.state?.click ? (
                <div className="img-container" ref={elementRef} style={{ marginLeft: -40 }}>
                    <div style={{ marginTop: -60, display: 'flex' }}>
                        <ThoughtCard item={thoughtData} node={NodeData} />
                    </div>
                </div>
            ) : (
                <NotFound />
            )}
               {NodeData.length === 0 && <NotFound/>}
        </>
    );
}

export default Home;
