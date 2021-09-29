import './styles.css';
import { useContext } from 'react';
import Sidebar from '../../components/Sidebar';
import ProfileBar from '../../components/ProfileBar';
import ModalEditProfile from '../../components/ModalEditProfile';
import { contextoModal } from '../../contextoModal';

function Layout({ children }) {
    const { value, setValue } = useContext(contextoModal);

    return (
        <div className="flex-row align-start">
            <Sidebar />
            <div className="flex-column items-center full-width ">
                <ProfileBar />
                {children}
            </div>
            {value &&
                <ModalEditProfile
                    value={value}
                    setValue={setValue}
                />
            }
        </div>
    );
}

export default Layout;