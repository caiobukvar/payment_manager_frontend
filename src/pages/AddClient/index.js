import './styles.css'
import FormClient from '../../components/FormClient';

function AddClient() {
    return (
        <div className="flex-column content-center mt-large">
            <h2 className="position-left">ADICIONAR CLIENTE</h2>
            <FormClient />
        </div>
    );
}

export default AddClient;