import React from 'react';
import './currentDayForecast.scss';

import { connect } from 'react-redux';
import { removeForecast } from '../../redux/forecasts/forecasts.action';


import Card from '../card';
import Remover from '../remover';

const CurrentDayForecast = ({
    forecast,
    toggle,
    removeForecast,
    submitSearch,
    infoSetting,
    }) => {
    const {date,
        location, 
        temperature, 
        weatherIcon,
        weatherDescription,
        max_temp,
        min_temp} = forecast.currentDay;

    const onClick = () => {
        removeForecast(forecast);
    }
    return (<>
        <Remover onClick={onClick} toggle={toggle} location={location}/>
        <Card toggle={toggle} id={location} submitSearch={submitSearch} infoSetting={infoSetting} date={date}>    
            <div><h3>{location}</h3></div>
            <div className="status-img">
                <img width="180" src={weatherIcon} alt="" />
            </div>
            <div className="deg">
                {temperature}°
            </div>
            <div className="status">
                {weatherDescription}
            </div>
            <div className="maxMinDeg">
                <div className="minDeg">
                    <div><div className="arrow-down"></div></div>
                    <div className="min degree">{min_temp}°</div>
                    <div>Min</div>
                </div>
                <div className="maxDeg">
                    <div><div className="arrow-up"></div></div>
                    <div className="max degree">{max_temp}°</div>
                    <div>Max</div>
                </div>
            </div>
        </Card></>
    );
};

const mapDispatchToProps = dispatch => ({
    removeForecast: forecast => dispatch(removeForecast(forecast))
})

export default connect(null, mapDispatchToProps)(CurrentDayForecast);