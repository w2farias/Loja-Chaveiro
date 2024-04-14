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
                <p> Desde 2014, nossa empresa familiar tem sido uma presença confiável no mercado, dedicada a garantir a segurança de residências e empresas. Reconhecemos a importância vital de proteger seus bens e entes queridos, e é por isso que oferecemos uma variedade de serviços especializados.</p>
                <p> Nosso compromisso se reflete em nossa gama de serviços, que incluem instalação e manutenção de fechaduras, troca de segredos e cópias de chaves. Combinando expertise técnica e atendimento personalizado, estamos aqui para proporcionar tranquilidade e segurança em todos os aspectos. </p>
                <p>Conte conosco para soluções confiáveis e eficazes, adaptadas às suas necessidades específicas. Sua segurança é nossa prioridade, e estamos aqui para ajudá-lo a proteger o que mais importa.</p>
            </main>
            <br /><br /><br /><br />
            <div className='product'>
                {market.map((img) => (
                    <div key={img.id}>
                        <img width='200px' height='200px' src={img.url} alt={`Imagem ${img.id}`} />
                    </div>
                ))}
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br />

            <Footer />

        </>
    )
}
export default Layout