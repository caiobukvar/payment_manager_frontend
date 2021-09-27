import './styles.css';
import ProfileBar from '../../components/ProfileBar';
import ClientsCard from '../../components/ClientsCard';
import ChargesCard from '../../components/ChargesCard';
import Sidebar from '../../components/Sidebar';

function Main() {
  return (
    <div className="flex-row content-center align-start">
      <Sidebar />
      <div className="flex-column content-center items-center">
        <ProfileBar />
        <div className="flex-row content-center gap-sm">
          <ClientsCard />
          <ChargesCard />
        </div>
      </div>
    </div>
  );
}

export default Main;
