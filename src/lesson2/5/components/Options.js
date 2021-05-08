
import React from 'react';
import Option from "./Option";
const Options = (props) => (
  <div>
  <div className='widget-header'>
   <h3 className='widget-header__title'>Your options</h3>
    <button
    className='button button--link'
    onClick={props.deleteAllOptions}>Remove all</button>

  </div>
 
    {props.options.length === 0 && <p className='widget__message'>Please add option!</p>}
    {props.options.map((option, key) => (
      <Option
        key={key}
        optionText={option}
        count={key+1}
        deleteOneOption={props.deleteOneOption}
      />
    ))} 
  </div>
);

export default Options;