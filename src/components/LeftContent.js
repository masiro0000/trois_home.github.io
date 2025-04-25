import React from 'react';
import leftIcon from '../images/decoration_icon.svg';
import { Link } from 'react-scroll';

export const LeftContent = () => (
  <div className="left_content">
    <nav>
      <ul className="left_nav_menu">
        <li className="left_nav_list">
          <Link 
            to="section_about"
            smooth={true}
            duration={500}
            offset={-50}
          >
            トロワとは
          </Link>
        </li>
        <li className="left_nav_list">
          <Link 
            to="menu_section"
            smooth={true}
            duration={500}
            offset={-50}
          >
            メニュー
          </Link>
          <ul className="left_nav_list-sub">
            <li>
              <Link 
                to="section_sandwich"
                smooth={true}
                duration={500}
                offset={-50}
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
              >
                ドリンク
              </Link>
            </li>
          </ul>
        </li>
        <li className="left_nav_list">
          <Link 
            to="section_access"
            smooth={true}
            duration={500}
            offset={-50}
          >
            店舗情報
          </Link>
        </li>
      </ul>
    </nav>
    <div className="left_decoration">
      <img src={leftIcon} alt="decoration" />
    </div>
  </div>
);
