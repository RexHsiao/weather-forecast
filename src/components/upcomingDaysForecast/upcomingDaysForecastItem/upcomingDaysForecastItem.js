import React from 'react';
import './upcomingDaysForecastItem.scss';

const imgUrlBase = 'https://www.metaweather.com/static/';

const UpcomingDaysForecastItem = ({ weekday, temperature, imgUrl, weatherDescription }) => (
    <li className="weekday">
        <div><span>{weekday.toUpperCase()}</span></div>
        <div className="status-img"><img src={`${imgUrlBase}img/weather/${imgUrl}.svg`} width="80" alt="" className="mb-2" /></div>
        <div><span>{temperature}&deg;</span></div>
        <div><h5>{weatherDescription}</h5></div>
    </li>
);

export default UpcomingDaysForecastItem;