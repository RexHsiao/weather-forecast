import React from 'react';
import './remover.scss';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Remover = ({toggle, onClick}) => {
    return(
        <div className="remover-container" onClick={onClick}>
            <DeleteOutlineIcon className={`delete-icon delete-${toggle?'dark':''}`}/>
        </div>
    );
};

export default Remover;