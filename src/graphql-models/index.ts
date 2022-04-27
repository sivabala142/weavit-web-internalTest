export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSON: any;
};

export type IAccount = {
    __typename?: 'Account';
    accountId?: Maybe<Scalars['String']>;
    emailAddress?: Maybe<Scalars['String']>;
    imap_host?: Maybe<Scalars['String']>;
    imap_port?: Maybe<Scalars['Int']>;
    isSyncEnabled?: Maybe<Scalars['Boolean']>;
    name?: Maybe<Scalars['String']>;
    provider?: Maybe<Scalars['String']>;
    scope?: Maybe<Array<Scalars['String']>>;
    scopes?: Maybe<Array<Scalars['String']>>;
    tokenId?: Maybe<Scalars['String']>;
};

export type IAccountUpdateInput = {
    isSyncEnabled?: InputMaybe<Scalars['Boolean']>;
};

export type IAchievementsResult = {
    __typename?: 'AchievementsResult';
    onboarding?: Maybe<Scalars['JSON']>;
};

export type IAddress = {
    __typename?: 'Address';
    city?: Maybe<Scalars['String']>;
    countryOrRegion?: Maybe<Scalars['String']>;
    postalCode?: Maybe<Scalars['String']>;
    state?: Maybe<Scalars['String']>;
    street?: Maybe<Scalars['String']>;
};

export type IAnalyzeEntitiesQueryType = 'NLP_ANALYSIS' | 'SIMILARITY_EMBEDDING';

export type IAnalyzeEntitiesResults = {
    __typename?: 'AnalyzeEntitiesResults';
    entities?: Maybe<Array<INlpEntity>>;
    similiratyEmbeddings?: Maybe<Array<ISimilarityResultEmbedding>>;
};

export type ICollectionResult = {
    __typename?: 'CollectionResult';
    displayName: Scalars['String'];
    id: Scalars['String'];
};

export type IContactInput = {
    additionalName?: InputMaybe<Scalars['String']>;
    birthdate?: InputMaybe<Scalars['Float']>;
    displayName?: InputMaybe<Scalars['String']>;
    emailAddresses?: InputMaybe<Array<Scalars['String']>>;
    familyName?: InputMaybe<Scalars['String']>;
    genders?: InputMaybe<Array<IGender>>;
    givenName?: InputMaybe<Scalars['String']>;
    hobbies?: InputMaybe<Array<Scalars['String']>>;
    nickname?: InputMaybe<Scalars['String']>;
    /** The node Id of the contact */
    nodeID: Scalars['String'];
    /** The node owner Id of the contact */
    nodeOwnerID: Scalars['String'];
    notes?: InputMaybe<Scalars['String']>;
    occupation?: InputMaybe<Array<Scalars['String']>>;
    organizations?: InputMaybe<Array<IOrganization>>;
    phoneContactID?: InputMaybe<Scalars['String']>;
    phones?: InputMaybe<Array<Scalars['String']>>;
    websites?: InputMaybe<Array<Scalars['String']>>;
};

export type ICoordinates = {
    __typename?: 'Coordinates';
    latitude?: Maybe<Scalars['Float']>;
    longitude?: Maybe<Scalars['Float']>;
};

export type ICountRecord = {
    __typename?: 'CountRecord';
    type: INodeType;
    value: Scalars['Int'];
};

export type ICountRecordV2 = {
    __typename?: 'CountRecordV2';
    labels: Array<Scalars['String']>;
    value: Scalars['Int'];
};

export type ICriteriaMemoArgs = 'PENDING_WEBCONTENT';

export type IEmailTemplates = 'MAGIC_LINK' | 'REQUEST_REFERRAL_INVITES_TEMPLATE';

export type IEventRecord = {
    __typename?: 'EventRecord';
    /** Content of the node, useful for memo */
    content?: Maybe<Scalars['String']>;
    creationDate?: Maybe<Scalars['Float']>;
    /** Display name of the node */
    displayName?: Maybe<Scalars['String']>;
    eventAttendees?: Maybe<Array<IPerson>>;
    eventCalendarName?: Maybe<Scalars['String']>;
    eventCreationDate?: Maybe<Scalars['Float']>;
    eventEndDate?: Maybe<Scalars['Float']>;
    eventHtmlLink?: Maybe<Scalars['String']>;
    eventMeetingLink?: Maybe<Scalars['String']>;
    eventOrganizer?: Maybe<IPerson>;
    eventRecurrence?: Maybe<Array<Scalars['String']>>;
    eventResponseStatus?: Maybe<Scalars['String']>;
    eventStartDate?: Maybe<Scalars['Float']>;
    eventStatus?: Maybe<Scalars['String']>;
    eventSubject?: Maybe<Scalars['String']>;
    eventUpdateDate?: Maybe<Scalars['Float']>;
    hidden?: Maybe<Scalars['Boolean']>;
    location?: Maybe<ILocation>;
    nodeID: Scalars['String'];
    nodeOwnerID?: Maybe<Scalars['String']>;
    type: INodeType;
    updateDate?: Maybe<Scalars['Float']>;
};

export type IEventTypes =
    | 'ADD_INTEGRATION_ACCOUNT'
    | 'CREATE_GROUP'
    | 'CREATE_MEMO'
    | 'CREATE_TOPIC'
    | 'EXPLORE_YOUR_WORLD'
    | 'FEEDBACK_SURVEY'
    | 'GET_STARTED'
    | 'INVITE_FRIENDS'
    | 'LINK_ITEMS'
    | 'PHONE_INTEGRATION_ACCOUNT'
    | 'THIRD_PARTY_INTEGRATION_ACCOUNT';

export type IGender = 'FEMALE' | 'MALE' | 'UNSPECIFIED';

export type IGetAllMemoResults = {
    __typename?: 'GetAllMemoResults';
    count?: Maybe<Scalars['Int']>;
    memos?: Maybe<Array<IMemo>>;
};

export type IGetAllNodeCountResponse = {
    __typename?: 'GetAllNodeCountResponse';
    deletedNodesCount: Scalars['Int'];
    status: Scalars['String'];
};

export type IGetAllTopicsResult = {
    __typename?: 'GetAllTopicsResult';
    results: Array<INodeRecord>;
};

export type IGetMemoV2Result = {
    __typename?: 'GetMemoV2Result';
    memo?: Maybe<IMemo>;
};

export type IGetUserGraphDataResponse = {
    __typename?: 'GetUserGraphDataResponse';
    numberOfAutomatedCollections: Scalars['Int'];
    numberOfAutomatedLinks: Scalars['Int'];
    numberOfAutomatedMerges: Scalars['Int'];
    numberOfCollections: Scalars['Int'];
    numberOfEvents: Scalars['Int'];
    numberOfHidden: Scalars['Int'];
    numberOfMemos: Scalars['Int'];
    numberOfMerges: Scalars['Int'];
    numberOfPeople: Scalars['Int'];
    numberOfPeopleLinks: Scalars['Int'];
    numberOfPinned: Scalars['Int'];
    numberOfTopics: Scalars['Int'];
};

export type IGetWebContentResult = {
    __typename?: 'GetWebContentResult';
    memoIDs?: Maybe<Array<Scalars['String']>>;
    webContentID: Scalars['String'];
};

export type IImage = {
    __typename?: 'Image';
    backgroundUri?: Maybe<Scalars['String']>;
    contentType: Scalars['String'];
    fileName: Scalars['String'];
    imageUri?: Maybe<INodePicture>;
};

export type IImageInfoInput = {
    contentType: Scalars['String'];
    filename: Scalars['String'];
};

export type IImageInput = {
    backgroundUri?: InputMaybe<Scalars['String']>;
    contentType: Scalars['String'];
    fileName: Scalars['String'];
    imageUri?: InputMaybe<INodePictureInput>;
};

export type IInsight = {
    __typename?: 'Insight';
    emailsCount?: Maybe<Scalars['Float']>;
    eventsCount: Scalars['Float'];
    firstCommunication?: Maybe<Scalars['Float']>;
    firstEmailDate?: Maybe<Scalars['Float']>;
    firstEvent?: Maybe<IEventRecord>;
    firstEventDate?: Maybe<Scalars['Float']>;
    fullEmailHistory?: Maybe<Scalars['JSON']>;
    fullEventHistory?: Maybe<Scalars['JSON']>;
    lastContactedDate?: Maybe<Scalars['Float']>;
    lastEmailDate?: Maybe<Scalars['Float']>;
    lastEvent?: Maybe<IEventRecord>;
    lastEventDate?: Maybe<Scalars['Float']>;
};

export type IIntends =
    | 'ALL_OF_THE_ABOVE'
    | 'BUSINESS_DEV'
    | 'IDEA_MAPPING'
    | 'MEETING_HACKER'
    | 'NETWORKING'
    | 'NONE_OF_THE_ABOVE'
    | 'NOTETAKING'
    | 'POWER_NETWORKER'
    | 'THOUGHT_MAPPER'
    | 'TOUGHT_MAPPER';

/** List of NLP entities */
export type ILabelNlp =
    /** Numerals that do not fall under another type. */
    | 'CARDINAL'
    /** Absolute or relative dates or periods. */
    | 'DATE'
    /** Named hurricanes, battles, wars, sports events, etc. */
    | 'EVENT'
    /** Buildings, airports, highways, bridges, etc. */
    | 'FAC'
    /** Countries, cities, states. */
    | 'GPE'
    /** Any named language. */
    | 'LANGUAGE'
    /** Named documents made into laws. */
    | 'LAW'
    /** Non-GPE locations, mountain ranges, bodies of water. */
    | 'LOC'
    | 'MEMO'
    /** Monetary values, including unit. */
    | 'MONEY'
    /** Nationalities or religious or political groups. */
    | 'NORP'
    /** “first”, “second”, etc. */
    | 'ORDINAL'
    /** Companies, agencies, institutions, etc. */
    | 'ORG'
    /** Percentage, including ”%“. */
    | 'PERCENT'
    /** People, including fictional. */
    | 'PERSON'
    /** Objects, vehicles, foods, etc. (Not services.) */
    | 'PRODUCT'
    /** Measurements, as of weight or distance. */
    | 'QUANTITY'
    /** Times smaller than a day. */
    | 'TIME'
    | 'TOPIC'
    /** Titles of books, songs, etc. */
    | 'WORK_OF_ART';

export type ILocation = {
    __typename?: 'Location';
    address?: Maybe<Array<IAddress>>;
    coordinates?: Maybe<Array<ICoordinates>>;
    name?: Maybe<Scalars['String']>;
};

export type IMemo = {
    __typename?: 'Memo';
    affinity?: Maybe<Scalars['Float']>;
    appearsIn?: Maybe<Scalars['JSON']>;
    attachedNode?: Maybe<Array<INodeRecord>>;
    /** Author of the node */
    author?: Maybe<Scalars['String']>;
    /** Content of the node, useful for memo */
    content?: Maybe<Scalars['String']>;
    /** Sitename of the node in case of url */
    contentType?: Maybe<Scalars['String']>;
    countRelationships?: Maybe<Scalars['Int']>;
    createdByUser?: Maybe<Scalars['Boolean']>;
    creationDate?: Maybe<Scalars['Float']>;
    /** description of topic node */
    description?: Maybe<Scalars['String']>;
    /** Display name of the node */
    displayName?: Maybe<Scalars['String']>;
    id: Scalars['Int'];
    /** The image uri of the node */
    imageUri?: Maybe<Scalars['String']>;
    inPocket?: Maybe<Scalars['Boolean']>;
    isBookmarked?: Maybe<Scalars['Boolean']>;
    isHidden?: Maybe<Scalars['Boolean']>;
    isTrashed?: Maybe<Scalars['Boolean']>;
    lastContactedDate?: Maybe<Scalars['Float']>;
    lastViewed?: Maybe<Scalars['Float']>;
    linkedNodes?: Maybe<Array<INodeRecord>>;
    /** Content type of memo, useful for differentiate tasks */
    memoContentType?: Maybe<Scalars['String']>;
    nodeID: Scalars['String'];
    nodeOwnerID?: Maybe<Scalars['String']>;
    publicationDate?: Maybe<Scalars['Float']>;
    /** Sitename of the node in case of url */
    siteName?: Maybe<Scalars['String']>;
    stringifiedContent?: Maybe<Scalars['String']>;
    suggestedEntities?: Maybe<Array<INlpEntity>>;
    title?: Maybe<Scalars['String']>;
    type: INodeType;
    updateDate?: Maybe<Scalars['Float']>;
    /** Url link of the node */
    urlLink?: Maybe<Scalars['String']>;
};

export type IMemoContentType = 'COMPLETED_TASK' | 'UNCOMPLETED_TASK' | 'UNSTYLED';

export type IMemoProperties = {
    content?: InputMaybe<Scalars['String']>;
    title?: InputMaybe<Scalars['String']>;
};

export type IMemoSaveResult = {
    __typename?: 'MemoSaveResult';
    memoID: Scalars['String'];
    suggestedEntities?: Maybe<Array<INlpEntity>>;
};

/** All types of action related to merging nodes */
export type IMergeAction = 'MERGE_NODES' | 'SET_MAIN' | 'UNMERGE_NODES';

export type IMutation = {
    __typename?: 'Mutation';
    addAccount: Scalars['Boolean'];
    addDevice?: Maybe<Scalars['Boolean']>;
    claimReferralCode: Scalars['Boolean'];
    /** The query to get all hidden nodes */
    cleanNodesByFilter: Scalars['Boolean'];
    clearLastViewed: Scalars['Boolean'];
    /**
     * Create a node of type collection.
     * A collection is a group of nodes of any type linked together
     */
    createCollection: Scalars['Boolean'];
    /**
     * Create a node of type collection.
     * A collection is a group of nodes of any type linked together
     */
    createCollectionV2: ICollectionResult;
    /**
     * Create a node of type Topic.
     *    A topic is a group of nodes of any type linked together and highly related to a common topic found on Wikipedia
     */
    createTopic: Scalars['Boolean'];
    /**
     * Create a node of type Topic.
     *    A topic is a group of nodes of any type linked together and highly related to a common topic found on Wikipedia
     */
    createTopicV2: ITopicResult;
    /** Create topics in batch */
    createTopics: Scalars['Boolean'];
    /** Create topics in batch */
    createTopicsV2: Array<ITopicResult>;
    createUser?: Maybe<IUser>;
    createUserEvent: Scalars['Boolean'];
    deleteNode: Scalars['Boolean'];
    /** Delete a relationship between two nodes between two person nodes */
    deleteRelationship: Scalars['Boolean'];
    deleteUser?: Maybe<Scalars['Boolean']>;
    exportGraphData: Scalars['Boolean'];
    /** The query to get user node counts by integration */
    getAllNodeCounts: IGetAllNodeCountResponse;
    /**
     * API to import the contacts of the user weavit and insert them into the graph.
     * It will create for most of them
     */
    importContacts: Scalars['Boolean'];
    performMergeAction: Scalars['Boolean'];
    /** Perform specific action on a node */
    performNodeAction: Scalars['Boolean'];
    performNodesAction: Scalars['Boolean'];
    profilePictureUploadUrl?: Maybe<Scalars['String']>;
    sendEmail: Scalars['Boolean'];
    syncAccounts: Scalars['Boolean'];
    unlinkAccount?: Maybe<Scalars['Boolean']>;
    updateAccount?: Maybe<Scalars['Boolean']>;
    /** Update a specific node. The label and the id of the node must be sent */
    updateNode: IUpdateNodeResult;
    updateNotification: Scalars['Boolean'];
    updateUser?: Maybe<IUser>;
    upsertMemoV2: IMemoSaveResult;
    upsertRelationships: Scalars['Boolean'];
    upsertWebContent: IUpsertWebContentResults;
};

export type IMutationAddAccountArgs = {
    accessToken?: InputMaybe<Scalars['String']>;
    accountId: Scalars['String'];
    emailAddress?: InputMaybe<Scalars['String']>;
    imap_host?: InputMaybe<Scalars['String']>;
    imap_port?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    provider: Scalars['String'];
    scope: Array<Scalars['String']>;
};

export type IMutationAddDeviceArgs = {
    deviceId: Scalars['String'];
};

export type IMutationClaimReferralCodeArgs = {
    code: Scalars['String'];
};

export type IMutationCleanNodesByFilterArgs = {
    filter: INodeFilter;
};

export type IMutationCreateCollectionArgs = {
    description: Scalars['String'];
    displayName: Scalars['String'];
    properties?: InputMaybe<Scalars['JSON']>;
    sourceNodes?: InputMaybe<Array<INodeInput>>;
};

export type IMutationCreateCollectionV2Args = {
    description: Scalars['String'];
    displayName: Scalars['String'];
    properties?: InputMaybe<Scalars['JSON']>;
    sourceNodes?: InputMaybe<Array<INodeInput>>;
};

export type IMutationCreateTopicArgs = {
    description?: InputMaybe<Scalars['String']>;
    displayName: Scalars['String'];
    fromWikipedia?: InputMaybe<Scalars['Boolean']>;
    nodeID?: InputMaybe<Scalars['String']>;
    profilePicture?: InputMaybe<IImageInput>;
    properties?: InputMaybe<Scalars['JSON']>;
    sourceNodes?: InputMaybe<Array<INodeInput>>;
    wikipediaID?: InputMaybe<Scalars['String']>;
};

export type IMutationCreateTopicV2Args = {
    description?: InputMaybe<Scalars['String']>;
    displayName: Scalars['String'];
    fromWikipedia?: InputMaybe<Scalars['Boolean']>;
    nodeID?: InputMaybe<Scalars['String']>;
    profilePicture?: InputMaybe<IImageInput>;
    properties?: InputMaybe<Scalars['JSON']>;
    sourceNodes?: InputMaybe<Array<INodeInput>>;
    wikipediaID?: InputMaybe<Scalars['String']>;
};

export type IMutationCreateTopicsArgs = {
    topics: Array<ITopicInput>;
};

export type IMutationCreateTopicsV2Args = {
    topics: Array<ITopicInput>;
};

export type IMutationCreateUserArgs = {
    user: IUserInput;
};

export type IMutationCreateUserEventArgs = {
    correlationId: Scalars['String'];
    event: IEventTypes;
};

export type IMutationDeleteNodeArgs = {
    nodeID: Scalars['String'];
    nodeLabel: INodeType;
};

export type IMutationDeleteRelationshipArgs = {
    relType: Scalars['String'];
    sourceNodeID: Scalars['String'];
    targetNodeID: Scalars['String'];
};

export type IMutationGetAllNodeCountsArgs = {
    dryRun: Scalars['Boolean'];
    sourceId: Scalars['String'];
};

export type IMutationImportContactsArgs = {
    contacts: Array<IContactInput>;
    tokenId: Scalars['String'];
};

export type IMutationPerformMergeActionArgs = {
    action: IMergeAction;
    mainNodeID?: InputMaybe<Scalars['String']>;
    nodeIDs?: InputMaybe<Array<Scalars['String']>>;
};

export type IMutationPerformNodeActionArgs = {
    action: INodeFilter;
    nodeID: Scalars['String'];
    nodeLabel: INodeType;
    targetNode?: InputMaybe<INodeInput>;
    undo?: InputMaybe<Scalars['Boolean']>;
};

export type IMutationPerformNodesActionArgs = {
    action: INodeFilter;
    nodes: Array<INodeInput>;
    targetNode?: InputMaybe<INodeInput>;
    undo?: InputMaybe<Scalars['Boolean']>;
};

export type IMutationProfilePictureUploadUrlArgs = {
    imageInfo: IImageInfoInput;
};

export type IMutationSendEmailArgs = {
    template: IEmailTemplates;
};

export type IMutationSyncAccountsArgs = {
    scopes?: InputMaybe<Array<Scalars['String']>>;
    tokenId?: InputMaybe<Scalars['String']>;
};

export type IMutationUnlinkAccountArgs = {
    tokenId: Scalars['String'];
};

export type IMutationUpdateAccountArgs = {
    tokenId: Scalars['String'];
    updateInput: IAccountUpdateInput;
};

export type IMutationUpdateNodeArgs = {
    nodeId: Scalars['String'];
    nodeLabel: INodeType;
    properties: IUpdateNodeProperties;
};

export type IMutationUpdateNotificationArgs = {
    isRead?: InputMaybe<Scalars['Boolean']>;
    notificationId: Scalars['String'];
};

export type IMutationUpdateUserArgs = {
    user: IUserUpdateInput;
};

export type IMutationUpsertMemoV2Args = {
    isBookmarked?: InputMaybe<Scalars['Boolean']>;
    isTrashed?: InputMaybe<Scalars['Boolean']>;
    linkedTo?: InputMaybe<Array<Scalars['String']>>;
    memoContentType?: InputMaybe<Scalars['String']>;
    nodeID?: InputMaybe<Scalars['String']>;
    properties: IMemoProperties;
    shouldParse?: InputMaybe<Scalars['Boolean']>;
    targetedNodeID?: InputMaybe<Scalars['String']>;
    targetedNodeLabel?: InputMaybe<INodeType>;
};

export type IMutationUpsertRelationshipsArgs = {
    properties?: InputMaybe<Scalars['JSON']>;
    relType: Scalars['String'];
    sourceNodes: Array<INodeInput>;
    targetNode: INodeInput;
};

export type IMutationUpsertWebContentArgs = {
    author?: InputMaybe<Scalars['String']>;
    backgroundImage?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
    fetchMetadata?: InputMaybe<Scalars['Boolean']>;
    forceMemoCreation?: InputMaybe<Scalars['Boolean']>;
    icon?: InputMaybe<Scalars['String']>;
    link: Scalars['String'];
    nodeID?: InputMaybe<Scalars['String']>;
    siteName?: InputMaybe<Scalars['String']>;
    title?: InputMaybe<Scalars['String']>;
    type?: InputMaybe<Scalars['String']>;
};

export type INlpEntity = {
    __typename?: 'NLPEntity';
    /** End position of the entity token in the text */
    end: Scalars['Float'];
    entity: Scalars['String'];
    label: ILabelNlp;
    /** deprecated */
    memoId?: Maybe<Scalars['String']>;
    /** List of memo ids related to the entity */
    memoIds?: Maybe<Array<Scalars['String']>>;
    /** Optional metadata regarding the entity detected. For now, only wikipedia data can be retrieved */
    meta?: Maybe<Scalars['JSON']>;
    /** Start position of the entity token in the text */
    start: Scalars['Float'];
    /** True if the PERSON entity is also a wikipedia topic */
    wikiTopic?: Maybe<Scalars['Boolean']>;
    /** The wikipedia url */
    wikiUrl?: Maybe<Scalars['String']>;
};

