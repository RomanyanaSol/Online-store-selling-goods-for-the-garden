import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './style.module.css';
import logo from './media/logo.png';
import logoBasket from './media/logoBasket.png';
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";


export default function Nav() {

  const isActive = ({ isActive }) => isActive ? s.active : '';

  const [nav, setNav] = useState(false);

  return (
    <div className={s.container}>
      <div className={s.leftNav}>
        <NavLink to="/"><img src={logo} alt="Main Page" /></NavLink>
        <NavLink to="/categories" className={s.button}>Catalog</NavLink>
      </div>
      <div className={s.titlesAndBasket}>
        <div className={nav ? [s.titles, s.active].join(' ') : [s.titles]}>
          <NavLink to="/" className={isActive} onClick={() => setNav(!nav)}>Main Page</NavLink>
          <div className={s.mobileCatalog}>
            <NavLink to="/categories" className={isActive} onClick={() => setNav(!nav)}>Catalog</NavLink>
          </div>
          <NavLink to="/products" className={isActive} onClick={() => setNav(!nav)}>All products</NavLink>
          <NavLink to="/sales" className={isActive} onClick={() => setNav(!nav)}>All sales</NavLink>
          <div className={s.mobileBasket}>
            <NavLink to="/basket" className={isActive} onClick={() => setNav(!nav)}>Basket</NavLink>
          </div>
        </div>
        <div className={s.basket}>
          <NavLink to="/basket"><img src={logoBasket} alt="Basket" /></NavLink>
        </div>
      </div>
      <div onClick={() => setNav(!nav)} className={s.mobile_btn}>
        {nav ? <FiX size={50} /> : <FiMenu size={50} />}
      </div>
    </div>
  )
}
