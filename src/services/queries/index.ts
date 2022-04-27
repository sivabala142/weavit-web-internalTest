import { gql } from '@apollo/client';
import {
    ALL_COUNT,
    NODE_INSIGHT,
    MEMO_BLOCK,
    NODE_RECORD_ROW,
    NODE_RECORD_SNAPSHOT,
    NODE_RECORD_TILE,
    RESULTS_COUNT,
    UPCOMING_EVENT,
    UPSERT_WEBCONTENT_RESULTS,
    USER_ME,
    WEAVIT_USER,
    ATTACHED_NODE,
    SUGGESTED_ENTITIES,
} from './fragments';

//
//  Queries
//
export const GET_ME_LITE = gql`
    ${USER_ME}
    query GetMeLite {
        me {
            ...me
        }
    }
`;

export const GET_ME = gql`
    ${USER_ME}
    query GetMe {
        me {
            ...me
        }
        getAchievements {
            onboarding
        }
    }
`;

export const ADD_USER = gql`
    mutation createUser($email: String!) {
        createUser(user: { email: $email }) {
            userId
        }
    }
`;

export const PERFORM_MERGE_ACTION = gql`
    mutation performMergeAction($action: MergeAction!, $mainNodeID: String, $nodeIDs: [String!]) {
        performMergeAction(action: $action, mainNodeID: $mainNodeID, nodeIDs: $nodeIDs)
    }
`;

// export const DELETE_RELATIONSHIP = gql`
//   mutation deleteRelationship($relType: String!, $targetNodeID: String!, $sourceNodeID: String!) {
//     deleteRelationship(relType: $relType, targetNodeID: $targetNodeID, sourceNodeID: $sourceNodeID)
//   }
// `;

export const CREATE_COLLECTION = gql`
    mutation createCollectionV2($displayName: String!, $description: String!, $sourceNodes: [NodeInput!], $properties: JSON) {
        createCollectionV2(displayName: $displayName, description: $description, sourceNodes: $sourceNodes, properties: $properties) {
            id
            displayName
        }
    }
`;

// export const CREATE_TOPIC = gql`
//   mutation createTopic($displayName: String!, $description: String!, $sourceNodes: [NodeInput!]) {
//     createTopic(displayName: $displayName, description: $description, sourceNodes: $sourceNodes)
//   }
// `;
export const CREATE_TOPIC = gql`
    mutation createTopicV2(
        $displayName: String!
        $description: String
        $nodeID: String
        $fromWikipedia: Boolean
        $wikipediaID: String
        $profilePicture: ImageInput
        $sourceNodes: [NodeInput!]
        $properties: JSON
    ) {
        createTopicV2(
            displayName: $displayName
            description: $description
            nodeID: $nodeID
            fromWikipedia: $fromWikipedia
            wikipediaID: $wikipediaID
            profilePicture: $profilePicture
            sourceNodes: $sourceNodes
            properties: $properties
        ) {
            id
            displayName
        }
    }
`;

export const CREATE_TOPICS = gql`
    mutation createTopicsV2($topics: [TopicInput!]!) {
        createTopicsV2(topics: $topics) {
            id
            displayName
        }
    }
`;

export const UPSERT_WEBCONTENT = gql`
    ${UPSERT_WEBCONTENT_RESULTS}
    mutation upsertWebContent(
        $link: String!
        $nodeID: String
        $title: String
        $fetchMetadata: Boolean
        $author: String
        $siteName: String
        $description: String
        $type: String
        $icon: String
        $backgroundImage: String
        $forceMemoCreation: Boolean
    ) {
        upsertWebContent(
            link: $link
            nodeID: $nodeID
            title: $title
            fetchMetadata: $fetchMetadata
            author: $author
            siteName: $siteName
            description: $description
            type: $type
            icon: $icon
            backgroundImage: $backgroundImage
            forceMemoCreation: $forceMemoCreation
        ) {
            ...upsertWebContentResults
        }
    }
`;

