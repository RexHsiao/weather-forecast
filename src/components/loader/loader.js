import React from 'react';
import './loader.scss';

const Loader = () => (
    <div className="loader-container">
        <div className="box-loader">
            <div className="rond first"></div>
            <div className="rond second"></div>
        </div>
    </div>
);

export default Loader;