import React from 'react';
import './upcomingDaysForecastItem.scss';

const imgUrlBase = 'https://openweathermap.org/img/wn/';

const UpcomingDaysForecastItem = ({ weekday, temperature, imgUrl, weatherDescription, weekdayTime }) => (
    <li className="weekday">
        <div><span>{weekday.toUpperCase()}</span></div>
        <div><span>{weekdayTime}</span></div>
        <div className="status-img"><img src={`${imgUrlBase}${imgUrl}@2x.png`} width="80" alt="" className="mb-2" /></div>
        <div><span>{temperature}&deg;</span></div>
        <div><h5>{weatherDescription}</h5></div>
    </li>
);

export default UpcomingDaysForecastItem;