export const ADD_ACCOUNT = gql`
    mutation addAccount($provider: String!, $accountId: String!, $scope: [String!]!, $accessToken: String, $name: String, $imap_host: String, $imap_port: Int, $emailAddress: String) {
        addAccount(provider: $provider, accountId: $accountId, scope: $scope, accessToken: $accessToken, name: $name, imap_host: $imap_host, imap_port: $imap_port, emailAddress: $emailAddress)
    }
`;

export const SYNC_ACCOUNTS = gql`
    mutation syncAccounts($tokenId: String, $scopes: [String!]) {
        syncAccounts(tokenId: $tokenId, scopes: $scopes)
    }
`;

export const UPDATE_USER = gql`
    ${USER_ME}
    mutation updateUser(
        $firstName: String
        $lastName: String
        $intends: [Intends!]
        $topic_interests: [String!]
        $title: String
        $companyName: String
        $allowFriendReq: Boolean
        $completedGuidedOnboarding: Boolean
        $completedSignup: Boolean
    ) {
        updateUser(
            user: {
                firstName: $firstName
                lastName: $lastName
                intends: $intends
                topic_interests: $topic_interests
                title: $title
                companyName: $companyName
                allowFriendReq: $allowFriendReq
                completedGuidedOnboarding: $completedGuidedOnboarding
                completedSignup: $completedSignup
            }
        ) {
            ...me
        }
    }
`;
export const UNLINK = gql`
    mutation unlinkAccount($tokenId: String!) {
        unlinkAccount(tokenId: $tokenId)
    }
`;

export const PERFORM_NODE_ACTION = gql`
    mutation performNodeAction($nodeID: String!, $action: NodeFilter!, $nodeLabel: NodeType!, $undo: Boolean, $targetNode: NodeInput) {
        performNodeAction(nodeID: $nodeID, action: $action, nodeLabel: $nodeLabel, undo: $undo, targetNode: $targetNode)
    }
`;

export const PERFORM_NODES_ACTION = gql`
    mutation performNodesAction($nodes: [NodeInput!]!, $action: NodeFilter!, $undo: Boolean) {
        performNodesAction(nodes: $nodes, action: $action, undo: $undo)
    }
`;

export const REQ_PROFILE_ACCOUNT_PICTURE = gql`
    mutation profilePictureUploadUrl($imageInfo: ImageInfoInput!) {
        profilePictureUploadUrl(imageInfo: $imageInfo)
    }
`;

export const SEARCH_NODES_BY_FILTER = gql`
    ${NODE_RECORD_TILE}
    query getNodesByFilter($currentPage: Int, $pageSize: Int, $skipToken: Int, $filter: NodeFilter!, $targetNode: NodeInput) {
        getNodesByFilter(currentPage: $currentPage, pageSize: $pageSize, skipToken: $skipToken, filter: $filter, targetNode: $targetNode) {
            data {
                ...nodeRecordTile
            }
        }
    }
`;

export const SET_SYNC_ENABLE = gql`
    mutation setSyncEnable($tokenId: String!, $isSyncEnabled: Boolean) {
        updateAccount(updateInput: { isSyncEnabled: $isSyncEnabled }, tokenId: $tokenId)
    }
`;

// export const UPSERT_MEMO = gql`
//   mutation upsertMemo($nodeID: String, $properties: MemoProperties!) {
//     upsertMemo(nodeID: $nodeID, properties: $properties)
//   }
// `;

export const UPSERT_MEMO_V2 = gql`
    ${SUGGESTED_ENTITIES}
    mutation upsertMemoV2(
        $properties: MemoProperties!
        $targetedNodeLabel: NodeType
        $targetedNodeID: String
        $nodeID: String
        $linkedTo: [String!]
        $isTrashed: Boolean
        $isBookmarked: Boolean
        $shouldParse: Boolean
        $memoContentType: String!
    ) {
        upsertMemoV2(
            properties: $properties
            targetedNodeLabel: $targetedNodeLabel
            targetedNodeID: $targetedNodeID
            nodeID: $nodeID
            linkedTo: $linkedTo
            isTrashed: $isTrashed
            isBookmarked: $isBookmarked
            shouldParse: $shouldParse
            memoContentType: $memoContentType
        ) {
            memoID
            suggestedEntities {
                ...suggestedEntitiesAttr
            }
        }
    }
`;

