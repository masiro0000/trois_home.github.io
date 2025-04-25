import React from 'react';
import topImg from '../images/top_img.svg';
import topTitle from '../images/top_title.svg';
import topArrow from '../images/trois_arrow.svg';
import { Link } from 'react-scroll';

export const Top = () => (
  <div id="section_top" className="top">
      <div className="top_mv">
          <img src={topImg} alt="top_img" />
      </div>
      <div className="top_title">
          <img className="top_copy" src={topTitle} alt="top_copy" />
          <p className="top_copy_sub">手のひらにすっぽりおさまる<br/>
          毎日にやさしいサンドイッチを。</p>
      </div>
      <Link
        to="menu_section"
        className="top_menu_button"
        smooth={true}
        duration={500}
        offset={-50}
      >
          <p>メニューを見る</p>
          <div className="top_menu_arrow">
              <img src={topArrow} alt="arrow" />
          </div>
      </Link>
  </div>
);