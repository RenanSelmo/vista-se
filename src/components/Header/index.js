import { Link } from 'react-router-dom'
import './header.css'

export default function Header (){

    return(
        <div className='estruturaHeader'>

          <div className='dropdown'>
            <button className='dropbtn'><h2 className='pagina'><Link className='Link' to='/'>inicio</Link></h2></button>
          </div>

        <div className='dropdown'>
        <button className='dropbtn'><h2 className='pagina'><Link className='Link' to='/Cadastro'>Cadastro</Link></h2></button>
        <div className='dropdown-content'>
            <Link className='Link' to='/Login'>Login</Link>
        </div>
        </div>

        </div>

        
    )
}