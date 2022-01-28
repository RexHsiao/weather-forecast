import React from 'react';
import './homeBackground.scss';

const HomeBackground = ({children, toggle}) => (
    <div className={`homeBackground homeBackground-${toggle?'dark':''}`}>
        {children}
    </div>
);

export default HomeBackground;