import market from '../componets/ApiMarket'
import './Style.css'
import Footer from './Footer'
import Menu from './Menu/Menu'



function Layout() {

    return (
        <>
            <Menu />



            <br /><br />
            <main>
                <p> Somos uma empresa familiar e estamos no mercado desde 2014, atuamos  em áreas residenciais e empresas para contribuir com a sua segurança.</p>
                <p> Sabemos o quanto é importante a segurança de seus bens e familiares, colaboramos com nossos serviços de instalações e manuteções de fechaduras, trocas de segredo e cópias de chaves </p>

            </main>
            <div className='product'>
                {market.map((img) => (
                    <div key={img.id}>
                        <img src={img.url} alt={`Imagem ${img.id}`} />
                    </div>
                ))}
            </div>
            <br /><br /><br />

            <Footer />

        </>
    )
}
export default Layout