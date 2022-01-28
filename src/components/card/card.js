import React from 'react';
import './card.scss';


const Card = ({toggle, id, children, submitSearch, searchSetting, date, infoSetting}) => {
    const onClick = (e) => {
        e.preventDefault();
        submitSearch(id);
        infoSetting(date);
    }
    return (
        <div id={id} className={`card card-${toggle?'dark':''}`} onClick={id?onClick:searchSetting}>
            {children}
        </div>
    );
};

export default Card;