export type INodeFilter = 'HIDDEN' | 'PINNED' | 'POCKET' | 'TRASHED';

/** Object representing a node as an input */
export type INodeInput = {
    /** The id of the node */
    id: Scalars['String'];
    /** The label of the node, reference to the neo4j label */
    label: INodeType;
    /** Pass the true value for removing the relationship */
    undo?: InputMaybe<Scalars['Boolean']>;
};

export type INodePicture = {
    __typename?: 'NodePicture';
    /** The presigned URL of the node picture, stored in AWS S3 */
    presignedUrl?: Maybe<Scalars['String']>;
    /** The resource path of the node picture */
    resourcePath?: Maybe<Scalars['String']>;
};

export type INodePictureInput = {
    /** The presigned URL of the node picture, stored in AWS S3 */
    presignedUrl?: InputMaybe<Scalars['String']>;
    /** The resource path of the node picture */
    resourcePath?: InputMaybe<Scalars['String']>;
};

export type INodeRecord = {
    __typename?: 'NodeRecord';
    affinity?: Maybe<Scalars['Float']>;
    appearsIn?: Maybe<Scalars['JSON']>;
    attachedNode?: Maybe<Array<INodeRecord>>;
    /** Author of the node */
    author?: Maybe<Scalars['String']>;
    /** Content of the node, useful for memo */
    content?: Maybe<Scalars['String']>;
    /** Sitename of the node in case of url */
    contentType?: Maybe<Scalars['String']>;
    countRelationships?: Maybe<Scalars['Int']>;
    createdByUser?: Maybe<Scalars['Boolean']>;
    creationDate?: Maybe<Scalars['Float']>;
    /** description of topic node */
    description?: Maybe<Scalars['String']>;
    /** Display name of the node */
    displayName?: Maybe<Scalars['String']>;
    emailAddresses?: Maybe<Array<Scalars['String']>>;
    eventAttendees?: Maybe<Array<IPerson>>;
    /** The calendar name associated to the event */
    eventCalendarName?: Maybe<Scalars['String']>;
    eventEndDate?: Maybe<Scalars['Float']>;
    eventHtmlLink?: Maybe<Scalars['String']>;
    eventMeetingLink?: Maybe<Scalars['String']>;
    eventOrganizer?: Maybe<IPerson>;
    eventRecurrence?: Maybe<Array<Scalars['String']>>;
    eventResponseStatus?: Maybe<Scalars['String']>;
    eventStartDate?: Maybe<Scalars['Float']>;
    eventStatus?: Maybe<Scalars['String']>;
    id: Scalars['Int'];
    /** The image uri of the node */
    imageUri?: Maybe<Scalars['String']>;
    inPocket?: Maybe<Scalars['Boolean']>;
    insight?: Maybe<IInsight>;
    isHidden?: Maybe<Scalars['Boolean']>;
    lastContactedDate?: Maybe<Scalars['Float']>;
    lastViewed?: Maybe<Scalars['Float']>;
    linkedNodes?: Maybe<Array<INodeRecord>>;
    location?: Maybe<ILocation>;
    /** Content type of memo, useful for differentiate tasks */
    memoContentType?: Maybe<Scalars['String']>;
    nodeID: Scalars['String'];
    nodeOwnerID?: Maybe<Scalars['String']>;
    occupation?: Maybe<Array<Scalars['String']>>;
    organizations?: Maybe<Array<IOrganizationOutput>>;
    phoneContactID?: Maybe<Scalars['String']>;
    phones?: Maybe<Array<Scalars['String']>>;
    profilePicture?: Maybe<IImage>;
    /** The picture url for the node */
    profilePictureUrl?: Maybe<Scalars['String']>;
    /** The image uri of the node */
    profilePictureWeavit?: Maybe<IProfilePicture>;
    publicationDate?: Maybe<Scalars['Float']>;
    /** Sitename of the node in case of url */
    siteName?: Maybe<Scalars['String']>;
    stringifiedContent?: Maybe<Scalars['String']>;
    suggestedEntities?: Maybe<Array<INlpEntity>>;
    topLinks?: Maybe<Array<ITopNode>>;
    type: INodeType;
    updateDate?: Maybe<Scalars['Float']>;
    /** Url link of the node */
    urlLink?: Maybe<Scalars['String']>;
    userRelSourceTargetIDs?: Maybe<Array<Scalars['String']>>;
    weavitId?: Maybe<Scalars['String']>;
    websites?: Maybe<Array<Scalars['String']>>;
};

export type INodeRecordSnapshot = {
    __typename?: 'NodeRecordSnapshot';
    affinity?: Maybe<Scalars['Float']>;
    appearsIn?: Maybe<Scalars['JSON']>;
    attachedNode?: Maybe<Array<INodeRecord>>;
    /** Author of the node */
    author?: Maybe<Scalars['String']>;
    /** Content of the node, useful for memo */
    content?: Maybe<Scalars['String']>;
    /** Sitename of the node in case of url */
    contentType?: Maybe<Scalars['String']>;
    countRelationships?: Maybe<Scalars['Int']>;
    createdByUser?: Maybe<Scalars['Boolean']>;
    creationDate?: Maybe<Scalars['Float']>;
    /** description of topic node */
    description?: Maybe<Scalars['String']>;
    /** Display name of the node */
    displayName?: Maybe<Scalars['String']>;
    emailAddresses?: Maybe<Array<Scalars['String']>>;
    eventAttendees?: Maybe<Array<IPerson>>;
    /** The calendar name associated to the event */
    eventCalendarName?: Maybe<Scalars['String']>;
    eventEndDate?: Maybe<Scalars['Float']>;
    eventHtmlLink?: Maybe<Scalars['String']>;
    eventMeetingLink?: Maybe<Scalars['String']>;
    eventOrganizer?: Maybe<IPerson>;
    eventRecurrence?: Maybe<Array<Scalars['String']>>;
    eventResponseStatus?: Maybe<Scalars['String']>;
    eventStartDate?: Maybe<Scalars['Float']>;
    eventStatus?: Maybe<Scalars['String']>;
    id: Scalars['Int'];
    /** The image uri of the node */
    imageUri?: Maybe<Scalars['String']>;
    inPocket?: Maybe<Scalars['Boolean']>;
    insight?: Maybe<IInsight>;
    isHidden?: Maybe<Scalars['Boolean']>;
    lastContactedDate?: Maybe<Scalars['Float']>;
    lastViewed?: Maybe<Scalars['Float']>;
    linkedByMe?: Maybe<Array<INodeRecord>>;
    linkedNodes?: Maybe<Array<INodeRecord>>;
    location?: Maybe<ILocation>;
    /** Content type of memo, useful for differentiate tasks */
    memoContentType?: Maybe<Scalars['String']>;
    merged?: Maybe<Array<INodeRecord>>;
    nodeID: Scalars['String'];
    nodeOwnerID?: Maybe<Scalars['String']>;
    occupation?: Maybe<Array<Scalars['String']>>;
    organizations?: Maybe<Array<IOrganizationOutput>>;
    phoneContactID?: Maybe<Scalars['String']>;
    phones?: Maybe<Array<Scalars['String']>>;
    profilePicture?: Maybe<IImage>;
    /** The picture url for the snapshot node */
    profilePictureUrl?: Maybe<Scalars['String']>;
    /** The image uri of the node */
    profilePictureWeavit?: Maybe<IProfilePicture>;
    publicationDate?: Maybe<Scalars['Float']>;
    /** Sitename of the node in case of url */
    siteName?: Maybe<Scalars['String']>;
    stringifiedContent?: Maybe<Scalars['String']>;
    suggestedEntities?: Maybe<Array<INlpEntity>>;
    topLinks?: Maybe<Array<ITopNode>>;
    type: INodeType;
    updateDate?: Maybe<Scalars['Float']>;
    /** Url link of the node */
    urlLink?: Maybe<Scalars['String']>;
    userRelSourceTargetIDs?: Maybe<Array<Scalars['String']>>;
    weavitId?: Maybe<Scalars['String']>;
    weavitUser?: Maybe<IUser>;
    websites?: Maybe<Array<Scalars['String']>>;
};

export type INodeType = 'DOCUMENT' | 'EVENT' | 'GROUP' | 'LOCATION' | 'MEMO' | 'PERSON' | 'TOPIC' | 'WEBCONTENT';

export type INotification = {
    __typename?: 'Notification';
    _id: Scalars['String'];
    creationDate: Scalars['String'];
    isRead: Scalars['Boolean'];
    shouldPush: Scalars['Boolean'];
    type: Scalars['String'];
    userId: Scalars['String'];
};

export type INotificationsResult = {
    __typename?: 'NotificationsResult';
    count?: Maybe<Scalars['Int']>;
    notifications?: Maybe<Array<INotification>>;
};

export type IOnboardingData = {
    __typename?: 'OnboardingData';
    topic?: Maybe<Scalars['String']>;
};

export type IOrderType = 'ASC' | 'DESC';

export type IOrganization = {
    name?: InputMaybe<Scalars['String']>;
};

export type IOrganizationOutput = {
    __typename?: 'OrganizationOutput';
    name?: Maybe<Scalars['String']>;
};

export type IPerson = {
    __typename?: 'Person';
    displayName?: Maybe<Scalars['String']>;
    emailAddress?: Maybe<Scalars['String']>;
};

export type IProfilePicture = {
    __typename?: 'ProfilePicture';
    presignedUrl?: Maybe<Scalars['String']>;
    resourcePath?: Maybe<Scalars['String']>;
};

export type IQuery = {
    __typename?: 'Query';
    /** The query to get suggested Entities from NLP service */
    analyzeEntities: IAnalyzeEntitiesResults;
    /** Graphql query to get some achievements statistics of the user */
    getAchievements?: Maybe<IAchievementsResult>;
    /** The query to get all memos */
    getAllMemo: IGetAllMemoResults;
    /** Get the all the topics of my universe */
    getAllTopics: IGetAllTopicsResult;
    /** Get memo and all its information linked  */
    getMemo: Array<IMemo>;
    /** Get memo and all its information linked  */
    getMemoV2: IGetMemoV2Result;
    /** The query to search node by id */
    getNodeById: INodeRecordSnapshot;
    /** The query to get all nodes by filter */
    getNodesByFilter: IRecords;
    /** Graphql query to get notifications of the user */
    getNotifications?: Maybe<INotificationsResult>;
    getProgress?: Maybe<Scalars['Float']>;
    /** Get array of relationships between two person nodes */
    getRelationships: Array<IRelationship>;
    /** The query to get suggested links for a snapshot */
    getSuggestedLinks: IRecords;
    /** The query to get suggested merge for a snapshot */
    getSuggestedMerge: IRecords;
    /** Get the list of upcomingEvents which belong to the User */
    getUpcomingEvents: IUpcomingEventsResponse;
    /** The query to get user graph stats */
    getUserGraphStats: IGetUserGraphDataResponse;
    /** Get an existing webcontent thanks to its url */
    getWebContent?: Maybe<IGetWebContentResult>;
    /** User fetch query. Can retrieve main information about the user and linked integrations */
    me?: Maybe<IUser>;
    /**
     * The query to search nodes by query type.
     *     The nodes returned can be filter with nodeTypeFilters.
     *     Use queryType=ALL_RELEVANT if you wanna query all types of nodes
     *     Otherwise, use queryType=RELEVANT with nodeTypeFilters=["PERSON"] to query Person nodes (i.e)
     *
     */
    searchByQueryType: IRecords;
};

export type IQueryAnalyzeEntitiesArgs = {
    analysisType?: InputMaybe<IAnalyzeEntitiesQueryType>;
    memoId?: InputMaybe<Scalars['String']>;
    text: Scalars['String'];
};

export type IQueryGetAllMemoArgs = {
    afterDate?: InputMaybe<Scalars['Float']>;
    analysisType?: InputMaybe<IAnalyzeEntitiesQueryType>;
    beforeDate?: InputMaybe<Scalars['Float']>;
    count?: InputMaybe<Scalars['Int']>;
    criteria?: InputMaybe<ICriteriaMemoArgs>;
    currentPage?: InputMaybe<Scalars['Int']>;
    memoContentType?: InputMaybe<Array<InputMaybe<IMemoContentType>>>;
    nodeIDs?: InputMaybe<Array<Scalars['String']>>;
    pageSize?: InputMaybe<Scalars['Int']>;
    skipToken?: InputMaybe<Scalars['Int']>;
    targetedNodeID?: InputMaybe<Scalars['String']>;
    targetedNodeLabel?: InputMaybe<INodeType>;
    text?: InputMaybe<Scalars['String']>;
};

export type IQueryGetAllTopicsArgs = {
    fromWikipedia?: InputMaybe<Scalars['Boolean']>;
};

export type IQueryGetMemoArgs = {
    nodeID: Scalars['String'];
    setLastViewed?: InputMaybe<Scalars['Boolean']>;
};

export type IQueryGetMemoV2Args = {
    nodeID: Scalars['String'];
    setLastViewed?: InputMaybe<Scalars['Boolean']>;
};

export type IQueryGetNodeByIdArgs = {
    nodeID: Scalars['String'];
    nodeLabel?: InputMaybe<INodeType>;
    setLastViewed?: InputMaybe<Scalars['Boolean']>;
};

export type IQueryGetNodesByFilterArgs = {
    currentPage?: InputMaybe<Scalars['Int']>;
    filter: INodeFilter;
    pageSize?: InputMaybe<Scalars['Int']>;
    skipToken?: InputMaybe<Scalars['Int']>;
    targetNode?: InputMaybe<INodeInput>;
};

export type IQueryGetNotificationsArgs = {
    pageNumber?: InputMaybe<Scalars['Int']>;
    pageSize?: InputMaybe<Scalars['Int']>;
};

export type IQueryGetRelationshipsArgs = {
    sourceNodeID: Scalars['String'];
    targetNodeID: Scalars['String'];
};

export type IQueryGetSuggestedLinksArgs = {
    currentPage?: InputMaybe<Scalars['Int']>;
    nodeID: Scalars['String'];
    nodeType: INodeType;
    pageSize?: InputMaybe<Scalars['Int']>;
    skipToken?: InputMaybe<Scalars['Int']>;
    suggestedType?: InputMaybe<INodeType>;
};

export type IQueryGetSuggestedMergeArgs = {
    currentPage?: InputMaybe<Scalars['Int']>;
    nodeID: Scalars['String'];
    pageSize?: InputMaybe<Scalars['Int']>;
    skipToken?: InputMaybe<Scalars['Int']>;
};

export type IQueryGetUpcomingEventsArgs = {
    nextEventEndDate?: InputMaybe<Scalars['Float']>;
    nextEventStartDate?: InputMaybe<Scalars['Float']>;
    orderType?: InputMaybe<IOrderType>;
    pageSize?: InputMaybe<Scalars['Int']>;
    previousEventEndDate?: InputMaybe<Scalars['Float']>;
    previousEventStartDate?: InputMaybe<Scalars['Float']>;
};

export type IQueryGetWebContentArgs = {
    link: Scalars['String'];
};

export type IQuerySearchByQueryTypeArgs = {
    currentPage?: InputMaybe<Scalars['Int']>;
    memoContentType?: InputMaybe<Array<InputMaybe<IMemoContentType>>>;
    nextAffinityValue?: InputMaybe<Scalars['Float']>;
    nextNodeIdentity?: InputMaybe<Scalars['Int']>;
    nodeId?: InputMaybe<Scalars['String']>;
    nodeType?: InputMaybe<INodeType>;
    nodeTypeFilters?: InputMaybe<Array<INodeType>>;
    onlyCreatedByUser?: InputMaybe<Scalars['Boolean']>;
    onlyMemoTitle?: InputMaybe<Scalars['Boolean']>;
    orderType?: InputMaybe<IOrderType>;
    pageSize?: InputMaybe<Scalars['Int']>;
    queryType: IQueryType;
    resultsByNodeType?: InputMaybe<Scalars['Int']>;
    skipToken?: InputMaybe<Scalars['Int']>;
    sortingType?: InputMaybe<ISortingType>;
    textSearchfilter?: InputMaybe<Scalars['String']>;
    useCache?: InputMaybe<Scalars['Boolean']>;
};

export type IQueryType = 'ALL_RELEVANT' | 'EXPLORE_YOUR_WORLD' | 'NODE_TEXT_SEARCH' | 'PERSON_TEXT_SEARCH' | 'RELEVANT';

export type IRecords = {
    __typename?: 'Records';
    allCount?: Maybe<Array<ICountRecord>>;
    args?: Maybe<ISearchByQueryTypeArgs>;
    data: Array<INodeRecord>;
    nextAffinityValue?: Maybe<Scalars['Float']>;
    nextNodeIdentity?: Maybe<Scalars['Int']>;
    node?: Maybe<INodeRecordSnapshot>;
    resultsCount?: Maybe<ICountRecordV2>;
};

export type IRelationship = {
    __typename?: 'Relationship';
    name: Scalars['String'];
    sourceNodeID: Scalars['String'];
    targetNodeID: Scalars['String'];
    type: Scalars['String'];
};

export type ISearchByQueryTypeArgs = {
    __typename?: 'SearchByQueryTypeArgs';
    /** The current page */
    currentPage: Scalars['Int'];
    /** Optional type to filter out memos */
    memoContentType?: Maybe<Array<Maybe<IMemoContentType>>>;
    /** The next affinity value for pagination */
    nextAffinityValue: Scalars['Float'];
    /** The next node identity value for pagination */
    nextNodeIdentity: Scalars['Int'];
    /** The node id to target for the search */
    nodeId?: Maybe<Scalars['String']>;
    /** The node type of the snapshot node to target for the search */
    nodeType?: Maybe<INodeType>;
    /** A list of node type to filter the search. If missing, send back all nodes */
    nodeTypeFilters?: Maybe<Array<INodeType>>;
    /** To include only nodes created by the user itself through weavit */
    onlyCreatedByUser?: Maybe<Scalars['Boolean']>;
    /** To use cache or not, default is true */
    onlyMemoTitle?: Maybe<Scalars['Boolean']>;
    /** The order type of the node to target for the search */
    orderType?: Maybe<IOrderType>;
    /** The page size */
    pageSize: Scalars['Int'];
    /** The query type */
    queryType: IQueryType;
    /** The number of results to retrieve by node types */
    resultsByNodeType?: Maybe<Scalars['Int']>;
    skipToken?: Maybe<Scalars['Int']>;
    /** The node type of the node to target for the search */
    sortingType?: Maybe<ISortingType>;
    /** The text value to search by text */
    textSearchfilter?: Maybe<Scalars['String']>;
    /** To use cache or not, default is true */
    useCache?: Maybe<Scalars['Boolean']>;
};

export type ISimilarityResultEmbedding = {
    __typename?: 'SimilarityResultEmbedding';
    coefficient: Scalars['Float'];
    memoId: Scalars['String'];
    title: Scalars['String'];
};

export type ISortingType = 'AFFINITY' | 'ALPHABETICAL' | 'LAST_CREATED' | 'LAST_UPDATED' | 'LAST_VIEWED';

export type ITopNode = {
    __typename?: 'TopNode';
    displayName?: Maybe<Scalars['String']>;
    nodeID?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
};

export type ITopicInput = {
    description?: InputMaybe<Scalars['String']>;
    displayName: Scalars['String'];
    fromWikipedia?: InputMaybe<Scalars['Boolean']>;
    nodeID?: InputMaybe<Scalars['String']>;
    profilePicture?: InputMaybe<IImageInput>;
    properties?: InputMaybe<Scalars['JSON']>;
    sourceNodes?: InputMaybe<Array<INodeInput>>;
    wikipediaID?: InputMaybe<Scalars['String']>;
};

export type ITopicResult = {
    __typename?: 'TopicResult';
    displayName: Scalars['String'];
    id: Scalars['String'];
};

export type IUpcomingEvents = {
    __typename?: 'UpcomingEvents';
    /** Content of the node, useful for memo */
    content?: Maybe<Scalars['String']>;
    creationDate?: Maybe<Scalars['Float']>;
    displayName?: Maybe<Scalars['String']>;
    eventAttendees?: Maybe<Array<IPerson>>;
    eventCalendarName?: Maybe<Scalars['String']>;
    eventCreationDate?: Maybe<Scalars['Float']>;
    eventEndDate?: Maybe<Scalars['Float']>;
    eventHtmlLink?: Maybe<Scalars['String']>;
    eventMeetingLink?: Maybe<Scalars['String']>;
    eventNote?: Maybe<Scalars['String']>;
    eventOrganizer?: Maybe<IPerson>;
    eventRecurrence?: Maybe<Array<Scalars['String']>>;
    eventResponseStatus?: Maybe<Scalars['String']>;
    eventStartDate?: Maybe<Scalars['Float']>;
    eventStatus?: Maybe<Scalars['String']>;
    eventSubject?: Maybe<Scalars['String']>;
    eventUpdateDate?: Maybe<Scalars['Float']>;
    hidden?: Maybe<Scalars['Boolean']>;
    location?: Maybe<ILocation>;
    nodeID: Scalars['String'];
    nodeOwnerID?: Maybe<Scalars['String']>;
    type: INodeType;
    updateDate?: Maybe<Scalars['Float']>;
};

export type IUpcomingEventsResponse = {
    __typename?: 'UpcomingEventsResponse';
    results?: Maybe<Array<IUpcomingEvents>>;
};

export type IUpdateNodeProperties = {
    displayName?: InputMaybe<Scalars['String']>;
    occupation?: InputMaybe<Scalars['String']>;
    organization?: InputMaybe<IOrganization>;
    profilePicture?: InputMaybe<IImageInput>;
};

export type IUpdateNodeResult = {
    __typename?: 'UpdateNodeResult';
    imageUrl?: Maybe<Scalars['String']>;
};

