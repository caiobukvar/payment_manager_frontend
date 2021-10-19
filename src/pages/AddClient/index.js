import FormClient from "../../components/FormClient";

function AddClient({ handleLoadClientCharges }) {
    return (
        <div>
            <h2 className="position-left">{'//'} ADICIONAR CLIENTE</h2>
            <div className="mt-xxl">
                <FormClient
                    handleLoadClientCharges={handleLoadClientCharges}
                />
            </div>
        </div>
    );
}

export default AddClient;