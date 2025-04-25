
import React from 'react';
import ReftIcon from '../images/decoration_icon.svg';
import mapIcon from "../images/map_icon.svg"
import tellIcon from "../images/tell_icon.svg"
import { Link } from 'react-scroll';

export const RightContent = () => (
  <div className="right_content">
    <nav>
      <ul className="right_nav_menu">
        <li className="right_nav_list">
          <Link 
            to="section_access"
            smooth={true}
            duration={500}
            offset={-50}
          >
            <img src={mapIcon} alt="map" />
          </Link>
        </li>
        <li className="right_nav_list">
          <Link 
            to="section_access"
            smooth={true}
            duration={500}
            offset={-50}
          >
            <img src={tellIcon} alt="tell" />
          </Link>
        </li>
      </ul>
    </nav>
    <div className="right_decoration">
      <img src={ReftIcon} alt="decoration" />
    </div>
  </div>
);