export type IUpsertWebContentResults = {
    __typename?: 'UpsertWebContentResults';
    affinity?: Maybe<Scalars['Float']>;
    appearsIn?: Maybe<Scalars['JSON']>;
    attachedNode?: Maybe<Array<INodeRecord>>;
    /** Author of the node */
    author?: Maybe<Scalars['String']>;
    /** Content of the node, useful for memo */
    content?: Maybe<Scalars['String']>;
    /** Sitename of the node in case of url */
    contentType?: Maybe<Scalars['String']>;
    countRelationships?: Maybe<Scalars['Int']>;
    createdByUser?: Maybe<Scalars['Boolean']>;
    creationDate?: Maybe<Scalars['Float']>;
    /** description of topic node */
    description?: Maybe<Scalars['String']>;
    /** Display name of the node */
    displayName?: Maybe<Scalars['String']>;
    emailAddresses?: Maybe<Array<Scalars['String']>>;
    eventAttendees?: Maybe<Array<IPerson>>;
    /** The calendar name associated to the event */
    eventCalendarName?: Maybe<Scalars['String']>;
    eventEndDate?: Maybe<Scalars['Float']>;
    eventHtmlLink?: Maybe<Scalars['String']>;
    eventMeetingLink?: Maybe<Scalars['String']>;
    eventOrganizer?: Maybe<IPerson>;
    eventRecurrence?: Maybe<Array<Scalars['String']>>;
    eventResponseStatus?: Maybe<Scalars['String']>;
    eventStartDate?: Maybe<Scalars['Float']>;
    eventStatus?: Maybe<Scalars['String']>;
    id: Scalars['Int'];
    /** The image uri of the node */
    imageUri?: Maybe<Scalars['String']>;
    inPocket?: Maybe<Scalars['Boolean']>;
    insight?: Maybe<IInsight>;
    isHidden?: Maybe<Scalars['Boolean']>;
    lastContactedDate?: Maybe<Scalars['Float']>;
    lastViewed?: Maybe<Scalars['Float']>;
    linkedNodes?: Maybe<Array<INodeRecord>>;
    location?: Maybe<ILocation>;
    /** Content type of memo, useful for differentiate tasks */
    memoContentType?: Maybe<Scalars['String']>;
    memoIDs?: Maybe<Array<Scalars['String']>>;
    nodeID: Scalars['String'];
    nodeOwnerID?: Maybe<Scalars['String']>;
    occupation?: Maybe<Array<Scalars['String']>>;
    organizations?: Maybe<Array<IOrganizationOutput>>;
    phoneContactID?: Maybe<Scalars['String']>;
    phones?: Maybe<Array<Scalars['String']>>;
    profilePicture?: Maybe<IImage>;
    /** The picture url for the node */
    profilePictureUrl?: Maybe<Scalars['String']>;
    /** The image uri of the node */
    profilePictureWeavit?: Maybe<IProfilePicture>;
    publicationDate?: Maybe<Scalars['Float']>;
    /** Sitename of the node in case of url */
    siteName?: Maybe<Scalars['String']>;
    stringifiedContent?: Maybe<Scalars['String']>;
    suggestedEntities?: Maybe<Array<INlpEntity>>;
    topLinks?: Maybe<Array<ITopNode>>;
    type: INodeType;
    updateDate?: Maybe<Scalars['Float']>;
    /** Url link of the node */
    urlLink?: Maybe<Scalars['String']>;
    userRelSourceTargetIDs?: Maybe<Array<Scalars['String']>>;
    weavitId?: Maybe<Scalars['String']>;
    websites?: Maybe<Array<Scalars['String']>>;
};

export type IUser = {
    __typename?: 'User';
    allowFriendReq?: Maybe<Scalars['Boolean']>;
    allowPushNotification?: Maybe<Scalars['Boolean']>;
    alreadySponsored?: Maybe<Scalars['Boolean']>;
    biography?: Maybe<Scalars['String']>;
    code?: Maybe<Scalars['String']>;
    companyName?: Maybe<Scalars['String']>;
    completedGuidedOnboarding?: Maybe<Scalars['Boolean']>;
    completedSignup?: Maybe<Scalars['Boolean']>;
    creationDate?: Maybe<Scalars['String']>;
    email: Scalars['String'];
    intends?: Maybe<Array<IIntends>>;
    isNew?: Maybe<Scalars['Boolean']>;
    linkedAccounts?: Maybe<Array<IAccount>>;
    names?: Maybe<IUserNames>;
    onboarding?: Maybe<IOnboardingData>;
    profilePicture?: Maybe<IProfilePicture>;
    profilePictureUrl?: Maybe<Scalars['String']>;
    referralCount?: Maybe<Scalars['Int']>;
    referralLimit?: Maybe<Scalars['Int']>;
    title?: Maybe<Scalars['String']>;
    topic_interests?: Maybe<Array<Scalars['String']>>;
    userId: Scalars['String'];
};

export type IUserInput = {
    email: Scalars['String'];
    firstName?: InputMaybe<Scalars['String']>;
    lastName?: InputMaybe<Scalars['String']>;
};

export type IUserNames = {
    __typename?: 'UserNames';
    firstName?: Maybe<Scalars['String']>;
    lastName?: Maybe<Scalars['String']>;
};

export type IUserUpdateInput = {
    allowFriendReq?: InputMaybe<Scalars['Boolean']>;
    allowPushNotification?: InputMaybe<Scalars['Boolean']>;
    biography?: InputMaybe<Scalars['String']>;
    companyName?: InputMaybe<Scalars['String']>;
    completedGuidedOnboarding?: InputMaybe<Scalars['Boolean']>;
    completedSignup?: InputMaybe<Scalars['Boolean']>;
    firstName?: InputMaybe<Scalars['String']>;
    intends?: InputMaybe<Array<IIntends>>;
    lastName?: InputMaybe<Scalars['String']>;
    title?: InputMaybe<Scalars['String']>;
    topic_interests?: InputMaybe<Array<Scalars['String']>>;
};

export type IUserFragment = {
    __typename?: 'User';
    userId: string;
    email: string;
    companyName?: string | null;
    creationDate?: string | null;
    biography?: string | null;
    profilePictureUrl?: string | null;
    code?: string | null;
    title?: string | null;
    names?: { __typename?: 'UserNames'; firstName?: string | null; lastName?: string | null } | null;
    profilePicture?: { __typename?: 'ProfilePicture'; resourcePath?: string | null; presignedUrl?: string | null } | null;
    linkedAccounts?: Array<{
        __typename?: 'Account';
        provider?: string | null;
        accountId?: string | null;
        scope?: Array<string> | null;
        scopes?: Array<string> | null;
        isSyncEnabled?: boolean | null;
        emailAddress?: string | null;
        tokenId?: string | null;
        name?: string | null;
    }> | null;
};

export type IMeFragment = {
    __typename?: 'User';
    isNew?: boolean | null;
    intends?: Array<IIntends> | null;
    topic_interests?: Array<string> | null;
    alreadySponsored?: boolean | null;
    referralLimit?: number | null;
    referralCount?: number | null;
    allowFriendReq?: boolean | null;
    completedSignup?: boolean | null;
    completedGuidedOnboarding?: boolean | null;
    userId: string;
    email: string;
    companyName?: string | null;
    creationDate?: string | null;
    biography?: string | null;
    profilePictureUrl?: string | null;
    code?: string | null;
    title?: string | null;
    onboarding?: { __typename?: 'OnboardingData'; topic?: string | null } | null;
    names?: { __typename?: 'UserNames'; firstName?: string | null; lastName?: string | null } | null;
    profilePicture?: { __typename?: 'ProfilePicture'; resourcePath?: string | null; presignedUrl?: string | null } | null;
    linkedAccounts?: Array<{
        __typename?: 'Account';
        provider?: string | null;
        accountId?: string | null;
        scope?: Array<string> | null;
        scopes?: Array<string> | null;
        isSyncEnabled?: boolean | null;
        emailAddress?: string | null;
        tokenId?: string | null;
        name?: string | null;
    }> | null;
};

export type IWeavitUserFragment = {
    __typename?: 'NodeRecordSnapshot';
    weavitUser?: {
        __typename?: 'User';
        userId: string;
        email: string;
        companyName?: string | null;
        creationDate?: string | null;
        biography?: string | null;
        profilePictureUrl?: string | null;
        code?: string | null;
        title?: string | null;
        names?: { __typename?: 'UserNames'; firstName?: string | null; lastName?: string | null } | null;
        profilePicture?: { __typename?: 'ProfilePicture'; resourcePath?: string | null; presignedUrl?: string | null } | null;
        linkedAccounts?: Array<{
            __typename?: 'Account';
            provider?: string | null;
            accountId?: string | null;
            scope?: Array<string> | null;
            scopes?: Array<string> | null;
            isSyncEnabled?: boolean | null;
            emailAddress?: string | null;
            tokenId?: string | null;
            name?: string | null;
        }> | null;
    } | null;
};

export type IProfilePictureAttrFragment = {
    __typename?: 'Image';
    fileName: string;
    contentType: string;
    backgroundUri?: string | null;
    imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
};

export type IProfilePicture_NodeRecordFragment = {
    __typename?: 'NodeRecord';
    imageUri?: string | null;
    profilePictureUrl?: string | null;
    profilePicture?: {
        __typename?: 'Image';
        fileName: string;
        contentType: string;
        backgroundUri?: string | null;
        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
    } | null;
};

export type IProfilePicture_NodeRecordSnapshotFragment = {
    __typename?: 'NodeRecordSnapshot';
    imageUri?: string | null;
    profilePictureUrl?: string | null;
    profilePicture?: {
        __typename?: 'Image';
        fileName: string;
        contentType: string;
        backgroundUri?: string | null;
        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
    } | null;
};

export type ILocationAttrFragment = { __typename?: 'Location'; name?: string | null };

export type ILocation_NodeRecordFragment = { __typename?: 'NodeRecord'; location?: { __typename?: 'Location'; name?: string | null } | null };

export type ILocation_NodeRecordSnapshotFragment = { __typename?: 'NodeRecordSnapshot'; location?: { __typename?: 'Location'; name?: string | null } | null };

export type ILocation_EventRecordFragment = { __typename?: 'EventRecord'; location?: { __typename?: 'Location'; name?: string | null } | null };

export type ILocation_UpcomingEventsFragment = { __typename?: 'UpcomingEvents'; location?: { __typename?: 'Location'; name?: string | null } | null };

export type IEventOrganizerAttrFragment = { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null };

export type IEventOrganizer_NodeRecordFragment = { __typename?: 'NodeRecord'; eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null };

export type IEventOrganizer_NodeRecordSnapshotFragment = {
    __typename?: 'NodeRecordSnapshot';
    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
};

export type IEventOrganizer_EventRecordFragment = { __typename?: 'EventRecord'; eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null };

export type IEventOrganizer_UpcomingEventsFragment = { __typename?: 'UpcomingEvents'; eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null };

export type IEventAttendeesAttrFragment = { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null };

export type IEventAttendees_NodeRecordFragment = { __typename?: 'NodeRecord'; eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null };

export type IEventAttendees_NodeRecordSnapshotFragment = {
    __typename?: 'NodeRecordSnapshot';
    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
};

export type IEventAttendees_EventRecordFragment = { __typename?: 'EventRecord'; eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null };

export type IEventAttendees_UpcomingEventsFragment = {
    __typename?: 'UpcomingEvents';
    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
};

export type IResultsCountFragment = { __typename?: 'Records'; resultsCount?: { __typename?: 'CountRecordV2'; value: number; labels: Array<string> } | null };

export type IAllCountFragment = { __typename?: 'Records'; allCount?: Array<{ __typename?: 'CountRecord'; value: number; type: INodeType }> | null };

export type ISuggestedEntitiesAttrFragment = {
    __typename?: 'NLPEntity';
    label: ILabelNlp;
    entity: string;
    start: number;
    end: number;
    meta?: any | null;
    wikiTopic?: boolean | null;
    memoIds?: Array<string> | null;
};

export type INodeRecordRowLiteFragment = {
    __typename?: 'NodeRecord';
    id: number;
    nodeID: string;
    type: INodeType;
    displayName?: string | null;
    affinity?: number | null;
    createdByUser?: boolean | null;
    lastViewed?: number | null;
    lastContactedDate?: number | null;
    updateDate?: number | null;
    creationDate?: number | null;
    isHidden?: boolean | null;
    inPocket?: boolean | null;
    weavitId?: string | null;
    content?: string | null;
    stringifiedContent?: string | null;
    contentType?: string | null;
    imageUri?: string | null;
    profilePictureUrl?: string | null;
    profilePicture?: {
        __typename?: 'Image';
        fileName: string;
        contentType: string;
        backgroundUri?: string | null;
        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
    } | null;
};

export type INodeRecordRowBasicFragment = {
    __typename?: 'NodeRecord';
    occupation?: Array<string> | null;
    countRelationships?: number | null;
    eventStartDate?: number | null;
    eventEndDate?: number | null;
    siteName?: string | null;
    author?: string | null;
    urlLink?: string | null;
    publicationDate?: number | null;
    id: number;
    nodeID: string;
    type: INodeType;
    displayName?: string | null;
    affinity?: number | null;
    createdByUser?: boolean | null;
    lastViewed?: number | null;
    lastContactedDate?: number | null;
    updateDate?: number | null;
    creationDate?: number | null;
    isHidden?: boolean | null;
    inPocket?: boolean | null;
    weavitId?: string | null;
    content?: string | null;
    stringifiedContent?: string | null;
    contentType?: string | null;
    imageUri?: string | null;
    profilePictureUrl?: string | null;
    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
    profilePicture?: {
        __typename?: 'Image';
        fileName: string;
        contentType: string;
        backgroundUri?: string | null;
        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
    } | null;
};

export type IAttachedNodeBasicFragment = {
    __typename?: 'NodeRecord';
    occupation?: Array<string> | null;
    countRelationships?: number | null;
    eventStartDate?: number | null;
    eventEndDate?: number | null;
    siteName?: string | null;
    author?: string | null;
    urlLink?: string | null;
    publicationDate?: number | null;
    id: number;
    nodeID: string;
    type: INodeType;
    displayName?: string | null;
    affinity?: number | null;
    createdByUser?: boolean | null;
    lastViewed?: number | null;
    lastContactedDate?: number | null;
    updateDate?: number | null;
    creationDate?: number | null;
    isHidden?: boolean | null;
    inPocket?: boolean | null;
    weavitId?: string | null;
    content?: string | null;
    stringifiedContent?: string | null;
    contentType?: string | null;
    imageUri?: string | null;
    profilePictureUrl?: string | null;
    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
    profilePicture?: {
        __typename?: 'Image';
        fileName: string;
        contentType: string;
        backgroundUri?: string | null;
        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
    } | null;
};

export type IAttachedNodeFragment = {
    __typename?: 'NodeRecord';
    appearsIn?: any | null;
    occupation?: Array<string> | null;
    countRelationships?: number | null;
    eventStartDate?: number | null;
    eventEndDate?: number | null;
    siteName?: string | null;
    author?: string | null;
    urlLink?: string | null;
    publicationDate?: number | null;
    id: number;
    nodeID: string;
    type: INodeType;
    displayName?: string | null;
    affinity?: number | null;
    createdByUser?: boolean | null;
    lastViewed?: number | null;
    lastContactedDate?: number | null;
    updateDate?: number | null;
    creationDate?: number | null;
    isHidden?: boolean | null;
    inPocket?: boolean | null;
    weavitId?: string | null;
    content?: string | null;
    stringifiedContent?: string | null;
    contentType?: string | null;
    imageUri?: string | null;
    profilePictureUrl?: string | null;
    attachedNode?: Array<{
        __typename?: 'NodeRecord';
        occupation?: Array<string> | null;
        countRelationships?: number | null;
        eventStartDate?: number | null;
        eventEndDate?: number | null;
        siteName?: string | null;
        author?: string | null;
        urlLink?: string | null;
        publicationDate?: number | null;
        id: number;
        nodeID: string;
        type: INodeType;
        displayName?: string | null;
        affinity?: number | null;
        createdByUser?: boolean | null;
        lastViewed?: number | null;
        lastContactedDate?: number | null;
        updateDate?: number | null;
        creationDate?: number | null;
        isHidden?: boolean | null;
        inPocket?: boolean | null;
        weavitId?: string | null;
        content?: string | null;
        stringifiedContent?: string | null;
        contentType?: string | null;
        imageUri?: string | null;
        profilePictureUrl?: string | null;
        organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
        eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
        eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
        profilePicture?: {
            __typename?: 'Image';
            fileName: string;
            contentType: string;
            backgroundUri?: string | null;
            imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
        } | null;
    }> | null;
    linkedNodes?: Array<{
        __typename?: 'NodeRecord';
        occupation?: Array<string> | null;
        countRelationships?: number | null;
        eventStartDate?: number | null;
        eventEndDate?: number | null;
        siteName?: string | null;
        author?: string | null;
        urlLink?: string | null;
        publicationDate?: number | null;
        id: number;
        nodeID: string;
        type: INodeType;
        displayName?: string | null;
        affinity?: number | null;
        createdByUser?: boolean | null;
        lastViewed?: number | null;
        lastContactedDate?: number | null;
        updateDate?: number | null;
        creationDate?: number | null;
        isHidden?: boolean | null;
        inPocket?: boolean | null;
        weavitId?: string | null;
        content?: string | null;
        stringifiedContent?: string | null;
        contentType?: string | null;
        imageUri?: string | null;
        profilePictureUrl?: string | null;
        organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
        eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
        eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
        profilePicture?: {
            __typename?: 'Image';
            fileName: string;
            contentType: string;
            backgroundUri?: string | null;
            imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
        } | null;
    }> | null;
    suggestedEntities?: Array<{
        __typename?: 'NLPEntity';
        label: ILabelNlp;
        entity: string;
        start: number;
        end: number;
        meta?: any | null;
        wikiTopic?: boolean | null;
        memoIds?: Array<string> | null;
    }> | null;
    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
    profilePicture?: {
        __typename?: 'Image';
        fileName: string;
        contentType: string;
        backgroundUri?: string | null;
        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
    } | null;
};

export type INodeRecordRowFragment = {
    __typename?: 'NodeRecord';
    appearsIn?: any | null;
    occupation?: Array<string> | null;
    countRelationships?: number | null;
    eventStartDate?: number | null;
    eventEndDate?: number | null;
    siteName?: string | null;
    author?: string | null;
    urlLink?: string | null;
    publicationDate?: number | null;
    id: number;
    nodeID: string;
    type: INodeType;
    displayName?: string | null;
    affinity?: number | null;
    createdByUser?: boolean | null;
    lastViewed?: number | null;
    lastContactedDate?: number | null;
    updateDate?: number | null;
    creationDate?: number | null;
    isHidden?: boolean | null;
    inPocket?: boolean | null;
    weavitId?: string | null;
    content?: string | null;
    stringifiedContent?: string | null;
    contentType?: string | null;
    imageUri?: string | null;
    profilePictureUrl?: string | null;
    attachedNode?: Array<{
        __typename?: 'NodeRecord';
        appearsIn?: any | null;
        occupation?: Array<string> | null;
        countRelationships?: number | null;
        eventStartDate?: number | null;
        eventEndDate?: number | null;
        siteName?: string | null;
        author?: string | null;
        urlLink?: string | null;
        publicationDate?: number | null;
        id: number;
        nodeID: string;
        type: INodeType;
        displayName?: string | null;
        affinity?: number | null;
        createdByUser?: boolean | null;
        lastViewed?: number | null;
        lastContactedDate?: number | null;
        updateDate?: number | null;
        creationDate?: number | null;
        isHidden?: boolean | null;
        inPocket?: boolean | null;
        weavitId?: string | null;
        content?: string | null;
        stringifiedContent?: string | null;
        contentType?: string | null;
        imageUri?: string | null;
        profilePictureUrl?: string | null;
        attachedNode?: Array<{
            __typename?: 'NodeRecord';
            occupation?: Array<string> | null;
            countRelationships?: number | null;
            eventStartDate?: number | null;
            eventEndDate?: number | null;
            siteName?: string | null;
            author?: string | null;
            urlLink?: string | null;
            publicationDate?: number | null;
            id: number;
            nodeID: string;
            type: INodeType;
            displayName?: string | null;
            affinity?: number | null;
            createdByUser?: boolean | null;
            lastViewed?: number | null;
            lastContactedDate?: number | null;
            updateDate?: number | null;
            creationDate?: number | null;
            isHidden?: boolean | null;
            inPocket?: boolean | null;
            weavitId?: string | null;
            content?: string | null;
            stringifiedContent?: string | null;
            contentType?: string | null;
            imageUri?: string | null;
            profilePictureUrl?: string | null;
            organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
            eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
            eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
            profilePicture?: {
                __typename?: 'Image';
                fileName: string;
                contentType: string;
                backgroundUri?: string | null;
                imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
            } | null;
        }> | null;
        linkedNodes?: Array<{
            __typename?: 'NodeRecord';
            occupation?: Array<string> | null;
            countRelationships?: number | null;
            eventStartDate?: number | null;
            eventEndDate?: number | null;
            siteName?: string | null;
            author?: string | null;
            urlLink?: string | null;
            publicationDate?: number | null;
            id: number;
            nodeID: string;
            type: INodeType;
            displayName?: string | null;
            affinity?: number | null;
            createdByUser?: boolean | null;
            lastViewed?: number | null;
            lastContactedDate?: number | null;
            updateDate?: number | null;
            creationDate?: number | null;
            isHidden?: boolean | null;
            inPocket?: boolean | null;
            weavitId?: string | null;
            content?: string | null;
            stringifiedContent?: string | null;
            contentType?: string | null;
            imageUri?: string | null;
            profilePictureUrl?: string | null;
            organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
            eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
            eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
            profilePicture?: {
                __typename?: 'Image';
                fileName: string;
                contentType: string;
                backgroundUri?: string | null;
                imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
            } | null;
        }> | null;
        suggestedEntities?: Array<{
            __typename?: 'NLPEntity';
            label: ILabelNlp;
            entity: string;
            start: number;
            end: number;
            meta?: any | null;
            wikiTopic?: boolean | null;
            memoIds?: Array<string> | null;
        }> | null;
        organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
        eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
        eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
        profilePicture?: {
            __typename?: 'Image';
            fileName: string;
            contentType: string;
            backgroundUri?: string | null;
            imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
        } | null;
    }> | null;
    linkedNodes?: Array<{
        __typename?: 'NodeRecord';
        appearsIn?: any | null;
        occupation?: Array<string> | null;
        countRelationships?: number | null;
        eventStartDate?: number | null;
        eventEndDate?: number | null;
        siteName?: string | null;
        author?: string | null;
        urlLink?: string | null;
        publicationDate?: number | null;
        id: number;
        nodeID: string;
        type: INodeType;
        displayName?: string | null;
        affinity?: number | null;
        createdByUser?: boolean | null;
        lastViewed?: number | null;
        lastContactedDate?: number | null;
        updateDate?: number | null;
        creationDate?: number | null;
        isHidden?: boolean | null;
        inPocket?: boolean | null;
        weavitId?: string | null;
        content?: string | null;
        stringifiedContent?: string | null;
        contentType?: string | null;
        imageUri?: string | null;
        profilePictureUrl?: string | null;
        attachedNode?: Array<{
            __typename?: 'NodeRecord';
            occupation?: Array<string> | null;
            countRelationships?: number | null;
            eventStartDate?: number | null;
            eventEndDate?: number | null;
            siteName?: string | null;
            author?: string | null;
            urlLink?: string | null;
            publicationDate?: number | null;
            id: number;
            nodeID: string;
            type: INodeType;
            displayName?: string | null;
            affinity?: number | null;
            createdByUser?: boolean | null;
            lastViewed?: number | null;
            lastContactedDate?: number | null;
            updateDate?: number | null;
            creationDate?: number | null;
            isHidden?: boolean | null;
            inPocket?: boolean | null;
            weavitId?: string | null;
            content?: string | null;
            stringifiedContent?: string | null;
            contentType?: string | null;
            imageUri?: string | null;
            profilePictureUrl?: string | null;
            organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
            eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
            eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
            profilePicture?: {
                __typename?: 'Image';
                fileName: string;
                contentType: string;
                backgroundUri?: string | null;
                imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
            } | null;
        }> | null;
        linkedNodes?: Array<{
            __typename?: 'NodeRecord';
            occupation?: Array<string> | null;
            countRelationships?: number | null;
            eventStartDate?: number | null;
            eventEndDate?: number | null;
            siteName?: string | null;
            author?: string | null;
            urlLink?: string | null;
            publicationDate?: number | null;
            id: number;
            nodeID: string;
            type: INodeType;
            displayName?: string | null;
            affinity?: number | null;
            createdByUser?: boolean | null;
            lastViewed?: number | null;
            lastContactedDate?: number | null;
            updateDate?: number | null;
            creationDate?: number | null;
            isHidden?: boolean | null;
            inPocket?: boolean | null;
            weavitId?: string | null;
            content?: string | null;
            stringifiedContent?: string | null;
            contentType?: string | null;
            imageUri?: string | null;
            profilePictureUrl?: string | null;
            organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
            eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
            eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
            profilePicture?: {
                __typename?: 'Image';
                fileName: string;
                contentType: string;
                backgroundUri?: string | null;
                imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
            } | null;
        }> | null;
        suggestedEntities?: Array<{
            __typename?: 'NLPEntity';
            label: ILabelNlp;
            entity: string;
            start: number;
            end: number;
            meta?: any | null;
            wikiTopic?: boolean | null;
            memoIds?: Array<string> | null;
        }> | null;
        organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
        eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
        eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
        profilePicture?: {
            __typename?: 'Image';
            fileName: string;
            contentType: string;
            backgroundUri?: string | null;
            imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
        } | null;
    }> | null;
    suggestedEntities?: Array<{
        __typename?: 'NLPEntity';
        label: ILabelNlp;
        entity: string;
        start: number;
        end: number;
        meta?: any | null;
        wikiTopic?: boolean | null;
        memoIds?: Array<string> | null;
    }> | null;
    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
    profilePicture?: {
        __typename?: 'Image';
        fileName: string;
        contentType: string;
        backgroundUri?: string | null;
        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
    } | null;
};

