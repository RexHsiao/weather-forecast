import React from 'react';
import PropTypes from 'prop-types';
import './forecast.scss';

import Board from '../../components/board';
import CurrentDayDetails from '../currentDayDetails';
import UpcomingDaysForecast from '../upcomingDaysForecast';
import ArrowBack from '../../components/arrowBack';

const Forecast = ({toggle, forecast, backHome}) => (
    <Board toggle={toggle}>
        <ArrowBack backHome={backHome}/>
        <div className="forecast-container">
            <CurrentDayDetails forecast={forecast.currentDayDetails} {...forecast.currentDay}/>
            <UpcomingDaysForecast days={forecast.upcomingDays}/>
        </div>
        
    </Board>
);

Forecast.propTypes = {
    forecast: PropTypes.shape({
        currentDay: PropTypes.object, 
        currentDayDetails: PropTypes.array, 
        upcomingDays: PropTypes.array
    })
};

export default Forecast;