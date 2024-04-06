import { useNavigate } from 'react-router-dom'
function Service() {
    const navigate = useNavigate()

    return (
        <>
            <h1>serviços</h1>
            <button onClick={() => navigate(-1)}>Voltar</button>

        </>
    )
}
export default Service