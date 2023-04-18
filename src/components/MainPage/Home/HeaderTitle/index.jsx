import React from 'react';
import s from './style.module.css';
import { NavLink } from 'react-router-dom';
import Tree from './media/Tree.png';


export default function HeaderTitle() {
  return (
    <div className={s.style}>
      <p className={s.big}>Sale</p>
      <p className={s.medium}>New season</p>
      <div className={s.smallBtn}>
        <NavLink to="/sales" >
          <button>Sale</button>
        </NavLink>
      </div>
      <img src={Tree} alt="Tree" className={s.image} />
    </div>
  )
}
