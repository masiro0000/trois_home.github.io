
import React, { useState } from 'react';
import logoIcon from '../images/top_logo.svg';
import { Link } from 'react-scroll';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={`header ${isOpen ? 'open' : ''}`}>
      <div className="header_top-content">
        <Link 
          to="section_top"
          smooth={true}
          duration={500}
          offset={-50}
          onClick={() => setIsOpen(false)}
        >
          <h1 className="top_logo">           
            <img src={logoIcon} alt="logo" />
          </h1>
        </Link>
        <button className="hamburger" onClick={toggleMenu}>
          <span className={`${isOpen ? 'open' : ''}`}></span>
          <span className={`${isOpen ? 'open' : ''}`}></span>
          <span className={`${isOpen ? 'open' : ''}`}></span>
        </button>
        <nav className={`side_menu ${isOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link 
                to="section_top"
                smooth={true}
                duration={500}
                offset={-50}
                onClick={() => setIsOpen(false)}
              >
                ページトップ
              </Link>
            </li>
            <li>
              <Link 
              to="section_about"
              smooth={true}
              duration={500}
              offset={-50}
              onClick={() => setIsOpen(false)}
              >
                トロワとは
              </Link>
            </li>
            <li>
              <Link 
              to="menu_section"
              smooth={true}
              duration={500}
              offset={-50}
              onClick={() => setIsOpen(false)}
              >
                メニュー
              </Link>
              <ul className="side_nav_list-sub">
                <li>
                  <Link 
                    to="section_sandwich"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    onClick={() => setIsOpen(false)}
                  >
                    サンドイッチ
                  </Link>
                </li>
                <li>
                  <Link 
                    to="section_soup"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    onClick={() => setIsOpen(false)}
                  >
                    スープ
                  </Link>
                </li>
                <li>
                  <Link 
                    to="section_drink"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    onClick={() => setIsOpen(false)}
                  >
                    ドリンク
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link 
                to="section_access"
                smooth={true}
                duration={500}
                offset={-50}
                onClick={() => setIsOpen(false)}
              >
                店舗情報
              </Link>
            </li>
            <li><small class="copyright">All Rights Reserved 2025 ©︎ trois</small></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
