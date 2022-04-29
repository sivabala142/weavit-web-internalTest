import React, { useState, useEffect, useRef } from 'react';
import { useGlobalContext } from '../../hooks/GlobalContext';
// import { WIButton } from '@weavit/weavit-material-ui';

export const Dashboard = () => {
    const hasNext = useRef<boolean>(false);
    const { user } = useGlobalContext();

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
