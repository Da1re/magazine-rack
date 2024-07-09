import React, { useEffect } from 'react';

import j from './images/logo/S_J.png';
import y from './images/logo/S_Y.png';
import o from './images/logo/S_O.png';
import u from './images/logo/S_U.png';
import n from './images/logo/S_N.png';
import g from './images/logo/S_G.png';

const Header = () => {
  useEffect(() => {
    const menuOpen = document.querySelector('.gnb .menuOpen');
    const menuBox = document.querySelector('.gnb .menuBox');

    const toggleMenu = () => {
      menuBox.classList.toggle('on');
    };

    menuOpen.addEventListener('click', toggleMenu);

    return () => {
      menuOpen.removeEventListener('click', toggleMenu);
    };
  }, []);

  return (
    <header>
      <div className="inner">
        <a href="/" className="logo">
          <span>
            <img src={j} alt="a" />
          </span>
          <span>
            <img src={y} alt="b" />
          </span>
          <span>
            <img src={o} alt="c" />
          </span>
          <span>
            <img src={u} alt="d" />
          </span>
          <span>
            <img src={n} alt="e" />
          </span>
          <span>
            <img src={g} alt="f" />
          </span>
        </a>
        <nav className="gnb">
          <p className="menuOpen">MENU</p>
          <ul className="menuBox">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Work</a>
            </li>
            <li>
              <a href="/">Portfolio UX</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
