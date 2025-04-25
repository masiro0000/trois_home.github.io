import React from 'react';
import { FadeInSection } from '../components/FadeInSection';
import memuArrow from '../images/trois_arrow.svg';
import memuSandwich from '../images/sandwich_icon.svg';
import memuSoup from '../images/soup_icon.svg';
import memuDrink from '../images/drink_icon.svg';
import sandwich01 from '../images/sandwich_01.svg';
import sandwich02 from '../images/sandwich_02.svg';
import sandwich03 from '../images/sandwich_03.svg';
import soup01 from '../images/soup_01.svg';
import soup02 from '../images/soup_02.svg';
import soup03 from '../images/soup_03.svg';
import { Link } from 'react-scroll';

export const Menu = () => {
  return (
		<FadeInSection>
			<div id="menu_section" className="memu" smooth={true}>
				<div className="menu_content-top">
					<h3 className="content_title">メニュー</h3>
					<p>トロワではサンドイッチの他に、スープとドリンクも販売しております。</p>
				</div>
				<div className="menu_content-middle">
					<Link 
						className="menu_button sandwich"
						to="section_sandwich"
						smooth={true}
						duration={500}
						offset={-50}
					>
						<div className="menu_button-img"><img src={memuSandwich} alt="sandwich" /></div>
						<p>サンドイッチ</p>
						<div className="menu_button-arrow"><img src={memuArrow} alt="arrow" /></div>
					</Link>
					<Link
						className="menu_button soup"
						to="section_soup"
						smooth={true}
						duration={500}
						offset={-50}
					>
						<div className="menu_button-img soup"><img src={memuSoup} alt="soup" />
						</div>
						<p>スープ</p>
						<div className="menu_button-arrow"><img src={memuArrow} alt="arrow" /></div>
					</Link>
					<Link
						className="menu_button drink"
						to="section_drink"
						smooth={true}
						duration={500}
						offset={-50}
					>
						<div className="menu_button-img"><img src={memuDrink} alt="drink" /></div>
						<p>ドリンク</p>
						<div className="menu_button-arrow"><img src={memuArrow} alt="arrow" /></div>
					</Link>
				</div>

				<div className="menu_content-main">
					<div className="sandwich_container">
						<div id="section_sandwich" className="container_header">
							<div className="container_title">
								<h4>サンドイッチ</h4>
								<p className="container_title-icon">
									<img src={memuSandwich} alt="sandwich" />
								</p>
							</div>
							<p>できたてを、ていねいに包んで。<br/>心とお腹をたくさん満たすように。<br/>あなたの今日の気分に寄り添えたらうれしいです。</p>
						</div>

						<ul className="sandwich_content-memu">
							<li className="menu_content">
								<div className="content-text">
									<span className="decoration_text">一番人気のメニュー</span>
									<h5 className="content_name">たまごのサンドイッチ</h5>
									<p className="content_text">パンの間に、まるい味のたまごをたっぷり。</p>
									<div className="content_price"><span>¥</span>320</div>
								</div>
								<div className="content-img">
									<img src={sandwich01} alt="sandwich01" />
								</div>
							</li>

							<li className="menu_content">
								<div className="content-text">
									<span className="decoration_text">朝ご飯におすすめ</span>
									<h5 className="content_name">きゅうりのサンドイッチ</h5>
									<p className="content_text">朝にぴったり、シャキシャキのたのしい食感。</p>
									<div className="content_price"><span>¥</span>320</div>
								</div>
								<div className="content-img">
									<img src={sandwich02} alt="sandwich02" />
								</div>
							</li>

							<li className="menu_content">
								<div className="content-text">
									<span className="decoration_text">三時のおやつ♪</span>
									<h5 className="content_name">いちごのサンドイッチ</h5>
									<p className="content_text">ふんわり甘酸っぱいいちごと優しいクリームを。</p>
									<div className="content_price"><span>¥</span>340</div>
								</div>
								<div className="content-img">
									<img src={sandwich03} alt="sandwich03" />
								</div>
							</li>
						</ul>

						<ul className="sandwich_content-memu-sub">
							<li className="menu_content">
								<div>
									<h5 className="content_name">じゃが芋サラダのサンドイッチ</h5>
									<p className="content_text">口の中でほどけるクリーミーなじゃがいも。</p>
								</div>
								<div className="content_price"><span>¥</span>320</div>
							</li>
							<li className="menu_content">
								<div>
									<h5 className="content_name">ハムのサンドイッチ</h5>
									<p className="content_text">しっとりうまみのハムをそっと。</p>
								</div>
								<div className="content_price"><span>¥</span>320</div>
							</li>
							<li className="menu_content">
								<div>
									<h5 className="content_name">チーズのサンドイッチ</h5>
									<p className="content_text">チーズのうれしい塩みとやさしいコク。</p>
								</div>
								<div className="content_price"><span>¥</span>320</div>
							</li>
							<li className="menu_content">
								<div>
									<h5 className="content_name">オムレツのサンドイッチ</h5>
									<p className="content_text">スペイン風に炒めたじゃが芋と卵で。</p>
								</div>
								<div className="content_price"><span>¥</span>340</div>
							</li>
						</ul>
					</div>

					<div className="soup_container">
						<div id="section_soup" className="container_header">
							<div className="container_title">
								<h4>スープ</h4>
								<p className="container_title-icon">
									<img src={memuSoup} alt="soup" />
								</p>
							</div>
							<p>サンドイッチといっしょに、スープも。<br/>あたたかいもの、ほっとするものを、少しだけ。<br/>パンのおともに、どうぞゆっくり味わってください。</p>
						</div>

						<ul className="soup_content-memu">
							<li className="menu_content">
								<div className="content-text">
									<span className="decoration_text">一番人気のメニュー</span>
									<h5 className="content_name">トロワのスープ</h5>
									<p className="content_text">「もうひと口」がうれしいトロワの味。
									野菜をじっくり煮込みました。</p>
									<div className="content_price"><span>¥</span>440</div>
								</div>
								<div className="content-img">
									<img src={soup01} alt="soup01" />
								</div>
							</li>

							<li className="menu_content">
								<div className="content-text">
									<span className="decoration_text">ほっと深呼吸</span>
									<h5 className="content_name">クラムチャウダー</h5>
									<p className="content_text">パンといっしょに、海のごちそう。旨みが沁み出たおいしさです。</p>
									<div className="content_price"><span>¥</span>440</div>
								</div>
								<div className="content-img">
									<img src={soup02} alt="soup02" />
								</div>
							</li>

							<li className="menu_content">
								<div className="content-text">
									<span className="decoration_text">コトコト煮込んだ</span>
									<h5 className="content_name">ミネストローネ</h5>
									<p className="content_text">たくさんの具材が、あったかく
									迎えてくれる。</p>
									<div className="content_price"><span>¥</span>440</div>
								</div>
								<div className="content-img">
									<img src={soup03} alt="soup03" />
								</div>
							</li>
						</ul>

						<ul className="soup_content-memu-sub">
							<li className="menu_content">
								<div>
									<h5 className="content_name">カボチャのスープ</h5>
									<p className="content_text">甘くてほっこり、きいろのごほうび。</p>
								</div>
								<div className="content_price"><span>¥</span>440</div>
							</li>
						</ul>
					</div>

					<div className="drink_container">
						<div id="section_drink" className="container_header">
							<div className="container_title">
								<h4>ドリンク</h4>
								<p className="container_title-icon">
									<img src={memuDrink} alt="ドリンク" />
								</p>
							</div>
							<p>食後のお口直しにも。<br/>あたたかいものからつめたいものまで幅広く。</p>
						</div>

						<ul className="drink_content-memu-sub">
							<li className="menu_content">
								<div>
									<h5 className="content_name">珈琲</h5>
									<p className="content_text">hot / ice</p>
								</div>
								<div className="content_price"><span>¥</span>120</div>
							</li>
							<li className="menu_content">
								<div>
									<h5 className="content_name">紅茶 (アールグレイ)</h5>
									<p className="content_text">hot / ice</p>
								</div>
								<div className="content_price"><span>¥</span>120</div>
							</li>
							<li className="menu_content">
								<div>
									<h5 className="content_name">ココア</h5>
									<p className="content_text">hot / ice</p>
								</div>
								<div className="content_price"><span>¥</span>120</div>
							</li>
							<li className="menu_content">
								<div>
									<h5 className="content_name">オレンジ</h5>
								</div>
								<div className="content_price"><span>¥</span>120</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</FadeInSection>
	);
};