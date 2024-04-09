import { useNavigate } from 'react-router-dom'
import Serviços from '../componets/ApiSerciços'
import Menu from './Menu/Menu'
import Footer from './Footer'







function Service() {
    const navigate = useNavigate()

    return (
        <>
            <Menu />
            <h1>SERVIÇOS</h1>


            <br /><br /><br />
            <div className='serviceClass'>
                {Serviços.map((produto) => (
                    <div className='service' key={produto.id}>
                        <h2>{produto.title}</h2>
                        <img width='200px' src={produto.url} alt={produto.title} />
                        <p>R$ {produto.price}</p>

                        <br /><br /><br />
                    </div>
                ))}
            </div>
            <br /><br /><br />










            <br /><br /><br />
            <button onClick={() => navigate(-1)}>Voltar</button>

            <Footer />

        </>
    )
}
export default Service