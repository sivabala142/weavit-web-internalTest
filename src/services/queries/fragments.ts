import { gql } from '@apollo/client';

/* 
User
*/
export const USER = gql`
    fragment user on User {
        userId
        email
        companyName
        creationDate
        names {
            firstName
            lastName
        }
        biography
        profilePictureUrl
        profilePicture {
            resourcePath
            presignedUrl
        }
        linkedAccounts {
            provider
            accountId
            scope
            scopes
            isSyncEnabled
            emailAddress
            tokenId
            name
        }
        code
        title
    }
`;
export const USER_ME = gql`
    ${USER}
    fragment me on User {
        ...user
        isNew
        intends
        topic_interests
        onboarding {
            topic
        }
        alreadySponsored
        referralLimit
        referralCount
        allowFriendReq
        completedSignup
        completedGuidedOnboarding
    }
`;
export const WEAVIT_USER = gql`
    ${USER}
    fragment weavitUser on NodeRecordSnapshot {
        weavitUser {
            ...user
        }
    }
`;

/* 
profilePicture
*/
export const PROFILE_PICTURE = gql`
    fragment profilePictureAttr on Image {
        fileName
        contentType
        imageUri {
            presignedUrl
            resourcePath
        }
        backgroundUri
    }
`;
export const PROFILE_PICTURE_NODE_RECORD = gql`
    ${PROFILE_PICTURE}
    fragment profilePicture_NodeRecord on NodeRecord {
        imageUri
        profilePictureUrl
        profilePicture {
            ...profilePictureAttr
        }
    }
`;
export const PROFILE_PICTURE_NODE_SNAPSHOT = gql`
    ${PROFILE_PICTURE}
    fragment profilePicture_NodeRecordSnapshot on NodeRecordSnapshot {
        imageUri
        profilePictureUrl
        profilePicture {
            ...profilePictureAttr
        }
    }
`;

/* 
LOCATION
*/
export const LOCATION = gql`
    fragment locationAttr on Location {
        name
    }
`;
export const LOCATION_NODE_RECORD = gql`
    ${LOCATION}
    fragment location_NodeRecord on NodeRecord {
        location {
            ...locationAttr
        }
    }
`;
export const LOCATION_NODE_SNAPSHOT = gql`
    ${LOCATION}
    fragment location_NodeRecordSnapshot on NodeRecordSnapshot {
        location {
            ...locationAttr
        }
    }
`;
export const LOCATION_EVENT_RECORD = gql`
    ${LOCATION}
    fragment location_EventRecord on EventRecord {
        location {
            ...locationAttr
        }
    }
`;
export const LOCATION_UPCOMING_EVENTS = gql`
    ${LOCATION}
    fragment location_UpcomingEvents on UpcomingEvents {
        location {
            ...locationAttr
        }
    }
`;

/* 
EVENT_ORGANIZER
*/
export const EVENT_ORGANIZER = gql`
    fragment eventOrganizerAttr on Person {
        emailAddress
        displayName
    }
`;
export const EVENT_ORGANIZER_NODE_RECORD = gql`
    ${EVENT_ORGANIZER}
    fragment eventOrganizer_NodeRecord on NodeRecord {
        eventOrganizer {
            ...eventOrganizerAttr
        }
    }
`;
export const EVENT_ORGANIZER_NODE_SNAPSHOT = gql`
    ${EVENT_ORGANIZER}
    fragment eventOrganizer_NodeRecordSnapshot on NodeRecordSnapshot {
        eventOrganizer {
            ...eventOrganizerAttr
        }
    }
`;
export const EVENT_ORGANIZER_EVENT_RECORD = gql`
    ${EVENT_ORGANIZER}
    fragment eventOrganizer_EventRecord on EventRecord {
        eventOrganizer {
            ...eventOrganizerAttr
        }
    }
`;
export const EVENT_ORGANIZER_UPCOMING_EVENTS = gql`
    ${EVENT_ORGANIZER}
    fragment eventOrganizer_UpcomingEvents on UpcomingEvents {
        eventOrganizer {
            ...eventOrganizerAttr
        }
    }
`;

