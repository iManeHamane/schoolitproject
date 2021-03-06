import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import SearchBar from '../SearchBar';
import AuthContext from '../../Auth/AuthContext';
<script
  src='https://kit.fontawesome.com/1568f7ec95.js'
  crossorigin='anonymous'
></script>;

const Navbar = () => {
  const navigate = useNavigate();
  function animation() {
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $('.hori-selector').css({
      top: itemPosNewAnimTop.top + 'px',
      left: itemPosNewAnimLeft.left + 'px',
      height: activeWidthNewAnimHeight + 'px',
      width: activeWidthNewAnimWidth + 'px',
    });
    $('#navbarSupportedContent').on('click', 'li', function (e) {
      $('#navbarSupportedContent ul li').removeClass('active');
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $('.hori-selector').css({
        top: itemPosNewAnimTop.top + 'px',
        left: itemPosNewAnimLeft.left + 'px',
        height: activeWidthNewAnimHeight + 'px',
        width: activeWidthNewAnimWidth + 'px',
      });
    });
  }
  const { user, logoutUser } = useContext(AuthContext);
  const [login, setLogin] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    animation();
    $(window).on('resize', function () {
      setTimeout(function () {
        animation();
      }, 500);
    });
  }, []);

  useEffect(() => {
    if (pathname === '/login') {
      setLogin(true);
    } else {
      setLogin(false);
    }
  });

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-mainbg ${login && 'hidden'}`}
    >
      <NavLink className='navbar-brand navbar-logo' to='/' exact>
        <div className='logo'>S</div>
        <div>School IT</div>
      </NavLink>

      <button
        className='navbar-toggler'
        onClick={function () {
          setTimeout(function () {
            animation();
          });
        }}
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <i className='fas fa-bars text-white'></i>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav ml-auto'>
          <div className='hori-selector'>
            <div className='left'></div>
            <div className='right'></div>
          </div>

          <li className='nav-item active'>
            <NavLink className='nav-link' to='/' exact>
              <i className='fas fa-home'></i>Accueil
            </NavLink>
          </li>

          <li className='nav-item'>
            <NavLink className='nav-link' to='/formations' exact>
              <i className='fas fa-graduation-cap'></i>Formations
            </NavLink>
          </li>
          

          {user ? (
            <>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/vosformations' exact>
                  <i className='far fa-chart-bar'></i>Vos formations
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/parametres' exact>
                  <i className='fas fa-cog'></i>Param??tres
                </NavLink>
              </li>

              <input
              type='button'
              value='se Deconnecter'
              className='logout'
              onClick={() => {
                logoutUser();
                navigate('/');
              }}
            />
            </>
          ) : (
            <input
              type='button'
              value='Se Connecter'
              className='logout'
              onClick={() => {
                navigate('/login');
              }}
            />
          )}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