export const UPSERT_RELATIONSHIPS = gql`
    mutation upsertRelationships($sourceNodes: [NodeInput!]!, $targetNode: NodeInput!, $relType: String!, $properties: JSON) {
        upsertRelationships(sourceNodes: $sourceNodes, targetNode: $targetNode, relType: $relType, properties: $properties)
    }
`;

export const GET_ALL_MEMO = gql`
    ${MEMO_BLOCK}
    query getAllMemo(
        $currentPage: Int
        $pageSize: Int
        $skipToken: Int
        $beforeDate: Float
        $afterDate: Float
        $targetedNodeLabel: NodeType
        $targetedNodeID: String
        $nodeIDs: [String!]
        $criteria: CriteriaMemoArgs
        $memoContentType: [MemoContentType]
        $count: Int
    ) {
        getAllMemo(
            currentPage: $currentPage
            pageSize: $pageSize
            skipToken: $skipToken
            beforeDate: $beforeDate
            afterDate: $afterDate
            targetedNodeLabel: $targetedNodeLabel
            targetedNodeID: $targetedNodeID
            nodeIDs: $nodeIDs
            criteria: $criteria
            memoContentType: $memoContentType
            count: $count
        ) {
            memos {
                ...memoBlock
            }
            count
        }
    }
`;

export const GET_MEMO = gql`
    ${MEMO_BLOCK}
    query getMemo($nodeID: String!, $setLastViewed: Boolean) {
        getMemo(nodeID: $nodeID, setLastViewed: $setLastViewed) {
            ...memoBlock
        }
    }
`;

export const IMPORT_CONTACTS = gql`
    mutation importContacts($tokenId: String!, $contacts: [ContactInput!]!) {
        importContacts(tokenId: $tokenId, contacts: $contacts)
    }
`;

export const GET_SNAPSHOT = gql`
    ${NODE_RECORD_ROW}
    ${NODE_RECORD_SNAPSHOT}
    ${WEAVIT_USER}
    query getSnapshot($nodeId: String!, $nodeType: NodeType) {
        searchByQueryType(queryType: RELEVANT, nodeId: $nodeId, nodeType: $nodeType) {
            data {
                ...nodeRecordRow
            }
            node {
                ...nodeRecordSnapshot
                ...weavitUser
            }
        }
    }
`;

export const UPDATE_SNAPSHOT = gql`
    mutation updateNode($nodeId: String!, $nodeLabel: NodeType!, $properties: UpdateNodeProperties!) {
        updateNode(nodeId: $nodeId, nodeLabel: $nodeLabel, properties: $properties) {
            imageUrl
        }
    }
`;

export const GET_SNAPSHOT_DETAILS = gql`
    ${NODE_RECORD_ROW}
    ${NODE_RECORD_SNAPSHOT}
    ${WEAVIT_USER}
    query getSnapshotDetails($nodeId: String!, $nodeType: NodeType!) {
        searchByQueryType(queryType: RELEVANT, nodeId: $nodeId, nodeType: $nodeType) {
            data {
                ...nodeRecordRow
            }
            node {
                ...nodeRecordSnapshot
                ...weavitUser
            }
        }
        getNodeById(nodeID: $nodeId, nodeLabel: $nodeType) {
            merged {
                ...nodeRecordRow
            }
        }
    }
`;

export const GET_SNAPSHOT_INSIGHT = gql`
    ${NODE_INSIGHT}
    query getSnapshotInsight($nodeID: String!, $nodeLabel: NodeType!) {
        getNodeById(nodeID: $nodeID, nodeLabel: $nodeLabel) {
            id
            nodeID
            type
            insight {
                ...nodeInsight
            }
        }
    }
`;

export const GET_INTEGRATION_PROGRESS = gql`
    query getProgress {
        getProgress
    }
`;

export const DELETE_ACCOUNT = gql`
    mutation deleteUser {
        deleteUser
    }
`;

