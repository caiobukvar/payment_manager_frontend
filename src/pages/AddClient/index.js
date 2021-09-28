import './styles.css'
import ProfileBar from '../../components/ProfileBar';
import Sidebar from '../../components/Sidebar';
import FormClient from '../../components/FormClient';


function AddClient() {
    return (
        <div className="flex-row content-center align-start ">
            <Sidebar />
            <div className="flex-column content-center items-start">
                <ProfileBar />
                <div className="flex-column content-center mt-large">
                    <h2 className="position-left">// ADICIONAR CLIENTE</h2>
                    <FormClient />
                </div>
            </div>
        </div>
    );
}

export default AddClient;