import React from 'react';
import Calculator from './Calculator';
import './countProfit.scss';
import Profit from './Profit';

class CountProfitContainer extends React.Component {
   render() {
      return (
         <div className="container">
            <Profit />
            <Calculator />
         </div>
      )
   }
}
export default CountProfitContainer;