import React, { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/header'
import { Top } from './pages/top';
import { About } from './pages/about';
import { Menu } from './pages/memu';
import { Access } from './pages/access';
import { Footer } from './components/footer';
import { LeftContent } from './components/LeftContent';
import { RightContent } from './components/RightContent';
import logoIcon from './images/top_logo.svg';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);



  if (isLoading) {
    // ローディング中の表示
    return (
      <div className="loading_screen">
        <div className="loading_logo"><img src={logoIcon} alt="logo" /></div>
      </div>
    );
  }
  return (
    <>
      <div className="home fade-in">
        <Header></Header>
        <LeftContent></LeftContent>
        <RightContent></RightContent>
        <div className="content">
          <div className="sp_area">
            <Top></Top>
            <About></About>
            <Menu></Menu>
          </div>
        </div>
        <div className="sp_area">
          <Access></Access>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
