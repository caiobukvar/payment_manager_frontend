import './styles.css';
import { useContext } from 'react';
import ProfileBar from '../../components/ProfileBar';
import ClientsCard from '../../components/ClientsCard';
import ChargesCard from '../../components/ChargesCard';
import Sidebar from '../../components/Sidebar';
import ModalEditProfile from '../../components/ModalEditProfile';
import { contextoModal } from '../../contextoModal';


function Main() {
  const { value, setValue } = useContext(contextoModal);

  return (
    <div className="flex-row content-center align-start relative">
      <Sidebar />
      <div className="flex-column content-center items-center">
        <ProfileBar />
        <div className="flex-row content-center gap-sm">
          <ClientsCard />
          <ChargesCard />
        </div>
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

export default Main;