/* 
EVENT_ATTENDEES
*/
export const EVENT_ATTENDEES = gql`
    fragment eventAttendeesAttr on Person {
        emailAddress
        displayName
    }
`;
export const EVENT_ATTENDEES_NODE_RECORD = gql`
    ${EVENT_ATTENDEES}
    fragment eventAttendees_NodeRecord on NodeRecord {
        eventAttendees {
            ...eventAttendeesAttr
        }
    }
`;
export const EVENT_ATTENDEES_NODE_SNAPSHOT = gql`
    ${EVENT_ATTENDEES}
    fragment eventAttendees_NodeRecordSnapshot on NodeRecordSnapshot {
        eventAttendees {
            ...eventAttendeesAttr
        }
    }
`;
export const EVENT_ATTENDEES_EVENT_RECORD = gql`
    ${EVENT_ATTENDEES}
    fragment eventAttendees_EventRecord on EventRecord {
        eventAttendees {
            ...eventAttendeesAttr
        }
    }
`;
export const EVENT_ATTENDEES_UPCOMING_EVENTS = gql`
    ${EVENT_ATTENDEES}
    fragment eventAttendees_UpcomingEvents on UpcomingEvents {
        eventAttendees {
            ...eventAttendeesAttr
        }
    }
`;

/* 
Node
*/
export const RESULTS_COUNT = gql`
    fragment resultsCount on Records {
        resultsCount {
            value
            labels
        }
    }
`;

export const ALL_COUNT = gql`
    fragment allCount on Records {
        allCount {
            value
            type
        }
    }
`;

export const SUGGESTED_ENTITIES = gql`
    fragment suggestedEntitiesAttr on NLPEntity {
        label
        entity
        start
        end
        meta
        wikiTopic
        memoIds
    }
`;

/* NodeRecord Attributes for Small Row (e.g. search node to tag)  */
const NODE_RECORD_ROW_LITE = gql`
    ${PROFILE_PICTURE_NODE_RECORD}
    fragment nodeRecordRowLite on NodeRecord {
        id
        nodeID
        type
        displayName
        ...profilePicture_NodeRecord
        affinity
        createdByUser
        lastViewed
        lastContactedDate
        updateDate
        creationDate
        isHidden
        inPocket
        weavitId # HACK: must ask for weavitId otherwise BE won't pass back Weavit account profile picture url
        content
        stringifiedContent
        contentType
    }
`;

/* NodeRecord Attributes for Tile (e.g. Timeline screen) */
const NODE_RECORD_ROW_BASIC = gql`
    ${NODE_RECORD_ROW_LITE}
    ${EVENT_ORGANIZER_NODE_RECORD}
    ${EVENT_ATTENDEES_NODE_RECORD}
    fragment nodeRecordRowBasic on NodeRecord {
        ...nodeRecordRowLite
        organizations {
            name
        }
        occupation
        countRelationships
        eventStartDate
        eventEndDate
        siteName
        author
        urlLink
        publicationDate
        ...eventOrganizer_NodeRecord
        ...eventAttendees_NodeRecord
    }
`;

/* NodeRecord Attributes for Tile (e.g. Timeline screen) */
const ATTACHED_NODE_BASIC = gql`
    ${NODE_RECORD_ROW_BASIC}
    fragment attachedNodeBasic on NodeRecord {
        ...nodeRecordRowBasic
    }
`;
export const ATTACHED_NODE = gql`
    ${NODE_RECORD_ROW_BASIC}
    ${ATTACHED_NODE_BASIC}
    fragment attachedNode on NodeRecord {
        ...nodeRecordRowBasic
        attachedNode {
            ...attachedNodeBasic
        }
        linkedNodes {
            ...attachedNodeBasic
        }
        appearsIn
        suggestedEntities {
            ...suggestedEntitiesAttr
        }
    }
`;

/* NodeRecord Attributes for Normal Row (e.g. Landing / Search screen) */
export const NODE_RECORD_ROW = gql`
    ${NODE_RECORD_ROW_BASIC}
    ${ATTACHED_NODE}
    ${SUGGESTED_ENTITIES}
    fragment nodeRecordRow on NodeRecord {
        ...nodeRecordRowBasic
        attachedNode {
            ...attachedNode
        }
        linkedNodes {
            ...attachedNode
        }
        appearsIn
        suggestedEntities {
            ...suggestedEntitiesAttr
        }
    }
`;

