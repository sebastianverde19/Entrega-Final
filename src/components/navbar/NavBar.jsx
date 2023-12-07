import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'


const NavBar = () => {
    return (
      <div className="navbar-container">
        <div>
        <Link to={'/'} className='logo' >
          <h1>ElgatoGaucho.com</h1>
        </Link>
        </div>
        <div >
            
                
                    <ul className="list-container">
                    <li><NavLink to={"/category/pantalones"} className='button'>Pantalones</NavLink></li>
                
                <li><NavLink to={"/category/bermuda"}className='button'>Bermudas</NavLink></li>
            
                <li><NavLink to={"/category/conjunto"} className='button'>Conjuntos</NavLink></li>
                    </ul>
        </div>
        <CartWidget/>
        </div>
        
    )
  }
  
  export default NavBar 