export type IUpsertWebContentResultsFragment = {
    __typename?: 'UpsertWebContentResults';
    id: number;
    nodeID: string;
    type: INodeType;
    displayName?: string | null;
    content?: string | null;
    stringifiedContent?: string | null;
    imageUri?: string | null;
    profilePictureUrl?: string | null;
    affinity?: number | null;
    createdByUser?: boolean | null;
    lastViewed?: number | null;
    lastContactedDate?: number | null;
    updateDate?: number | null;
    creationDate?: number | null;
    isHidden?: boolean | null;
    inPocket?: boolean | null;
    siteName?: string | null;
    author?: string | null;
    urlLink?: string | null;
    publicationDate?: number | null;
    memoIDs?: Array<string> | null;
    profilePicture?: {
        __typename?: 'Image';
        fileName: string;
        contentType: string;
        backgroundUri?: string | null;
        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
    } | null;
};

export type INodeRecordTileFragment = {
    __typename?: 'NodeRecord';
    appearsIn?: any | null;
    occupation?: Array<string> | null;
    countRelationships?: number | null;
    eventStartDate?: number | null;
    eventEndDate?: number | null;
    siteName?: string | null;
    author?: string | null;
    urlLink?: string | null;
    publicationDate?: number | null;
    id: number;
    nodeID: string;
    type: INodeType;
    displayName?: string | null;
    affinity?: number | null;
    createdByUser?: boolean | null;
    lastViewed?: number | null;
    lastContactedDate?: number | null;
    updateDate?: number | null;
    creationDate?: number | null;
    isHidden?: boolean | null;
    inPocket?: boolean | null;
    weavitId?: string | null;
    content?: string | null;
    stringifiedContent?: string | null;
    contentType?: string | null;
    imageUri?: string | null;
    profilePictureUrl?: string | null;
    topLinks?: Array<{ __typename?: 'TopNode'; type?: string | null; displayName?: string | null; nodeID?: string | null }> | null;
    attachedNode?: Array<{
        __typename?: 'NodeRecord';
        appearsIn?: any | null;
        occupation?: Array<string> | null;
        countRelationships?: number | null;
        eventStartDate?: number | null;
        eventEndDate?: number | null;
        siteName?: string | null;
        author?: string | null;
        urlLink?: string | null;
        publicationDate?: number | null;
        id: number;
        nodeID: string;
        type: INodeType;
        displayName?: string | null;
        affinity?: number | null;
        createdByUser?: boolean | null;
        lastViewed?: number | null;
        lastContactedDate?: number | null;
        updateDate?: number | null;
        creationDate?: number | null;
        isHidden?: boolean | null;
        inPocket?: boolean | null;
        weavitId?: string | null;
        content?: string | null;
        stringifiedContent?: string | null;
        contentType?: string | null;
        imageUri?: string | null;
        profilePictureUrl?: string | null;
        attachedNode?: Array<{
            __typename?: 'NodeRecord';
            occupation?: Array<string> | null;
            countRelationships?: number | null;
            eventStartDate?: number | null;
            eventEndDate?: number | null;
            siteName?: string | null;
            author?: string | null;
            urlLink?: string | null;
            publicationDate?: number | null;
            id: number;
            nodeID: string;
            type: INodeType;
            displayName?: string | null;
            affinity?: number | null;
            createdByUser?: boolean | null;
            lastViewed?: number | null;
            lastContactedDate?: number | null;
            updateDate?: number | null;
            creationDate?: number | null;
            isHidden?: boolean | null;
            inPocket?: boolean | null;
            weavitId?: string | null;
            content?: string | null;
            stringifiedContent?: string | null;
            contentType?: string | null;
            imageUri?: string | null;
            profilePictureUrl?: string | null;
            organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
            eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
            eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
            profilePicture?: {
                __typename?: 'Image';
                fileName: string;
                contentType: string;
                backgroundUri?: string | null;
                imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
            } | null;
        }> | null;
        linkedNodes?: Array<{
            __typename?: 'NodeRecord';
            occupation?: Array<string> | null;
            countRelationships?: number | null;
            eventStartDate?: number | null;
            eventEndDate?: number | null;
            siteName?: string | null;
            author?: string | null;
            urlLink?: string | null;
            publicationDate?: number | null;
            id: number;
            nodeID: string;
            type: INodeType;
            displayName?: string | null;
            affinity?: number | null;
            createdByUser?: boolean | null;
            lastViewed?: number | null;
            lastContactedDate?: number | null;
            updateDate?: number | null;
            creationDate?: number | null;
            isHidden?: boolean | null;
            inPocket?: boolean | null;
            weavitId?: string | null;
            content?: string | null;
            stringifiedContent?: string | null;
            contentType?: string | null;
            imageUri?: string | null;
            profilePictureUrl?: string | null;
            organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
            eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
            eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
            profilePicture?: {
                __typename?: 'Image';
                fileName: string;
                contentType: string;
                backgroundUri?: string | null;
                imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
            } | null;
        }> | null;
        suggestedEntities?: Array<{
            __typename?: 'NLPEntity';
            label: ILabelNlp;
            entity: string;
            start: number;
            end: number;
            meta?: any | null;
            wikiTopic?: boolean | null;
            memoIds?: Array<string> | null;
        }> | null;
        organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
        eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
        eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
        profilePicture?: {
            __typename?: 'Image';
            fileName: string;
            contentType: string;
            backgroundUri?: string | null;
            imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
        } | null;
    }> | null;
    linkedNodes?: Array<{
        __typename?: 'NodeRecord';
        appearsIn?: any | null;
        occupation?: Array<string> | null;
        countRelationships?: number | null;
        eventStartDate?: number | null;
        eventEndDate?: number | null;
        siteName?: string | null;
        author?: string | null;
        urlLink?: string | null;
        publicationDate?: number | null;
        id: number;
        nodeID: string;
        type: INodeType;
        displayName?: string | null;
        affinity?: number | null;
        createdByUser?: boolean | null;
        lastViewed?: number | null;
        lastContactedDate?: number | null;
        updateDate?: number | null;
        creationDate?: number | null;
        isHidden?: boolean | null;
        inPocket?: boolean | null;
        weavitId?: string | null;
        content?: string | null;
        stringifiedContent?: string | null;
        contentType?: string | null;
        imageUri?: string | null;
        profilePictureUrl?: string | null;
        attachedNode?: Array<{
            __typename?: 'NodeRecord';
            occupation?: Array<string> | null;
            countRelationships?: number | null;
            eventStartDate?: number | null;
            eventEndDate?: number | null;
            siteName?: string | null;
            author?: string | null;
            urlLink?: string | null;
            publicationDate?: number | null;
            id: number;
            nodeID: string;
            type: INodeType;
            displayName?: string | null;
            affinity?: number | null;
            createdByUser?: boolean | null;
            lastViewed?: number | null;
            lastContactedDate?: number | null;
            updateDate?: number | null;
            creationDate?: number | null;
            isHidden?: boolean | null;
            inPocket?: boolean | null;
            weavitId?: string | null;
            content?: string | null;
            stringifiedContent?: string | null;
            contentType?: string | null;
            imageUri?: string | null;
            profilePictureUrl?: string | null;
            organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
            eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
            eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
            profilePicture?: {
                __typename?: 'Image';
                fileName: string;
                contentType: string;
                backgroundUri?: string | null;
                imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
            } | null;
        }> | null;
        linkedNodes?: Array<{
            __typename?: 'NodeRecord';
            occupation?: Array<string> | null;
            countRelationships?: number | null;
            eventStartDate?: number | null;
            eventEndDate?: number | null;
            siteName?: string | null;
            author?: string | null;
            urlLink?: string | null;
            publicationDate?: number | null;
            id: number;
            nodeID: string;
            type: INodeType;
            displayName?: string | null;
            affinity?: number | null;
            createdByUser?: boolean | null;
            lastViewed?: number | null;
            lastContactedDate?: number | null;
            updateDate?: number | null;
            creationDate?: number | null;
            isHidden?: boolean | null;
            inPocket?: boolean | null;
            weavitId?: string | null;
            content?: string | null;
            stringifiedContent?: string | null;
            contentType?: string | null;
            imageUri?: string | null;
            profilePictureUrl?: string | null;
            organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
            eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
            eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
            profilePicture?: {
                __typename?: 'Image';
                fileName: string;
                contentType: string;
                backgroundUri?: string | null;
                imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
            } | null;
        }> | null;
        suggestedEntities?: Array<{
            __typename?: 'NLPEntity';
            label: ILabelNlp;
            entity: string;
            start: number;
            end: number;
            meta?: any | null;
            wikiTopic?: boolean | null;
            memoIds?: Array<string> | null;
        }> | null;
        organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
        eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
        eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
        profilePicture?: {
            __typename?: 'Image';
            fileName: string;
            contentType: string;
            backgroundUri?: string | null;
            imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
        } | null;
    }> | null;
    suggestedEntities?: Array<{
        __typename?: 'NLPEntity';
        label: ILabelNlp;
        entity: string;
        start: number;
        end: number;
        meta?: any | null;
        wikiTopic?: boolean | null;
        memoIds?: Array<string> | null;
    }> | null;
    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
    profilePicture?: {
        __typename?: 'Image';
        fileName: string;
        contentType: string;
        backgroundUri?: string | null;
        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
    } | null;
};

export type INodeRecordSnapshotFragment = {
    __typename?: 'NodeRecordSnapshot';
    id: number;
    nodeID: string;
    type: INodeType;
    displayName?: string | null;
    createdByUser?: boolean | null;
    isHidden?: boolean | null;
    inPocket?: boolean | null;
    affinity?: number | null;
    occupation?: Array<string> | null;
    emailAddresses?: Array<string> | null;
    phones?: Array<string> | null;
    phoneContactID?: string | null;
    lastViewed?: number | null;
    lastContactedDate?: number | null;
    updateDate?: number | null;
    creationDate?: number | null;
    countRelationships?: number | null;
    eventStatus?: string | null;
    eventResponseStatus?: string | null;
    eventStartDate?: number | null;
    eventEndDate?: number | null;
    contentType?: string | null;
    siteName?: string | null;
    author?: string | null;
    urlLink?: string | null;
    publicationDate?: number | null;
    content?: string | null;
    stringifiedContent?: string | null;
    websites?: Array<string> | null;
    weavitId?: string | null;
    imageUri?: string | null;
    profilePictureUrl?: string | null;
    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
    profilePicture?: {
        __typename?: 'Image';
        fileName: string;
        contentType: string;
        backgroundUri?: string | null;
        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
    } | null;
    location?: { __typename?: 'Location'; name?: string | null } | null;
    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
};

export type IMemoBlockFragment = {
    __typename?: 'Memo';
    id: number;
    nodeID: string;
    type: INodeType;
    displayName?: string | null;
    content?: string | null;
    stringifiedContent?: string | null;
    affinity?: number | null;
    createdByUser?: boolean | null;
    lastViewed?: number | null;
    updateDate?: number | null;
    creationDate?: number | null;
    isHidden?: boolean | null;
    inPocket?: boolean | null;
    isTrashed?: boolean | null;
    appearsIn?: any | null;
    attachedNode?: Array<{
        __typename?: 'NodeRecord';
        appearsIn?: any | null;
        occupation?: Array<string> | null;
        countRelationships?: number | null;
        eventStartDate?: number | null;
        eventEndDate?: number | null;
        siteName?: string | null;
        author?: string | null;
        urlLink?: string | null;
        publicationDate?: number | null;
        id: number;
        nodeID: string;
        type: INodeType;
        displayName?: string | null;
        affinity?: number | null;
        createdByUser?: boolean | null;
        lastViewed?: number | null;
        lastContactedDate?: number | null;
        updateDate?: number | null;
        creationDate?: number | null;
        isHidden?: boolean | null;
        inPocket?: boolean | null;
        weavitId?: string | null;
        content?: string | null;
        stringifiedContent?: string | null;
        contentType?: string | null;
        imageUri?: string | null;
        profilePictureUrl?: string | null;
        attachedNode?: Array<{
            __typename?: 'NodeRecord';
            occupation?: Array<string> | null;
            countRelationships?: number | null;
            eventStartDate?: number | null;
            eventEndDate?: number | null;
            siteName?: string | null;
            author?: string | null;
            urlLink?: string | null;
            publicationDate?: number | null;
            id: number;
            nodeID: string;
            type: INodeType;
            displayName?: string | null;
            affinity?: number | null;
            createdByUser?: boolean | null;
            lastViewed?: number | null;
            lastContactedDate?: number | null;
            updateDate?: number | null;
            creationDate?: number | null;
            isHidden?: boolean | null;
            inPocket?: boolean | null;
            weavitId?: string | null;
            content?: string | null;
            stringifiedContent?: string | null;
            contentType?: string | null;
            imageUri?: string | null;
            profilePictureUrl?: string | null;
            organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
            eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
            eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
            profilePicture?: {
                __typename?: 'Image';
                fileName: string;
                contentType: string;
                backgroundUri?: string | null;
                imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
            } | null;
        }> | null;
        linkedNodes?: Array<{
            __typename?: 'NodeRecord';
            occupation?: Array<string> | null;
            countRelationships?: number | null;
            eventStartDate?: number | null;
            eventEndDate?: number | null;
            siteName?: string | null;
            author?: string | null;
            urlLink?: string | null;
            publicationDate?: number | null;
            id: number;
            nodeID: string;
            type: INodeType;
            displayName?: string | null;
            affinity?: number | null;
            createdByUser?: boolean | null;
            lastViewed?: number | null;
            lastContactedDate?: number | null;
            updateDate?: number | null;
            creationDate?: number | null;
            isHidden?: boolean | null;
            inPocket?: boolean | null;
            weavitId?: string | null;
            content?: string | null;
            stringifiedContent?: string | null;
            contentType?: string | null;
            imageUri?: string | null;
            profilePictureUrl?: string | null;
            organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
            eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
            eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
            profilePicture?: {
                __typename?: 'Image';
                fileName: string;
                contentType: string;
                backgroundUri?: string | null;
                imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
            } | null;
        }> | null;
        suggestedEntities?: Array<{
            __typename?: 'NLPEntity';
            label: ILabelNlp;
            entity: string;
            start: number;
            end: number;
            meta?: any | null;
            wikiTopic?: boolean | null;
            memoIds?: Array<string> | null;
        }> | null;
        organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
        eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
        eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
        profilePicture?: {
            __typename?: 'Image';
            fileName: string;
            contentType: string;
            backgroundUri?: string | null;
            imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
        } | null;
    }> | null;
    linkedNodes?: Array<{
        __typename?: 'NodeRecord';
        appearsIn?: any | null;
        occupation?: Array<string> | null;
        countRelationships?: number | null;
        eventStartDate?: number | null;
        eventEndDate?: number | null;
        siteName?: string | null;
        author?: string | null;
        urlLink?: string | null;
        publicationDate?: number | null;
        id: number;
        nodeID: string;
        type: INodeType;
        displayName?: string | null;
        affinity?: number | null;
        createdByUser?: boolean | null;
        lastViewed?: number | null;
        lastContactedDate?: number | null;
        updateDate?: number | null;
        creationDate?: number | null;
        isHidden?: boolean | null;
        inPocket?: boolean | null;
        weavitId?: string | null;
        content?: string | null;
        stringifiedContent?: string | null;
        contentType?: string | null;
        imageUri?: string | null;
        profilePictureUrl?: string | null;
        attachedNode?: Array<{
            __typename?: 'NodeRecord';
            occupation?: Array<string> | null;
            countRelationships?: number | null;
            eventStartDate?: number | null;
            eventEndDate?: number | null;
            siteName?: string | null;
            author?: string | null;
            urlLink?: string | null;
            publicationDate?: number | null;
            id: number;
            nodeID: string;
            type: INodeType;
            displayName?: string | null;
            affinity?: number | null;
            createdByUser?: boolean | null;
            lastViewed?: number | null;
            lastContactedDate?: number | null;
            updateDate?: number | null;
            creationDate?: number | null;
            isHidden?: boolean | null;
            inPocket?: boolean | null;
            weavitId?: string | null;
            content?: string | null;
            stringifiedContent?: string | null;
            contentType?: string | null;
            imageUri?: string | null;
            profilePictureUrl?: string | null;
            organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
            eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
            eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
            profilePicture?: {
                __typename?: 'Image';
                fileName: string;
                contentType: string;
                backgroundUri?: string | null;
                imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
            } | null;
        }> | null;
        linkedNodes?: Array<{
            __typename?: 'NodeRecord';
            occupation?: Array<string> | null;
            countRelationships?: number | null;
            eventStartDate?: number | null;
            eventEndDate?: number | null;
            siteName?: string | null;
            author?: string | null;
            urlLink?: string | null;
            publicationDate?: number | null;
            id: number;
            nodeID: string;
            type: INodeType;
            displayName?: string | null;
            affinity?: number | null;
            createdByUser?: boolean | null;
            lastViewed?: number | null;
            lastContactedDate?: number | null;
            updateDate?: number | null;
            creationDate?: number | null;
            isHidden?: boolean | null;
            inPocket?: boolean | null;
            weavitId?: string | null;
            content?: string | null;
            stringifiedContent?: string | null;
            contentType?: string | null;
            imageUri?: string | null;
            profilePictureUrl?: string | null;
            organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
            eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
            eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
            profilePicture?: {
                __typename?: 'Image';
                fileName: string;
                contentType: string;
                backgroundUri?: string | null;
                imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
            } | null;
        }> | null;
        suggestedEntities?: Array<{
            __typename?: 'NLPEntity';
            label: ILabelNlp;
            entity: string;
            start: number;
            end: number;
            meta?: any | null;
            wikiTopic?: boolean | null;
            memoIds?: Array<string> | null;
        }> | null;
        organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
        eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
        eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
        profilePicture?: {
            __typename?: 'Image';
            fileName: string;
            contentType: string;
            backgroundUri?: string | null;
            imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
        } | null;
    }> | null;
    suggestedEntities?: Array<{
        __typename?: 'NLPEntity';
        label: ILabelNlp;
        entity: string;
        start: number;
        end: number;
        meta?: any | null;
        wikiTopic?: boolean | null;
        memoIds?: Array<string> | null;
    }> | null;
};

export type INodeInsightFragment = {
    __typename?: 'Insight';
    firstCommunication?: number | null;
    lastEmailDate?: number | null;
    emailsCount?: number | null;
    lastEventDate?: number | null;
    eventsCount: number;
    fullEmailHistory?: any | null;
    fullEventHistory?: any | null;
    firstEmailDate?: number | null;
    firstEventDate?: number | null;
    lastContactedDate?: number | null;
    firstEvent?: {
        __typename?: 'EventRecord';
        nodeID: string;
        nodeOwnerID?: string | null;
        hidden?: boolean | null;
        updateDate?: number | null;
        eventResponseStatus?: string | null;
        eventStartDate?: number | null;
        eventEndDate?: number | null;
        eventUpdateDate?: number | null;
        eventSubject?: string | null;
        location?: { __typename?: 'Location'; name?: string | null } | null;
        eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
    } | null;
    lastEvent?: {
        __typename?: 'EventRecord';
        nodeID: string;
        nodeOwnerID?: string | null;
        hidden?: boolean | null;
        updateDate?: number | null;
        eventResponseStatus?: string | null;
        eventStartDate?: number | null;
        eventEndDate?: number | null;
        eventUpdateDate?: number | null;
        eventSubject?: string | null;
        location?: { __typename?: 'Location'; name?: string | null } | null;
        eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
    } | null;
};

