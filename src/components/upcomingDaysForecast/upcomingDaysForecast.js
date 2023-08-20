import React from 'react';
import './upcomingDaysForecast.scss';

import UpcomingDaysForecastItem from './upcomingDaysForecastItem';

const UpcomingDaysForecast = ({days}) => (
    <div className="upcoming-box">
        <ul className="weekList">
            {days.map((day) => (
                <UpcomingDaysForecastItem {...day} key={day.id} />
            ))}
        </ul>
    </div>
);

export default UpcomingDaysForecast;