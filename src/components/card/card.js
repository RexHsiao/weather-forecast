import React from 'react';
import './card.scss';

import { connect } from 'react-redux';

const Card = ({darkMode, id, children, submitSearch, searchSetting, date, infoSetting}) => {
    const onClick = (e) => {
        e.preventDefault();
        submitSearch(id);
        infoSetting(date);
    }
    return (
        <div id={id} className={`card card-${darkMode?'dark':''}`} onClick={id?onClick:searchSetting}>
            {children}
        </div>
    );
};

const mapStateToProps = ({theme: {darkMode}}) => ({
    darkMode
});

export default connect(mapStateToProps)(Card);