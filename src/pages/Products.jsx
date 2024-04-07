import React from 'react'
import { useNavigate } from 'react-router-dom'
import produtos from '../componets/ApiProdutos'

function Products() {
    const navigate = useNavigate()

    return (
        <>
            <h1>Produtos</h1>
            <br /><br /><br />
            <div>
                {produtos.map((produto) => (
                    <div key={produto.id}>
                        <h2>{produto.title}</h2>
                        <img width='200px' src={produto.url} alt={produto.title} />

                        <br /><br /><br />
                    </div>
                ))}
            </div>

            <br /><br />
            <button onClick={() => navigate(-1)}>Voltar</button>
        </>
    )
}

export default Products
