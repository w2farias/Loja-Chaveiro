import { useNavigate } from 'react-router-dom'
import Menu from './Menu/Menu'
import Footer from './Footer'
function Contact() {
    const navigate = useNavigate()
    const whatsApp = () => {
        window.location.href = 'https://wa.me/557186419145'
    }

    return (
        <>
            <Menu />
            <h1>Entre em Contato</h1>
            <br /><br />
            <div>
                <p>Estamos disponíveis para atender às suas necessidades. Entre em contato conosco para solicitar um orçamento ou agendar um horário.</p>

                <button onClick={whatsApp}>WhatsApp</button>
                <br /><br />
            </div>
            <button className='contato'>
                <p >Telefone: (71) 98641-9145 | 99973-8703 </p>
                <p>Email: chaveiroplakafor2@gmail.com</p>

            </button>
            <br /><br /><br />
            <button onClick={() => navigate(-1)}>Voltar</button>
            <br /><br />
            <Footer />
        </>
    )
}
export default Contact