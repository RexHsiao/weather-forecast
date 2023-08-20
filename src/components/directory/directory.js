import React from 'react';
import { connect } from 'react-redux';

import './directory.scss';
import PropTypes from 'prop-types';
import Card from '../card';
import CurrentDayForecast from '../currentDayForecast';
import Add from '../add';



const Directory = ({toggle, searchSetting, currentForecasts, submitSearch, infoSetting, remove}) => {
    
    
    return (
        <div className="directory">
            {currentForecasts?.map((forecast) => (
                <div className="newCitiesCard" key={forecast.currentDay.location}>
                    <CurrentDayForecast 
                        forecast = {forecast}
                        toggle={toggle}
                        submitSearch={submitSearch}
                        infoSetting={infoSetting}
                        remove={remove}
                    />
                </div>
            ))}
            <Card toggle={toggle} searchSetting={searchSetting} infoSetting={infoSetting}>
                <Add />
            </Card>
        </div>
    );
};

Directory.propTypes = {
    forecasts: PropTypes.shape({
        currentDay: PropTypes.object, 
        currentDayDetails: PropTypes.array, 
        upcomingDays: PropTypes.array
    })
};

const mapStateToProps = ({forecasts: { currentForecasts }}) => ({
    currentForecasts
})

export default connect(mapStateToProps)(Directory);