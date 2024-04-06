import React from 'react'
import { useNavigate } from 'react-router-dom'

function Layout() {
    const navigate = useNavigate()
    return (
        <>
            <h1>Isso acelera o processo</h1>
            <h1>Muito</h1>
            <h2>Cade Elias</h2>
            <header><h1>Chaveiro Plakafor</h1></header>
            <nav>
                <button onClick={() => navigate('/product')}>Produtos</button>
                <button onClick={() => navigate('/service')}>Serviços</button>
                <button onClick={() => navigate('/contact')}>Contato</button>

            </nav>
            <br /><br />
            <main>
                <p> Somos uma empresa familiar e estamos no mercado desde 2014, atuamos  em áreas residenciais e empresas para contribuir com a sua segurança.</p>
                <p> Sabemos o quanto é importante a segurança de seus bens e familiares, colaboramos com nossos serviços de instalações e manuteções de fechaduras, trocas de segredo e cópias de chaves </p>

            </main>
            <br /><br /><br />
            <footer>
                Avenida Octávio Mangabeira, 1140 - Piatã, Salvador - BA - Brasil, CEP: 41650-070
            </footer>

        </>
    )
}
export default Layout