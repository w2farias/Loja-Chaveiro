import { useNavigate } from 'react-router-dom'
import Serviços from '../componets/ApiSerciços'
import Menu from './Menu/Menu'
import Footer from './Footer'







function Service() {
    const navigate = useNavigate()

    return (
        <>
            <Menu />
            <h1>Serviços</h1>


            <br /><br /><br />
            <div className='serviceClass'>
                {Serviços.map((produto) => (
                    <div className='service' key={produto.id}>
                        <button>
                            <h2>{produto.title}</h2>
                            <img width='200px' height='150px' src={produto.url} alt={produto.title} />
                            <h2>{produto.price}</h2>
                        </button>

                        <br /><br /><br />
                    </div>
                ))}
            </div>
            <br /><br /><br />










            <br /><br /><br />
            <button onClick={() => navigate(-1)}>Voltar</button>
            <br /><br />

            <Footer />

        </>
    )
}
export default Service