import { useNavigate } from 'react-router-dom'
import fechaduraC from '../img/fechComum.jpg'
import fechaduraT from '../img/fechTetra.jpg'
import mioloC from '../img/mioloC.jpeg'
import mioloT from '../img/mioloT.jpg'
import carro from '../img/carro.jpg'
import fechaduraA from '../img/fechAuto.jpg'







function Service() {
    const navigate = useNavigate()

    return (
        <>
            <h1>serviços</h1>
            <br /><br />
            <p>Abertura de Fechadura Comum</p>
            <button><img width='200px' src={fechaduraC} alt="Serviço1" /></button>
            <br /><br />
            <p>Abertura de Fechadura Tetra</p>
            <button><img width='200px' src={fechaduraT} alt="Serviço2" /></button>
            <br /><br />
            <p>Troca de Segredo Comum</p>
            <button><img width='200px' src={mioloC} alt="Serviço3" /></button>
            <br /><br />
            <p>Troca de segredo Tetra</p>
            <button><img width='200px' src={mioloT} alt="Serviço4" /></button>
            <br /><br />
            <p>Abertura Veicular</p>
            <button><img width='200px' src={carro} alt="Serviço5" /></button>
            <br /><br />
            <p>Confecção de chave Veicular</p>
            <button><img width='200px' src={fechaduraA} alt="Serviço5" /></button>




            <br /><br /><br />
            <button onClick={() => navigate(-1)}>Voltar</button>

        </>
    )
}
export default Service