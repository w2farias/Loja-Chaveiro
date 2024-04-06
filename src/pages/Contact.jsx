import { useNavigate } from 'react-router-dom'
function Contact() {
    const navigate = useNavigate()

    return (
        <>
            <h1>contato</h1>
            <p>(71) 98641-9145  whatsapp</p>
            <p>(71) 99973-8703</p>
            <p>chaveiroplakafor2@gmail.com</p>
            <br /><br /><br />
            <button onClick={() => navigate(-1)}>Voltar</button>

        </>
    )
}
export default Contact