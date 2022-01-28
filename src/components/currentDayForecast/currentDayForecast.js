import React from 'react';
import './currentDayForecast.scss';
import Card from '../card';

import Remover from '../remover';

const CurrentDayForecast = ({
    toggle,
    remove,
    submitSearch,
    infoSetting,
    date,
    location, 
    temperature, 
    weatherIcon,
    weatherDescription,
    max_temp,
    min_temp}) => {
    return (<>
        <Remover remove={remove} toggle={toggle} location={location}/>
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

export default CurrentDayForecast;