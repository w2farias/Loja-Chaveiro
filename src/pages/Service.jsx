import { useNavigate } from 'react-router-dom'
import Serviços from '../componets/ApiSerciços'







function Service() {
    const navigate = useNavigate()

    return (
        <>
            <h1>serviços</h1>


            <br /><br /><br />
            <div>
                {Serviços.map((produto) => (
                    <div key={produto.id}>
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

        </>
    )
}
export default Service