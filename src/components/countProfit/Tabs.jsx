import React from 'react';
import './CountProfit.scss';
import s from './Profit.module.scss';

const Tabs = ({ index, active, onClick, label }) => {

   return (
      <div className={s.tabs}>
         <p className={`${active && s.active} ${s.text}`} onClick={() => onClick(index)}>{label}</p>

         {/* <div className={s.active}></div> */}
      </div>

   )
}





export default Tabs;