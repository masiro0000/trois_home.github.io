import React from 'react';
import { FadeInSection } from '../components/FadeInSection';
import aboutImg from '../images/about_img.svg';
import aboutIcon from '../images/about_icon.svg';

export const About = () => {
  return (
		<FadeInSection>
			<div id="section_about" className="about fade-in">
				<h3 className="content_title">トロワとは</h3>
				<div className="about_img">
				<img src={aboutImg} alt="about_img" />
				</div>
				<ul className="about_text">
					<li><h3 className="about_text_title">この町の<span className="handwriting">サンドイッチ屋</span>です。</h3></li>
					<li>商店街のはしっこで、<br/>朝から夕方まで開いている店。</li>
					<li>入口扉の「<span className="handwriting">3</span>」の数字と<br/>朝から夕方まで開いている店。</li>
					<li>「<span className="handwriting">トロワ</span>」の文字が目印です。</li>
					<li>一つひとつ、手で包んだ<br/>
							やさしいサンドイッチを<br/>
							どうぞお召し上がりください。
					</li>
				</ul>
				<div className="about_decoration">
					<span><img src={aboutIcon} alt="icon" /></span>
					<span><img src={aboutIcon} alt="icon" /></span>
					<span><img src={aboutIcon} alt="icon" /></span>
				</div>
			</div>
		</FadeInSection>
	);
};