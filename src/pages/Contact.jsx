import { NavLink, useNavigate } from 'react-router-dom'
import Menu from './Menu/Menu'
import Footer from './Footer'
function Contact() {
    const navigate = useNavigate()

    return (
        <>
            <Menu />
            <h1>Contato</h1>

            {/* <div>

                <label >Nome: <input type="text" /></label>
                <br />
                <label >Telfone: <input type="number" /></label>
                <br />
                <label >Email: <input type="email" /></label>
                <br /><br />
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <br />
                <button type="submit">Enviar sua mensagem</button>





            </div> */}
            <br /><br />
            <button className='contato'>
                <p >Contato: (71) 98641-9145 | 99973-8703 </p>

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