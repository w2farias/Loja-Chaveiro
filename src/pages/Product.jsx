import { useNavigate } from 'react-router-dom'
import comum from '../img/comum.jpg'
import auto from '../img/auto.jpg'
import gorja from '../img/gorja.jpg'
import tetra from '../img/tetra.jpg'
import moto from '../img/moto.jpg'

function Product() {
    const navigate = useNavigate()
    return (
        <>
            <h1>produtos</h1>

            <br /><br />
            <div>
                <p>Chave comum</p>
                <button><img width='200px' src={comum} alt="Product1" /></button>
                <br /><br />
                <p>Chave tetra</p>
                <button><img width='200px' src={tetra} alt="Product2" /></button>
                <br /><br />
                <p>Chave gorje</p>
                <button> <img width='200px' src={gorja} alt="Product3" /></button>
                <br /><br />
                <p>Chave moto</p>
                <button> <img width='197px' src={moto} alt="Product4" /></button>
                <br /><br />
                <p>Chave automotiva comum</p>
                <button> <img width='200px' src={auto} alt="Product15" /></button>
            </div>








            <br /><br />
            <button onClick={() => navigate(-1)}>Voltar</button>

        </>
    )
}

export default Product