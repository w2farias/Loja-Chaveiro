import { useNavigate } from 'react-router-dom'
function Contact() {
    const navigate = useNavigate()

    return (
        <>
            <h1>contato</h1>
            <button onClick={() => navigate(-1)}>Voltar</button>

        </>
    )
}
export default Contact