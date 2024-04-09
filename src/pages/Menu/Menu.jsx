import { NavLink } from 'react-router-dom'
import logo from '../Menu/imglogo/logo.png'

function Menu() {
    return (

        <header >
            <div className='menuHeader'>

                <div className='menuContainer'>
                    <NavLink to='/'><img className='logo' src={logo} alt="logo" /></NavLink>
                </div >

                <ul className='navMenu'>
                    <li className='navItens'>
                        <NavLink to='/products' activeClassName='active' className='navLinks'>Produtos</NavLink>
                    </li>

                    <li className='navItens'>
                        <NavLink to='/service' activeClassName='active' className='navLinks'>Serviços</NavLink>
                    </li>

                    <li className='navItens'>
                        <NavLink to='/contact' activeClassName='active' className='navLinks'>Contato</NavLink>
                    </li>
                </ul>

            </div>

        </header>
    )
}

export default Menu