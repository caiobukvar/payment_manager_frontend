async function handleAutoCompleteAdress() {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cepWatch}/json/`, {
            method: 'GET'
        });

        const data = await response.json();

        console.log({ logradouro, bairro, localidade })
        setValue('logradouro', logradouro);
        setValue('bairro', bairro);
        setValue('cidade', localidade);
    } catch (error) {
        toast.error('Digite um CEP válido!');
        setError('');
    }
}

let cepWatch = watch('cep', '');

useEffect(() => {
    if (cepWatch.length >= 8) {
        console.log(cepWatch)
        handleAutoCompleteAdress();
    }
}, [cepWatch]);

module.exports = { handleAutoCompleteAdress }