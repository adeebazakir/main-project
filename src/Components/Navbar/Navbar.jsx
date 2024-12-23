import React, { useContext, useState } from 'react' 
import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../assets/navdropdown.png'

import { Link } from 'react-router-dom'
const Navbar = () =>{

    const [menu,setmenu]= useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    // const menuRef = useRef();

    // const drropdown_toggle = (e)=>{
    //     menuRef.current.classList.toggle('nav-menu-visible')
    //     e.target.classList.toggle('open');
    // }

    return(
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>YOUR PROFIT SHOP</p>
            </div>
             {/*<img className='nav-dropdown' onClick={drropdown_toggle()} src={nav_dropdown} alt="" /> */}
            <ul  className="nav-menu">
                <li onClick={()=>{setmenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Home</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Hijabs</Link>{menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("womens")}}><Link style={{textDecoration:'none'}} to='/womens'>Suits</Link>{menu==="womens"?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Accessories</Link>{menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
               <Link to='/login '><button>Login</button></Link>
               <Link to='/cart'><img src={cart_icon} alt="" /></Link> 
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar