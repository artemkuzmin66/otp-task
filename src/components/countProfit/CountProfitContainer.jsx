import React from 'react';
import Calculator from './Calculator';
import './countProfit.scss';
import Profit from './Profit';

class CountProfitContainer extends React.Component {
   render() {
      return (
         <>
            <Profit />
            <Calculator />
         </>
      )
   }
}
export default CountProfitContainer;