export const SEND_REQUEST_EMAIL = gql`
    mutation sendEmail($template: EmailTemplates!) {
        sendEmail(template: $template)
    }
`;

export const GET_ALL_TOPICS_LITE = gql`
    ${NODE_RECORD_ROW}
    query getAllTopics($fromWikipedia: Boolean) {
        getAllTopics(fromWikipedia: $fromWikipedia) {
            results {
                ...nodeRecordRow
            }
        }
    }
`;

export const CLAIM_REFERRAL_CODE = gql`
    mutation claimReferralCode($code: String!) {
        claimReferralCode(code: $code)
    }
`;

export const CREATE_USER_EVENT = gql`
    mutation createUserEvent($event: EventTypes!, $correlationId: String!) {
        createUserEvent(event: $event, correlationId: $correlationId)
    }
`;

export const GET_ACHIEVEMENTS = gql`
    query getAchievements {
        getAchievements {
            onboarding
        }
    }
`;

export const GET_UPCOMING_EVENTS = gql`
    ${UPCOMING_EVENT}
    query getUpcomingEvents($pageSize: Int, $nextEventStartDate: Float, $nextEventEndDate: Float, $previousEventEndDate: Float, $previousEventStartDate: Float, $orderType: OrderType) {
        getUpcomingEvents(
            pageSize: $pageSize
            nextEventStartDate: $nextEventStartDate
            nextEventEndDate: $nextEventEndDate
            previousEventEndDate: $previousEventEndDate
            previousEventStartDate: $previousEventStartDate
            orderType: $orderType
        ) {
            results {
                ...upcomingEvent
            }
        }
    }
`;

export const GET_MY_PINNED_NODES = gql`
    ${NODE_RECORD_TILE}
    query getMyPinnedNodes {
        getNodesByFilter(pageSize: 100, filter: PINNED) {
            data {
                ...nodeRecordTile
            }
        }
    }
`;

export const GET_RECENTLY_VIEWED_ROWS = gql`
    ${NODE_RECORD_ROW}
    ${ATTACHED_NODE}
    query getRecentlyViewedRows($nodeTypeFilters: [NodeType!], $pageSize: Int, $skipToken: Int) {
        searchByQueryType(queryType: ALL_RELEVANT, nodeTypeFilters: $nodeTypeFilters, pageSize: $pageSize, sortingType: LAST_VIEWED, skipToken: $skipToken) {
            data {
                ...nodeRecordRow
                attachedNode {
                    ...attachedNode
                }
            }
        }
    }
`;
export const GET_RECENTLY_VIEWED_TILES = gql`
    ${NODE_RECORD_TILE}
    query getRecentlyViewedTiles($nodeTypeFilters: [NodeType!], $pageSize: Int, $skipToken: Int) {
        searchByQueryType(queryType: ALL_RELEVANT, nodeTypeFilters: $nodeTypeFilters, pageSize: $pageSize, sortingType: LAST_VIEWED, skipToken: $skipToken) {
            data {
                ...nodeRecordTile
            }
        }
    }
`;

export const SEARCH_NODES_V1 = gql`
    ${RESULTS_COUNT}
    ${NODE_RECORD_ROW}
    query searchNodesV1($queryType: QueryType!, $nodeTypeFilters: [NodeType!], $textSearchfilter: String, $sortingType: SortingType, $pageSize: Int, $skipToken: Int) {
        searchByQueryType(queryType: $queryType, nodeTypeFilters: $nodeTypeFilters, textSearchfilter: $textSearchfilter, sortingType: $sortingType, pageSize: $pageSize, skipToken: $skipToken) {
            data {
                ...nodeRecordRow
            }
            ...resultsCount
            nextNodeIdentity
            nextAffinityValue
            args {
                queryType
                nodeTypeFilters
                textSearchfilter
                nodeId
                nextAffinityValue
                nextNodeIdentity
                currentPage
                pageSize
                skipToken
            }
        }
    }
`;

