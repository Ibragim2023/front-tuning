import React from 'react';
import { NavLink } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import './module.style.css'

const Header = () => {
  return (
    <header>
      <div>
        <a href="/">
          <img className='logo' src={logo}/>
        </a>
      </div>
      <ul className='center-nav'>
        <span>
          <li><NavLink to="/services">Услуги</NavLink></li>
          <li><NavLink to="/company">О компании</NavLink></li>
          <li><NavLink to="/contacts">Контакты</NavLink></li>
        </span>
      </ul>
      <div className='right-nav'>
        <button>Войти</button>
      </div>
    </header>
  );
};

export default Header;