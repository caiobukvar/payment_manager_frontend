import { useContext } from 'react';

import ClientDataContext from '../contexts/ClientDataContext';

function useClientData() {
    return useContext(ClientDataContext);
}

export default useClientData;