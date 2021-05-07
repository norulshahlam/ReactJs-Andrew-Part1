
import React from 'react';
import Option from "./Option";
const Options = (props) => (
  <div>
    <button
    className='button button--link'
    onClick={props.deleteAllOptions}>Remove all</button>

    {props.options.length === 0 && <p>Please add option!</p>}
    {props.options.map((option, key) => (
      <Option
        key={key}
        optionText={option}
        deleteOneOption={props.deleteOneOption}
      />
    ))} 
  </div>
);

export default Options;