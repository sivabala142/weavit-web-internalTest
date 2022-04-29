import React, { useState , useEffect,useRef } from 'react';
import { useGlobalContext } from '../../hooks/GlobalContext';
// import { WIButton } from '@weavit/weavit-material-ui';
import { useQuery, gql, useMutation ,ApolloClient, createHttpLink, DefaultOptions, from, InMemoryCache, LazyQueryHookOptions, OperationVariables, QueryTuple, TypedDocumentNode, useLazyQuery  } from "@apollo/client";
import { DocumentNode, GraphQLError } from 'graphql';
import { GET_ALL_MEMO } from '../../services/queries';
import { IGetAllMemoQueryResult, IGetAllMemoQueryVariables } from '../../graphql-models';
export const Dashboard = () => {
    const hasNext = useRef<boolean>(false);
    const { user } = useGlobalContext();
    const [queryMemos, { error, data, loading }] = useLazyQueryNoCache<
    IGetAllMemoQueryResult,
    IGetAllMemoQueryVariables
  >(GET_ALL_MEMO);

console.log(error,"error");
console.log(data,"data");

  const fetchPage = () => {
    hasNext.current = false;
    // fetchTimeline();
  };

  useEffect(() => {
    // fetchPage();
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
    return (
        <React.Fragment> 
                
            {/* <WIButton
                label={'Weavit Button'}
                labelStyle={{
                    color: 'white',
                }}
                style={{
                    backgroundColor: '#3f51b5',
                    marginBottom: 40,
                    marginTop: 40,
                }}
                onPress={async () => console.log('Pressed')}
            /> */}
            <span>
               {' '}
             User ID / Name: {user?.userId} / {user?.names?.firstName} {user?.names?.lastName}
           </span>
        </React.Fragment>
    );
};

export function useLazyQueryNoCache<TData = any, TVariables = OperationVariables>(query: DocumentNode | TypedDocumentNode<TData, TVariables>, options?: LazyQueryHookOptions<TData, TVariables> | undefined): QueryTuple<TData, TVariables> {
    return useLazyQuery<TData, TVariables>(query, {
      fetchPolicy: 'no-cache',
      nextFetchPolicy: 'no-cache',
      ...(options ?? {}),
    });
  }

  export const PAGE_SIZE = 50;