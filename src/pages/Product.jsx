import { useNavigate } from 'react-router-dom'
function Product() {
    const navigate = useNavigate()
    return (
        <>
            <h1>produtos</h1>
            <button onClick={() => navigate(-1)}>Voltar</button>

        </>
    )
}

export default Product