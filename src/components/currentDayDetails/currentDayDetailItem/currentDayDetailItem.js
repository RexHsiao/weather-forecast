import React from 'react';
import './currentDayDetailItem.scss';

const CurrentDayDetailItem = ({name, value, unit}) => (
    <div className="detailItem">
        <h5>{name.toUpperCase()}</h5>
        <p>{value} {unit}</p>
    </div>
);

export default CurrentDayDetailItem;