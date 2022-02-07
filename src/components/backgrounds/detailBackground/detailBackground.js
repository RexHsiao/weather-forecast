import React from 'react';
import './detailBackground.scss';

import { connect } from 'react-redux';

const DetailBackground = ({children, darkMode}) => (
    <div className={`detailBackground detailBackground-${darkMode?'dark':''}`}>
        <div className="background">
            <div className="circle" id="C1"></div>
            <div className="circle" id="C2"></div>
            <div className="circle" id="C3"></div>
            <div className="circle" id="C4"></div>
        </div>
        <div className="content">
            {children}
        </div>
    </div>
);

const mapStateToProps = ({theme: {darkMode}}) => ({
    darkMode
});

export default connect(mapStateToProps)(DetailBackground);