import React from 'react';
import ScratchIndicator from './ScratchIndicator';

const ScratchLine = (props) => {
  return (
    <div className={"LaneStyle"} >
        <ScratchIndicator number={1} color={'#156ABD'} />
        <ScratchIndicator number={2} color={'#277053'} />
        <ScratchIndicator number={3} color={'#EEB21E'} />
        <ScratchIndicator number={4} color={'#AD4C55'} />
    </div>
  )
};

export default ScratchLine;