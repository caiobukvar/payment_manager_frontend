import { useContext } from 'react';
import { AuthContext } from '../../AuthContext';


function useAuth() {
    const { userInfo, setUserInfo } = useContext(AuthContext);

    async function getUserData() {
        const response = await fetch('https://paymentmanager-api.herokuapp.com/user',
            {
                method: 'GET',
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });

        const userData = await response.json();
        localStorage.setItem('userInfo', JSON.stringify(userData));
        console.log(userData);
    }
}

export default useAuth;