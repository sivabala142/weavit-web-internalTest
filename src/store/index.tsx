import { useQuery, gql, useMutation, ApolloClient, createHttpLink, DefaultOptions, from, InMemoryCache, LazyQueryHookOptions, OperationVariables, QueryTuple, TypedDocumentNode, useLazyQuery } from "@apollo/client";
import { DocumentNode, GraphQLError } from 'graphql'

export function useLazyQueryNoCache<TData = any, TVariables = OperationVariables>(query: DocumentNode | TypedDocumentNode<TData, TVariables>, options?: LazyQueryHookOptions<TData, TVariables> | undefined): QueryTuple<TData, TVariables> {
    return useLazyQuery<TData, TVariables>(query, {
      fetchPolicy: 'no-cache',
      nextFetchPolicy: 'no-cache',
      ...(options ?? {}),
    });
  }
  
  export const PAGE_SIZE = 50;