export const SEARCH_NODES = gql`
    ${ALL_COUNT}
    ${NODE_RECORD_ROW}
    query searchNodes(
        $onlyMemoTitle: Boolean
        $nodeTypeFilters: [NodeType!]
        $sortingType: SortingType
        $textSearchfilter: String
        $resultsByNodeType: Int
        $pageSize: Int
        $skipToken: Int
        $currentPage: Int
        $memoContentType: [MemoContentType]
    ) {
        searchByQueryType(
            queryType: NODE_TEXT_SEARCH
            onlyMemoTitle: $onlyMemoTitle
            nodeTypeFilters: $nodeTypeFilters
            sortingType: $sortingType
            textSearchfilter: $textSearchfilter
            resultsByNodeType: $resultsByNodeType
            pageSize: $pageSize
            skipToken: $skipToken
            currentPage: $currentPage
            memoContentType: $memoContentType
        ) {
            data {
                ...nodeRecordRow
            }
            ...allCount
            args {
                queryType
                nodeTypeFilters
                textSearchfilter
                nodeId
                currentPage
                pageSize
                skipToken
            }
        }
    }
`;

export const GET_SUGGESTED_LINKS = gql`
    ${NODE_RECORD_ROW}
    query getSuggestedLinks($nodeID: String!, $nodeType: NodeType!, $suggestedType: NodeType) {
        getSuggestedLinks(nodeID: $nodeID, nodeType: $nodeType, suggestedType: $suggestedType) {
            data {
                ...nodeRecordRow
            }
        }
    }
`;

// export const GET_GUIDED_LINKING_NODES = gql`
//   ${NODE_RECORD_TILE}
//   query getGuidedLinkingData($nodeType: NodeType!, $allNodeTypes: [NodeType!]) {
//     getPerson: searchByQueryType(
//       queryType: RELEVANT
//       nodeTypeFilters: [$nodeType]
//       pageSize: 1
//       skipToken: 0
//     ) {
//       data {
//         ...nodeRecordTile
//       }
//     }
//     getMyWorld: searchByQueryType(
//       queryType: ALL_RELEVANT
//       nodeTypeFilters: $allNodeTypes
//       pageSize: 5
//       skipToken: 0
//     ) {
//       data {
//         ...nodeRecordTile
//       }
//     }
//   }
// `;

// export const GET_GUIDED_MEMO_NODES = gql`
//   ${NODE_RECORD_TILE}
//   query getGuidedMemoData($nodeType: NodeType!) {
//     getCollection: searchByQueryType(
//       queryType: RELEVANT
//       nodeTypeFilters: [$nodeType]
//       pageSize: 1
//       skipToken: 0
//     ) {
//       data {
//         ...nodeRecordTile
//       }
//     }
//   }
// `;

export const GET_USER_GRAPH_STATS = gql`
    query getUserGraphStats {
        getUserGraphStats {
            numberOfAutomatedCollections
            numberOfAutomatedLinks
            numberOfAutomatedMerges
            numberOfCollections
            numberOfEvents
            numberOfHidden
            numberOfMemos
            numberOfPeopleLinks
            numberOfMerges
            numberOfPeople
            numberOfPinned
            numberOfTopics
        }
    }
`;

export const GET_NODE_BY_ID = gql`
    ${NODE_RECORD_SNAPSHOT}
    query getNodeById($nodeID: String!, $nodeLabel: NodeType!, $setLastViewed: Boolean) {
        getNodeById(nodeID: $nodeID, nodeLabel: $nodeLabel, setLastViewed: $setLastViewed) {
            ...nodeRecordSnapshot
        }
    }
`;

export const ADD_DEVICE = gql`
    mutation addDevice($deviceId: String!) {
        addDevice(deviceId: $deviceId)
    }
`;

export const CLEAR_LAST_VIEWED = gql`
    mutation clearLastViewed {
        clearLastViewed
    }
`;

export const ANALYZE_ENTITIES = gql`
    ${SUGGESTED_ENTITIES}
    query analyzeEntities($text: String!, $memoId: String) {
        analyzeEntities(text: $text, memoId: $memoId) {
            entities {
                ...suggestedEntitiesAttr
            }
        }
    }
`;

export const EXPORT_USER_DATA = gql`
    mutation exportGraphData {
        exportGraphData
    }
`;
