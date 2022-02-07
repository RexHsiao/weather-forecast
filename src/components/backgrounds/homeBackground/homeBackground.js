import React from 'react';
import './homeBackground.scss';

import { connect } from 'react-redux';

const HomeBackground = ({children, darkMode}) => (
    <div className={`homeBackground homeBackground-${darkMode?'dark':''}`}>
        {children}
    </div>
);

const mapStateToProps = ({theme: { darkMode }}) => ({
    darkMode
});

export default connect(mapStateToProps)(HomeBackground);