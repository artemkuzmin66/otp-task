import React from 'react';
import './countProfit.scss';
import s from './Profit.module.scss';

const Text = (props) => {

   const classes = [`${s.text}`]
   if (props.texts.onActive) {
      classes.push(`${s.active}`)
   }
   // else if (props.texts.onActive[1] === true) {


   //    (props.texts.onActive[0]).
   //       classes.delete(`${s.active}`)

   // }

   return (
      <>
         <span>
            <span
               onClick={props.handleClass}
               className={classes.join(' ')}
            >{props.texts.name}</span>
         </span>
         {/* <span className={s.textMobile}>ОТП Premium</span> */}
      </>
   )
}

export default Text;