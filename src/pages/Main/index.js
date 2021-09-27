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
        <form className="card-container">
          <ClientsCard />
          <ChargesCard />
        </form>
      </div>
    </div>
  );
}

export default Main;
