import React from 'react'
import { useNavigate } from 'react-router-dom'
import market from '../componets/ApiMarket'
import './Style.css'


function Layout() {
    const navigate = useNavigate()
    return (
        <>

            <header><h1>Chaveiro Plakafor</h1></header>
            <nav>
                <button onClick={() => navigate('/products')}>Produtos</button>
                <button onClick={() => navigate('/service')}>Serviços</button>
                <button onClick={() => navigate('/contact')}>Contato</button>

            </nav>
            <br /><br />
            <main>
                <p> Somos uma empresa familiar e estamos no mercado desde 2014, atuamos  em áreas residenciais e empresas para contribuir com a sua segurança.</p>
                <p> Sabemos o quanto é importante a segurança de seus bens e familiares, colaboramos com nossos serviços de instalações e manuteções de fechaduras, trocas de segredo e cópias de chaves </p>

            </main>
            <div className='M'>
                {market.map((img) => (
                    <div key={img.id}>
                        <img id='M' width='250px' height='250px' src={img.url} alt={`Imagem ${img.id}`} />
                    </div>
                ))}
            </div>
            <br /><br /><br />
            <footer>
                Avenida Octávio Mangabeira, 1140 - Piatã, Salvador - BA - Brasil, CEP: 41650-070
            </footer>

        </>
    )
}
export default Layout