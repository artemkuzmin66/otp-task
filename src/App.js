import React from 'react';

import './App.scss';
import Cart from './components/cart/Cart';
import CountProfitContainer from './components/countProfit/CountProfitContainer';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Mobile from './components/mobileApp/MobileApp';
import Question from './components/question/Question';
import Rate from './components/rate/Rate';
import Score from './components/score/Score';
import Stock from './components/stock/Stock';

function App() {
  return (
    <div className="app">
      <Header />
      <Stock />
      <Rate />
      <CountProfitContainer />
      <Score />
      <Cart />
      <Question />
      <Mobile />
      <Footer />
    </div>
  );
}

export default App;
