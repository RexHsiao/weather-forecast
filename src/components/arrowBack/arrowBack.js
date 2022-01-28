import React from 'react';
import './arrowBack.scss';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ArrowBack = ({backHome}) => (
    <div onClick={backHome} className="arrow-back">
        <ArrowBackIcon className="arrow-back-icon"
            sx={{
                color: 'white',
              }}
        />
    </div>
);

export default ArrowBack;