export type IUpcomingEventFragment = {
    __typename?: 'UpcomingEvents';
    nodeID: string;
    type: INodeType;
    nodeOwnerID?: string | null;
    content?: string | null;
    displayName?: string | null;
    hidden?: boolean | null;
    updateDate?: number | null;
    creationDate?: number | null;
    eventCreationDate?: number | null;
    eventResponseStatus?: string | null;
    eventStartDate?: number | null;
    eventEndDate?: number | null;
    eventUpdateDate?: number | null;
    eventSubject?: string | null;
    eventNote?: string | null;
    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
    location?: { __typename?: 'Location'; name?: string | null } | null;
};

export type IGetMeLiteQueryVariables = Exact<{ [key: string]: never }>;

export type IGetMeLiteQueryResult = {
    __typename?: 'Query';
    me?: {
        __typename?: 'User';
        isNew?: boolean | null;
        intends?: Array<IIntends> | null;
        topic_interests?: Array<string> | null;
        alreadySponsored?: boolean | null;
        referralLimit?: number | null;
        referralCount?: number | null;
        allowFriendReq?: boolean | null;
        completedSignup?: boolean | null;
        completedGuidedOnboarding?: boolean | null;
        userId: string;
        email: string;
        companyName?: string | null;
        creationDate?: string | null;
        biography?: string | null;
        profilePictureUrl?: string | null;
        code?: string | null;
        title?: string | null;
        onboarding?: { __typename?: 'OnboardingData'; topic?: string | null } | null;
        names?: { __typename?: 'UserNames'; firstName?: string | null; lastName?: string | null } | null;
        profilePicture?: { __typename?: 'ProfilePicture'; resourcePath?: string | null; presignedUrl?: string | null } | null;
        linkedAccounts?: Array<{
            __typename?: 'Account';
            provider?: string | null;
            accountId?: string | null;
            scope?: Array<string> | null;
            scopes?: Array<string> | null;
            isSyncEnabled?: boolean | null;
            emailAddress?: string | null;
            tokenId?: string | null;
            name?: string | null;
        }> | null;
    } | null;
};

export type IGetMeQueryVariables = Exact<{ [key: string]: never }>;

export type IGetMeQueryResult = {
    __typename?: 'Query';
    me?: {
        __typename?: 'User';
        isNew?: boolean | null;
        intends?: Array<IIntends> | null;
        topic_interests?: Array<string> | null;
        alreadySponsored?: boolean | null;
        referralLimit?: number | null;
        referralCount?: number | null;
        allowFriendReq?: boolean | null;
        completedSignup?: boolean | null;
        completedGuidedOnboarding?: boolean | null;
        userId: string;
        email: string;
        companyName?: string | null;
        creationDate?: string | null;
        biography?: string | null;
        profilePictureUrl?: string | null;
        code?: string | null;
        title?: string | null;
        onboarding?: { __typename?: 'OnboardingData'; topic?: string | null } | null;
        names?: { __typename?: 'UserNames'; firstName?: string | null; lastName?: string | null } | null;
        profilePicture?: { __typename?: 'ProfilePicture'; resourcePath?: string | null; presignedUrl?: string | null } | null;
        linkedAccounts?: Array<{
            __typename?: 'Account';
            provider?: string | null;
            accountId?: string | null;
            scope?: Array<string> | null;
            scopes?: Array<string> | null;
            isSyncEnabled?: boolean | null;
            emailAddress?: string | null;
            tokenId?: string | null;
            name?: string | null;
        }> | null;
    } | null;
    getAchievements?: { __typename?: 'AchievementsResult'; onboarding?: any | null } | null;
};

export type ICreateUserMutationVariables = Exact<{
    email: Scalars['String'];
}>;

export type ICreateUserMutationResult = { __typename?: 'Mutation'; createUser?: { __typename?: 'User'; userId: string } | null };

