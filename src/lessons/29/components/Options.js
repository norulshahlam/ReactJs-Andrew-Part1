
import React from 'react';
import Option from "./Option";
const Options = (props) => {
  return (
    <div>
      <button onClick={props.deleteAllOptions}>Remove all</button>

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
};

export default Options;