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
            <div className='productClass' >
                {produtos.map((produto) => (
                    <div key={produto.id}>
                        <button>
                            <h2>{produto.title}</h2>
                            <img width='200px' height='180px' src={produto.url} alt={produto.title} />
                            <h2>{produto.price}</h2>

                        </button>

                        <br /><br /><br />
                    </div>
                ))}
            </div>

            <br /><br />
            <button onClick={() => navigate(-1)}>Voltar</button>
            <br /><br />

            <Footer />
        </>
    )
}

export default Products
