import React, { Fragment } from 'react';
import './logo.scss';

const Logo = () => (
    <Fragment>
        <div className="logo-container">
            <div className="logo">
                <div className="triangle-left"></div>
                <div className="triangle-right"></div>
            </div>
            <span>Weather Forecast</span>
        </div>
    </Fragment>
);

export default Logo;