export type IPerformMergeActionMutationVariables = Exact<{
    action: IMergeAction;
    mainNodeID?: InputMaybe<Scalars['String']>;
    nodeIDs?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;

export type IPerformMergeActionMutationResult = { __typename?: 'Mutation'; performMergeAction: boolean };

export type ICreateCollectionV2MutationVariables = Exact<{
    displayName: Scalars['String'];
    description: Scalars['String'];
    sourceNodes?: InputMaybe<Array<INodeInput> | INodeInput>;
    properties?: InputMaybe<Scalars['JSON']>;
}>;

export type ICreateCollectionV2MutationResult = { __typename?: 'Mutation'; createCollectionV2: { __typename?: 'CollectionResult'; id: string; displayName: string } };

export type ICreateTopicV2MutationVariables = Exact<{
    displayName: Scalars['String'];
    description?: InputMaybe<Scalars['String']>;
    nodeID?: InputMaybe<Scalars['String']>;
    fromWikipedia?: InputMaybe<Scalars['Boolean']>;
    wikipediaID?: InputMaybe<Scalars['String']>;
    profilePicture?: InputMaybe<IImageInput>;
    sourceNodes?: InputMaybe<Array<INodeInput> | INodeInput>;
    properties?: InputMaybe<Scalars['JSON']>;
}>;

export type ICreateTopicV2MutationResult = { __typename?: 'Mutation'; createTopicV2: { __typename?: 'TopicResult'; id: string; displayName: string } };

export type ICreateTopicsV2MutationVariables = Exact<{
    topics: Array<ITopicInput> | ITopicInput;
}>;

export type ICreateTopicsV2MutationResult = { __typename?: 'Mutation'; createTopicsV2: Array<{ __typename?: 'TopicResult'; id: string; displayName: string }> };

export type IUpsertWebContentMutationVariables = Exact<{
    link: Scalars['String'];
    nodeID?: InputMaybe<Scalars['String']>;
    title?: InputMaybe<Scalars['String']>;
    fetchMetadata?: InputMaybe<Scalars['Boolean']>;
    author?: InputMaybe<Scalars['String']>;
    siteName?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
    type?: InputMaybe<Scalars['String']>;
    icon?: InputMaybe<Scalars['String']>;
    backgroundImage?: InputMaybe<Scalars['String']>;
    forceMemoCreation?: InputMaybe<Scalars['Boolean']>;
}>;

export type IUpsertWebContentMutationResult = {
    __typename?: 'Mutation';
    upsertWebContent: {
        __typename?: 'UpsertWebContentResults';
        id: number;
        nodeID: string;
        type: INodeType;
        displayName?: string | null;
        content?: string | null;
        stringifiedContent?: string | null;
        imageUri?: string | null;
        profilePictureUrl?: string | null;
        affinity?: number | null;
        createdByUser?: boolean | null;
        lastViewed?: number | null;
        lastContactedDate?: number | null;
        updateDate?: number | null;
        creationDate?: number | null;
        isHidden?: boolean | null;
        inPocket?: boolean | null;
        siteName?: string | null;
        author?: string | null;
        urlLink?: string | null;
        publicationDate?: number | null;
        memoIDs?: Array<string> | null;
        profilePicture?: {
            __typename?: 'Image';
            fileName: string;
            contentType: string;
            backgroundUri?: string | null;
            imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
        } | null;
    };
};

export type IAddAccountMutationVariables = Exact<{
    provider: Scalars['String'];
    accountId: Scalars['String'];
    scope: Array<Scalars['String']> | Scalars['String'];
    accessToken?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    imap_host?: InputMaybe<Scalars['String']>;
    imap_port?: InputMaybe<Scalars['Int']>;
    emailAddress?: InputMaybe<Scalars['String']>;
}>;

export type IAddAccountMutationResult = { __typename?: 'Mutation'; addAccount: boolean };

export type ISyncAccountsMutationVariables = Exact<{
    tokenId?: InputMaybe<Scalars['String']>;
    scopes?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;

export type ISyncAccountsMutationResult = { __typename?: 'Mutation'; syncAccounts: boolean };

export type IUpdateUserMutationVariables = Exact<{
    firstName?: InputMaybe<Scalars['String']>;
    lastName?: InputMaybe<Scalars['String']>;
    intends?: InputMaybe<Array<IIntends> | IIntends>;
    topic_interests?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
    title?: InputMaybe<Scalars['String']>;
    companyName?: InputMaybe<Scalars['String']>;
    allowFriendReq?: InputMaybe<Scalars['Boolean']>;
    completedGuidedOnboarding?: InputMaybe<Scalars['Boolean']>;
    completedSignup?: InputMaybe<Scalars['Boolean']>;
}>;

export type IUpdateUserMutationResult = {
    __typename?: 'Mutation';
    updateUser?: {
        __typename?: 'User';
        isNew?: boolean | null;
        intends?: Array<IIntends> | null;
        topic_interests?: Array<string> | null;
        alreadySponsored?: boolean | null;
        referralLimit?: number | null;
        referralCount?: number | null;
        allowFriendReq?: boolean | null;
        completedSignup?: boolean | null;
        completedGuidedOnboarding?: boolean | null;
        userId: string;
        email: string;
        companyName?: string | null;
        creationDate?: string | null;
        biography?: string | null;
        profilePictureUrl?: string | null;
        code?: string | null;
        title?: string | null;
        onboarding?: { __typename?: 'OnboardingData'; topic?: string | null } | null;
        names?: { __typename?: 'UserNames'; firstName?: string | null; lastName?: string | null } | null;
        profilePicture?: { __typename?: 'ProfilePicture'; resourcePath?: string | null; presignedUrl?: string | null } | null;
        linkedAccounts?: Array<{
            __typename?: 'Account';
            provider?: string | null;
            accountId?: string | null;
            scope?: Array<string> | null;
            scopes?: Array<string> | null;
            isSyncEnabled?: boolean | null;
            emailAddress?: string | null;
            tokenId?: string | null;
            name?: string | null;
        }> | null;
    } | null;
};

export type IUnlinkAccountMutationVariables = Exact<{
    tokenId: Scalars['String'];
}>;

export type IUnlinkAccountMutationResult = { __typename?: 'Mutation'; unlinkAccount?: boolean | null };

export type IPerformNodeActionMutationVariables = Exact<{
    nodeID: Scalars['String'];
    action: INodeFilter;
    nodeLabel: INodeType;
    undo?: InputMaybe<Scalars['Boolean']>;
    targetNode?: InputMaybe<INodeInput>;
}>;

export type IPerformNodeActionMutationResult = { __typename?: 'Mutation'; performNodeAction: boolean };

export type IPerformNodesActionMutationVariables = Exact<{
    nodes: Array<INodeInput> | INodeInput;
    action: INodeFilter;
    undo?: InputMaybe<Scalars['Boolean']>;
}>;

export type IPerformNodesActionMutationResult = { __typename?: 'Mutation'; performNodesAction: boolean };

export type IProfilePictureUploadUrlMutationVariables = Exact<{
    imageInfo: IImageInfoInput;
}>;

export type IProfilePictureUploadUrlMutationResult = { __typename?: 'Mutation'; profilePictureUploadUrl?: string | null };

export type IGetNodesByFilterQueryVariables = Exact<{
    currentPage?: InputMaybe<Scalars['Int']>;
    pageSize?: InputMaybe<Scalars['Int']>;
    skipToken?: InputMaybe<Scalars['Int']>;
    filter: INodeFilter;
    targetNode?: InputMaybe<INodeInput>;
}>;

export type IGetNodesByFilterQueryResult = {
    __typename?: 'Query';
    getNodesByFilter: {
        __typename?: 'Records';
        data: Array<{
            __typename?: 'NodeRecord';
            appearsIn?: any | null;
            occupation?: Array<string> | null;
            countRelationships?: number | null;
            eventStartDate?: number | null;
            eventEndDate?: number | null;
            siteName?: string | null;
            author?: string | null;
            urlLink?: string | null;
            publicationDate?: number | null;
            id: number;
            nodeID: string;
            type: INodeType;
            displayName?: string | null;
            affinity?: number | null;
            createdByUser?: boolean | null;
            lastViewed?: number | null;
            lastContactedDate?: number | null;
            updateDate?: number | null;
            creationDate?: number | null;
            isHidden?: boolean | null;
            inPocket?: boolean | null;
            weavitId?: string | null;
            content?: string | null;
            stringifiedContent?: string | null;
            contentType?: string | null;
            imageUri?: string | null;
            profilePictureUrl?: string | null;
            topLinks?: Array<{ __typename?: 'TopNode'; type?: string | null; displayName?: string | null; nodeID?: string | null }> | null;
            attachedNode?: Array<{
                __typename?: 'NodeRecord';
                appearsIn?: any | null;
                occupation?: Array<string> | null;
                countRelationships?: number | null;
                eventStartDate?: number | null;
                eventEndDate?: number | null;
                siteName?: string | null;
                author?: string | null;
                urlLink?: string | null;
                publicationDate?: number | null;
                id: number;
                nodeID: string;
                type: INodeType;
                displayName?: string | null;
                affinity?: number | null;
                createdByUser?: boolean | null;
                lastViewed?: number | null;
                lastContactedDate?: number | null;
                updateDate?: number | null;
                creationDate?: number | null;
                isHidden?: boolean | null;
                inPocket?: boolean | null;
                weavitId?: string | null;
                content?: string | null;
                stringifiedContent?: string | null;
                contentType?: string | null;
                imageUri?: string | null;
                profilePictureUrl?: string | null;
                attachedNode?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                linkedNodes?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                suggestedEntities?: Array<{
                    __typename?: 'NLPEntity';
                    label: ILabelNlp;
                    entity: string;
                    start: number;
                    end: number;
                    meta?: any | null;
                    wikiTopic?: boolean | null;
                    memoIds?: Array<string> | null;
                }> | null;
                organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                profilePicture?: {
                    __typename?: 'Image';
                    fileName: string;
                    contentType: string;
                    backgroundUri?: string | null;
                    imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                } | null;
            }> | null;
            linkedNodes?: Array<{
                __typename?: 'NodeRecord';
                appearsIn?: any | null;
                occupation?: Array<string> | null;
                countRelationships?: number | null;
                eventStartDate?: number | null;
                eventEndDate?: number | null;
                siteName?: string | null;
                author?: string | null;
                urlLink?: string | null;
                publicationDate?: number | null;
                id: number;
                nodeID: string;
                type: INodeType;
                displayName?: string | null;
                affinity?: number | null;
                createdByUser?: boolean | null;
                lastViewed?: number | null;
                lastContactedDate?: number | null;
                updateDate?: number | null;
                creationDate?: number | null;
                isHidden?: boolean | null;
                inPocket?: boolean | null;
                weavitId?: string | null;
                content?: string | null;
                stringifiedContent?: string | null;
                contentType?: string | null;
                imageUri?: string | null;
                profilePictureUrl?: string | null;
                attachedNode?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                linkedNodes?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                suggestedEntities?: Array<{
                    __typename?: 'NLPEntity';
                    label: ILabelNlp;
                    entity: string;
                    start: number;
                    end: number;
                    meta?: any | null;
                    wikiTopic?: boolean | null;
                    memoIds?: Array<string> | null;
                }> | null;
                organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                profilePicture?: {
                    __typename?: 'Image';
                    fileName: string;
                    contentType: string;
                    backgroundUri?: string | null;
                    imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                } | null;
            }> | null;
            suggestedEntities?: Array<{
                __typename?: 'NLPEntity';
                label: ILabelNlp;
                entity: string;
                start: number;
                end: number;
                meta?: any | null;
                wikiTopic?: boolean | null;
                memoIds?: Array<string> | null;
            }> | null;
            organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
            eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
            eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
            profilePicture?: {
                __typename?: 'Image';
                fileName: string;
                contentType: string;
                backgroundUri?: string | null;
                imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
            } | null;
        }>;
    };
};

export type ISetSyncEnableMutationVariables = Exact<{
    tokenId: Scalars['String'];
    isSyncEnabled?: InputMaybe<Scalars['Boolean']>;
}>;

export type ISetSyncEnableMutationResult = { __typename?: 'Mutation'; updateAccount?: boolean | null };

export type IUpsertMemoV2MutationVariables = Exact<{
    properties: IMemoProperties;
    targetedNodeLabel?: InputMaybe<INodeType>;
    targetedNodeID?: InputMaybe<Scalars['String']>;
    nodeID?: InputMaybe<Scalars['String']>;
    linkedTo?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
    isTrashed?: InputMaybe<Scalars['Boolean']>;
    isBookmarked?: InputMaybe<Scalars['Boolean']>;
    shouldParse?: InputMaybe<Scalars['Boolean']>;
    memoContentType: Scalars['String'];
}>;

export type IUpsertMemoV2MutationResult = {
    __typename?: 'Mutation';
    upsertMemoV2: {
        __typename?: 'MemoSaveResult';
        memoID: string;
        suggestedEntities?: Array<{
            __typename?: 'NLPEntity';
            label: ILabelNlp;
            entity: string;
            start: number;
            end: number;
            meta?: any | null;
            wikiTopic?: boolean | null;
            memoIds?: Array<string> | null;
        }> | null;
    };
};

export type IUpsertRelationshipsMutationVariables = Exact<{
    sourceNodes: Array<INodeInput> | INodeInput;
    targetNode: INodeInput;
    relType: Scalars['String'];
    properties?: InputMaybe<Scalars['JSON']>;
}>;

export type IUpsertRelationshipsMutationResult = { __typename?: 'Mutation'; upsertRelationships: boolean };

export type IGetAllMemoQueryVariables = Exact<{
    currentPage?: InputMaybe<Scalars['Int']>;
    pageSize?: InputMaybe<Scalars['Int']>;
    skipToken?: InputMaybe<Scalars['Int']>;
    beforeDate?: InputMaybe<Scalars['Float']>;
    afterDate?: InputMaybe<Scalars['Float']>;
    targetedNodeLabel?: InputMaybe<INodeType>;
    targetedNodeID?: InputMaybe<Scalars['String']>;
    nodeIDs?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
    criteria?: InputMaybe<ICriteriaMemoArgs>;
    memoContentType?: InputMaybe<Array<InputMaybe<IMemoContentType>> | InputMaybe<IMemoContentType>>;
    count?: InputMaybe<Scalars['Int']>;
}>;

export type IGetAllMemoQueryResult = {
    __typename?: 'Query';
    getAllMemo: {
        __typename?: 'GetAllMemoResults';
        count?: number | null;
        memos?: Array<{
            __typename?: 'Memo';
            id: number;
            nodeID: string;
            type: INodeType;
            displayName?: string | null;
            content?: string | null;
            stringifiedContent?: string | null;
            affinity?: number | null;
            createdByUser?: boolean | null;
            lastViewed?: number | null;
            updateDate?: number | null;
            creationDate?: number | null;
            isHidden?: boolean | null;
            inPocket?: boolean | null;
            isTrashed?: boolean | null;
            appearsIn?: any | null;
            attachedNode?: Array<{
                __typename?: 'NodeRecord';
                appearsIn?: any | null;
                occupation?: Array<string> | null;
                countRelationships?: number | null;
                eventStartDate?: number | null;
                eventEndDate?: number | null;
                siteName?: string | null;
                author?: string | null;
                urlLink?: string | null;
                publicationDate?: number | null;
                id: number;
                nodeID: string;
                type: INodeType;
                displayName?: string | null;
                affinity?: number | null;
                createdByUser?: boolean | null;
                lastViewed?: number | null;
                lastContactedDate?: number | null;
                updateDate?: number | null;
                creationDate?: number | null;
                isHidden?: boolean | null;
                inPocket?: boolean | null;
                weavitId?: string | null;
                content?: string | null;
                stringifiedContent?: string | null;
                contentType?: string | null;
                imageUri?: string | null;
                profilePictureUrl?: string | null;
                attachedNode?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                linkedNodes?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                suggestedEntities?: Array<{
                    __typename?: 'NLPEntity';
                    label: ILabelNlp;
                    entity: string;
                    start: number;
                    end: number;
                    meta?: any | null;
                    wikiTopic?: boolean | null;
                    memoIds?: Array<string> | null;
                }> | null;
                organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                profilePicture?: {
                    __typename?: 'Image';
                    fileName: string;
                    contentType: string;
                    backgroundUri?: string | null;
                    imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                } | null;
            }> | null;
            linkedNodes?: Array<{
                __typename?: 'NodeRecord';
                appearsIn?: any | null;
                occupation?: Array<string> | null;
                countRelationships?: number | null;
                eventStartDate?: number | null;
                eventEndDate?: number | null;
                siteName?: string | null;
                author?: string | null;
                urlLink?: string | null;
                publicationDate?: number | null;
                id: number;
                nodeID: string;
                type: INodeType;
                displayName?: string | null;
                affinity?: number | null;
                createdByUser?: boolean | null;
                lastViewed?: number | null;
                lastContactedDate?: number | null;
                updateDate?: number | null;
                creationDate?: number | null;
                isHidden?: boolean | null;
                inPocket?: boolean | null;
                weavitId?: string | null;
                content?: string | null;
                stringifiedContent?: string | null;
                contentType?: string | null;
                imageUri?: string | null;
                profilePictureUrl?: string | null;
                attachedNode?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                linkedNodes?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                suggestedEntities?: Array<{
                    __typename?: 'NLPEntity';
                    label: ILabelNlp;
                    entity: string;
                    start: number;
                    end: number;
                    meta?: any | null;
                    wikiTopic?: boolean | null;
                    memoIds?: Array<string> | null;
                }> | null;
                organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                profilePicture?: {
                    __typename?: 'Image';
                    fileName: string;
                    contentType: string;
                    backgroundUri?: string | null;
                    imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                } | null;
            }> | null;
            suggestedEntities?: Array<{
                __typename?: 'NLPEntity';
                label: ILabelNlp;
                entity: string;
                start: number;
                end: number;
                meta?: any | null;
                wikiTopic?: boolean | null;
                memoIds?: Array<string> | null;
            }> | null;
        }> | null;
    };
};

export type IGetMemoQueryVariables = Exact<{
    nodeID: Scalars['String'];
    setLastViewed?: InputMaybe<Scalars['Boolean']>;
}>;

export type IGetMemoQueryResult = {
    __typename?: 'Query';
    getMemo: Array<{
        __typename?: 'Memo';
        id: number;
        nodeID: string;
        type: INodeType;
        displayName?: string | null;
        content?: string | null;
        stringifiedContent?: string | null;
        affinity?: number | null;
        createdByUser?: boolean | null;
        lastViewed?: number | null;
        updateDate?: number | null;
        creationDate?: number | null;
        isHidden?: boolean | null;
        inPocket?: boolean | null;
        isTrashed?: boolean | null;
        appearsIn?: any | null;
        attachedNode?: Array<{
            __typename?: 'NodeRecord';
            appearsIn?: any | null;
            occupation?: Array<string> | null;
            countRelationships?: number | null;
            eventStartDate?: number | null;
            eventEndDate?: number | null;
            siteName?: string | null;
            author?: string | null;
            urlLink?: string | null;
            publicationDate?: number | null;
            id: number;
            nodeID: string;
            type: INodeType;
            displayName?: string | null;
            affinity?: number | null;
            createdByUser?: boolean | null;
            lastViewed?: number | null;
            lastContactedDate?: number | null;
            updateDate?: number | null;
            creationDate?: number | null;
            isHidden?: boolean | null;
            inPocket?: boolean | null;
            weavitId?: string | null;
            content?: string | null;
            stringifiedContent?: string | null;
            contentType?: string | null;
            imageUri?: string | null;
            profilePictureUrl?: string | null;
            attachedNode?: Array<{
                __typename?: 'NodeRecord';
                occupation?: Array<string> | null;
                countRelationships?: number | null;
                eventStartDate?: number | null;
                eventEndDate?: number | null;
                siteName?: string | null;
                author?: string | null;
                urlLink?: string | null;
                publicationDate?: number | null;
                id: number;
                nodeID: string;
                type: INodeType;
                displayName?: string | null;
                affinity?: number | null;
                createdByUser?: boolean | null;
                lastViewed?: number | null;
                lastContactedDate?: number | null;
                updateDate?: number | null;
                creationDate?: number | null;
                isHidden?: boolean | null;
                inPocket?: boolean | null;
                weavitId?: string | null;
                content?: string | null;
                stringifiedContent?: string | null;
                contentType?: string | null;
                imageUri?: string | null;
                profilePictureUrl?: string | null;
                organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                profilePicture?: {
                    __typename?: 'Image';
                    fileName: string;
                    contentType: string;
                    backgroundUri?: string | null;
                    imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                } | null;
            }> | null;
            linkedNodes?: Array<{
                __typename?: 'NodeRecord';
                occupation?: Array<string> | null;
                countRelationships?: number | null;
                eventStartDate?: number | null;
                eventEndDate?: number | null;
                siteName?: string | null;
                author?: string | null;
                urlLink?: string | null;
                publicationDate?: number | null;
                id: number;
                nodeID: string;
                type: INodeType;
                displayName?: string | null;
                affinity?: number | null;
                createdByUser?: boolean | null;
                lastViewed?: number | null;
                lastContactedDate?: number | null;
                updateDate?: number | null;
                creationDate?: number | null;
                isHidden?: boolean | null;
                inPocket?: boolean | null;
                weavitId?: string | null;
                content?: string | null;
                stringifiedContent?: string | null;
                contentType?: string | null;
                imageUri?: string | null;
                profilePictureUrl?: string | null;
                organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                profilePicture?: {
                    __typename?: 'Image';
                    fileName: string;
                    contentType: string;
                    backgroundUri?: string | null;
                    imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                } | null;
            }> | null;
            suggestedEntities?: Array<{
                __typename?: 'NLPEntity';
                label: ILabelNlp;
                entity: string;
                start: number;
                end: number;
                meta?: any | null;
                wikiTopic?: boolean | null;
                memoIds?: Array<string> | null;
            }> | null;
            organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
            eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
            eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
            profilePicture?: {
                __typename?: 'Image';
                fileName: string;
                contentType: string;
                backgroundUri?: string | null;
                imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
            } | null;
        }> | null;
        linkedNodes?: Array<{
            __typename?: 'NodeRecord';
            appearsIn?: any | null;
            occupation?: Array<string> | null;
            countRelationships?: number | null;
            eventStartDate?: number | null;
            eventEndDate?: number | null;
            siteName?: string | null;
            author?: string | null;
            urlLink?: string | null;
            publicationDate?: number | null;
            id: number;
            nodeID: string;
            type: INodeType;
            displayName?: string | null;
            affinity?: number | null;
            createdByUser?: boolean | null;
            lastViewed?: number | null;
            lastContactedDate?: number | null;
            updateDate?: number | null;
            creationDate?: number | null;
            isHidden?: boolean | null;
            inPocket?: boolean | null;
            weavitId?: string | null;
            content?: string | null;
            stringifiedContent?: string | null;
            contentType?: string | null;
            imageUri?: string | null;
            profilePictureUrl?: string | null;
            attachedNode?: Array<{
                __typename?: 'NodeRecord';
                occupation?: Array<string> | null;
                countRelationships?: number | null;
                eventStartDate?: number | null;
                eventEndDate?: number | null;
                siteName?: string | null;
                author?: string | null;
                urlLink?: string | null;
                publicationDate?: number | null;
                id: number;
                nodeID: string;
                type: INodeType;
                displayName?: string | null;
                affinity?: number | null;
                createdByUser?: boolean | null;
                lastViewed?: number | null;
                lastContactedDate?: number | null;
                updateDate?: number | null;
                creationDate?: number | null;
                isHidden?: boolean | null;
                inPocket?: boolean | null;
                weavitId?: string | null;
                content?: string | null;
                stringifiedContent?: string | null;
                contentType?: string | null;
                imageUri?: string | null;
                profilePictureUrl?: string | null;
                organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                profilePicture?: {
                    __typename?: 'Image';
                    fileName: string;
                    contentType: string;
                    backgroundUri?: string | null;
                    imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                } | null;
            }> | null;
            linkedNodes?: Array<{
                __typename?: 'NodeRecord';
                occupation?: Array<string> | null;
                countRelationships?: number | null;
                eventStartDate?: number | null;
                eventEndDate?: number | null;
                siteName?: string | null;
                author?: string | null;
                urlLink?: string | null;
                publicationDate?: number | null;
                id: number;
                nodeID: string;
                type: INodeType;
                displayName?: string | null;
                affinity?: number | null;
                createdByUser?: boolean | null;
                lastViewed?: number | null;
                lastContactedDate?: number | null;
                updateDate?: number | null;
                creationDate?: number | null;
                isHidden?: boolean | null;
                inPocket?: boolean | null;
                weavitId?: string | null;
                content?: string | null;
                stringifiedContent?: string | null;
                contentType?: string | null;
                imageUri?: string | null;
                profilePictureUrl?: string | null;
                organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                profilePicture?: {
                    __typename?: 'Image';
                    fileName: string;
                    contentType: string;
                    backgroundUri?: string | null;
                    imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                } | null;
            }> | null;
            suggestedEntities?: Array<{
                __typename?: 'NLPEntity';
                label: ILabelNlp;
                entity: string;
                start: number;
                end: number;
                meta?: any | null;
                wikiTopic?: boolean | null;
                memoIds?: Array<string> | null;
            }> | null;
            organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
            eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
            eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
            profilePicture?: {
                __typename?: 'Image';
                fileName: string;
                contentType: string;
                backgroundUri?: string | null;
                imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
            } | null;
        }> | null;
        suggestedEntities?: Array<{
            __typename?: 'NLPEntity';
            label: ILabelNlp;
            entity: string;
            start: number;
            end: number;
            meta?: any | null;
            wikiTopic?: boolean | null;
            memoIds?: Array<string> | null;
        }> | null;
    }>;
};

export type IImportContactsMutationVariables = Exact<{
    tokenId: Scalars['String'];
    contacts: Array<IContactInput> | IContactInput;
}>;

export type IImportContactsMutationResult = { __typename?: 'Mutation'; importContacts: boolean };

export type IGetSnapshotQueryVariables = Exact<{
    nodeId: Scalars['String'];
    nodeType?: InputMaybe<INodeType>;
}>;

export type IGetSnapshotQueryResult = {
    __typename?: 'Query';
    searchByQueryType: {
        __typename?: 'Records';
        data: Array<{
            __typename?: 'NodeRecord';
            appearsIn?: any | null;
            occupation?: Array<string> | null;
            countRelationships?: number | null;
            eventStartDate?: number | null;
            eventEndDate?: number | null;
            siteName?: string | null;
            author?: string | null;
            urlLink?: string | null;
            publicationDate?: number | null;
            id: number;
            nodeID: string;
            type: INodeType;
            displayName?: string | null;
            affinity?: number | null;
            createdByUser?: boolean | null;
            lastViewed?: number | null;
            lastContactedDate?: number | null;
            updateDate?: number | null;
            creationDate?: number | null;
            isHidden?: boolean | null;
            inPocket?: boolean | null;
            weavitId?: string | null;
            content?: string | null;
            stringifiedContent?: string | null;
            contentType?: string | null;
            imageUri?: string | null;
            profilePictureUrl?: string | null;
            attachedNode?: Array<{
                __typename?: 'NodeRecord';
                appearsIn?: any | null;
                occupation?: Array<string> | null;
                countRelationships?: number | null;
                eventStartDate?: number | null;
                eventEndDate?: number | null;
                siteName?: string | null;
                author?: string | null;
                urlLink?: string | null;
                publicationDate?: number | null;
                id: number;
                nodeID: string;
                type: INodeType;
                displayName?: string | null;
                affinity?: number | null;
                createdByUser?: boolean | null;
                lastViewed?: number | null;
                lastContactedDate?: number | null;
                updateDate?: number | null;
                creationDate?: number | null;
                isHidden?: boolean | null;
                inPocket?: boolean | null;
                weavitId?: string | null;
                content?: string | null;
                stringifiedContent?: string | null;
                contentType?: string | null;
                imageUri?: string | null;
                profilePictureUrl?: string | null;
                attachedNode?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                linkedNodes?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                suggestedEntities?: Array<{
                    __typename?: 'NLPEntity';
                    label: ILabelNlp;
                    entity: string;
                    start: number;
                    end: number;
                    meta?: any | null;
                    wikiTopic?: boolean | null;
                    memoIds?: Array<string> | null;
                }> | null;
                organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                profilePicture?: {
                    __typename?: 'Image';
                    fileName: string;
                    contentType: string;
                    backgroundUri?: string | null;
                    imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                } | null;
            }> | null;
            linkedNodes?: Array<{
                __typename?: 'NodeRecord';
                appearsIn?: any | null;
                occupation?: Array<string> | null;
                countRelationships?: number | null;
                eventStartDate?: number | null;
                eventEndDate?: number | null;
                siteName?: string | null;
                author?: string | null;
                urlLink?: string | null;
                publicationDate?: number | null;
                id: number;
                nodeID: string;
                type: INodeType;
                displayName?: string | null;
                affinity?: number | null;
                createdByUser?: boolean | null;
                lastViewed?: number | null;
                lastContactedDate?: number | null;
                updateDate?: number | null;
                creationDate?: number | null;
                isHidden?: boolean | null;
                inPocket?: boolean | null;
                weavitId?: string | null;
                content?: string | null;
                stringifiedContent?: string | null;
                contentType?: string | null;
                imageUri?: string | null;
                profilePictureUrl?: string | null;
                attachedNode?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                linkedNodes?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                suggestedEntities?: Array<{
                    __typename?: 'NLPEntity';
                    label: ILabelNlp;
                    entity: string;
                    start: number;
                    end: number;
                    meta?: any | null;
                    wikiTopic?: boolean | null;
                    memoIds?: Array<string> | null;
                }> | null;
                organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                profilePicture?: {
                    __typename?: 'Image';
                    fileName: string;
                    contentType: string;
                    backgroundUri?: string | null;
                    imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                } | null;
            }> | null;
            suggestedEntities?: Array<{
                __typename?: 'NLPEntity';
                label: ILabelNlp;
                entity: string;
                start: number;
                end: number;
                meta?: any | null;
                wikiTopic?: boolean | null;
                memoIds?: Array<string> | null;
            }> | null;
            organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
            eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
            eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
            profilePicture?: {
                __typename?: 'Image';
                fileName: string;
                contentType: string;
                backgroundUri?: string | null;
                imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
            } | null;
        }>;
        node?: {
            __typename?: 'NodeRecordSnapshot';
            id: number;
            nodeID: string;
            type: INodeType;
            displayName?: string | null;
            createdByUser?: boolean | null;
            isHidden?: boolean | null;
            inPocket?: boolean | null;
            affinity?: number | null;
            occupation?: Array<string> | null;
            emailAddresses?: Array<string> | null;
            phones?: Array<string> | null;
            phoneContactID?: string | null;
            lastViewed?: number | null;
            lastContactedDate?: number | null;
            updateDate?: number | null;
            creationDate?: number | null;
            countRelationships?: number | null;
            eventStatus?: string | null;
            eventResponseStatus?: string | null;
            eventStartDate?: number | null;
            eventEndDate?: number | null;
            contentType?: string | null;
            siteName?: string | null;
            author?: string | null;
            urlLink?: string | null;
            publicationDate?: number | null;
            content?: string | null;
            stringifiedContent?: string | null;
            websites?: Array<string> | null;
            weavitId?: string | null;
            imageUri?: string | null;
            profilePictureUrl?: string | null;
            organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
            weavitUser?: {
                __typename?: 'User';
                userId: string;
                email: string;
                companyName?: string | null;
                creationDate?: string | null;
                biography?: string | null;
                profilePictureUrl?: string | null;
                code?: string | null;
                title?: string | null;
                names?: { __typename?: 'UserNames'; firstName?: string | null; lastName?: string | null } | null;
                profilePicture?: { __typename?: 'ProfilePicture'; resourcePath?: string | null; presignedUrl?: string | null } | null;
                linkedAccounts?: Array<{
                    __typename?: 'Account';
                    provider?: string | null;
                    accountId?: string | null;
                    scope?: Array<string> | null;
                    scopes?: Array<string> | null;
                    isSyncEnabled?: boolean | null;
                    emailAddress?: string | null;
                    tokenId?: string | null;
                    name?: string | null;
                }> | null;
            } | null;
            profilePicture?: {
                __typename?: 'Image';
                fileName: string;
                contentType: string;
                backgroundUri?: string | null;
                imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
            } | null;
            location?: { __typename?: 'Location'; name?: string | null } | null;
            eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
            eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
        } | null;
    };
};

export type IUpdateNodeMutationVariables = Exact<{
    nodeId: Scalars['String'];
    nodeLabel: INodeType;
    properties: IUpdateNodeProperties;
}>;

export type IUpdateNodeMutationResult = { __typename?: 'Mutation'; updateNode: { __typename?: 'UpdateNodeResult'; imageUrl?: string | null } };

export type IGetSnapshotDetailsQueryVariables = Exact<{
    nodeId: Scalars['String'];
    nodeType: INodeType;
}>;

export type IGetSnapshotDetailsQueryResult = {
    __typename?: 'Query';
    searchByQueryType: {
        __typename?: 'Records';
        data: Array<{
            __typename?: 'NodeRecord';
            appearsIn?: any | null;
            occupation?: Array<string> | null;
            countRelationships?: number | null;
            eventStartDate?: number | null;
            eventEndDate?: number | null;
            siteName?: string | null;
            author?: string | null;
            urlLink?: string | null;
            publicationDate?: number | null;
            id: number;
            nodeID: string;
            type: INodeType;
            displayName?: string | null;
            affinity?: number | null;
            createdByUser?: boolean | null;
            lastViewed?: number | null;
            lastContactedDate?: number | null;
            updateDate?: number | null;
            creationDate?: number | null;
            isHidden?: boolean | null;
            inPocket?: boolean | null;
            weavitId?: string | null;
            content?: string | null;
            stringifiedContent?: string | null;
            contentType?: string | null;
            imageUri?: string | null;
            profilePictureUrl?: string | null;
            attachedNode?: Array<{
                __typename?: 'NodeRecord';
                appearsIn?: any | null;
                occupation?: Array<string> | null;
                countRelationships?: number | null;
                eventStartDate?: number | null;
                eventEndDate?: number | null;
                siteName?: string | null;
                author?: string | null;
                urlLink?: string | null;
                publicationDate?: number | null;
                id: number;
                nodeID: string;
                type: INodeType;
                displayName?: string | null;
                affinity?: number | null;
                createdByUser?: boolean | null;
                lastViewed?: number | null;
                lastContactedDate?: number | null;
                updateDate?: number | null;
                creationDate?: number | null;
                isHidden?: boolean | null;
                inPocket?: boolean | null;
                weavitId?: string | null;
                content?: string | null;
                stringifiedContent?: string | null;
                contentType?: string | null;
                imageUri?: string | null;
                profilePictureUrl?: string | null;
                attachedNode?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                linkedNodes?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                suggestedEntities?: Array<{
                    __typename?: 'NLPEntity';
                    label: ILabelNlp;
                    entity: string;
                    start: number;
                    end: number;
                    meta?: any | null;
                    wikiTopic?: boolean | null;
                    memoIds?: Array<string> | null;
                }> | null;
                organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                profilePicture?: {
                    __typename?: 'Image';
                    fileName: string;
                    contentType: string;
                    backgroundUri?: string | null;
                    imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                } | null;
            }> | null;
            linkedNodes?: Array<{
                __typename?: 'NodeRecord';
                appearsIn?: any | null;
                occupation?: Array<string> | null;
                countRelationships?: number | null;
                eventStartDate?: number | null;
                eventEndDate?: number | null;
                siteName?: string | null;
                author?: string | null;
                urlLink?: string | null;
                publicationDate?: number | null;
                id: number;
                nodeID: string;
                type: INodeType;
                displayName?: string | null;
                affinity?: number | null;
                createdByUser?: boolean | null;
                lastViewed?: number | null;
                lastContactedDate?: number | null;
                updateDate?: number | null;
                creationDate?: number | null;
                isHidden?: boolean | null;
                inPocket?: boolean | null;
                weavitId?: string | null;
                content?: string | null;
                stringifiedContent?: string | null;
                contentType?: string | null;
                imageUri?: string | null;
                profilePictureUrl?: string | null;
                attachedNode?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                linkedNodes?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                suggestedEntities?: Array<{
                    __typename?: 'NLPEntity';
                    label: ILabelNlp;
                    entity: string;
                    start: number;
                    end: number;
                    meta?: any | null;
                    wikiTopic?: boolean | null;
                    memoIds?: Array<string> | null;
                }> | null;
                organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                profilePicture?: {
                    __typename?: 'Image';
                    fileName: string;
                    contentType: string;
                    backgroundUri?: string | null;
                    imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                } | null;
            }> | null;
            suggestedEntities?: Array<{
                __typename?: 'NLPEntity';
                label: ILabelNlp;
                entity: string;
                start: number;
                end: number;
                meta?: any | null;
                wikiTopic?: boolean | null;
                memoIds?: Array<string> | null;
            }> | null;
            organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
            eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
            eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
            profilePicture?: {
                __typename?: 'Image';
                fileName: string;
                contentType: string;
                backgroundUri?: string | null;
                imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
            } | null;
        }>;
        node?: {
            __typename?: 'NodeRecordSnapshot';
            id: number;
            nodeID: string;
            type: INodeType;
            displayName?: string | null;
            createdByUser?: boolean | null;
            isHidden?: boolean | null;
            inPocket?: boolean | null;
            affinity?: number | null;
            occupation?: Array<string> | null;
            emailAddresses?: Array<string> | null;
            phones?: Array<string> | null;
            phoneContactID?: string | null;
            lastViewed?: number | null;
            lastContactedDate?: number | null;
            updateDate?: number | null;
            creationDate?: number | null;
            countRelationships?: number | null;
            eventStatus?: string | null;
            eventResponseStatus?: string | null;
            eventStartDate?: number | null;
            eventEndDate?: number | null;
            contentType?: string | null;
            siteName?: string | null;
            author?: string | null;
            urlLink?: string | null;
            publicationDate?: number | null;
            content?: string | null;
            stringifiedContent?: string | null;
            websites?: Array<string> | null;
            weavitId?: string | null;
            imageUri?: string | null;
            profilePictureUrl?: string | null;
            organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
            weavitUser?: {
                __typename?: 'User';
                userId: string;
                email: string;
                companyName?: string | null;
                creationDate?: string | null;
                biography?: string | null;
                profilePictureUrl?: string | null;
                code?: string | null;
                title?: string | null;
                names?: { __typename?: 'UserNames'; firstName?: string | null; lastName?: string | null } | null;
                profilePicture?: { __typename?: 'ProfilePicture'; resourcePath?: string | null; presignedUrl?: string | null } | null;
                linkedAccounts?: Array<{
                    __typename?: 'Account';
                    provider?: string | null;
                    accountId?: string | null;
                    scope?: Array<string> | null;
                    scopes?: Array<string> | null;
                    isSyncEnabled?: boolean | null;
                    emailAddress?: string | null;
                    tokenId?: string | null;
                    name?: string | null;
                }> | null;
            } | null;
            profilePicture?: {
                __typename?: 'Image';
                fileName: string;
                contentType: string;
                backgroundUri?: string | null;
                imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
            } | null;
            location?: { __typename?: 'Location'; name?: string | null } | null;
            eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
            eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
        } | null;
    };
    getNodeById: {
        __typename?: 'NodeRecordSnapshot';
        merged?: Array<{
            __typename?: 'NodeRecord';
            appearsIn?: any | null;
            occupation?: Array<string> | null;
            countRelationships?: number | null;
            eventStartDate?: number | null;
            eventEndDate?: number | null;
            siteName?: string | null;
            author?: string | null;
            urlLink?: string | null;
            publicationDate?: number | null;
            id: number;
            nodeID: string;
            type: INodeType;
            displayName?: string | null;
            affinity?: number | null;
            createdByUser?: boolean | null;
            lastViewed?: number | null;
            lastContactedDate?: number | null;
            updateDate?: number | null;
            creationDate?: number | null;
            isHidden?: boolean | null;
            inPocket?: boolean | null;
            weavitId?: string | null;
            content?: string | null;
            stringifiedContent?: string | null;
            contentType?: string | null;
            imageUri?: string | null;
            profilePictureUrl?: string | null;
            attachedNode?: Array<{
                __typename?: 'NodeRecord';
                appearsIn?: any | null;
                occupation?: Array<string> | null;
                countRelationships?: number | null;
                eventStartDate?: number | null;
                eventEndDate?: number | null;
                siteName?: string | null;
                author?: string | null;
                urlLink?: string | null;
                publicationDate?: number | null;
                id: number;
                nodeID: string;
                type: INodeType;
                displayName?: string | null;
                affinity?: number | null;
                createdByUser?: boolean | null;
                lastViewed?: number | null;
                lastContactedDate?: number | null;
                updateDate?: number | null;
                creationDate?: number | null;
                isHidden?: boolean | null;
                inPocket?: boolean | null;
                weavitId?: string | null;
                content?: string | null;
                stringifiedContent?: string | null;
                contentType?: string | null;
                imageUri?: string | null;
                profilePictureUrl?: string | null;
                attachedNode?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                linkedNodes?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                suggestedEntities?: Array<{
                    __typename?: 'NLPEntity';
                    label: ILabelNlp;
                    entity: string;
                    start: number;
                    end: number;
                    meta?: any | null;
                    wikiTopic?: boolean | null;
                    memoIds?: Array<string> | null;
                }> | null;
                organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                profilePicture?: {
                    __typename?: 'Image';
                    fileName: string;
                    contentType: string;
                    backgroundUri?: string | null;
                    imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                } | null;
            }> | null;
            linkedNodes?: Array<{
                __typename?: 'NodeRecord';
                appearsIn?: any | null;
                occupation?: Array<string> | null;
                countRelationships?: number | null;
                eventStartDate?: number | null;
                eventEndDate?: number | null;
                siteName?: string | null;
                author?: string | null;
                urlLink?: string | null;
                publicationDate?: number | null;
                id: number;
                nodeID: string;
                type: INodeType;
                displayName?: string | null;
                affinity?: number | null;
                createdByUser?: boolean | null;
                lastViewed?: number | null;
                lastContactedDate?: number | null;
                updateDate?: number | null;
                creationDate?: number | null;
                isHidden?: boolean | null;
                inPocket?: boolean | null;
                weavitId?: string | null;
                content?: string | null;
                stringifiedContent?: string | null;
                contentType?: string | null;
                imageUri?: string | null;
                profilePictureUrl?: string | null;
                attachedNode?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                linkedNodes?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                suggestedEntities?: Array<{
                    __typename?: 'NLPEntity';
                    label: ILabelNlp;
                    entity: string;
                    start: number;
                    end: number;
                    meta?: any | null;
                    wikiTopic?: boolean | null;
                    memoIds?: Array<string> | null;
                }> | null;
                organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                profilePicture?: {
                    __typename?: 'Image';
                    fileName: string;
                    contentType: string;
                    backgroundUri?: string | null;
                    imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                } | null;
            }> | null;
            suggestedEntities?: Array<{
                __typename?: 'NLPEntity';
                label: ILabelNlp;
                entity: string;
                start: number;
                end: number;
                meta?: any | null;
                wikiTopic?: boolean | null;
                memoIds?: Array<string> | null;
            }> | null;
            organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
            eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
            eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
            profilePicture?: {
                __typename?: 'Image';
                fileName: string;
                contentType: string;
                backgroundUri?: string | null;
                imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
            } | null;
        }> | null;
    };
};

export type IGetSnapshotInsightQueryVariables = Exact<{
    nodeID: Scalars['String'];
    nodeLabel: INodeType;
}>;

export type IGetSnapshotInsightQueryResult = {
    __typename?: 'Query';
    getNodeById: {
        __typename?: 'NodeRecordSnapshot';
        id: number;
        nodeID: string;
        type: INodeType;
        insight?: {
            __typename?: 'Insight';
            firstCommunication?: number | null;
            lastEmailDate?: number | null;
            emailsCount?: number | null;
            lastEventDate?: number | null;
            eventsCount: number;
            fullEmailHistory?: any | null;
            fullEventHistory?: any | null;
            firstEmailDate?: number | null;
            firstEventDate?: number | null;
            lastContactedDate?: number | null;
            firstEvent?: {
                __typename?: 'EventRecord';
                nodeID: string;
                nodeOwnerID?: string | null;
                hidden?: boolean | null;
                updateDate?: number | null;
                eventResponseStatus?: string | null;
                eventStartDate?: number | null;
                eventEndDate?: number | null;
                eventUpdateDate?: number | null;
                eventSubject?: string | null;
                location?: { __typename?: 'Location'; name?: string | null } | null;
                eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
            } | null;
            lastEvent?: {
                __typename?: 'EventRecord';
                nodeID: string;
                nodeOwnerID?: string | null;
                hidden?: boolean | null;
                updateDate?: number | null;
                eventResponseStatus?: string | null;
                eventStartDate?: number | null;
                eventEndDate?: number | null;
                eventUpdateDate?: number | null;
                eventSubject?: string | null;
                location?: { __typename?: 'Location'; name?: string | null } | null;
                eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
            } | null;
        } | null;
    };
};

export type IGetProgressQueryVariables = Exact<{ [key: string]: never }>;

export type IGetProgressQueryResult = { __typename?: 'Query'; getProgress?: number | null };

export type IDeleteUserMutationVariables = Exact<{ [key: string]: never }>;

export type IDeleteUserMutationResult = { __typename?: 'Mutation'; deleteUser?: boolean | null };

export type ISendEmailMutationVariables = Exact<{
    template: IEmailTemplates;
}>;

export type ISendEmailMutationResult = { __typename?: 'Mutation'; sendEmail: boolean };

export type IGetAllTopicsQueryVariables = Exact<{
    fromWikipedia?: InputMaybe<Scalars['Boolean']>;
}>;

export type IGetAllTopicsQueryResult = {
    __typename?: 'Query';
    getAllTopics: {
        __typename?: 'GetAllTopicsResult';
        results: Array<{
            __typename?: 'NodeRecord';
            appearsIn?: any | null;
            occupation?: Array<string> | null;
            countRelationships?: number | null;
            eventStartDate?: number | null;
            eventEndDate?: number | null;
            siteName?: string | null;
            author?: string | null;
            urlLink?: string | null;
            publicationDate?: number | null;
            id: number;
            nodeID: string;
            type: INodeType;
            displayName?: string | null;
            affinity?: number | null;
            createdByUser?: boolean | null;
            lastViewed?: number | null;
            lastContactedDate?: number | null;
            updateDate?: number | null;
            creationDate?: number | null;
            isHidden?: boolean | null;
            inPocket?: boolean | null;
            weavitId?: string | null;
            content?: string | null;
            stringifiedContent?: string | null;
            contentType?: string | null;
            imageUri?: string | null;
            profilePictureUrl?: string | null;
            attachedNode?: Array<{
                __typename?: 'NodeRecord';
                appearsIn?: any | null;
                occupation?: Array<string> | null;
                countRelationships?: number | null;
                eventStartDate?: number | null;
                eventEndDate?: number | null;
                siteName?: string | null;
                author?: string | null;
                urlLink?: string | null;
                publicationDate?: number | null;
                id: number;
                nodeID: string;
                type: INodeType;
                displayName?: string | null;
                affinity?: number | null;
                createdByUser?: boolean | null;
                lastViewed?: number | null;
                lastContactedDate?: number | null;
                updateDate?: number | null;
                creationDate?: number | null;
                isHidden?: boolean | null;
                inPocket?: boolean | null;
                weavitId?: string | null;
                content?: string | null;
                stringifiedContent?: string | null;
                contentType?: string | null;
                imageUri?: string | null;
                profilePictureUrl?: string | null;
                attachedNode?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                linkedNodes?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                suggestedEntities?: Array<{
                    __typename?: 'NLPEntity';
                    label: ILabelNlp;
                    entity: string;
                    start: number;
                    end: number;
                    meta?: any | null;
                    wikiTopic?: boolean | null;
                    memoIds?: Array<string> | null;
                }> | null;
                organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                profilePicture?: {
                    __typename?: 'Image';
                    fileName: string;
                    contentType: string;
                    backgroundUri?: string | null;
                    imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                } | null;
            }> | null;
            linkedNodes?: Array<{
                __typename?: 'NodeRecord';
                appearsIn?: any | null;
                occupation?: Array<string> | null;
                countRelationships?: number | null;
                eventStartDate?: number | null;
                eventEndDate?: number | null;
                siteName?: string | null;
                author?: string | null;
                urlLink?: string | null;
                publicationDate?: number | null;
                id: number;
                nodeID: string;
                type: INodeType;
                displayName?: string | null;
                affinity?: number | null;
                createdByUser?: boolean | null;
                lastViewed?: number | null;
                lastContactedDate?: number | null;
                updateDate?: number | null;
                creationDate?: number | null;
                isHidden?: boolean | null;
                inPocket?: boolean | null;
                weavitId?: string | null;
                content?: string | null;
                stringifiedContent?: string | null;
                contentType?: string | null;
                imageUri?: string | null;
                profilePictureUrl?: string | null;
                attachedNode?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                linkedNodes?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                suggestedEntities?: Array<{
                    __typename?: 'NLPEntity';
                    label: ILabelNlp;
                    entity: string;
                    start: number;
                    end: number;
                    meta?: any | null;
                    wikiTopic?: boolean | null;
                    memoIds?: Array<string> | null;
                }> | null;
                organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                profilePicture?: {
                    __typename?: 'Image';
                    fileName: string;
                    contentType: string;
                    backgroundUri?: string | null;
                    imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                } | null;
            }> | null;
            suggestedEntities?: Array<{
                __typename?: 'NLPEntity';
                label: ILabelNlp;
                entity: string;
                start: number;
                end: number;
                meta?: any | null;
                wikiTopic?: boolean | null;
                memoIds?: Array<string> | null;
            }> | null;
            organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
            eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
            eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
            profilePicture?: {
                __typename?: 'Image';
                fileName: string;
                contentType: string;
                backgroundUri?: string | null;
                imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
            } | null;
        }>;
    };
};

export type IClaimReferralCodeMutationVariables = Exact<{
    code: Scalars['String'];
}>;

export type IClaimReferralCodeMutationResult = { __typename?: 'Mutation'; claimReferralCode: boolean };

export type ICreateUserEventMutationVariables = Exact<{
    event: IEventTypes;
    correlationId: Scalars['String'];
}>;

export type ICreateUserEventMutationResult = { __typename?: 'Mutation'; createUserEvent: boolean };

export type IGetAchievementsQueryVariables = Exact<{ [key: string]: never }>;

export type IGetAchievementsQueryResult = { __typename?: 'Query'; getAchievements?: { __typename?: 'AchievementsResult'; onboarding?: any | null } | null };

export type IGetUpcomingEventsQueryVariables = Exact<{
    pageSize?: InputMaybe<Scalars['Int']>;
    nextEventStartDate?: InputMaybe<Scalars['Float']>;
    nextEventEndDate?: InputMaybe<Scalars['Float']>;
    previousEventEndDate?: InputMaybe<Scalars['Float']>;
    previousEventStartDate?: InputMaybe<Scalars['Float']>;
    orderType?: InputMaybe<IOrderType>;
}>;

export type IGetUpcomingEventsQueryResult = {
    __typename?: 'Query';
    getUpcomingEvents: {
        __typename?: 'UpcomingEventsResponse';
        results?: Array<{
            __typename?: 'UpcomingEvents';
            nodeID: string;
            type: INodeType;
            nodeOwnerID?: string | null;
            content?: string | null;
            displayName?: string | null;
            hidden?: boolean | null;
            updateDate?: number | null;
            creationDate?: number | null;
            eventCreationDate?: number | null;
            eventResponseStatus?: string | null;
            eventStartDate?: number | null;
            eventEndDate?: number | null;
            eventUpdateDate?: number | null;
            eventSubject?: string | null;
            eventNote?: string | null;
            eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
            eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
            location?: { __typename?: 'Location'; name?: string | null } | null;
        }> | null;
    };
};

export type IGetMyPinnedNodesQueryVariables = Exact<{ [key: string]: never }>;

export type IGetMyPinnedNodesQueryResult = {
    __typename?: 'Query';
    getNodesByFilter: {
        __typename?: 'Records';
        data: Array<{
            __typename?: 'NodeRecord';
            appearsIn?: any | null;
            occupation?: Array<string> | null;
            countRelationships?: number | null;
            eventStartDate?: number | null;
            eventEndDate?: number | null;
            siteName?: string | null;
            author?: string | null;
            urlLink?: string | null;
            publicationDate?: number | null;
            id: number;
            nodeID: string;
            type: INodeType;
            displayName?: string | null;
            affinity?: number | null;
            createdByUser?: boolean | null;
            lastViewed?: number | null;
            lastContactedDate?: number | null;
            updateDate?: number | null;
            creationDate?: number | null;
            isHidden?: boolean | null;
            inPocket?: boolean | null;
            weavitId?: string | null;
            content?: string | null;
            stringifiedContent?: string | null;
            contentType?: string | null;
            imageUri?: string | null;
            profilePictureUrl?: string | null;
            topLinks?: Array<{ __typename?: 'TopNode'; type?: string | null; displayName?: string | null; nodeID?: string | null }> | null;
            attachedNode?: Array<{
                __typename?: 'NodeRecord';
                appearsIn?: any | null;
                occupation?: Array<string> | null;
                countRelationships?: number | null;
                eventStartDate?: number | null;
                eventEndDate?: number | null;
                siteName?: string | null;
                author?: string | null;
                urlLink?: string | null;
                publicationDate?: number | null;
                id: number;
                nodeID: string;
                type: INodeType;
                displayName?: string | null;
                affinity?: number | null;
                createdByUser?: boolean | null;
                lastViewed?: number | null;
                lastContactedDate?: number | null;
                updateDate?: number | null;
                creationDate?: number | null;
                isHidden?: boolean | null;
                inPocket?: boolean | null;
                weavitId?: string | null;
                content?: string | null;
                stringifiedContent?: string | null;
                contentType?: string | null;
                imageUri?: string | null;
                profilePictureUrl?: string | null;
                attachedNode?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                linkedNodes?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                suggestedEntities?: Array<{
                    __typename?: 'NLPEntity';
                    label: ILabelNlp;
                    entity: string;
                    start: number;
                    end: number;
                    meta?: any | null;
                    wikiTopic?: boolean | null;
                    memoIds?: Array<string> | null;
                }> | null;
                organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                profilePicture?: {
                    __typename?: 'Image';
                    fileName: string;
                    contentType: string;
                    backgroundUri?: string | null;
                    imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                } | null;
            }> | null;
            linkedNodes?: Array<{
                __typename?: 'NodeRecord';
                appearsIn?: any | null;
                occupation?: Array<string> | null;
                countRelationships?: number | null;
                eventStartDate?: number | null;
                eventEndDate?: number | null;
                siteName?: string | null;
                author?: string | null;
                urlLink?: string | null;
                publicationDate?: number | null;
                id: number;
                nodeID: string;
                type: INodeType;
                displayName?: string | null;
                affinity?: number | null;
                createdByUser?: boolean | null;
                lastViewed?: number | null;
                lastContactedDate?: number | null;
                updateDate?: number | null;
                creationDate?: number | null;
                isHidden?: boolean | null;
                inPocket?: boolean | null;
                weavitId?: string | null;
                content?: string | null;
                stringifiedContent?: string | null;
                contentType?: string | null;
                imageUri?: string | null;
                profilePictureUrl?: string | null;
                attachedNode?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                linkedNodes?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                suggestedEntities?: Array<{
                    __typename?: 'NLPEntity';
                    label: ILabelNlp;
                    entity: string;
                    start: number;
                    end: number;
                    meta?: any | null;
                    wikiTopic?: boolean | null;
                    memoIds?: Array<string> | null;
                }> | null;
                organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                profilePicture?: {
                    __typename?: 'Image';
                    fileName: string;
                    contentType: string;
                    backgroundUri?: string | null;
                    imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                } | null;
            }> | null;
            suggestedEntities?: Array<{
                __typename?: 'NLPEntity';
                label: ILabelNlp;
                entity: string;
                start: number;
                end: number;
                meta?: any | null;
                wikiTopic?: boolean | null;
                memoIds?: Array<string> | null;
            }> | null;
            organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
            eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
            eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
            profilePicture?: {
                __typename?: 'Image';
                fileName: string;
                contentType: string;
                backgroundUri?: string | null;
                imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
            } | null;
        }>;
    };
};

export type IGetRecentlyViewedRowsQueryVariables = Exact<{
    nodeTypeFilters?: InputMaybe<Array<INodeType> | INodeType>;
    pageSize?: InputMaybe<Scalars['Int']>;
    skipToken?: InputMaybe<Scalars['Int']>;
}>;

export type IGetRecentlyViewedRowsQueryResult = {
    __typename?: 'Query';
    searchByQueryType: {
        __typename?: 'Records';
        data: Array<{
            __typename?: 'NodeRecord';
            appearsIn?: any | null;
            occupation?: Array<string> | null;
            countRelationships?: number | null;
            eventStartDate?: number | null;
            eventEndDate?: number | null;
            siteName?: string | null;
            author?: string | null;
            urlLink?: string | null;
            publicationDate?: number | null;
            id: number;
            nodeID: string;
            type: INodeType;
            displayName?: string | null;
            affinity?: number | null;
            createdByUser?: boolean | null;
            lastViewed?: number | null;
            lastContactedDate?: number | null;
            updateDate?: number | null;
            creationDate?: number | null;
            isHidden?: boolean | null;
            inPocket?: boolean | null;
            weavitId?: string | null;
            content?: string | null;
            stringifiedContent?: string | null;
            contentType?: string | null;
            imageUri?: string | null;
            profilePictureUrl?: string | null;
            attachedNode?: Array<{
                __typename?: 'NodeRecord';
                appearsIn?: any | null;
                occupation?: Array<string> | null;
                countRelationships?: number | null;
                eventStartDate?: number | null;
                eventEndDate?: number | null;
                siteName?: string | null;
                author?: string | null;
                urlLink?: string | null;
                publicationDate?: number | null;
                id: number;
                nodeID: string;
                type: INodeType;
                displayName?: string | null;
                affinity?: number | null;
                createdByUser?: boolean | null;
                lastViewed?: number | null;
                lastContactedDate?: number | null;
                updateDate?: number | null;
                creationDate?: number | null;
                isHidden?: boolean | null;
                inPocket?: boolean | null;
                weavitId?: string | null;
                content?: string | null;
                stringifiedContent?: string | null;
                contentType?: string | null;
                imageUri?: string | null;
                profilePictureUrl?: string | null;
                attachedNode?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                linkedNodes?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                suggestedEntities?: Array<{
                    __typename?: 'NLPEntity';
                    label: ILabelNlp;
                    entity: string;
                    start: number;
                    end: number;
                    meta?: any | null;
                    wikiTopic?: boolean | null;
                    memoIds?: Array<string> | null;
                }> | null;
                organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                profilePicture?: {
                    __typename?: 'Image';
                    fileName: string;
                    contentType: string;
                    backgroundUri?: string | null;
                    imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                } | null;
            }> | null;
            linkedNodes?: Array<{
                __typename?: 'NodeRecord';
                appearsIn?: any | null;
                occupation?: Array<string> | null;
                countRelationships?: number | null;
                eventStartDate?: number | null;
                eventEndDate?: number | null;
                siteName?: string | null;
                author?: string | null;
                urlLink?: string | null;
                publicationDate?: number | null;
                id: number;
                nodeID: string;
                type: INodeType;
                displayName?: string | null;
                affinity?: number | null;
                createdByUser?: boolean | null;
                lastViewed?: number | null;
                lastContactedDate?: number | null;
                updateDate?: number | null;
                creationDate?: number | null;
                isHidden?: boolean | null;
                inPocket?: boolean | null;
                weavitId?: string | null;
                content?: string | null;
                stringifiedContent?: string | null;
                contentType?: string | null;
                imageUri?: string | null;
                profilePictureUrl?: string | null;
                attachedNode?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                linkedNodes?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                suggestedEntities?: Array<{
                    __typename?: 'NLPEntity';
                    label: ILabelNlp;
                    entity: string;
                    start: number;
                    end: number;
                    meta?: any | null;
                    wikiTopic?: boolean | null;
                    memoIds?: Array<string> | null;
                }> | null;
                organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                profilePicture?: {
                    __typename?: 'Image';
                    fileName: string;
                    contentType: string;
                    backgroundUri?: string | null;
                    imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                } | null;
            }> | null;
            suggestedEntities?: Array<{
                __typename?: 'NLPEntity';
                label: ILabelNlp;
                entity: string;
                start: number;
                end: number;
                meta?: any | null;
                wikiTopic?: boolean | null;
                memoIds?: Array<string> | null;
            }> | null;
            organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
            eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
            eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
            profilePicture?: {
                __typename?: 'Image';
                fileName: string;
                contentType: string;
                backgroundUri?: string | null;
                imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
            } | null;
        }>;
    };
};

export type IGetRecentlyViewedTilesQueryVariables = Exact<{
    nodeTypeFilters?: InputMaybe<Array<INodeType> | INodeType>;
    pageSize?: InputMaybe<Scalars['Int']>;
    skipToken?: InputMaybe<Scalars['Int']>;
}>;

export type IGetRecentlyViewedTilesQueryResult = {
    __typename?: 'Query';
    searchByQueryType: {
        __typename?: 'Records';
        data: Array<{
            __typename?: 'NodeRecord';
            appearsIn?: any | null;
            occupation?: Array<string> | null;
            countRelationships?: number | null;
            eventStartDate?: number | null;
            eventEndDate?: number | null;
            siteName?: string | null;
            author?: string | null;
            urlLink?: string | null;
            publicationDate?: number | null;
            id: number;
            nodeID: string;
            type: INodeType;
            displayName?: string | null;
            affinity?: number | null;
            createdByUser?: boolean | null;
            lastViewed?: number | null;
            lastContactedDate?: number | null;
            updateDate?: number | null;
            creationDate?: number | null;
            isHidden?: boolean | null;
            inPocket?: boolean | null;
            weavitId?: string | null;
            content?: string | null;
            stringifiedContent?: string | null;
            contentType?: string | null;
            imageUri?: string | null;
            profilePictureUrl?: string | null;
            topLinks?: Array<{ __typename?: 'TopNode'; type?: string | null; displayName?: string | null; nodeID?: string | null }> | null;
            attachedNode?: Array<{
                __typename?: 'NodeRecord';
                appearsIn?: any | null;
                occupation?: Array<string> | null;
                countRelationships?: number | null;
                eventStartDate?: number | null;
                eventEndDate?: number | null;
                siteName?: string | null;
                author?: string | null;
                urlLink?: string | null;
                publicationDate?: number | null;
                id: number;
                nodeID: string;
                type: INodeType;
                displayName?: string | null;
                affinity?: number | null;
                createdByUser?: boolean | null;
                lastViewed?: number | null;
                lastContactedDate?: number | null;
                updateDate?: number | null;
                creationDate?: number | null;
                isHidden?: boolean | null;
                inPocket?: boolean | null;
                weavitId?: string | null;
                content?: string | null;
                stringifiedContent?: string | null;
                contentType?: string | null;
                imageUri?: string | null;
                profilePictureUrl?: string | null;
                attachedNode?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                linkedNodes?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                suggestedEntities?: Array<{
                    __typename?: 'NLPEntity';
                    label: ILabelNlp;
                    entity: string;
                    start: number;
                    end: number;
                    meta?: any | null;
                    wikiTopic?: boolean | null;
                    memoIds?: Array<string> | null;
                }> | null;
                organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                profilePicture?: {
                    __typename?: 'Image';
                    fileName: string;
                    contentType: string;
                    backgroundUri?: string | null;
                    imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                } | null;
            }> | null;
            linkedNodes?: Array<{
                __typename?: 'NodeRecord';
                appearsIn?: any | null;
                occupation?: Array<string> | null;
                countRelationships?: number | null;
                eventStartDate?: number | null;
                eventEndDate?: number | null;
                siteName?: string | null;
                author?: string | null;
                urlLink?: string | null;
                publicationDate?: number | null;
                id: number;
                nodeID: string;
                type: INodeType;
                displayName?: string | null;
                affinity?: number | null;
                createdByUser?: boolean | null;
                lastViewed?: number | null;
                lastContactedDate?: number | null;
                updateDate?: number | null;
                creationDate?: number | null;
                isHidden?: boolean | null;
                inPocket?: boolean | null;
                weavitId?: string | null;
                content?: string | null;
                stringifiedContent?: string | null;
                contentType?: string | null;
                imageUri?: string | null;
                profilePictureUrl?: string | null;
                attachedNode?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                linkedNodes?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                suggestedEntities?: Array<{
                    __typename?: 'NLPEntity';
                    label: ILabelNlp;
                    entity: string;
                    start: number;
                    end: number;
                    meta?: any | null;
                    wikiTopic?: boolean | null;
                    memoIds?: Array<string> | null;
                }> | null;
                organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                profilePicture?: {
                    __typename?: 'Image';
                    fileName: string;
                    contentType: string;
                    backgroundUri?: string | null;
                    imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                } | null;
            }> | null;
            suggestedEntities?: Array<{
                __typename?: 'NLPEntity';
                label: ILabelNlp;
                entity: string;
                start: number;
                end: number;
                meta?: any | null;
                wikiTopic?: boolean | null;
                memoIds?: Array<string> | null;
            }> | null;
            organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
            eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
            eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
            profilePicture?: {
                __typename?: 'Image';
                fileName: string;
                contentType: string;
                backgroundUri?: string | null;
                imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
            } | null;
        }>;
    };
};

export type ISearchNodesV1QueryVariables = Exact<{
    queryType: IQueryType;
    nodeTypeFilters?: InputMaybe<Array<INodeType> | INodeType>;
    textSearchfilter?: InputMaybe<Scalars['String']>;
    sortingType?: InputMaybe<ISortingType>;
    pageSize?: InputMaybe<Scalars['Int']>;
    skipToken?: InputMaybe<Scalars['Int']>;
}>;

export type ISearchNodesV1QueryResult = {
    __typename?: 'Query';
    searchByQueryType: {
        __typename?: 'Records';
        nextNodeIdentity?: number | null;
        nextAffinityValue?: number | null;
        data: Array<{
            __typename?: 'NodeRecord';
            appearsIn?: any | null;
            occupation?: Array<string> | null;
            countRelationships?: number | null;
            eventStartDate?: number | null;
            eventEndDate?: number | null;
            siteName?: string | null;
            author?: string | null;
            urlLink?: string | null;
            publicationDate?: number | null;
            id: number;
            nodeID: string;
            type: INodeType;
            displayName?: string | null;
            affinity?: number | null;
            createdByUser?: boolean | null;
            lastViewed?: number | null;
            lastContactedDate?: number | null;
            updateDate?: number | null;
            creationDate?: number | null;
            isHidden?: boolean | null;
            inPocket?: boolean | null;
            weavitId?: string | null;
            content?: string | null;
            stringifiedContent?: string | null;
            contentType?: string | null;
            imageUri?: string | null;
            profilePictureUrl?: string | null;
            attachedNode?: Array<{
                __typename?: 'NodeRecord';
                appearsIn?: any | null;
                occupation?: Array<string> | null;
                countRelationships?: number | null;
                eventStartDate?: number | null;
                eventEndDate?: number | null;
                siteName?: string | null;
                author?: string | null;
                urlLink?: string | null;
                publicationDate?: number | null;
                id: number;
                nodeID: string;
                type: INodeType;
                displayName?: string | null;
                affinity?: number | null;
                createdByUser?: boolean | null;
                lastViewed?: number | null;
                lastContactedDate?: number | null;
                updateDate?: number | null;
                creationDate?: number | null;
                isHidden?: boolean | null;
                inPocket?: boolean | null;
                weavitId?: string | null;
                content?: string | null;
                stringifiedContent?: string | null;
                contentType?: string | null;
                imageUri?: string | null;
                profilePictureUrl?: string | null;
                attachedNode?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                linkedNodes?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                suggestedEntities?: Array<{
                    __typename?: 'NLPEntity';
                    label: ILabelNlp;
                    entity: string;
                    start: number;
                    end: number;
                    meta?: any | null;
                    wikiTopic?: boolean | null;
                    memoIds?: Array<string> | null;
                }> | null;
                organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                profilePicture?: {
                    __typename?: 'Image';
                    fileName: string;
                    contentType: string;
                    backgroundUri?: string | null;
                    imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                } | null;
            }> | null;
            linkedNodes?: Array<{
                __typename?: 'NodeRecord';
                appearsIn?: any | null;
                occupation?: Array<string> | null;
                countRelationships?: number | null;
                eventStartDate?: number | null;
                eventEndDate?: number | null;
                siteName?: string | null;
                author?: string | null;
                urlLink?: string | null;
                publicationDate?: number | null;
                id: number;
                nodeID: string;
                type: INodeType;
                displayName?: string | null;
                affinity?: number | null;
                createdByUser?: boolean | null;
                lastViewed?: number | null;
                lastContactedDate?: number | null;
                updateDate?: number | null;
                creationDate?: number | null;
                isHidden?: boolean | null;
                inPocket?: boolean | null;
                weavitId?: string | null;
                content?: string | null;
                stringifiedContent?: string | null;
                contentType?: string | null;
                imageUri?: string | null;
                profilePictureUrl?: string | null;
                attachedNode?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                linkedNodes?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                suggestedEntities?: Array<{
                    __typename?: 'NLPEntity';
                    label: ILabelNlp;
                    entity: string;
                    start: number;
                    end: number;
                    meta?: any | null;
                    wikiTopic?: boolean | null;
                    memoIds?: Array<string> | null;
                }> | null;
                organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                profilePicture?: {
                    __typename?: 'Image';
                    fileName: string;
                    contentType: string;
                    backgroundUri?: string | null;
                    imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                } | null;
            }> | null;
            suggestedEntities?: Array<{
                __typename?: 'NLPEntity';
                label: ILabelNlp;
                entity: string;
                start: number;
                end: number;
                meta?: any | null;
                wikiTopic?: boolean | null;
                memoIds?: Array<string> | null;
            }> | null;
            organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
            eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
            eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
            profilePicture?: {
                __typename?: 'Image';
                fileName: string;
                contentType: string;
                backgroundUri?: string | null;
                imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
            } | null;
        }>;
        args?: {
            __typename?: 'SearchByQueryTypeArgs';
            queryType: IQueryType;
            nodeTypeFilters?: Array<INodeType> | null;
            textSearchfilter?: string | null;
            nodeId?: string | null;
            nextAffinityValue: number;
            nextNodeIdentity: number;
            currentPage: number;
            pageSize: number;
            skipToken?: number | null;
        } | null;
        resultsCount?: { __typename?: 'CountRecordV2'; value: number; labels: Array<string> } | null;
    };
};

export type ISearchNodesQueryVariables = Exact<{
    onlyMemoTitle?: InputMaybe<Scalars['Boolean']>;
    nodeTypeFilters?: InputMaybe<Array<INodeType> | INodeType>;
    sortingType?: InputMaybe<ISortingType>;
    textSearchfilter?: InputMaybe<Scalars['String']>;
    resultsByNodeType?: InputMaybe<Scalars['Int']>;
    pageSize?: InputMaybe<Scalars['Int']>;
    skipToken?: InputMaybe<Scalars['Int']>;
    currentPage?: InputMaybe<Scalars['Int']>;
    memoContentType?: InputMaybe<Array<InputMaybe<IMemoContentType>> | InputMaybe<IMemoContentType>>;
}>;

export type ISearchNodesQueryResult = {
    __typename?: 'Query';
    searchByQueryType: {
        __typename?: 'Records';
        data: Array<{
            __typename?: 'NodeRecord';
            appearsIn?: any | null;
            occupation?: Array<string> | null;
            countRelationships?: number | null;
            eventStartDate?: number | null;
            eventEndDate?: number | null;
            siteName?: string | null;
            author?: string | null;
            urlLink?: string | null;
            publicationDate?: number | null;
            id: number;
            nodeID: string;
            type: INodeType;
            displayName?: string | null;
            affinity?: number | null;
            createdByUser?: boolean | null;
            lastViewed?: number | null;
            lastContactedDate?: number | null;
            updateDate?: number | null;
            creationDate?: number | null;
            isHidden?: boolean | null;
            inPocket?: boolean | null;
            weavitId?: string | null;
            content?: string | null;
            stringifiedContent?: string | null;
            contentType?: string | null;
            imageUri?: string | null;
            profilePictureUrl?: string | null;
            attachedNode?: Array<{
                __typename?: 'NodeRecord';
                appearsIn?: any | null;
                occupation?: Array<string> | null;
                countRelationships?: number | null;
                eventStartDate?: number | null;
                eventEndDate?: number | null;
                siteName?: string | null;
                author?: string | null;
                urlLink?: string | null;
                publicationDate?: number | null;
                id: number;
                nodeID: string;
                type: INodeType;
                displayName?: string | null;
                affinity?: number | null;
                createdByUser?: boolean | null;
                lastViewed?: number | null;
                lastContactedDate?: number | null;
                updateDate?: number | null;
                creationDate?: number | null;
                isHidden?: boolean | null;
                inPocket?: boolean | null;
                weavitId?: string | null;
                content?: string | null;
                stringifiedContent?: string | null;
                contentType?: string | null;
                imageUri?: string | null;
                profilePictureUrl?: string | null;
                attachedNode?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                linkedNodes?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                suggestedEntities?: Array<{
                    __typename?: 'NLPEntity';
                    label: ILabelNlp;
                    entity: string;
                    start: number;
                    end: number;
                    meta?: any | null;
                    wikiTopic?: boolean | null;
                    memoIds?: Array<string> | null;
                }> | null;
                organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                profilePicture?: {
                    __typename?: 'Image';
                    fileName: string;
                    contentType: string;
                    backgroundUri?: string | null;
                    imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                } | null;
            }> | null;
            linkedNodes?: Array<{
                __typename?: 'NodeRecord';
                appearsIn?: any | null;
                occupation?: Array<string> | null;
                countRelationships?: number | null;
                eventStartDate?: number | null;
                eventEndDate?: number | null;
                siteName?: string | null;
                author?: string | null;
                urlLink?: string | null;
                publicationDate?: number | null;
                id: number;
                nodeID: string;
                type: INodeType;
                displayName?: string | null;
                affinity?: number | null;
                createdByUser?: boolean | null;
                lastViewed?: number | null;
                lastContactedDate?: number | null;
                updateDate?: number | null;
                creationDate?: number | null;
                isHidden?: boolean | null;
                inPocket?: boolean | null;
                weavitId?: string | null;
                content?: string | null;
                stringifiedContent?: string | null;
                contentType?: string | null;
                imageUri?: string | null;
                profilePictureUrl?: string | null;
                attachedNode?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                linkedNodes?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                suggestedEntities?: Array<{
                    __typename?: 'NLPEntity';
                    label: ILabelNlp;
                    entity: string;
                    start: number;
                    end: number;
                    meta?: any | null;
                    wikiTopic?: boolean | null;
                    memoIds?: Array<string> | null;
                }> | null;
                organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                profilePicture?: {
                    __typename?: 'Image';
                    fileName: string;
                    contentType: string;
                    backgroundUri?: string | null;
                    imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                } | null;
            }> | null;
            suggestedEntities?: Array<{
                __typename?: 'NLPEntity';
                label: ILabelNlp;
                entity: string;
                start: number;
                end: number;
                meta?: any | null;
                wikiTopic?: boolean | null;
                memoIds?: Array<string> | null;
            }> | null;
            organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
            eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
            eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
            profilePicture?: {
                __typename?: 'Image';
                fileName: string;
                contentType: string;
                backgroundUri?: string | null;
                imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
            } | null;
        }>;
        args?: {
            __typename?: 'SearchByQueryTypeArgs';
            queryType: IQueryType;
            nodeTypeFilters?: Array<INodeType> | null;
            textSearchfilter?: string | null;
            nodeId?: string | null;
            currentPage: number;
            pageSize: number;
            skipToken?: number | null;
        } | null;
        allCount?: Array<{ __typename?: 'CountRecord'; value: number; type: INodeType }> | null;
    };
};

export type IGetSuggestedLinksQueryVariables = Exact<{
    nodeID: Scalars['String'];
    nodeType: INodeType;
    suggestedType?: InputMaybe<INodeType>;
}>;

export type IGetSuggestedLinksQueryResult = {
    __typename?: 'Query';
    getSuggestedLinks: {
        __typename?: 'Records';
        data: Array<{
            __typename?: 'NodeRecord';
            appearsIn?: any | null;
            occupation?: Array<string> | null;
            countRelationships?: number | null;
            eventStartDate?: number | null;
            eventEndDate?: number | null;
            siteName?: string | null;
            author?: string | null;
            urlLink?: string | null;
            publicationDate?: number | null;
            id: number;
            nodeID: string;
            type: INodeType;
            displayName?: string | null;
            affinity?: number | null;
            createdByUser?: boolean | null;
            lastViewed?: number | null;
            lastContactedDate?: number | null;
            updateDate?: number | null;
            creationDate?: number | null;
            isHidden?: boolean | null;
            inPocket?: boolean | null;
            weavitId?: string | null;
            content?: string | null;
            stringifiedContent?: string | null;
            contentType?: string | null;
            imageUri?: string | null;
            profilePictureUrl?: string | null;
            attachedNode?: Array<{
                __typename?: 'NodeRecord';
                appearsIn?: any | null;
                occupation?: Array<string> | null;
                countRelationships?: number | null;
                eventStartDate?: number | null;
                eventEndDate?: number | null;
                siteName?: string | null;
                author?: string | null;
                urlLink?: string | null;
                publicationDate?: number | null;
                id: number;
                nodeID: string;
                type: INodeType;
                displayName?: string | null;
                affinity?: number | null;
                createdByUser?: boolean | null;
                lastViewed?: number | null;
                lastContactedDate?: number | null;
                updateDate?: number | null;
                creationDate?: number | null;
                isHidden?: boolean | null;
                inPocket?: boolean | null;
                weavitId?: string | null;
                content?: string | null;
                stringifiedContent?: string | null;
                contentType?: string | null;
                imageUri?: string | null;
                profilePictureUrl?: string | null;
                attachedNode?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                linkedNodes?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                suggestedEntities?: Array<{
                    __typename?: 'NLPEntity';
                    label: ILabelNlp;
                    entity: string;
                    start: number;
                    end: number;
                    meta?: any | null;
                    wikiTopic?: boolean | null;
                    memoIds?: Array<string> | null;
                }> | null;
                organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                profilePicture?: {
                    __typename?: 'Image';
                    fileName: string;
                    contentType: string;
                    backgroundUri?: string | null;
                    imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                } | null;
            }> | null;
            linkedNodes?: Array<{
                __typename?: 'NodeRecord';
                appearsIn?: any | null;
                occupation?: Array<string> | null;
                countRelationships?: number | null;
                eventStartDate?: number | null;
                eventEndDate?: number | null;
                siteName?: string | null;
                author?: string | null;
                urlLink?: string | null;
                publicationDate?: number | null;
                id: number;
                nodeID: string;
                type: INodeType;
                displayName?: string | null;
                affinity?: number | null;
                createdByUser?: boolean | null;
                lastViewed?: number | null;
                lastContactedDate?: number | null;
                updateDate?: number | null;
                creationDate?: number | null;
                isHidden?: boolean | null;
                inPocket?: boolean | null;
                weavitId?: string | null;
                content?: string | null;
                stringifiedContent?: string | null;
                contentType?: string | null;
                imageUri?: string | null;
                profilePictureUrl?: string | null;
                attachedNode?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                linkedNodes?: Array<{
                    __typename?: 'NodeRecord';
                    occupation?: Array<string> | null;
                    countRelationships?: number | null;
                    eventStartDate?: number | null;
                    eventEndDate?: number | null;
                    siteName?: string | null;
                    author?: string | null;
                    urlLink?: string | null;
                    publicationDate?: number | null;
                    id: number;
                    nodeID: string;
                    type: INodeType;
                    displayName?: string | null;
                    affinity?: number | null;
                    createdByUser?: boolean | null;
                    lastViewed?: number | null;
                    lastContactedDate?: number | null;
                    updateDate?: number | null;
                    creationDate?: number | null;
                    isHidden?: boolean | null;
                    inPocket?: boolean | null;
                    weavitId?: string | null;
                    content?: string | null;
                    stringifiedContent?: string | null;
                    contentType?: string | null;
                    imageUri?: string | null;
                    profilePictureUrl?: string | null;
                    organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                    eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                    eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                    profilePicture?: {
                        __typename?: 'Image';
                        fileName: string;
                        contentType: string;
                        backgroundUri?: string | null;
                        imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                    } | null;
                }> | null;
                suggestedEntities?: Array<{
                    __typename?: 'NLPEntity';
                    label: ILabelNlp;
                    entity: string;
                    start: number;
                    end: number;
                    meta?: any | null;
                    wikiTopic?: boolean | null;
                    memoIds?: Array<string> | null;
                }> | null;
                organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
                eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
                eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
                profilePicture?: {
                    __typename?: 'Image';
                    fileName: string;
                    contentType: string;
                    backgroundUri?: string | null;
                    imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
                } | null;
            }> | null;
            suggestedEntities?: Array<{
                __typename?: 'NLPEntity';
                label: ILabelNlp;
                entity: string;
                start: number;
                end: number;
                meta?: any | null;
                wikiTopic?: boolean | null;
                memoIds?: Array<string> | null;
            }> | null;
            organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
            eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
            eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
            profilePicture?: {
                __typename?: 'Image';
                fileName: string;
                contentType: string;
                backgroundUri?: string | null;
                imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
            } | null;
        }>;
    };
};

export type IGetUserGraphStatsQueryVariables = Exact<{ [key: string]: never }>;

export type IGetUserGraphStatsQueryResult = {
    __typename?: 'Query';
    getUserGraphStats: {
        __typename?: 'GetUserGraphDataResponse';
        numberOfAutomatedCollections: number;
        numberOfAutomatedLinks: number;
        numberOfAutomatedMerges: number;
        numberOfCollections: number;
        numberOfEvents: number;
        numberOfHidden: number;
        numberOfMemos: number;
        numberOfPeopleLinks: number;
        numberOfMerges: number;
        numberOfPeople: number;
        numberOfPinned: number;
        numberOfTopics: number;
    };
};

export type IGetNodeByIdQueryVariables = Exact<{
    nodeID: Scalars['String'];
    nodeLabel: INodeType;
    setLastViewed?: InputMaybe<Scalars['Boolean']>;
}>;

export type IGetNodeByIdQueryResult = {
    __typename?: 'Query';
    getNodeById: {
        __typename?: 'NodeRecordSnapshot';
        id: number;
        nodeID: string;
        type: INodeType;
        displayName?: string | null;
        createdByUser?: boolean | null;
        isHidden?: boolean | null;
        inPocket?: boolean | null;
        affinity?: number | null;
        occupation?: Array<string> | null;
        emailAddresses?: Array<string> | null;
        phones?: Array<string> | null;
        phoneContactID?: string | null;
        lastViewed?: number | null;
        lastContactedDate?: number | null;
        updateDate?: number | null;
        creationDate?: number | null;
        countRelationships?: number | null;
        eventStatus?: string | null;
        eventResponseStatus?: string | null;
        eventStartDate?: number | null;
        eventEndDate?: number | null;
        contentType?: string | null;
        siteName?: string | null;
        author?: string | null;
        urlLink?: string | null;
        publicationDate?: number | null;
        content?: string | null;
        stringifiedContent?: string | null;
        websites?: Array<string> | null;
        weavitId?: string | null;
        imageUri?: string | null;
        profilePictureUrl?: string | null;
        organizations?: Array<{ __typename?: 'OrganizationOutput'; name?: string | null }> | null;
        profilePicture?: {
            __typename?: 'Image';
            fileName: string;
            contentType: string;
            backgroundUri?: string | null;
            imageUri?: { __typename?: 'NodePicture'; presignedUrl?: string | null; resourcePath?: string | null } | null;
        } | null;
        location?: { __typename?: 'Location'; name?: string | null } | null;
        eventOrganizer?: { __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null } | null;
        eventAttendees?: Array<{ __typename?: 'Person'; emailAddress?: string | null; displayName?: string | null }> | null;
    };
};

export type IAddDeviceMutationVariables = Exact<{
    deviceId: Scalars['String'];
}>;

export type IAddDeviceMutationResult = { __typename?: 'Mutation'; addDevice?: boolean | null };

export type IClearLastViewedMutationVariables = Exact<{ [key: string]: never }>;

export type IClearLastViewedMutationResult = { __typename?: 'Mutation'; clearLastViewed: boolean };

export type IAnalyzeEntitiesQueryVariables = Exact<{
    text: Scalars['String'];
    memoId?: InputMaybe<Scalars['String']>;
}>;

export type IAnalyzeEntitiesQueryResult = {
    __typename?: 'Query';
    analyzeEntities: {
        __typename?: 'AnalyzeEntitiesResults';
        entities?: Array<{
            __typename?: 'NLPEntity';
            label: ILabelNlp;
            entity: string;
            start: number;
            end: number;
            meta?: any | null;
            wikiTopic?: boolean | null;
            memoIds?: Array<string> | null;
        }> | null;
    };
};

export type IExportGraphDataMutationVariables = Exact<{ [key: string]: never }>;

export type IExportGraphDataMutationResult = { __typename?: 'Mutation'; exportGraphData: boolean };
