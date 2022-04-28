import React from 'react';
import { useGlobalContext } from '../../hooks/GlobalContext';
// import { WIButton } from '@weavit/weavit-material-ui';
import { useQuery, gql } from "@apollo/client";

export const Dashboard = () => {
    const { user } = useGlobalContext();
    const GetAllMemos = gql`
    {
        getAllMemo(currentPage: 1, pageSize: 1){
    count
  }
      }
  `;
    const { data, loading, error } = useQuery(GetAllMemos);
    console.log(data, error);

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
