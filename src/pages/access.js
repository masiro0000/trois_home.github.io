import React from 'react';
import { FadeInSection } from '../components/FadeInSection';
import accessMap from '../images/map_img.svg';
import logoIcon from '../images/top_logo.svg';

export const Access  = () => {
  return (
		<FadeInSection>
    <div id="section_access" className="access">
      <h3 className="content_title">店舗情報</h3>
      <div className="access_map">
        <div className="access_img">
          <img src={accessMap} alt="access_map" />
        </div>
        <p>［路面電車］月舟東駅より徒歩15分</p>
        <p>［バス］月舟商店街入口前より徒歩10分</p>
      </div>
      <div className="access_info">
        <div className="access_logo">           
          <img src={logoIcon} alt="logo" />
        </div>
        <p>〒098-0028 篤宏市月舟町2丁目31番地</p>
        <dl>
          <dt>営業時間</dt>
          <dd>: 朝から夕方まで<span>（売り切れ次第終了）</span></dd>
          <dt>定休日</dt>
          <dd>: 水曜日</dd>
          <dt>問合せ</dt>
          <dd>: 0123-45-6578</dd>
        </dl>
      </div>
    </div>
  </FadeInSection>
	);
};