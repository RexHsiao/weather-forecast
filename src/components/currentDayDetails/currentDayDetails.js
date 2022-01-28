import React from 'react';
import './currentDayDetails.scss';

import CurrentDayDetailItem from './currentDayDetailItem';

const CurrentDayDetails = ({
    location,
    temperature, 
    weatherIcon,
    weatherDescription,
    forecast}) => (
    <div className="currentDetails-container">
        <div className="basicInfo">
            <div className="weatherInfo">
                <img width="150" src={weatherIcon} alt="" className="weatherIcon"/>
                <div className="weatherStatus">
                    <div>
                        <h2>{temperature}°</h2>
                    </div>
                    <div>
                        <h5>{weatherDescription}</h5>
                    </div>
                </div>
            </div>
            <div className="location">
                <span>{location.toUpperCase()}</span>
                <div className="underline"></div>
            </div>
        </div>
        <div className="detailInfo">
            {forecast.map((item) => (
                <CurrentDayDetailItem {...item} key={item.name}/>
            ))}
        </div>
    </div>
);

export default CurrentDayDetails;