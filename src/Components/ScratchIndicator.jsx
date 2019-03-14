import React from 'react';

const ScratchIndicator = (props) => {
  return (
    <div className={"ScratchSquare"}>
      <div style={{color: props.color}}>
        ★
      </div>
      <div>
        {props.number}
      </div>
    </div>
  )
}

export default ScratchIndicator;