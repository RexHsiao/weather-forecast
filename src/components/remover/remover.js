import React from 'react';
import './remover.scss';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Remover = ({remove, location, toggle}) => {
    const removing = (e) => {
        e.preventDefault();
        remove(location);
    }
    return(
        <div className="remover-container" onClick={removing}>
            <DeleteOutlineIcon className={`delete-icon delete-${toggle?'dark':''}`}/>
        </div>
    );
};

export default Remover;