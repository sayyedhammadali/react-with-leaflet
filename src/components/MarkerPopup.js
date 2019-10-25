import React from 'react';
import {Popup} from 'react-leaflet';

const MarkerPopup = (props) => {
  const { name } = props.data;
  console.log(name);

  return  (<Popup>
    <div className='poup-text'>{name}</div>
  </Popup>);
};

export default MarkerPopup;