/* NodeRecord Attributes for Tile (e.g. Timeline screen) */
export const UPSERT_WEBCONTENT_RESULTS = gql`
    ${PROFILE_PICTURE}
    fragment upsertWebContentResults on UpsertWebContentResults {
        id
        nodeID
        type
        displayName
        content
        stringifiedContent
        imageUri
        profilePictureUrl
        profilePicture {
            ...profilePictureAttr
        }
        affinity
        createdByUser
        lastViewed
        lastContactedDate
        updateDate
        creationDate
        isHidden
        inPocket
        siteName
        author
        urlLink
        publicationDate
        memoIDs
    }
`;

/* NodeRecord Attributes for Tile (e.g. Timeline screen) */
export const NODE_RECORD_TILE = gql`
    ${NODE_RECORD_ROW}
    fragment nodeRecordTile on NodeRecord {
        ...nodeRecordRow
        topLinks {
            type
            displayName
            nodeID
        }
    }
`;

/* NodeRecord Attributes for Snapshot details (e.g. Snapshot screen) */
export const NODE_RECORD_SNAPSHOT = gql`
    ${PROFILE_PICTURE_NODE_SNAPSHOT}
    ${LOCATION_NODE_SNAPSHOT}
    ${EVENT_ORGANIZER_NODE_SNAPSHOT}
    ${EVENT_ATTENDEES_NODE_SNAPSHOT}
    fragment nodeRecordSnapshot on NodeRecordSnapshot {
        id
        nodeID
        type
        displayName
        createdByUser
        isHidden
        inPocket
        affinity
        organizations {
            name
        }
        occupation
        ...profilePicture_NodeRecordSnapshot
        emailAddresses
        phones
        phoneContactID
        lastViewed
        lastContactedDate
        updateDate
        creationDate
        countRelationships
        eventStatus
        eventResponseStatus
        eventStartDate
        eventEndDate
        contentType
        siteName
        author
        urlLink
        publicationDate
        ...location_NodeRecordSnapshot
        ...eventOrganizer_NodeRecordSnapshot
        ...eventAttendees_NodeRecordSnapshot
        content
        stringifiedContent
        websites
        weavitId
    }
`;

/* Memo Attributes for Block */
export const MEMO_BLOCK = gql`
    ${ATTACHED_NODE}
    ${SUGGESTED_ENTITIES}
    fragment memoBlock on Memo {
        id
        nodeID
        type
        displayName
        content
        stringifiedContent
        affinity
        createdByUser
        lastViewed
        updateDate
        creationDate
        isHidden
        inPocket
        isTrashed
        attachedNode {
            ...attachedNode
        }
        linkedNodes {
            ...attachedNode
        }
        appearsIn
        suggestedEntities {
            ...suggestedEntitiesAttr
        }
    }
`;

export const NODE_INSIGHT = gql`
    ${LOCATION_EVENT_RECORD}
    ${EVENT_ORGANIZER_EVENT_RECORD}
    fragment nodeInsight on Insight {
        firstCommunication
        lastEmailDate
        emailsCount
        lastEventDate
        eventsCount
        fullEmailHistory
        fullEventHistory
        firstEvent {
            nodeID
            nodeOwnerID
            hidden
            updateDate
            ...location_EventRecord
            ...eventOrganizer_EventRecord
            eventResponseStatus
            eventStartDate
            eventEndDate
            eventUpdateDate
            eventSubject
        }
        lastEvent {
            nodeID
            nodeOwnerID
            hidden
            updateDate
            ...location_EventRecord
            ...eventOrganizer_EventRecord
            eventResponseStatus
            eventStartDate
            eventEndDate
            eventUpdateDate
            eventSubject
        }
        firstEmailDate
        firstEventDate
        lastContactedDate
    }
`;

export const UPCOMING_EVENT = gql`
    ${LOCATION_UPCOMING_EVENTS}
    ${EVENT_ORGANIZER_UPCOMING_EVENTS}
    ${EVENT_ATTENDEES_UPCOMING_EVENTS}
    fragment upcomingEvent on UpcomingEvents {
        nodeID
        type
        nodeOwnerID
        content
        displayName
        ...eventOrganizer_UpcomingEvents
        ...eventAttendees_UpcomingEvents
        hidden
        updateDate
        creationDate
        eventCreationDate
        eventResponseStatus
        ...location_UpcomingEvents
        eventStartDate
        eventEndDate
        eventUpdateDate
        eventSubject
        eventNote
    }
`;
