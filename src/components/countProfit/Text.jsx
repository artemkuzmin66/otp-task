import React from 'react';
import './countProfit.scss';
import s from './Profit.module.scss';

const Text = (props) => {
   debugger
   const classes = [`${s.text}`]
   if (props.texts.onActive) {
      classes.push(`${s.active}`)
   }

   return (
      <>
         <span>
            <span
               onClick={props.handleClass}
               className={classes.join(' ')}
            >{props.t.name}</span>
         </span>


      </>
   )
}

export default Text;