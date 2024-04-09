import React from 'react'
import { useNavigate } from 'react-router-dom'
import produtos from '../componets/ApiProdutos'
import Menu from './Menu/Menu'
import Footer from './Footer'

function Products() {
    const navigate = useNavigate()

    return (
        <>
            <Menu />
            <h1>Produtos</h1>
            <br /><br /><br />
            <div >
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

            <Footer />
        </>
    )
}

export default Products
